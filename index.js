const express = require ('express');
const app = express();
const dns = require('dns');
const Joi = require ('joi');

const apiVersion = "v1";

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Go to /api');
});

app.get('/api/', (req, res) => {
  
  const Response = {
    status: 'ok',
    "service_version": apiVersion
  };

  res.send(Response);

});

app.get('/api/A/:hostname', (req, res) => {

  const { error } = validateHostname(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.resolve4(req.params.hostname, (err, addresses) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    //console.log(`addresses: ${JSON.stringify(addresses)}`);
    //console.log(dns.getServers());
    const dnsResponse = {
      ipv4: addresses,
      hostname: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

app.get('/api/AAAA/:hostname', (req, res) => {

  const { error } = validateHostname(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.resolve6(req.params.hostname, (err, addresses) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    const dnsResponse = {
      ipv6: addresses,
      hostname: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

app.get('/api/CNAME/:hostname', (req, res) => {

  const { error } = validateHostname(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.resolveCname(req.params.hostname, (err, addresses) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    const dnsResponse = {
      alias: addresses,
      hostname: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

app.get('/api/MX/:hostname', (req, res) => {

  const { error } = validateHostname(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.resolveMx(req.params.hostname, (err, addresses) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    const dnsResponse = {
      mx: addresses,
      hostname: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

app.get('/api/NAPTR/:hostname', (req, res) => {

  const { error } = validateHostname(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.resolveNaptr(req.params.hostname, (err, addresses) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    const dnsResponse = {
      naptr: addresses,
      hostname: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

app.get('/api/NS/:hostname', (req, res) => {

  const { error } = validateHostname(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.resolveNs(req.params.hostname, (err, addresses) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    const dnsResponse = {
      ns: addresses,
      hostname: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

app.get('/api/PTR/:hostname', (req, res) => {

  const { error } = validateHostname(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.resolvePtr(req.params.hostname, (err, addresses) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    const dnsResponse = {
      ptr: addresses,
      hostname: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

app.get('/api/SOA/:hostname', (req, res) => {

  const { error } = validateHostname(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.resolveSoa(req.params.hostname, (err, addresses) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    const dnsResponse = {
      soa: addresses,
      hostname: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

app.get('/api/SRV/:hostname', (req, res) => {

  const { error } = validateHostname(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.resolveSrv(req.params.hostname, (err, addresses) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    const dnsResponse = {
      srv: addresses,
      hostname: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

app.get('/api/TXT/:hostname', (req, res) => {

  const { error } = validateHostname(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.resolveTxt(req.params.hostname, (err, records) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    const dnsResponse = {
      txt: records,
      hostname: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

app.get('/api/reverse/:hostname', (req, res) => {

  const { error } = validateIp(req.params.hostname);
  if (error) return res.status(400).send( { error: error.name, message: error.details[0].message } );

  dns.reverse(req.params.hostname, (err, addresses) => {
    if (err) return res.status(404).send( { error: 'NotFound', message: 'Hostname not found' } );

    const dnsResponse = {
      hostname: addresses,
      ip: req.params.hostname,
      "service_version": apiVersion
    };
    res.send(dnsResponse);

  });

});

function validateHostname(hostname) {
  const schema = Joi.string().required().regex(/^[a-zA-Z0-9\-_\.]{3,253}$/, { name: 'permitted name' });

  return Joi.validate(hostname, schema);
}

function validateIp(hostname) {
  const schema = Joi.string().ip().required();

  return Joi.validate(hostname, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Listening on port ${port}...`));