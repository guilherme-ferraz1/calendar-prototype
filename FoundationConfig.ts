import { Colors, Typography } from 'react-native-ui-lib';

export const loadConfiguration = () => {
  Colors.loadColors({
    tabBar: '#1E293BF2',
    blueGray900: '#0F172A',
    blueGray800: '#1E293B',
    blueGray700: '#334155',
    blueGray400: '#94A3B8'
  });
  
  Typography.loadTypographies({
    h1Bold: {fontSize: 18, fontFamily: 'Inter_700Bold'},
    h1: {fontSize: 18, fontFamily: 'Inter_300Light'},
    h2: {fontSize: 22, fontWeight: 300, lineHeight: 64, fontFamily: 'Inter_500Medium'},
    h3: {fontSize: 14, fontWeight: 600, lineHeight: 20, fontFamily: 'Inter_500Medium'},    
    h4: {fontSize: 12, fontWeight: 500, lineHeight: 16, fontFamily: 'Inter_500Medium'},
    navigationLabel: {fontSize: 10, fontWeight: 500, lineHeight: 12, fontFamily: 'Inter_500Medium', color: 'white'}
  });
}