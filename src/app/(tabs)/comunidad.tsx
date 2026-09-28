import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PUBLICACIONES_EJEMPLO = [
  {
    id: '1',
    usuario: 'Carlos Mendoza',
    rol: 'Estudiante',
    titulo: 'Rutina de Estudio Enfocado 25/5',
    descripcion: 'Mi método Pomodoro personalizado para rendir al máximo en los proyectos sin agotarme.',
    likes: 24,
    clones: 12,
  },
  {
    id: '2',
    usuario: 'Dra. Andrea Ríos',
    rol: 'Especialista en Hábitos',
    titulo: 'Mañanas Milagrosas (5 AM)',
    descripcion: 'Diseño de rutina matutina: meditación, ejercicio ligero y lectura antes de iniciar la jornada laboral.',
    likes: 89,
    clones: 45,
  },
  {
    id: '3',
    usuario: 'Equipo PIR',
    rol: 'Comunidad Oficial',
    titulo: 'Reto: 7 días de Desconexión Digital',
    descripcion: 'Planifica tus noches apagando pantallas a las 9 PM. ¡Únete al desafío de esta semana!',
    likes: 150,
    clones: 98,
  },
];

export default function ComunidadScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado Comunidad */}
      <View style={styles.communityHeader}>
        <Ionicons name="people" size={28} color="#FFF" />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Comunidad PIR</Text>
          <Text style={styles.headerSubtitle}>Descubre, comparte y clona rutinas efectivas</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Rutinas Populares</Text>

      {/* Feed de Rutinas */}
      <FlatList
        data={PUBLICACIONES_EJEMPLO}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            {/* Header del Usuario */}
            <View style={styles.userInfo}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={20} color="#6200EE" />
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{item.usuario}</Text>
                <Text style={styles.userRol}>{item.rol}</Text>
              </View>
            </View>

            {/* Contenido */}
            <Text style={styles.postTitle}>{item.titulo}</Text>
            <Text style={styles.postDescription}>{item.descripcion}</Text>

            {/* Footer y Acciones */}
            <View style={styles.postFooter}>
              <View style={styles.statsRow}>
                <TouchableOpacity style={styles.statItem}>
                  <Ionicons name="heart-outline" size={18} color="#E91E63" />
                  <Text style={styles.statText}>{item.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.statItem, { marginLeft: 16 }]}>
                  <Ionicons name="copy-outline" size={18} color="#6200EE" />
                  <Text style={styles.statText}>{item.clones} descargas</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.cloneButton}>
                <Text style={styles.cloneButtonText}>Importar Rutina</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Botón Flotante para Publicar */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="create-outline" size={26} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', paddingHorizontal: 16, paddingTop: 10 },
  communityHeader: {
    backgroundColor: '#6200EE',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTextContainer: { marginLeft: 12, flex: 1 },
  headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  headerSubtitle: { color: '#E0E0E0', fontSize: 13, marginTop: 2 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  postCard: {
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
  userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F0E6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  userDetails: { flex: 1 },
  userName: { fontSize: 15, fontWeight: 'bold', color: '#333' },
  userRol: { fontSize: 12, color: '#888' },
  postTitle: { fontSize: 16, fontWeight: 'bold', color: '#6200EE', marginBottom: 6 },
  postDescription: { fontSize: 14, color: '#555', lineHeight: 20, marginBottom: 14 },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 12,
  },
  statsRow: { flexDirection: 'row', alignItems: 'center' },
  statItem: { flexDirection: 'row', alignItems: 'center' },
  statText: { fontSize: 13, color: '#666', marginLeft: 4, fontWeight: '500' },
  cloneButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  cloneButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
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