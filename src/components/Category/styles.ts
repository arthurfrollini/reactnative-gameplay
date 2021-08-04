import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 20,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 15,
  },
  check: {
    width: 12,
    height: 12,
    position: 'absolute',
    top: 7,
    right: 7,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3,
  },
  checked: {
    width: 9,
    height: 9,
    position: 'absolute',
    top: 7,
    right: 7,
    backgroundColor: theme.colors.primary,
    borderRadius: 2,
  },
});

export default styles;
