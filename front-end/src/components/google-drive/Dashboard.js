import React from 'react'
import { Container } from 'react-bootstrap'
import { useFolder } from '../../hooks/useFolder'
import Navbar from './Navbar'
import AddFolderButton from './AddFolderButton'
import Folder from './Folder'


export default function Dashboard() {
    const { folder, childFolders } = useFolder()

    return (
        <>
            <Navbar />
            <Container fluid>
                <AddFolderButton currentFolder={folder} />
                {childFolders.length > 0 && (
                    <div className="d-flex flex-wrap">
                        {childFolders.map(childFolder => (
                            <div key={folder.id} style={{ maxWidth: '250px' }} className="p-2">
                                <Folder folder={childFolder} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </>
    )
}
