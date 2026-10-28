import { NextResponse } from 'next/server'

export const revalidate = 3600

interface GithubRepository {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  pushed_at: string | null
  fork: boolean
  archived: boolean
}

export async function GET() {
  try {
    const response = await fetch(
      'https://api.github.com/users/Matheussop/repos?per_page=100&sort=pushed',
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      },
    )

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`)
    }

    const repositories = (await response.json()) as GithubRepository[]
    const recentRepositories = repositories
      .filter((repository) => !repository.fork && !repository.archived && repository.name.toLowerCase() !== 'portfolio')
      .sort((a, b) => (b.pushed_at ?? '').localeCompare(a.pushed_at ?? ''))
      .slice(0, 6)
      .map(({ id, name, description, html_url, language, pushed_at }) => ({
        id,
        name,
        description,
        html_url,
        language,
        pushed_at,
      }))

    return NextResponse.json(recentRepositories)
  } catch {
    return NextResponse.json({ error: 'Não foi possível carregar os projetos.' }, { status: 502 })
  }
}
