import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    color: theme.colors.heading,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary60,
    paddingHorizontal: 16,
    paddingTop: 10,
    textAlignVertical: 'top',
  },
});

export default styles;
