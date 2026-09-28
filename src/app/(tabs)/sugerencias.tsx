import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Datos de prueba para simular recomendaciones del algoritmo PIR
const SUGERENCIAS_EJEMPLO = [
  {
    id: '1',
    titulo: 'Optimizar horario de estudio',
    descripcion: 'PIR detectó mayor concentración matutina. ¿Reagendamos "Evidencia SENA" para las 08:00 AM?',
    categoria: 'Productividad',
    icono: 'time-outline',
  },
  {
    id: '2',
    titulo: 'Pausa activa recomendada',
    descripcion: 'Llevas 2 horas continuas en pantalla. Tómate 10 minutos para estirar antes de la próxima reunión.',
    categoria: 'Salud',
    icono: 'fitness-outline',
  },
  {
    id: '3',
    titulo: 'Bloque de enfoque profundo',
    descripcion: 'Tienes la tarde libre de compromisos. Ideal para avanzar en el desarrollo de la app.',
    categoria: 'Enfoque',
    icono: 'bulb-outline',
  },
];

export default function SugerenciasScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Banner Superior IA */}
      <View style={styles.aiHeader}>
        <Ionicons name="sparkles" size={28} color="#FFF" />
        <View style={styles.aiHeaderText}>
          <Text style={styles.aiTitle}>Asistente PIR IA</Text>
          <Text style={styles.aiSubtitle}>Sugerencias inteligentes para optimizar tu día</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recomendaciones para ti</Text>

      {/* Lista de Sugerencias */}
      <FlatList
        data={SUGERENCIAS_EJEMPLO}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Ionicons name={item.icono as any} size={22} color="#6200EE" />
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>{item.titulo}</Text>
                <Text style={styles.cardCategory}>{item.categoria}</Text>
              </View>
            </View>

            <Text style={styles.cardDescription}>{item.descripcion}</Text>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Aplicar sugerencia</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dismissButton}>
                <Ionicons name="close-circle-outline" size={24} color="#888" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingHorizontal: 16, paddingTop: 10 },
  aiHeader: {
    backgroundColor: '#6200EE',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  aiHeaderText: { marginLeft: 12, flex: 1 },
  aiTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  aiSubtitle: { color: '#E0E0E0', fontSize: 13, marginTop: 2 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F0E6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardTitleContainer: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  cardCategory: { fontSize: 12, color: '#6200EE', fontWeight: '600', marginTop: 1 },
  cardDescription: { fontSize: 14, color: '#555', lineHeight: 20, marginBottom: 14 },
  actionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  applyButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  applyButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
  dismissButton: { padding: 4 },
});