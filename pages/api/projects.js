// https://docs.github.com/en/rest/reference/repos

export default async (req, res) => {
    const headers = {
        "Authorization": "Token " + process.env.GITHUB_KEY
    }

    const url = "https://api.github.com/users/giabaocorn20/repos"
    const response = await fetch(url, { "headers": headers })
    const json = await response.json()
    const projectsList = []

    json.forEach(p => {
        projectsList.push({
            "name": p.name,
            "stars": p.stargazers_count,
            "url": p.html_url,
            "description": p.description,
            "language": p.language,
            "stargazers_url": p.stargazers_url,
            "homepage": p.homepage,
        })
    })

    return res.status(200).json({
        repos: projectsList
    })
}