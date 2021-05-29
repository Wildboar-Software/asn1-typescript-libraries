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

## To Do

- [ ] SNMPv3 (No formal module.)
- [ ] ISO19785 (I think the GH workflow for this is identical to CBEFF...)
- [ ] M3100 (Very big and very broken.)
- [ ] F515 (No artifact for this...)
- [ ] CAP (I already have code out there for this.)
- [ ] ISIS (Break NLM into separate library.)
- [ ] RFC5915-ECPrivateKey
- [ ] SEC1
- [ ] TPM (Needs formatting and compilation)
- [ ] [CSTA](https://www.ecma-international.org/wp-content/uploads/ECMA-285_4th_edition_december_2011.pdf)
- [ ] `package.json` for each
- [ ] `README.md` for each
- [ ] Remove unused imports
- [ ] Refactor `AlgorithmInformation-2009` into a separate package
- [ ] Implement XER for CINF
- [ ] Implement XER for RINF
- [ ] Implement XER for CMAIL
- [ ] Break AlgorithmIdentifier into separate package?

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
