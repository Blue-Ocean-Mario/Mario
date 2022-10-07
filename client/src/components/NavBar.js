import { Tabs, Text } from '@mantine/core';
import img from '../assets/images/AlleyHoopsGreen.png';
import { logOut } from '../requests';

const sty = {
  '&:hover': { backgroundColor: '#fc8025' },
  color: 'white',
  fontWeight: 'bolder',
  fontSize: 'larger',
};

const headSty = {
  backgroundColor: '#0d5f65',
  color: 'white',
  fontWeight: 'bolder',
  fontSize: '35px',
};

export default function NavBar({ userId, page, setPage }) {
  return (
    <Tabs
      color='orange'
      sx={{ backgroundColor: '#0d5f65' }}
      defaultValue='games'>
      <Tabs.List>
        <img src={img} alt='IMG NOT FOUND' />
        {page === 'login' ? (
          <Text m='auto' sx={headSty}>
            Login
          </Text>
        ) : (
          <>
            <Tabs.Tab
              sx={sty}
              style={sty}
              value='games'
              ml='auto'
              onClick={() => setPage('games')}>
              Games
            </Tabs.Tab>
            <Tabs.Tab
              sx={sty}
              style={sty}
              value='findTeam'
              onClick={() => setPage('findTeam')}>
              Find teammates
            </Tabs.Tab>
            <Tabs.Tab
              sx={sty}
              style={sty}
              value='profile'
              onClick={() => setPage('profile')}>
              Profile
            </Tabs.Tab>
            <Tabs.Tab
              sx={sty}
              style={sty}
              value='messages'
              onClick={() => setPage('messages')}>
              Messages
            </Tabs.Tab>
            <Tabs.Tab
              sx={sty}
              style={sty}
              value='logout'
              onClick={() => {
                logOut()
                  .then(() => {
                    setPage('login');
                    console.log('logged out successfully');
                  })
                  .catch((err) => {
                    console.log('error logging out');
                  });
              }}>
              Logout
            </Tabs.Tab>
          </>
        )}
      </Tabs.List>
    </Tabs>
  );
}
