import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PerfilScreen() {
  const [notificaciones, setNotificaciones] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Encabezado del Perfil */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={44} color="#6200EE" />
          </View>
          <Text style={styles.userName}>Usuario PIR</Text>
          <Text style={styles.userEmail}>usuario@pirapp.com</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Plan Premium</Text>
          </View>
        </View>

        {/* Métrica de Rendimiento */}
        <View style={styles.statsCard}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>18</Text>
            <Text style={styles.statLabel}>Tareas hoy</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5 días</Text>
            <Text style={styles.statLabel}>Racha activo</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>92%</Text>
            <Text style={styles.statLabel}>Eficiencia</Text>
          </View>
        </View>

        {/* Opciones de Configuración */}
        <Text style={styles.sectionTitle}>Ajustes de la cuenta</Text>
        
        <View style={styles.optionsGroup}>
          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="person-outline" size={22} color="#6200EE" />
            <Text style={styles.optionText}>Editar Perfil</Text>
            <Ionicons name="chevron-forward" size={20} color="#CCC" />
          </TouchableOpacity>

          <View style={styles.optionRow}>
            <Ionicons name="notifications-outline" size={22} color="#6200EE" />
            <Text style={styles.optionText}>Notificaciones de Rutina</Text>
            <Switch
              value={notificaciones}
              onValueChange={setNotificaciones}
              trackColor={{ false: '#D1D1D1', true: '#B388FF' }}
              thumbColor={notificaciones ? '#6200EE' : '#F4F3F4'}
            />
          </View>

          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="shield-checkmark-outline" size={22} color="#6200EE" />
            <Text style={styles.optionText}>Privacidad y Seguridad</Text>
            <Ionicons name="chevron-forward" size={20} color="#CCC" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionRow}>
            <Ionicons name="help-circle-outline" size={22} color="#6200EE" />
            <Text style={styles.optionText}>Ayuda y Soporte</Text>
            <Ionicons name="chevron-forward" size={20} color="#CCC" />
          </TouchableOpacity>
        </View>

        {/* Botón Cerrar Sesión */}
        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={22} color="#FF5252" />
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingHorizontal: 16, paddingTop: 10 },
  profileHeader: { alignItems: 'center', marginVertical: 10 },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0E6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#6200EE',
  },
  userName: { fontSize: 22, fontWeight: 'bold', color: '#333' },
  userEmail: { fontSize: 14, color: '#666', marginTop: 2 },
  badge: {
    backgroundColor: '#6200EE',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  badgeText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  statsCard: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    marginVertical: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: 'bold', color: '#6200EE' },
  statLabel: { fontSize: 12, color: '#666', marginTop: 2 },
  divider: { width: 1, height: 30, backgroundColor: '#E0E0E0' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  optionsGroup: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionText: { flex: 1, marginLeft: 12, fontSize: 15, color: '#333', fontWeight: '500' },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEAEA',
    padding: 14,
    borderRadius: 12,
    marginBottom: 30,
  },
  logoutText: { color: '#FF5252', fontWeight: 'bold', fontSize: 16, marginLeft: 8 },
});