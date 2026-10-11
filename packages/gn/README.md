# X.509 / PKIX General Names

This package is for the X.509 `GeneralName` type and the things you do with one:
compare it, use it as a map key, print it, and turn it into JSON. It is ESM-only
and published both on [npmjs.com](https://www.npmjs.com/) and [jsr.io](https://jsr.io/).
It depends on `@wildboar/asn1`, `@wildboar/dn`, `@wildboar/or-address`, and
`@wildboar/teletex`.

`GeneralName` is the name form used by subject alternative names, issuer
alternative names, and name constraints. The definitions this package follows
are ITU-T X.509 and [IETF RFC 5280](https://www.rfc-editor.org/rfc/rfc5280).
An `iPAddress` is either one address (section 4.2.1.6: 4 octets for IPv4, 16
for IPv6, displayed per [RFC 5952](https://www.rfc-editor.org/rfc/rfc5952)) or
a name-constraint range (section 4.2.1.10: 8 octets for IPv4, 32 for IPv6, the
address followed by a mask, in the style of
[RFC 4632](https://www.rfc-editor.org/rfc/rfc4632)). An X.400 address is printed
with `ORAddress.toString()`, which is the form in
[RFC 1685](https://www.rfc-editor.org/rfc/rfc1685).

`GeneralName` is a `CHOICE`, so the operations are functions. `EDIPartyName` is a
class, and the same operations are methods on it. `GeneralNames` is an array of
`GeneralName`: this package only encodes and decodes it. Anything else is
`names.map(generalNameToString)` or the same idea.

For a `GeneralName` the package provides:

- `generalNameToString` and `generalNameFromString`
- `generalNameToASN1String` (textual ASN.1 value notation)
- `generalNameToJSON`, `generalNameFromJSON`, and `generalNameToJER`
- `compareGeneralName` for one-to-one comparison
- `generalNameToKey` for a efficient many-to-many comparison, deduplication,
  or usage in a `Map`
- `getGeneralNameEncodedLength`, the definite BER length without encoding
  (an X.400 address is the exception: it is encoded, because
  `@wildboar/or-address` has no length calculator)
- `_encode_GeneralName` and `_decode_GeneralName`
- `GeneralNameTrie`, a prefix trie of DNS names, directory names, and object
  identifiers

`generalNameFromString` is a best effort, not an inverse of
`generalNameToString`. It accepts `rfc822Name`, `dNSName`,
`uniformResourceIdentifier`, `iPAddress` (including a prefix such as
`192.0.2.0/24`), `registeredID`, `directoryName` (an RFC 4514 name), and
`x400Address`, and `otherName:type:value` for `UPN`, `XMPPAddr`, `SRVName`,
`NAIRealm`, `SmtpUTF8Mailbox`, `AcpNodeName`, `BundleEID`, and
`HardwareModuleName:{ hwType:oid, hwSerialNum:hex }`. The alternative name
and the `otherName` type name are matched without regard to case.
`ediPartyName`, `PermanentIdentifier`, `SIM`, an unknown alternative, and a
malformed value throw `SyntaxError`. A malformed `registeredID`, or a
`HardwareModuleName` `hwType` that is not a valid object identifier, throws
the `Error` from `ObjectIdentifier.fromString`.

`generalNameFromJSON` reverses `generalNameToJSON`, except for an X.400 address
whose JSON has a non-empty `extension-attributes`. `ORAddress.toJSON()` does
not keep those values, so this throws `SyntaxError` instead of dropping them.
`generalNameToJER` is not reversed: an `otherName` value there is whatever the
value element's `toJSON()` returns.

Comparison follows RFC 5280. The local-part of an email address is exact and
the domain is case-insensitive. A DNS name is case-insensitive. A URI's scheme
and host are case-insensitive and the rest is exact, so a `mailto:` URI (which
has no host) only ignores case in the scheme. An `iPAddress` is compared as
bytes, including the 8- and 32-octet range form. Without an equality matcher
for directory names, `compareGeneralName(a, b)` is the same answer as
`generalNameToKey(a) === generalNameToKey(b)`. An X.400 address is the
documented exception to the cheap comparison: both values are DER-encoded and
then compared, because `@wildboar/or-address` has no field-by-field equality.

## Showcase

The output of each statement is shown in the trailing comments.

```typescript
import { External, ObjectIdentifier } from "@wildboar/asn1";
import { BER, DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { BuiltInStandardAttributes, ORAddress } from "@wildboar/or-address";
import {
    EDIPartyName,
    GeneralNameTrie,
    _encode_GeneralName,
    compareGeneralName,
    generalNameFromJSON,
    generalNameFromString,
    generalNameToASN1String,
    generalNameToJSON,
    generalNameToJER,
    generalNameToKey,
    generalNameToString,
    getGeneralNameEncodedLength,
} from "@wildboar/gn";

const email = generalNameFromString("rfc822Name:User@Example.COM");
console.log(generalNameToString(email));
// rfc822Name:User@Example.COM
console.log(generalNameToKey(email));
// rfc822Name:User@example.com
console.log(compareGeneralName(email, generalNameFromString("rfc822Name:User@example.com")));
// true

const dns = generalNameFromString("dNSName:www.Example.COM");
console.log(generalNameToKey(dns));
// dNSName:www.example.com

const uri = generalNameFromString("uniformResourceIdentifier:HTTPS://User@Example.com:443/Path");
console.log(generalNameToKey(uri));
// uniformResourceIdentifier:https://User@example.com:443/Path

// RFC 5280's class-C name constraint: the octets C0 00 02 00 FF FF FF 00.
const ip = generalNameFromString("iPAddress:192.0.2.0/24");
console.log(generalNameToString(ip));
// iPAddress:192.0.2.0/24
console.log(generalNameToASN1String(ip));
// iPAddress : 'C0000200FFFFFF00'H
console.log(JSON.stringify(generalNameToJSON(ip)));
// {"iPAddress":"c0000200ffffff00"}

const directory = generalNameFromString("directoryName:CN=Bob,C=US");
console.log(generalNameToString(directory));
// directoryName:cn=Bob,c=US
console.log(generalNameToASN1String(directory));
// directoryName : rdnSequence : { { { type { 2 5 4 3 }, value "Bob" } }, { { type { 2 5 4 6 }, value "US" } } }
console.log(generalNameToString(generalNameFromJSON(generalNameToJSON(directory))));
// directoryName:cn=Bob,c=US

console.log(compareGeneralName(
    { ediPartyName: new EDIPartyName(undefined, { printableString: "Acme" }) },
    { ediPartyName: new EDIPartyName(undefined, { uTF8String: "acme" }) },
));
// true

const x400 = {
    x400Address: new ORAddress(new BuiltInStandardAttributes(
        undefined, undefined, undefined, undefined, undefined, "Wildboar",
    )),
};
console.log(generalNameToString(x400));
// x400Address:O=Wildboar
console.log(JSON.stringify(generalNameToJSON(x400)));
// {"x400Address":{"built-in-standard-attributes":{"organization-name":"Wildboar"}}}
console.log(generalNameToString(generalNameFromJSON(generalNameToJSON(x400))));
// x400Address:O=Wildboar

const upn = {
    otherName: new External(
        ObjectIdentifier.fromString("1.3.6.1.4.1.311.20.2.3"),
        undefined,
        undefined,
        _encodeUTF8String("user@example.com", BER),
    ),
};
console.log(generalNameToString(upn));
// otherName:UPN:user@example.com
console.log(JSON.stringify(generalNameToJER(upn)));
// {"otherName":{"type-id":"1.3.6.1.4.1.311.20.2.3","value":"user@example.com"}}

console.log(getGeneralNameEncodedLength(email));
// 18
console.log(_encode_GeneralName(email, DER).toBytes().length);
// 18

const trie = new GeneralNameTrie<string>();
trie.setValue({ dNSName: "example.com" }, "zone");
trie.setValue({ dNSName: "www.example.com" }, "host");
console.log(JSON.stringify(Array.from(trie.descendValues({ dNSName: "www.example.com" }))));
// ["zone","host"]
```

## AI Usage Statement

This package was mostly written by AI: specifically Grok 4.7 in the Cursor IDE.
Planning was done by Claude Opus 5.5 in the Cursor IDE.
All of the code was carefully reviewed and critiqued by a real human.
