import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Datos de ejemplo para maquetar la interfaz
const TAREAS_EJEMPLO = [
  { id: '1', titulo: 'Entregar evidencias', hora: '10:00 AM', prioridad: 'Alta', completada: false },
  { id: '2', titulo: 'Reunión de equipo', hora: '02:30 PM', prioridad: 'Media', completada: false },
  { id: '3', titulo: 'Revisar métricas de la app', hora: '05:00 PM', prioridad: 'Baja', completada: true },
];

export default function TareasScreen() {
  const getPrioridadColor = (prioridad: string) => {
    switch (prioridad) {
      case 'Alta': return '#FF5252';
      case 'Media': return '#FFB300';
      case 'Baja': return '#4CAF50';
      default: return '#888';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Resumen Superior */}
      <View style={styles.headerCard}>
        <Text style={styles.headerTitle}>Hola, Usuario 👋</Text>
        <Text style={styles.headerSubtitle}>Tienes 2 tareas pendientes para hoy</Text>
      </View>

      {/* Lista de Tareas */}
      <Text style={styles.sectionTitle}>Tus Tareas</Text>
      <FlatList
        data={TAREAS_EJEMPLO}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <TouchableOpacity style={styles.checkButton}>
              <Ionicons 
                name={item.completada ? "checkmark-circle" : "ellipse-outline"} 
                size={26} 
                color={item.completada ? "#4CAF50" : "#6200EE"} 
              />
            </TouchableOpacity>
            
            <View style={styles.taskInfo}>
              <Text style={[styles.taskTitle, item.completada && styles.taskCompleted]}>
                {item.titulo}
              </Text>
              <Text style={styles.taskTime}>{item.hora}</Text>
            </View>

            <View style={[styles.priorityBadge, { backgroundColor: getPrioridadColor(item.prioridad) }]}>
              <Text style={styles.priorityText}>{item.prioridad}</Text>
            </View>
          </View>
        )}
      />

      {/* Botón Flotante para Añadir Tarea */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={30} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingHorizontal: 16, paddingTop: 10 },
  headerCard: { backgroundColor: '#6200EE', padding: 20, borderRadius: 16, marginBottom: 20 },
  headerTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  headerSubtitle: { color: '#E0E0E0', fontSize: 14, marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  taskCard: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  checkButton: { marginRight: 12 },
  taskInfo: { flex: 1 },
  taskTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  taskCompleted: { textDecorationLine: 'line-through', color: '#888' },
  taskTime: { fontSize: 12, color: '#666', marginTop: 2 },
  priorityBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  priorityText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
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