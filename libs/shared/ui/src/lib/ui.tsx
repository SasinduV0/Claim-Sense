import { View, Text, StyleSheet } from 'react-native';

/* eslint-disable-next-line */
export interface UiProps { }

export function Ui(props: UiProps) {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>✓</Text>
      </View>
      <Text style={styles.text}>
        This component is from the shared UI library!
      </Text>
      <Text style={styles.subtext}>
        Located in: libs/shared/ui
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dbeafe',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#93c5fd',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#2563eb',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 12,
    color: '#3b82f6',
    textAlign: 'center',
  },
});

export default Ui;
