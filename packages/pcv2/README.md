# Platform Certificate Profile Version 2 in TypeScript

ASN.1 data structures based on version 2.1 of the Trusted Computing Group
[Platform Certificate Profile](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf).
The package contains the `PlatformCertificateProfileV2` and
`EKCredentialProfileV2` modules. This module is ESM-only.

It is a separate package from `@wildboar/pc`, which implements Platform
Certificate Profile version 1.1. The two profiles reuse identifiers for
different productions. This package is a superset.

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

## Entry points

The package root exports `PlatformCertificateProfileV2` and the symbols that
exist only in `EKCredentialProfileV2`. When a name is defined in both modules,
the root export is the platform-certificate production. That includes
`FIPSLevel`: the endorsement-key module marks its module `EXTENSIBILITY IMPLIED`,
so its `FIPSLevel` keeps unrecognized extension components and is available from
`@wildboar/pcv2/EKCredentialProfileV2`.

`@wildboar/pcv2/AuthenticationFramework` and
`@wildboar/pcv2/InformationFramework` re-export the symbols this package uses
from `@wildboar/x500`.

## Example Usage

```typescript
import { ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "@wildboar/pcv2/AuthenticationFramework";
import {
    ComponentIdentifierV11,
    _encode_ComponentIdentifierV11,
    HashedCertificateIdentifier,
    tcg_address_ethernetmac,
    tcg_registry_componentClass_tcg,
    AttributeStatus,
    CertificateIdentifier,
    ComponentAddress,
    ComponentClass,
} from "@wildboar/pcv2/PlatformCertificateProfileV2";
import { URIReference } from "@wildboar/pcv2/EKCredentialProfileV2/URIReference.ta.mjs";

const sha256 = ObjectIdentifier.fromParts([2, 16, 840, 1, 101, 3, 4, 2, 1]);
const manufacturerId = ObjectIdentifier.fromParts([1, 3, 6, 1, 4, 1, 1]);
const original = new ComponentIdentifierV11(
    new ComponentClass(
        tcg_registry_componentClass_tcg,
        new Uint8Array([0x00, 0x00, 0x00, 0x01]),
    ),
    "Example Manufacturer",
    "Model-11",
    "SN-100",
    "Rev-A",
    manufacturerId,
    true,
    [
        new ComponentAddress(tcg_address_ethernetmac, "00-11-22-33-44-55"),
    ],
    new CertificateIdentifier(
        new HashedCertificateIdentifier(
            new AlgorithmIdentifier(sha256),
            new Uint8Array([0xab, 0xcd]),
        ),
        undefined,
    ),
    new URIReference(
        "https://example.test/platform",
        new AlgorithmIdentifier(sha256),
        new Uint8ClampedArray([1, 0, 1, 1]),
    ),
    AttributeStatus.added,
);

const encoded = _encode_ComponentIdentifierV11(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from the raw compiler outputs using AI
(Grok 4.7) on 20 October 2026.
