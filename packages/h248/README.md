# H.248 Media Gateway Control

ASN.1 data structures and PDUs for the gateway control protocol in
ITU-T Recommendation H.248.1. This module is ESM-only.

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

## Example Usage

```typescript
const termination = new TerminationID(
    [Uint8Array.from([0xff])],
    Uint8Array.from([0x01, 0x02, 0x03, 0x04]),
);
const add = new AmmRequest([termination], []);
const command = new CommandRequest({ addReq: add }, undefined, undefined);
const action = new ActionRequest(1, undefined, undefined, [command]);
const request = new TransactionRequest(7, [action]);
const original = new MegacoMessage(
    new AuthenticationHeader(
        Uint8Array.from([0x00, 0x00, 0x00, 0x01]),
        Uint8Array.from([0x00, 0x00, 0x00, 0x02]),
        Uint8Array.from(Array.from({ length: 12 }, (_, i) => i + 1)),
    ),
    new Message(
        3,
        { ip4Address: new IP4Address(Uint8Array.from([192, 0, 2, 10]), 2944) },
        { transactions: [{ transactionRequest: request }] },
    ),
);

const encoded = _encode_MegacoMessage(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from raw ASN.1 compiler outputs using AI
(Cursor Grok 4.7) on 10 October 2026.
