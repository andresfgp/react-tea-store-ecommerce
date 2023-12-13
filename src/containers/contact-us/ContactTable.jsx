/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './ContactTable.css';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from '../../hooks/useSnackbar';
import useAuthAxios from '../../hooks/useAuthAxios';

const ContactTable = ({postContact, setPostContact}) => {
  const authAxios = useAuthAxios();
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const showSnackbar = useSnackbar();
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

const fetchContacts = async () => {
    try {
      const response = await authAxios.get('contact');
      setContacts(response.data.result);
      setPostContact(false)
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    if(postContact){
      fetchContacts();
    }
  }, [postContact]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleOpenModal = (contact) => {
    setSelectedContact(contact);
    setFormData(contact);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedContact(null);
  };

  const handleUpdate = async () => {
    try {
      delete formData._id;
      await authAxios.put(`contact/${selectedContact._id}`, formData);
      handleCloseModal();
      fetchContacts();
      showSnackbar('success', 'Contact updated successfully');
    } catch (error) {
      showSnackbar('error', 'Error updating contact');
    }
  };

  const handleOpenDeleteConfirmation = (contact) => {
    setSelectedContact(contact);
    setDeleteConfirmationOpen(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setDeleteConfirmationOpen(false);
  };

  const handleDelete = async (id) => {
    try {
      await authAxios.del(`contact/${id}`);
      fetchContacts();
      showSnackbar('success', 'Contact deleted successfully');
      handleCloseDeleteConfirmation()
    } catch (error) {
      showSnackbar('error', 'Error deleting contact');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div>
      {contacts.length > 0 && <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.subject}</TableCell>
                <TableCell>{contact.message}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    sx={{mr:1}}
                    startIcon={<EditIcon />}
                    onClick={() => handleOpenModal(contact)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleOpenDeleteConfirmation(contact)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}

      {/* Edit Modal */}
      <Modal className="modal-table" open={modalOpen} onClose={handleCloseModal}>
        <div className="modal-container">
          <TextField label="Name" fullWidth value={formData.name} name="name" onChange={handleChange} className="modal-text-field" />
          <TextField label="Email" fullWidth value={formData.email} name="email" onChange={handleChange} className="modal-text-field" />
          <TextField label="Subject" fullWidth value={formData.subject} name="subject" onChange={handleChange} className="modal-text-field" />
          <TextField label="Message" fullWidth multiline rows={4} value={formData.message} name="message" onChange={handleChange} className="modal-text-field" />
          <Button variant="contained" color="primary" onClick={handleUpdate} className="modal-button">
            Update
          </Button>
          <Button variant="outlined" onClick={handleCloseModal} className="modal-button">
            Cancel
          </Button>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal className="modal-table" open={deleteConfirmationOpen} onClose={handleCloseDeleteConfirmation}>
        <div className="modal-container">
          <p>Are you sure you want to delete this contact?</p>
          <Button variant="contained" color="primary" onClick={() => handleDelete(selectedContact._id)} className="modal-button">
            Yes, Delete
          </Button>
          <Button variant="outlined" onClick={handleCloseDeleteConfirmation} className="modal-button">
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactTable;
