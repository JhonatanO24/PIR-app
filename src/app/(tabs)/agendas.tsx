import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EVENTOS_EJEMPLO = [
  {
    id: '1',
    titulo: 'Sesión de Sincronización',
    hora: '09:00 AM - 10:30 AM',
    tipo: 'Academico',
    colorTipo: '#2196F3',
    ubicacion: 'Microsoft Teams',
  },
  {
    id: '2',
    titulo: 'Revisión de Arquitectura PIR',
    hora: '02:00 PM - 03:00 PM',
    tipo: 'Proyecto',
    colorTipo: '#6200EE',
    ubicacion: 'Sala Virtual PIR',
  },
  {
    id: '3',
    titulo: 'Entrenamiento / Ejercicio',
    hora: '06:00 PM - 07:00 PM',
    tipo: 'Personal',
    colorTipo: '#4CAF50',
    ubicacion: 'Gimnasio',
  },
];

export default function AgendasScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado del Día */}
      <View style={styles.dateCard}>
        <View style={styles.dateBadge}>
          <Text style={styles.dateDayNumber}>18</Text>
          <Text style={styles.dateMonthText}>SEP</Text>
        </View>
        <View style={styles.dateInfo}>
          <Text style={styles.dayName}>Viernes</Text>
          <Text style={styles.eventsCount}>3 eventos programados para hoy</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Cronograma del día</Text>

      {/* Lista de Eventos */}
      <FlatList
        data={EVENTOS_EJEMPLO}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <View style={[styles.typeIndicator, { backgroundColor: item.colorTipo }]} />
            
            <View style={styles.eventDetails}>
              <Text style={styles.eventTitle}>{item.titulo}</Text>
              
              <View style={styles.metaRow}>
                <Ionicons name="time-outline" size={14} color="#666" />
                <Text style={styles.metaText}>{item.hora}</Text>
              </View>

              <View style={styles.metaRow}>
                <Ionicons name="location-outline" size={14} color="#666" />
                <Text style={styles.metaText}>{item.ubicacion}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.moreButton}>
              <Ionicons name="ellipsis-vertical" size={20} color="#888" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Botón para Crear Evento */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="calendar-number-outline" size={26} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingHorizontal: 16, paddingTop: 10 },
  dateCard: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  dateBadge: {
    backgroundColor: '#6200EE',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  dateDayNumber: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  dateMonthText: { color: '#E0E0E0', fontSize: 11, fontWeight: '600' },
  dateInfo: { marginLeft: 16, flex: 1 },
  dayName: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  eventsCount: { fontSize: 13, color: '#666', marginTop: 2 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  eventCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  typeIndicator: { width: 5, height: '100%', borderRadius: 3, marginRight: 14 },
  eventDetails: { flex: 1 },
  eventTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 6 },
  metaRow: { flexDirection: 'row', alignItems: 'center', marginTop: 3 },
  metaText: { fontSize: 13, color: '#666', marginLeft: 6 },
  moreButton: { padding: 8 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6200EE',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});