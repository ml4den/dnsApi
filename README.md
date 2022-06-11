# dnsApi
dnsApi is a node.js application that acts as an HTTP interface for DNS.

A DNS API running over HTTP can be useful in a variety of scenarios:
- Make queries when DNS isn't directly available, e.g. in certain restricted or serverless environments
- Verify records before provisioning a service
- Get around firewall or geo-blocking limitations

## Record Types
- [A](https://dnsapi-zx6tedjug0jg.runkit.sh/api/a/example.com)
- [AAAA](https://dnsapi-zx6tedjug0jg.runkit.sh/api/AAAA/example.com)
- [CNAME](https://dnsapi-zx6tedjug0jg.runkit.sh/api/CNAME/www.contoso.com)
- [NAPTR](https://dnsapi-zx6tedjug0jg.runkit.sh/api/NAPTR/cam.ac.uk)
- [NS](https://dnsapi-zx6tedjug0jg.runkit.sh/api/NS/example.com)
- [PTR](https://dnsapi-zx6tedjug0jg.runkit.sh/api/PTR/46.22.217.172.in-addr.arpa)
- [SOA](https://dnsapi-zx6tedjug0jg.runkit.sh/api/SOA/example.com)
- [SRV](https://dnsapi-zx6tedjug0jg.runkit.sh/api/SRV/_sip._udp.sip.voice.google.com)
- [TXT](https://dnsapi-zx6tedjug0jg.runkit.sh/api/TXT/contoso.com)
- [REVERSE](https://dnsapi-zx6tedjug0jg.runkit.sh/api/REVERSE/1.1.1.1)
