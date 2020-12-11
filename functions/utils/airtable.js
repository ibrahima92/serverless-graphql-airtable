const Airtable = require('airtable')

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)

const table = base(AIRTABLE_TABLE_NAME)

const getAllProjects = async () => {
  const allProjects = await table.select({}).firstPage()
  return allProjects.map(({ id, fields }) => transformResponse(id, fields))
}

const addProject = async ({ project }) => {
  const { name, description, date } = project
  const createProject = await table.create([
    {
      fields: {
        name,
        description,
        date,
        status: 'In progress',
      },
    },
  ])
  const { id, fields } = createProject[0]
  return transformResponse(id, fields)
}

const transformResponse = (id, fields) => ({
  id,
  name: fields.name,
  description: fields.description,
  date: fields.date,
  status: fields.status,
})

exports.getAllProjects = getAllProjects
exports.addProject = addProject
