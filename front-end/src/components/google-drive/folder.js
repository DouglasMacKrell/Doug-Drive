import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

export default function Folder({ folder }) {
    return (
        <Button to={`/folder/${folder.id}`} variant="outline-dark" as={ Link } className="text-truncate w-100">
            <FontAwesomeIcon icon={faFolder} className="mr-2" />
            {folder.name}
        </Button>
    )
}
