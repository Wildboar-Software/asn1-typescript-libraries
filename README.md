# ASN.1 TypeScript Libraries

These libraries were generated entirely or in part by the
[ASN.1 Compilation Service](https://wildboarsoftware.com/asn1-compilation)
offered by [Wildboar Software](https://wildboarsoftware.com). The ASN.1
compiler itself is closed-source and proprietary, but some of the libraries
produced with it are released publicly under the
[MIT license](https://mit-license.org/).

If you would like to see additional ASN.1 libraries in TypeScript or other
programming languages, or if you have any other questions, please contact us at
[contact@wildboarsoftware.com](mailto:contact@wildboarsoftware.com).

## Publish All Modules

`cd` into `dist/libs`, then run

```bash
for dir in $(ls -1);
do
    cd $dir
    npm publish
    cd ..
done
```

## To Do

- [ ] Fix `TRUE` bug where `BOOLEAN` values should have been `TRUE`.
  - [ ] (Search for occurences of `TRUE` in ASN.1 files and find the corresponding incorrect `FALSE` and change it.)
- [ ] Documentation
- [ ] Single-module exports
- [ ] Deduplicate `COMPONENTS OF` spec arrays
- [ ] SNMPv3 (No formal module.)
- [ ] F515 (No artifact for this...)
- [ ] CAP (I already have code out there for this.)
- [ ] RFC5915-ECPrivateKey
- [ ] [CSTA](https://www.ecma-international.org/wp-content/uploads/ECMA-285_4th_edition_december_2011.pdf)
- [ ] Remove unused imports
- [ ] Remove unused exports
- [ ] Prettify
- [ ] Implement XER for CINF
- [ ] Implement XER for RINF
- [ ] Implement XER for CMAIL
- [ ] Refactor some of X.500 into smaller libraries
  - This has already been done partially by introducing the PKI-Stub module
  - `sio` could be weaned from direct dependency on x500 if you just add SAT/DirectoryString
  - `iso-9798-3-sasl` could be weaned from x500 if you add SIGNATURE
  - Many could be weaned if the info object classes could be refactored into a library (scvp, crmf)
  - `acbio` could be weaned if CertificateList were included
  - `cades` could be weaned if PolicyInformation were included in PKI-Stub (ess too)

## Usage

These libraries expose few or no imports directly from the main file. Instead,
users must "deep-import" symbols from these libraries.

```typescript
// This will not work.
import { Certificate } from "@wildboar/x500";

// This will work.
import {
    Certificate,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta";
```

## Libraries that must not be published publicly

This is due to copyright concerns.

- CBEFF
- FTAM
- ISIS

## Notes

- CINF and RINF may be useful for the OID registry.
- Error in `attributeDescriptor` in `AttributeCertificateDefinitions`: `&id` enclosed in unnecessary `{}`.
