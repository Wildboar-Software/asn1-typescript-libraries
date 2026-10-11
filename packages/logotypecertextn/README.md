# Logotype Certificate Extension in TypeScript

ASN.1 data structures for the logotype certificate extension in
[IETF RFC 3709](https://datatracker.ietf.org/doc/html/rfc3709).
`AlgorithmIdentifier` is provided by
[`@wildboar/pki-stub`](https://jsr.io/@wildboar/pki-stub).
This module is ESM-only.

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

## AI Usage Statement

This package was onboarded from the raw Wildboar ASN.1 compiler outputs using
AI (Cursor Grok 4.7) on 7 October 2026.

## Usage

```typescript
const original = new LogotypeExtn(
    [{
        direct: new LogotypeData(
            [new LogotypeImage(
                details("image/png", "https://example.com/logo.png"),
                new LogotypeImageInfo(
                    LogotypeImageType_grayScale,
                    1200,
                    64,
                    32,
                    { numBits: 8 },
                    "en",
                ),
            )],
            [new LogotypeAudio(
                details("audio/mpeg", "https://example.com/logo.mp3"),
                new LogotypeAudioInfo(4000, 1500, 2, 44100, "en"),
            )],
        ),
    }],
    {
        indirect: new LogotypeReference(
            [new HashAlgAndValue(hashAlg(), new Uint8Array([9, 8, 7]))],
            ["https://example.com/issuer.ltd"],
        ),
    },
    undefined,
    [new OtherLogotypeInfo(
        id_logo_loyalty,
        {
            direct: new LogotypeData(
                [new LogotypeImage(details("image/gif", "https://example.com/loyalty.gif"))],
                undefined,
            ),
        },
    )],
);

const encoded = _encode_LogotypeExtn(original, $.BER).toBytes();
```
