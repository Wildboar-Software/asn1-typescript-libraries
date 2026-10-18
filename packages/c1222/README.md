# ANSI C12.22 Security Mechanisms in TypeScript

ASN.1 data structures from the 2026 edition of ANSI C12.22,
*Protocol Specification for Interfacing to Data Communication Networks*.
This package contains the `C12-22-Security-Mechanism` and
`C1221-Security-Mechanism` modules. This module is ESM-only.

See the
[documentation](https://github.com/Wildboar-Software/asn1-typescript-libraries/blob/master/docs/all.md)
that applies to this library and others to learn how to use this module.

These libraries were generated entirely or in part by the
[ASN.1 Compilation Service](https://wildboarsoftware.com/asn1-compilation)
offered by [Wildboar Software](https://wildboarsoftware.com). The ASN.1
compiler itself is closed-source and proprietary, but some of the libraries
produced with it are released publicly under the
[MIT license](https://mit-license.org/).

If you would like to see additional ASN.1 libraries in TypeScript or other
programming languages, or if you have any other questions, please contact us at
[contact@wildboarsoftware.com](mailto:contact@wildboarsoftware.com).

## Usage Example

```typescript
import * as $ from "@wildboar/asn1/functional";
import {
    Calling_authentication_value_c1222,
    _encode_Calling_authentication_value_c1222,
} from "@wildboar/c1222";

const original = new Calling_authentication_value_c1222(
    new Uint8Array([0x2a]),
    new Uint8Array([0x01, 0x02, 0x03, 0x04]),
);
const encoded = _encode_Calling_authentication_value_c1222(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from the raw compiler outputs using AI
(Cursor Grok 4.7) on 17 October 2026.
