import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SendIcon from '@mui/icons-material/Send';
import './styles.css';

const Messages = () => {
  return (
  <div className="container">
      <div className="left">
          <div className="write-message">
              <div className="write-icon">
                  <OpenInNewIcon style={{ cursor: 'pointer', fontSize: '30px', color: 'white' }} />
              </div>
          </div>
          <div className="message-container">
              <div className="user-message">
              <div className="user"><strong> User</strong> <AccountCircleIcon /> </div>
              <div className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error libero quae quam, sapiente rerum provident vitae inventore quaerat modi dolores nisi accusantium deserunt, adipisci dolorem aliquam ratione porro nostrum beatae?</div>
              </div>
          </div>

          <div className="message-container">
              <div className="user-message">
              <div className="user"><strong> User</strong> <AccountCircleIcon /> </div>
              <div className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error libero quae quam, sapiente rerum provident vitae inventore quaerat modi dolores nisi accusantium deserunt, adipisci dolorem aliquam ratione porro nostrum beatae?</div>
              </div>
          </div>

          <div className="message-container">
              <div className="user-message">
              <div className="user"><strong> User</strong> <AccountCircleIcon /> </div>
              <div className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error libero quae quam, sapiente rerum provident vitae inventore quaerat modi dolores nisi accusantium deserunt, adipisci dolorem aliquam ratione porro nostrum beatae?</div>
              </div>
          </div>

          <div className="message-container">
              <div className="user-message">
              <div className="user"><strong> User</strong> <AccountCircleIcon /> </div>
              <div className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error libero quae quam, sapiente rerum provident vitae inventore quaerat modi dolores nisi accusantium deserunt, adipisci dolorem aliquam ratione porro nostrum beatae?</div>
              </div>
          </div>

          <div className="message-container">
              <div className="user-message">
              <div className="user"><strong> User</strong> <AccountCircleIcon /> </div>
              <div className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error libero quae quam, sapiente rerum provident vitae inventore quaerat modi dolores nisi accusantium deserunt, adipisci dolorem aliquam ratione porro nostrum beatae?</div>
              </div>
          </div>

          <div className="message-container">
              <div className="user-message">
              <div className="user"><strong> User</strong> <AccountCircleIcon /> </div>
              <div className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error libero quae quam, sapiente rerum provident vitae inventore quaerat modi dolores nisi accusantium deserunt, adipisci dolorem aliquam ratione porro nostrum beatae?</div>
              </div>
          </div>


          <div className="message-container">
              <div className="user-message">
              <div className="user"><strong> User</strong> <AccountCircleIcon /> </div>
              <div className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error libero quae quam, sapiente rerum provident vitae inventore quaerat modi dolores nisi accusantium deserunt, adipisci dolorem aliquam ratione porro nostrum beatae?</div>
              </div>
          </div>
          <div className="message-container">
              <div className="user-message">
              <div className="user"><strong> User</strong> <AccountCircleIcon /> </div>
              <div className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error libero quae quam, sapiente rerum provident vitae inventore quaerat modi dolores nisi accusantium deserunt, adipisci dolorem aliquam ratione porro nostrum beatae?</div>
              </div>
          </div>
      </div>
      <div className="right">
          <div className="wrapper">
              <div className="send-message-icon">
                  <div className="icon-container">
                  <SendIcon className="send-icon" style={{ fontSize: '96px' }}/>
                  </div>
              </div>
              <div className="message">
                  <p id="send-message">Your Messages</p>
                  <p id="send-message">Send private messages to initiatives you love.</p>
                  <button id="message-btn">Send Message</button>
              </div>
          </div>
      </div>
  </div>
  )
};

export default Messages;
