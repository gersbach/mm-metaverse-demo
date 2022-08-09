/* This example requires Tailwind CSS v2.0+ */
const stats = [
    { name: 'Number of Votes', stat: '71,897' },
    { name: 'Yes', stat: '58.16%' },
    { name: 'No', stat: '24.57%' },
  ]
  
  export default function Stats({issue, userId}) {

    return (
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900"></h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <StatDiv name={"Number of Votes"} stat={issue.s_votesAgainst.length + issue.s_votesFor.length} />
          <StatDiv name={"Yes"} stat={issue.s_votesFor.length} />
          <StatDiv name={"No"} stat={issue.s_votesAgainst.length} />
        </dl>
      </div>
    )
  }
  
  const StatDiv = ({name, stat}) => {

    return (
    <div key={name} className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
      <dt className="text-sm font-medium text-gray-500 truncate">{name}</dt>
      <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat}</dd>
    </div> )
  }