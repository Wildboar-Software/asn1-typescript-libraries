# Lawful Interception Handover PDUs in TypeScript

ASN.1 data structures and PDUs for ETSI and 3GPP lawful-interception
handover interfaces (HI1, HI2, and HI3), including circuit-switched,
packet-switched, IMS, email, and related national parameters. The modules
come from ETSI TS 101 671, ETSI TS 102 232, ETSI TS 103 280, ETSI EN 301 040,
and 3GPP TS 33.108 / TS 33.128.

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
const original = new EmailIRI(
    [1, 3, 6, 1],
    E_mail_Event_e_mail_send,
    new IPAddress(
        IPAddress_iP_type_iPV4,
        { iPBinaryAddress: new Uint8Array([192, 0, 2, 1]) },
        undefined,
        undefined,
        new Uint8Array([255, 255, 255, 0]),
    ),
    undefined,
    2525,
    25,
    1200,
    3400,
    E_mail_Protocol_smtp,
    "alice@example.com",
    undefined,
    E_mail_Status_operation_succeeded,
    1,
    new Uint8Array([0x3c, 0x6d, 0x73, 0x67]),
    undefined,
    undefined,
    undefined,
    EmailIRI_e_mail_Sender_Validity_validated,
);
const encoded = _encode_EmailIRI(original, $.BER).toBytes();
```

## ESM-Only

This module is ESM-only. Import from a subpath such as
`@wildboar/lawful-intercept/HI2Operations`. The package root does not
re-export every module, because short enumeration names collide across
modules.

## AI Usage Statement

This package was onboarded from raw ASN.1 compiler outputs using AI
(Cursor Grok 4.7) on 12 October 2026.
