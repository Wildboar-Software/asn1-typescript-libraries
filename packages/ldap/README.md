# Lightweight Directory Access Protocol (LDAP) in TypeScript

ASN.1 data structures based on the ASN.1 definitions in
[IETF RFC 4511](https://datatracker.ietf.org/doc/html/rfc4511/), which defines
the Lightweight Directory Access Protocol (LDAP).

See the
[documentation](https://github.com/Wildboar-Software/asn1-typescript-libraries/blob/master/docs/all.md)
that applies to this library and others to learn how to use this module.

Includes functions for implementing the LDAP syntaxes defined in
[IETF RFC 4517](https://datatracker.ietf.org/doc/html/rfc4517), functions for
evaluating LDAP filters, and functions for converting LDAP data structures to
strings for transfer over the wire.

## Example

```typescript
import { BERElement } from "@wildboar/asn1";
import { _decode_LDAPMessage } from "@wildboar/ldap";

// Handle a request received over TCP.
const el = new BERElement();
el.fromBytes(requestBytes); // Throws if a full LDAPMessage is not received yet.
// The above returns the number of bytes read.
const request = _decode_LDAPMessage(el);
if (request.protocolOp === "bindRequest") {
  const bindRequest = request.protocolOp.bindRequest;
  const namestr = Buffer.from(bindRequest.name).toString("utf8");
  console.log(`Binding as ${namestr}`);
}
```

## ASN.1 Compiler

These libraries were generated entirely or in part by the
[ASN.1 Compilation Service](https://wildboarsoftware.com/asn1-compilation)
offered by [Wildboar Software](https://wildboarsoftware.com). The ASN.1
compiler itself is closed-source and proprietary, but some of the libraries
produced with it are released publicly under the
[MIT license](https://mit-license.org/).

If you would like to see additional ASN.1 libraries in TypeScript or other
programming languages, or if you have any other questions, please contact us at
[contact@wildboarsoftware.com](mailto:contact@wildboarsoftware.com).

## ESM-Only

As of June 12th, 2025, this module is only compiled to ESM. CommonJS will no
longer be supported.
