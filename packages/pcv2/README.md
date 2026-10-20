# Platform Certificate Profile Version 2 in TypeScript

ASN.1 data structures based on version 2.1 of the Trusted Computing Group
[Platform Certificate Profile](https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf).
The package contains the `PlatformCertificateProfileV2` and
`EKCredentialProfileV2` modules.

It is a separate package from `@wildboar/pc`, which implements Platform
Certificate Profile version 1.1. The two profiles reuse identifiers for
different productions.

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

## ESM-Only

This module is ESM-only.

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

## AI Usage Statement

This package was onboarded from the raw compiler outputs using AI
(Grok 4.7) on 20 October 2026.
