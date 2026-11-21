import { createEqualityMatcher, type Matcher } from "@wildboar/x500";
import {
    _decode_MTSIdentifier,
} from "@wildboar/x400/MTSAbstractService";
import { x121_dcc_country_code_to_iso_3166 } from "@wildboar/or-address";
import { normalizeMSString, normalizeNumericOnly } from "./orAddressUtilities.js";

// MTSIdentifier ::= [APPLICATION 4]  SEQUENCE {
//     global-domain-identifier  GlobalDomainIdentifier,
//     local-identifier          LocalIdentifier
//   }

// LocalIdentifier ::= IA5String(SIZE (1..ub-local-id-length))

// GlobalDomainIdentifier ::= [APPLICATION 3]  SEQUENCE {
//     country-name                CountryName,
//     administration-domain-name  AdministrationDomainName,
//     private-domain-identifier   PrivateDomainIdentifier OPTIONAL
// }

// AdministrationDomainName ::= [APPLICATION 2]  CHOICE {
//     numeric    NumericString(SIZE (0..ub-domain-name-length)),
//     printable  PrintableString(SIZE (0..ub-domain-name-length))
// }

// PrivateDomainIdentifier ::= CHOICE {
//     numeric    NumericString(SIZE (1..ub-domain-name-length)),
//     printable  PrintableString(SIZE (1..ub-domain-name-length))
// }


export
const mTSIdentifierMatch: Matcher = createEqualityMatcher(
    _decode_MTSIdentifier,
    (assertion, value): boolean => {
    const a = assertion;
    const v = _decode_MTSIdentifier(value);
    const aglob = a.global_domain_identifier;
    const vglob = v.global_domain_identifier;

    // Country Comparison
    const aCountry = ("x121_dcc_code" in aglob.country_name)
        ? aglob.country_name.x121_dcc_code
        : aglob.country_name.iso_3166_alpha2_code;
    const vCountry = ("x121_dcc_code" in vglob.country_name)
        ? vglob.country_name.x121_dcc_code
        : vglob.country_name.iso_3166_alpha2_code;
    const aCountryISO = x121_dcc_country_code_to_iso_3166(Number.parseInt(aCountry, 10)) ?? aCountry;
    const vCountryISO = x121_dcc_country_code_to_iso_3166(Number.parseInt(vCountry, 10)) ?? vCountry;
    if (aCountryISO !== vCountryISO) {
        return false;
    }

    // Administration Domain Name Comparison
    const aadn = aglob.administration_domain_name;
    const vadn = vglob.administration_domain_name;
    const aadnStr = ("numeric" in aadn)
        ? normalizeNumericOnly(aadn.numeric)
        : normalizeMSString(aadn.printable, true);
    const vadnStr = ("numeric" in vadn)
        ? normalizeNumericOnly(vadn.numeric)
        : normalizeMSString(vadn.printable, true);
    if (aadnStr !== vadnStr) {
        return false;
    }

    // Private Domain Identifier Comparison
    if (!!aglob.private_domain_identifier !== !!vglob.private_domain_identifier) {
        return false;
    }
    if (aglob.private_domain_identifier && vglob.private_domain_identifier) {
        const apdn = aglob.private_domain_identifier;
        const vpdn = vglob.private_domain_identifier;
        const apdnStr = ("numeric" in apdn)
            ? normalizeNumericOnly(apdn.numeric)
            : normalizeMSString(apdn.printable, true);
        const vpdnStr = ("numeric" in vpdn)
            ? normalizeNumericOnly(vpdn.numeric)
            : normalizeMSString(vpdn.printable, true);
        if (apdnStr !== vpdnStr) {
            return false;
        }
    }

    // Local Identifier Comparison
    if (
        normalizeMSString(a.local_identifier, true)
        !== normalizeMSString(v.local_identifier, true)
    ) {
        return false;
    }

    return true;
    },
);

export default mTSIdentifierMatch;
