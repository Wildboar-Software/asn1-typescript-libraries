# GPRS and 3GPP charging data record (CDR) ASN.1 in TypeScript

ASN.1 data structures for the mobile-domain charging modules compiled in this
package. The module object identifiers sit under
`{itu-t(0) identified-organization(4) etsi(0) mobileDomain(0) charging(5) ...}`.
The ASN.1 sources are in `doc/`.

Import a module from its subpath, for example
`@wildboar/gprs-cdr/GPRSChargingDataTypes`. The package root does not re-export
every symbol. Assignments that are identical across modules are implemented in
`@wildboar/gprs-cdr/shared` and re-exported from each module that defines them.

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

## AI Usage Statement

This package was onboarded from the raw compiler outputs using AI (Grok 4.7)
on 20 October 2026.
