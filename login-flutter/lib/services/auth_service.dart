import 'dart:convert' as convert;
import 'package:http/http.dart' as http;

class AuthService {
  Future<Map<String, dynamic>?> login(String email, String password) async {
    final url = Uri.http('10.0.2.2:3000', '/login');

    final Map<String, String> loginData = {
      'email': email,
      'password': password,
    };

    final response = await http.post(
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      body: convert.jsonEncode(loginData),
    );

    if (response.statusCode == 200) {
      var jsonResponse = convert.jsonDecode(response.body) as Map<String, dynamic>;
      return jsonResponse;
    } else {
      print('Failed to login: ${response.statusCode}');
      return null;
    }
  }
}
