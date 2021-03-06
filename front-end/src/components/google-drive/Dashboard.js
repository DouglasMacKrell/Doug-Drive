import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useFolder } from '../../hooks/useFolder'
import Navbar from './Navbar'
import AddFolderButton from './AddFolderButton'
import Folder from './Folder'
import FolderBreadcrumbs from './FolderBreadcrumbs'
import AddFileButton from './AddFileButton'


export default function Dashboard() {
    const { folderId } = useParams()
    const { state = {} } = useLocation()
    const { folder, childFolders } = useFolder(folderId, state.folder)
    console.log(childFolders)

    return (
        <>
            <Navbar />
            <Container fluid>
                <div className="d-flex align-items-center">
                    <FolderBreadcrumbs currentFolder={folder} />
                    <AddFileButton currentFolder={folder} />
                    <AddFolderButton currentFolder={folder} />
                </div>
                {childFolders.length > 0 && (
                    <div className="d-flex flex-wrap">
                        {childFolders.map(childFolder => (
                            <div 
                            key={childFolder.id} 
                            style={{ maxWidth: '250px' }} 
                            className="p-2">
                                <Folder folder={childFolder} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </>
    )
}
