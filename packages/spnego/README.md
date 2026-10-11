# SPNEGO in TypeScript

ASN.1 data structures for SPNEGO negotiation tokens, the GSS-API initial
context token, and the IAKERB header. This module is ESM-only.

## Example Usage

```typescript
const original: NegotiationToken = {
    negTokenTarg: new NegTokenTarg(
        NegTokenTarg_negResult_accept_incomplete,
        kerberos,
        new Uint8Array([0x04, 0x05, 0x06]),
        new Uint8Array([0x07, 0x08]),
        [spnego, kerberos]
    ),
};
const encoding = _encode_NegotiationToken(original, $.BER).toBytes();
```

## Documentation

See the
[documentation](https://github.com/Wildboar-Software/asn1-typescript-libraries/blob/master/docs/all.md)
that applies to this library and others to learn how to use this module.

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

## AI Usage Statement

This package was onboarded from the raw Wildboar ASN.1 compiler outputs using
AI (Cursor Grok 4.7) on 7 October 2026.
