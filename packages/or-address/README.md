# X.400 Message Handling Service O/R Address Type

TypeScript implementation of the X.400 Message Handling System (MHS) originator/recipient
address (`ORAddress`) from ITU-T X.411 / X.402, as used in PKI and PMI
(`PkiPmiExternalDataTypes`). The library prints addresses in
[IETF RFC 1685](https://www.rfc-editor.org/rfc/rfc1685) labelled form and
[IETF RFC 2156](https://www.rfc-editor.org/rfc/rfc2156) MIXER `std-or-address`
form, and encodes them as ASN.1.

These libraries were generated entirely or in part by the
[ASN.1 Compilation Service](https://wildboarsoftware.com/asn1-compilation)
offered by [Wildboar Software](https://wildboarsoftware.com). The ASN.1
compiler itself is closed-source and proprietary, but some of the libraries
produced with it are released publicly under the
[MIT license](https://mit-license.org/).

If you would like to see additional ASN.1 libraries in TypeScript or other
programming languages, or if you have any other questions, please contact us at
[contact@wildboarsoftware.com](mailto:contact@wildboarsoftware.com).

## Usage

There is **no whole-address equality method**. X.400 does not define a single,
unambiguous comparison of complete O/R addresses (printable vs teletex vs
universal encodings, “any ADMD”, missing initials, and so on). Compare the parts
you care about instead; see [Comparing parts](#comparing-parts).

### Creating an O/R address from a string

`ORAddress.fromString` parses a complete address. It defaults to
[IETF RFC 1685](https://www.rfc-editor.org/rfc/rfc1685) labelled form
(semicolon-separated `label=value` pairs). A doubled `;;` is a literal semicolon
in a value. Pass `{ rfc: 2156 }` for MIXER
[IETF RFC 2156](https://www.rfc-editor.org/rfc/rfc2156) `std-or-address` form.
Parsing returns `null` when the string is not a valid address.

```typescript
const address = ORAddress.fromString(
    "G=Jonathan;I=M;S=Wilbur;O=Wildboar Software;A=123;C=US",
)!;

address.built_in_standard_attributes.personal_name?.surname; // "Wilbur"
address.built_in_standard_attributes.organization_name;      // "Wildboar Software"
address.built_in_standard_attributes.administration_domain_name;
// { numeric: "123" }
address.built_in_standard_attributes.country_name;
// { iso_3166_alpha2_code: "US" }

const mixer = ORAddress.fromString(
    "/G=Andy/S=Wharol/O=MMNY/ADMD=ATT/C=US/",
    { rfc: 2156 },
)!;
mixer.toRFC2156String();
// "/G=Andy/S=Wharol/O=MMNY/ADMD=ATT/C=US/"
```

`BuiltInStandardAttributes.fromString` parses the same RFC 1685 syntax but
returns only the built-in standard attributes (domain-defined and extension
attributes are dropped). `PersonalName.fromString` parses the personal-name
fragment (`G=…;I=…;S=…;Q=…`). `PersonalName.fromRFC2156String` parses a MIXER
encoded personal name (`Marshall.M.T.Rose`).
`BuiltInDomainDefinedAttribute.fromString` parses a single `DDA:type=value` pair.

### Creating an O/R address from constructors

`PersonalName` is `(surname, given_name?, initials?, generation_qualifier?)`.
Country is a choice of ISO 3166-1 alpha-2 or an X.121 data country code. ADMD
and PRMD are a choice of numeric or printable string. A single-space ADMD is
the X.400 “any ADMD” value (ITU-T X.402 (1999), §18.3.1).

Organizational unit names are stored most-significant first (`OU1`, then `OU2`,
…). RFC 1685 and RFC 2156 string forms list them in reverse.

```typescript
const personalName = new PersonalName("Wilbur", "Jonathan", "M");

const builtIn = BuiltInStandardAttributes._from_object({
    country_name: { iso_3166_alpha2_code: "US" },
    administration_domain_name: { numeric: "123" },
    private_domain_name: { printable: "Wildboar" },
    organization_name: "Wildboar Software",
    personal_name: personalName,
    organizational_unit_names: ["Engineering", "Libraries"], // OU1, then OU2
});

const address = new ORAddress(
    builtIn,
    [new BuiltInDomainDefinedAttribute("Title", "Manager")],
);

address.determineNameForm(); // "mnem"
```

`BuiltInStandardAttributes.fromJSON` is another constructor-style path when you
already have a JSON object (`country-name`, `administration-domain-name`,
`personal-name`, and so on).

### Printing (RFC 1685 and RFC 2156)

`toString()` is RFC 1685 with `;` as the delimiter. `toRFC2156String()` is
RFC 2156 `std-or-address`. Both `ORAddress` and `BuiltInStandardAttributes`
implement these; the latter prints only the built-in standard attributes.

```typescript
const address = ORAddress.fromString(
    "G=Jonathan;I=M;S=Wilbur;O=Wildboar Software;A=123;C=US",
)!;

String(address);
address.toString();
// "G=Jonathan;I=M;S=Wilbur;O=Wildboar Software;A=123;C=US"

address.toRFC2156String();
// "/G=Jonathan/I=M/S=Wilbur/O=Wildboar Software/ADMD=123/C=US/"

address.built_in_standard_attributes.toRFC2156String();
// same as above when there are no domain-defined or extension attributes
```

RFC 2156 quotes `/`, `=`, and `$` in values with a `$` prefix. Organizational
units are emitted least-significant first (rightmost is most significant).

```typescript
const withSlash = new ORAddress(
    BuiltInStandardAttributes._from_object({
        country_name: { iso_3166_alpha2_code: "US" },
        organization_name: "a/b",
    }),
);
withSlash.toRFC2156String(); // contains O=a$/b

const units = new ORAddress(
    BuiltInStandardAttributes._from_object({
        country_name: { iso_3166_alpha2_code: "US" },
        organization_name: "org",
        organizational_unit_names: ["high", "low"], // OU1=high, OU2=low
    }),
);
units.toRFC2156String(); // contains /OU=low/OU=high/
```

### Comparing parts

Use field accessors and the equality helpers on the parts you need. Country
comparison maps an X.121 DCC to ISO 3166-1 alpha-2, so `C=US` and DCC `310`
match. ADMD comparison treats a single space as “any ADMD” and therefore equal
to any other ADMD.

```typescript
const isoUs = ORAddress.fromString("S=Wilbur;A=ATT;P=Wildboar;C=US")!;
const dccUs = new ORAddress(BuiltInStandardAttributes._from_object({
    country_name: { x121_dcc_code: "310" },
    administration_domain_name: { printable: "ATT" },
    private_domain_name: { printable: "Wildboar" },
    personal_name: new PersonalName("Wilbur"),
}));
const anyAdmd = new ORAddress(BuiltInStandardAttributes._from_object({
    country_name: { iso_3166_alpha2_code: "US" },
    administration_domain_name: { numeric: " " }, // X.400 "any ADMD"
    private_domain_name: { printable: "Wildboar" },
    personal_name: new PersonalName("Wilbur"),
}));
const otherPrmd = ORAddress.fromString("S=Wilbur;A=ATT;P=Other;C=US")!;

isoUs.isEqualCountry(dccUs);   // true  (US == X.121 310)
isoUs.getISO3166Country();     // "US"
dccUs.getISO3166Country();     // "US"

isoUs.isEqualADMD(anyAdmd);    // true  (either ADMD is " ")
isoUs.isEqualADMD(dccUs);      // true  (both "ATT")
isoUs.isEqualPRMD(dccUs);      // true
isoUs.isEqualPRMD(otherPrmd);  // false

isoUs.built_in_standard_attributes.isEqualCountry(
    dccUs.built_in_standard_attributes,
); // true
isoUs.built_in_standard_attributes.isEqualADMD(
    anyAdmd.built_in_standard_attributes,
); // true
```

Personal names compare component-wise. Pass `true` as the second argument to
ignore initials (they are often omitted without meaning a different person). A
missing given name or generation qualifier is still a mismatch:

```typescript
const full = new PersonalName("Rose", "Marshall", "MT", "Jr");
const same = new PersonalName("Rose", "Marshall", "MT", "Jr");
const noInitials = new PersonalName("Rose", "Marshall", undefined, "Jr");
const otherGiven = new PersonalName("Rose", "Andrew", "MT", "Jr");

full.isEqualTo(same);                 // true
full.isEqualTo(noInitials);           // false
full.isEqualTo(noInitials, true);     // true  (tolerate missing / differing initials)
full.isEqualTo(otherGiven);           // false
full.isEqualTo(otherGiven, true);     // false
```

`TeletexPersonalName` and `UniversalPersonalName` have the same `isEqualTo`
shape.

## RFC 1685 display behavior

This library implements string display for several types according to
[IETF RFC 1685](https://www.rfc-editor.org/rfc/rfc1685). If there are multiple
conflicting attribute types using different encodings, it is not entirely clear
which should be displayed. Consider the following passage:

> If the attributes of an O/R address include characters from an
> extended character set, human users who do not normally use the
> same extended character set may have difficulty representing the
> O/R address or entering it into their messaging system. In this
> situation, an alias of the O/R address should be provided which is
> composed entirely of printable string characters.

When RFC 1685 was published, the “universal” equivalents of the X.400 MHS
attributes were not defined, although teletex equivalents were. This library can
still display and parse those encodings, but it prefers printable syntaxes, then
teletex, when choosing what to print.

## ESM only

This module is ESM-only. There is no CommonJS build.

## AI Usage Statement

The code in `lib/modules` was overwhelmingly created by an ASN.1 compiler that
was written manually by a human. Much of the code on top of that was written
by AI. The JSDoc and much of this `README` file were written by AI.
