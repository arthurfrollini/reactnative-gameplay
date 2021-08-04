import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  overlay: {
    backgroundColor: theme.colors.overlay,
    flex: 1,
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: theme.colors.secondary40,
    alignSelf: 'center',
    marginTop: 13,
  },
});

export default styles;
