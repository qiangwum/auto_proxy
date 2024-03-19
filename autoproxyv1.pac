function FindProxyForURL(url, host) {
	var proxy1 = "proxy www-proxy.ericsson.se:8080";
	var proxy2 = "SOCKS5 localhost:63333";
	var proxy3 = "DIRECT" 
	if (shExpMatch(url, "*") ) {
	   return proxy2
	}
}
