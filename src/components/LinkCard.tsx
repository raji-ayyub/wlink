import React from 'react'


interface Link {
  id: string
  url: string
  description: string
}

interface LinkCardProps {
  link: Link
  onDelete: (id: string) => void
  onEdit: (link: Link) => void
}

const LinkCard: React.FC<LinkCardProps> = ({ link, onDelete, onEdit }) => {
  return (
    <div className="border rounded p-4 mb-2 flex justify-between items-center">
      <div>
        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {link.url}
        </a>
        <p>{link.description}</p>
      </div>
      <div>
        <button onClick={() => onEdit(link)} className="text-blue-500 mr-2">
          button
        </button>
        <button onClick={() => onDelete(link.id)} className="text-red-500">
          trash
        </button>
      </div>
    </div>
  )
}

export default LinkCard
