import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
const PlaceholderImage = require('@/assets/images/netflixLogo.png');

type Movie = {
  id?: number | string;
  title?: string;
  year?: number | string;
  description?: string;
  posterURL?: string;
};

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setError(null);
        const res = await fetch('https://api.sampleapis.com/movies/comedy');
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        if (!mounted) return;
        // The API sometimes returns an object instead of array. be defensive.
        const extractArrayFromResponse = (resp: any): any[] => {
          if (!resp) return [];
          if (Array.isArray(resp)) return resp;
          if (Array.isArray(resp.data)) return resp.data;
          if (Array.isArray(resp.results)) return resp.results;
          if (Array.isArray(resp.movies)) return resp.movies;
          if (Array.isArray(resp.items)) return resp.items;
          if (typeof resp === 'object') {
            const arrays = Object.values(resp).filter((v) => Array.isArray(v));
            if (arrays.length) return arrays[0] as any[];
          }
          return [];
        };

        const items = extractArrayFromResponse(data);
        if (!items || items.length === 0) {
          throw new Error('API returned unexpected shape: ' + (data && typeof data === 'object' ? Object.keys(data).join(', ') : String(data)));
        }

        // map to lighter objects
        const mapped = items.map((m: any, idx: number) => ({
          id: m.id ?? idx,
          title: m.title ?? m.name ?? m.originalTitle ?? 'Untitled',
          year: m.year ?? m.releaseYear ?? m.release_date ?? '',
          description: m.plot ?? m.description ?? m.overview ?? '',
          posterURL: m.posterURL ?? m.posterUrl ?? m.image ?? m.poster ?? null,
        }));
        setMovies(mapped.slice(0, 30));
      } catch (err) {
        console.warn('Failed to fetch movies', err);
        setError(String(err));
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }
  if (!movies || movies.length === 0) {
    return (
      <View style={styles.screen}>
        <Text style={styles.header}>Catálogo - Comédia</Text>
        <View style={styles.centerEmpty}>
          <Text style={styles.emptyText}>Nenhum filme encontrado.</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TouchableOpacity style={styles.retryButton} onPress={() => {
            setLoading(true);
            setError(null);
            setMovies([]);
            // re-run effect by calling load via a quick fetch here
            (async () => {
              try {
                      const r = await fetch('https://api.sampleapis.com/movies/comedy');
                const d = await r.json();
                const retryItems = ((): any[] => {
                  if (!d) return [];
                  if (Array.isArray(d)) return d;
                  if (Array.isArray(d.data)) return d.data;
                  if (Array.isArray(d.results)) return d.results;
                  if (Array.isArray(d.movies)) return d.movies;
                  if (Array.isArray(d.items)) return d.items;
                  const arrays = Object.values(d).filter((v: any) => Array.isArray(v));
                  return arrays.length ? (arrays[0] as any[]) : [];
                })();
                if (!retryItems || retryItems.length === 0) throw new Error('API returned unexpected shape on retry');
                const mapped = retryItems.map((m: any, idx: number) => ({
                  id: m.id ?? idx,
                  title: m.title ?? m.name ?? m.originalTitle ?? 'Untitled',
                  year: m.year ?? m.releaseYear ?? m.release_date ?? '',
                  description: m.plot ?? m.description ?? m.overview ?? '',
                  posterURL: m.posterURL ?? m.posterUrl ?? m.image ?? m.poster ?? null,
                }));
                setMovies(mapped.slice(0, 30));
              } catch (e) {
                setError(String(e));
              } finally {
                setLoading(false);
              }
            })();
          }}>
            <Text style={styles.retryText}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Catálogo - Comédia</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            {item.posterURL ? (
              <ImageViewer imgSource={{ uri: item.posterURL }} style={styles.poster} fallbackSource={PlaceholderImage} />
            ) : (
              <ImageViewer imgSource={PlaceholderImage} style={styles.poster} />
            )}
            <View style={styles.cardBody}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.year}>{item.year}</Text>
              {item.description ? <Text style={styles.desc} numberOfLines={3}>{item.description}</Text> : null}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
    padding: 12,
  },
  center: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#E50914',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  list: {
    paddingBottom: 80,
  },
  centerEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  emptyText: {
    color: '#fff',
    marginBottom: 8,
  },
  errorText: {
    color: '#ff6666',
    marginBottom: 12,
  },
  retryButton: {
    backgroundColor: '#E50914',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryText: {
    color: '#fff',
    fontWeight: '700',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#111',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  poster: {
    width: 110,
    height: 150,
  },
  posterPlaceholder: {
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  posterText: {
    color: '#888',
  },
  cardBody: {
    flex: 1,
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  year: {
    color: '#ccc',
    marginBottom: 8,
  },
  desc: {
    color: '#eee',
    fontSize: 13,
    lineHeight: 18,
  },
});
