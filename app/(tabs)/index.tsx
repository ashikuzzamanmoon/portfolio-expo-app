import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const MY_WEBSITE_URL = "https://moon-bd.com";

export default function AppScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <WebView
        source={{ uri: MY_WEBSITE_URL }}
        style={styles.webview}
        // নিচের props গুলো স্ক্রলিং অভিজ্ঞতা উন্নত করবে
        decelerationRate="normal" // স্ক্রল করার পর থামার গতিকে স্বাভাবিক করে
        pullToRefreshEnabled={true} // নিচের দিকে টেনে রিফ্রেশ করার সুবিধা যোগ করে
        showsVerticalScrollIndicator={false} // ডানপাশের ভার্টিকাল স্ক্রলবার হাইড করে দেয়
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
  },
  webview: {
    flex: 1,
  },
});
