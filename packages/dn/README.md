# X.500 Directory / LDAP Distinguished Names

This is a package for all things related to X.500 directory names, notably
including distinguished names (DNs). It is ESM-only and published both on
[npmjs.com](https://www.npmjs.com/) and [jsr.io](https://jsr.io/). It has
only a single dependency written by the same author and which itself has no
dependencies.

This package defines four principal data types:

- `AttributeTypeAndValue` (ATAV) - A single attribute type and one value
- `RelativeDistinguishedName` (RDN) - An array of ATAVs that uniquely identifies an entry within a prefix
- `DistinguishedName` (DN) - An array of RDNs that globally uniquely identifies an entry
- `Name` - A directory name, which may be (and usually is) a DN

For each of the above (with some exceptions) this package defines functions for:

- Printing according to
  [IETF RFC 4514](https://datatracker.ietf.org/doc/html/rfc4514)
- Parsing according to
  [IETF RFC 4514](https://datatracker.ietf.org/doc/html/rfc4514)
- Escaping and unescaping according to
  [IETF RFC 4514](https://datatracker.ietf.org/doc/html/rfc4514)
- Validating strings without decoding according to [IETF RFC 4514]
- Printing textual ASN.1 value notation
- Converting to and from JSON
- Converting to JSON Encoding Rules (JER)
- Decoding and encoding using the Basic Encoding Rules (BER)
  or Distinguished Encoding Rules (DER)
- Determining the BER encoded length without actually encoding
- Comparing one-to-one efficiently with few (if any) allocations
- Comparing many-to-many efficiently by converting ATAVs, RDNs, DNs, etc.
  to hashable string "keys"

Some functionality specific to `RDNSequence` and `Name` are:

- Determining if an `RDNSequence` (DN) or `Name` refers to the Root DSE
- Validating that all distinguished values are only of
  [IETF RFC 4514](https://datatracker.ietf.org/doc/html/rfc4514)-recognized
  attribute types
- Validating that all distinguished values are only of
  [IETF RFC 3739](https://datatracker.ietf.org/doc/html/rfc3739)-recognized
  attribute types (usable in qualified certificates)
- Converting `RDNSequence` (DN) or `Name` to and from a Uniform Resource Name
  (URN) per ITU-T Recommendation X.520 (2019), Annex F.3.
- Converting `RDNSequence` (DN) or `Name` to and from an Object Identifier
  per ITU-T Recommendation X.660 (2004) or ITU-T Recommendation X.520 (2019),
  Annex F.
- Converting `RDNSequence` (DN) or `Name` to and from a DNS Name (where each
  RDN is a single `domainComponent` value) per
  [IETF RFC 2247](https://datatracker.ietf.org/doc/html/rfc2247).

This package also exports the string preparation functionality as described in
ITU-T Recommendation X.520 (2019), Section 7.

This package also defines branded types (and related type guards and utilities)
for:

- Differentiating between ascending or descending-order RDN sequences / DNs
- Enforcing particular name forms at compile time: for example, ensuring that
  an RDN consists of only a single `commonName` distinguished value.
- Enforcing particular DN structures at compile time, including both length and
  name forms of all RDNs within it.

## Showcase

The output of each statement is shown in the trailing comments.

```typescript
import { DER } from "@wildboar/asn1/functional";
import { ObjectIdentifier } from "@wildboar/asn1";
import {
    rdnSequenceFromStringX520,
    rdnSequenceToString,
    rdnSequenceToInteropString,
    rdnSequenceToASN1String,
    rdnSequenceToJSON,
    rdnSequenceFromJSON,
    rdnSequenceToJER,
    rdnSequenceToKey,
    nameFromStringX520,
    nameToString,
    compareRDNSequence,
    getRDNSequenceEncodedLength,
    _encode_RDNSequence,
    _decode_RDNSequence,
    isRDNSequenceString,
    isRDNSequenceBER,
    escapeDistinguishedValue,
    unescapeDistinguishedValue,
    prepString,
    toDnsName,
    fromDnsName,
    dnToURN,
    dnFromURN,
    dnToOID,
    dnFromOID,
    isRootDseDN,
    isIetfRfc4514Portable,
    isQualifiedCertsSubjectCompliant,
    isRDNSequenceOf,
    asDITAscending,
    toDITDescending,
    getRDNFromDITAscending,
    getTopLevelRDNFromDITAscending,
    domainComponentOID,
} from "@wildboar/dn";

// 1. Parse an RFC 4514 string into an RDNSequence (a DN), then print it again.
const dn = rdnSequenceFromStringX520("CN=Jonathan Wilbur+UID=jwilbur,O=Wildboar Software,C=US");
console.log(rdnSequenceToString(dn));
// cn=Jonathan Wilbur+uid=jwilbur,o=Wildboar Software,c=US
console.log(rdnSequenceToInteropString(dn));
// 2.5.4.3=#130f4a6f6e617468616e2057696c627572+0.9.2342.19200300.100.1.1=#13076a77696c627572,2.5.4.10=#131157696c64626f617220536f667477617265,2.5.4.6=#13025553
console.log(rdnSequenceToASN1String(dn));
// { { { type 2.5.4.3, value "Jonathan Wilbur" }, { type 0.9.2342.19200300.100.1.1, value "jwilbur" } }, { { type 2.5.4.10, value "Wildboar Software" } }, { { type 2.5.4.6, value "US" } } }
console.log(nameToString(nameFromStringX520("rdnSequence:CN=Bob,C=US")));
// rdnSequence:cn=Bob,c=US

// 2. Encode to DER, decode it back, and learn the encoded length without encoding.
const el = _encode_RDNSequence(dn, DER);
console.log(getRDNSequenceEncodedLength(dn), el.toBytes().length);
// 92 92
console.log(rdnSequenceToString(_decode_RDNSequence(el)));
// cn=Jonathan Wilbur+uid=jwilbur,o=Wildboar Software,c=US
console.log(isRDNSequenceBER(el.toBytes()), isRDNSequenceBER(new Uint8Array([1, 2, 3])));
// true false

// 3. JSON, JSON Encoding Rules (JER), and round-tripping.
console.log(JSON.stringify(rdnSequenceToJER(dn)));
// [[{"type":"2.5.4.3","value":"Jonathan Wilbur"},{"type":"0.9.2342.19200300.100.1.1","value":"jwilbur"}],[{"type":"2.5.4.10","value":"Wildboar Software"}],[{"type":"2.5.4.6","value":"US"}]]
console.log(rdnSequenceToString(rdnSequenceFromJSON(rdnSequenceToJSON(dn))));
// cn=Jonathan Wilbur+uid=jwilbur,o=Wildboar Software,c=US

// 4. Compare DNs directly, or via hashable keys (handy for Maps and Sets).
const a = rdnSequenceFromStringX520("cn=BOB   smith,c=us");
const b = rdnSequenceFromStringX520("CN=Bob Smith,C=US");
console.log(compareRDNSequence(a, b));
// true
console.log(rdnSequenceToKey(a) === rdnSequenceToKey(b), rdnSequenceToKey(a));
// true 2.5.4.3=bob smith,2.5.4.6=us

// 5. Validate strings without decoding them; escape, unescape, and prepare values.
console.log(isRDNSequenceString("CN=Bob,C=US"), isRDNSequenceString("CN=Bob,,C=US"));
// true false
console.log(escapeDistinguishedValue(" Smith, John + Co #1"));
// \ Smith\, John \+ Co #1
console.log(unescapeDistinguishedValue("Smith\\, John \\2B Co"));
// Smith, John + Co
console.log(prepString("  Héllo \u00ADWorld\t ", { caseFold: true })); // ITU-T X.520, Section 7
// héllo world

// 6. Convert to and from DNS names (RFC 2247), URNs, and OIDs (ITU-T X.520, Annex F).
const dc = rdnSequenceFromStringX520("DC=example,DC=com");
console.log(toDnsName(dc), rdnSequenceToString(fromDnsName("example.com")!));
// example.com dc=example,dc=com
console.log(dnToURN(dnFromURN("urn:oid:1.2.3")!));
// urn:oid:1.2.3
const fromOID = dnFromOID(ObjectIdentifier.fromString("2.5.4.3"));
console.log(rdnSequenceToString(fromOID), dnToOID(fromOID)?.toString());
// oidC=2,oidC=5,oidC=4,oidC=3 2.5.4.3

// 7. Inspect the contents of a DN.
console.log(isRootDseDN([]), isRootDseDN(dn));
// true false
console.log(isIetfRfc4514Portable(dn), isQualifiedCertsSubjectCompliant(dn));
// true false
console.log(isRDNSequenceOf(dc, domainComponentOID));
// true

// 8. Track DIT order using branded types, so ascending and descending DNs cannot be mixed up.
const ascending = asDITAscending(dn); // Leaf entry first, as in RFC 4514
const descending = toDITDescending(ascending); // Top-level entry first, as in X.500 DAP / DSP
console.log(rdnSequenceToString(descending));
// c=US,o=Wildboar Software,cn=Jonathan Wilbur+uid=jwilbur
console.log(getRDNFromDITAscending(ascending)?.length); // The entry's own RDN
// 2
console.log(getTopLevelRDNFromDITAscending(ascending)?.length); // The top-level RDN
// 1
```

### Branded types

The branded types below are erased at runtime: the type guards and assertion
functions only check (and never copy or change) the value, and the cast
functions do not reverse anything. The `@ts-expect-error` lines are compile-time
errors the brands catch for you.

```typescript
import { DERElement } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import {
    rdnSequenceFromStringX520,
    rdnSequenceToString,
    validateRDNSequenceString,
    isRDNSequenceString,
    isAttributeTypeAndValueString,
    isRDNSequenceBER,
    _encode_RDNSequence,
    _decode_RDNSequence,
    asDITAscending,
    asDITDescending,
    toDITAscending,
    toDITDescending,
    getRDNFromDITAscending,
    getRDNFromDITDescending,
    getTopLevelRDNFromDITDescending,
    isAttributeTypeAndValueOf,
    isRelativeDistinguishedNameOf,
    isRDNSequenceOf,
    isRDNSequenceOfLength,
    isRDNSequenceStartingWith,
    isRDNSequenceEndingWith,
    dnToURN,
    toDnsName,
    commonNameOID,
    countryNameOID,
    domainComponentOID,
    type RDNSequence,
    type RDNSequenceString,
    type RDNSequenceBER,
    type RDNSequenceAscending,
    type RDNSequenceDescending,
    type RDNSequenceEndingWith,
    type RDNSequenceOfLength,
    type AttributeTypeAndValueOf,
    type CommonNameRDN,
    type CountryNameRDN,
    type DomainComponentRDNSequence,
} from "@wildboar/dn";

// 1. Validated strings: validate once, then rely on the type.
function parse (dn: RDNSequenceString): RDNSequence {
    return rdnSequenceFromStringX520(dn);
}

const fromUser: string = "CN=Bob,C=US";
// @ts-expect-error A plain string is not known to be a valid DN.
parse(fromUser);
if (isRDNSequenceString(fromUser)) { // A type guard...
    parse(fromUser);
}

const fromFile: string = "CN=Alice,C=US";
validateRDNSequenceString(fromFile); // ...or an assertion function, which throws a SyntaxError.
parse(fromFile);

// The string brands form a hierarchy: a validated escaped attribute type and
// value is also a valid RDN and a valid DN.
const escaped: string = "CN=Smith\\, John";
if (isAttributeTypeAndValueString(escaped, true)) {
    parse(escaped);
}
// ...but an unescaped one might contain a comma, so it is not a DN.
const unescaped: string = "CN=Smith, John";
if (isAttributeTypeAndValueString(unescaped)) {
    // @ts-expect-error
    const tryParse = () => parse(unescaped);
}

// 2. Validated BER: the structure of the bytes is checked, but not fully decoded.
function decode (bytes: RDNSequenceBER): RDNSequence {
    const el = new DERElement();
    el.fromBytes(bytes);
    return _decode_RDNSequence(el);
}

const bytes: Uint8Array = _encode_RDNSequence(parse(fromFile), DER).toBytes();
// @ts-expect-error
decode(bytes);
if (isRDNSequenceBER(bytes)) {
    decode(bytes);
}

// 3. DIT order: ascending (LDAP, leaf entry first) vs. descending (X.500, top-level entry first).
const dn: RDNSequence = rdnSequenceFromStringX520("CN=Bob,O=Acme,C=US");
const ascending: RDNSequenceAscending = asDITAscending(dn); // Casts; does not reverse.
const descending: RDNSequenceDescending = toDITDescending(ascending); // Reverses a copy.
console.log(rdnSequenceToString(descending));
// c=US,o=Acme,cn=Bob
console.log(getRDNFromDITAscending(ascending)?.length); // RDN of the entry named: CN=Bob
// 1
console.log(getTopLevelRDNFromDITDescending(descending)?.length); // RDN of the top-level entry: C=US
// 1

// @ts-expect-error The orders are mutually exclusive.
const wrong: RDNSequenceDescending = ascending;
// @ts-expect-error It is already in descending order, so reversing would be a mistake.
toDITDescending(descending);
// @ts-expect-error A DN in ascending order cannot be cast to descending without reversing it.
asDITDescending(ascending);
// @ts-expect-error The order is unknown.
getRDNFromDITAscending(dn);
// @ts-expect-error The order is wrong.
getRDNFromDITDescending(ascending);
// @ts-expect-error dnToURN() requires descending order.
dnToURN(ascending);
dnToURN(descending);
toDITAscending(descending); // Back again
dn.length === ascending.length; // Still usable wherever a plain RDNSequence is expected

// 4. Attribute types and shapes: narrow a value in place, with no copying.
const atav = dn[0][0];
if (isAttributeTypeAndValueOf(atav, commonNameOID)) {
    const cn: AttributeTypeAndValueOf<typeof commonNameOID> = atav;
    // @ts-expect-error The brands for two different attribute types are mutually exclusive.
    const c: AttributeTypeAndValueOf<typeof countryNameOID> = atav;
}

if (isRelativeDistinguishedNameOf(dn[2], countryNameOID)) {
    const c: CountryNameRDN = dn[2]; // Exactly one ATAV, and it is a countryName.
    // @ts-expect-error
    const cn: CommonNameRDN = dn[2];
}

if (isRDNSequenceOfLength(dn, 3)) {
    const [leaf, org, country] = dn; // Now a three-element tuple.
}

function needsCountryLast (dn: RDNSequenceEndingWith<CountryNameRDN>) {}
// @ts-expect-error
needsCountryLast(dn);
if (isRDNSequenceEndingWith(dn, countryNameOID)) {
    needsCountryLast(dn);
}

function dnsName (dn: DomainComponentRDNSequence): string | null {
    return toDnsName(dn);
}
const dc: RDNSequence = rdnSequenceFromStringX520("DC=example,DC=com");
// @ts-expect-error
dnsName(dc);
if (isRDNSequenceOf(dc, domainComponentOID)) { // Every RDN is a single domainComponent.
    console.log(dnsName(dc));
    // example.com
}

// Brands combine: this keeps its DIT order and also learns what its first RDN is.
if (isRDNSequenceStartingWith(descending, countryNameOID)) {
    const top: CountryNameRDN = descending[0];
    const stillDescending: RDNSequenceDescending = descending;
}
```

## AI Usage Statement

This package was mostly written by AI: specifically Claude Opus 5.5 and Claude
Sonnet 5.5 in the Cursor IDE. Each feature was implemented as individual
prompts and carefully reviewed and critiqued by a real human.
