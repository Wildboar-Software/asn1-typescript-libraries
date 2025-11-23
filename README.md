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

## Note

These modules were recently converted to being ESM only. It is time to make the
leap. I will not maintain the CommonJS versions any more.

Due to both Jest not supporting ESM (yet), the tests are broken and will stay
broken for as long as it takes. I hate the entire Javashit ecosystem.

**UPDATE**: I will eventually convert these tests to use Vitest. I have had a
great experience doing this elsewhere: Vitest (via Nx) was basically a drop-in
replacement that seemed to handle Typescript out of the box, and it seemed
faster than Jest too.

I wanted to use `esbuild` or `swc` for faster compilation, but both of these
will not be much faster due to type-checking still being done by TypeScript.
The TypeScript compiler is being ported to Go anyway, and once that's done, it
will be nearly as fast.

## Testing

The project uses Vitest for running tests. You can run tests for the X.500 package using:

```bash
# Run tests once
npm run test:x500

# Run tests in watch mode
npm run test:x500:watch
```

The tests are located in `packages/x500/test/jest/` and use the `.spec.mts` extension.

## Remove all unused imports

This is slow and will crash from running out of memory if you try this for the
whole project at once. Just do this for a single project at a time:

```bash
npx tslint --config tslint-imports.json --fix --project ./libs/<project>/tsconfig.lib.json
```

## Publish All Modules

`cd` into `dist/packages`, then run

```bash
for dir in $(ls -1);
do
    cd $dir
    npm publish
    cd ..
done
```

## To Do

- [ ] Refactor `XSD` into a separate module
- [ ] Documentation
- [ ] SNMPv3 (No formal module.)
- [ ] F515 (No artifact for this...)
- [ ] CAP (I already have code out there for this.)
- [ ] [CSTA](https://www.ecma-international.org/wp-content/uploads/ECMA-285_4th_edition_december_2011.pdf)
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

Some libraries expose few or no imports directly from the main file. Instead,
users must "deep-import" symbols from these libraries.

```typescript
// This will not work.
import { Certificate } from "@wildboar/x500";

// This will work.
import {
    Certificate,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta";
```

## Notes

- CINF and RINF may be useful for the OID registry.
- Error in `attributeDescriptor` in `AttributeCertificateDefinitions`: `&id` enclosed in unnecessary `{}`.
