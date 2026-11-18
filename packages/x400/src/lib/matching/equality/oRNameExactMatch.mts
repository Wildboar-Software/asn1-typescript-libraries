import { Buffer } from "node:buffer";
import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "@wildboar/x500";
import { compareRDNSequence } from "@wildboar/dn";
import { _decode_ORName } from "@wildboar/x400/MTSAbstractService";
import { orAddressesMatch } from "./orAddressUtilities.mjs";
import { namingEqualityMatcher } from "../namingEqualityMatcher.mjs";

export
function oRNameExactMatchTyped(
    assertion: ASN1Element,
    value: ASN1Element,
    getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    // If the two values are byte-for-byte equal, return.
    if (!Buffer.compare(assertion.value, value.value)) {
        return true;
    }
    const a = _decode_ORName(assertion);
    const v = _decode_ORName(value);
    const directoryNameAsserted: boolean = !!a.directory_name;
    const directoryNamePresent: boolean = !!v.directory_name;
    const orAddressAsserted: boolean = !!(
        a.built_in_domain_defined_attributes?.length
        || a.extension_attributes?.length
        || a.built_in_standard_attributes.administration_domain_name
        || a.built_in_standard_attributes.country_name
        || a.built_in_standard_attributes.network_address
        || a.built_in_standard_attributes.numeric_user_identifier
        || a.built_in_standard_attributes.organization_name
        || a.built_in_standard_attributes.organizational_unit_names
        || a.built_in_standard_attributes.personal_name
        || a.built_in_standard_attributes.private_domain_name
        || a.built_in_standard_attributes.terminal_identifier
    );
    const orAddressPresent: boolean = !!(
        v.built_in_domain_defined_attributes?.length
        || v.extension_attributes?.length
        || v.built_in_standard_attributes.administration_domain_name
        || v.built_in_standard_attributes.country_name
        || v.built_in_standard_attributes.network_address
        || v.built_in_standard_attributes.numeric_user_identifier
        || v.built_in_standard_attributes.organization_name
        || v.built_in_standard_attributes.organizational_unit_names
        || v.built_in_standard_attributes.personal_name
        || v.built_in_standard_attributes.private_domain_name
        || v.built_in_standard_attributes.terminal_identifier
    );
    if (directoryNameAsserted && !directoryNamePresent) {
        return false;
    }
    if (orAddressAsserted && !orAddressPresent) {
        return false;
    }
    if (directoryNameAsserted) {
        const stored = _decode_ORName(value);
        if (!stored.directory_name) {
            return false;
        }
        const namesMatch = compareRDNSequence(
            a.directory_name!.rdnSequence,
            stored.directory_name.rdnSequence,
            namingEqualityMatcher(getEqualityMatcher, flags),
        );
        if (!namesMatch) {
            return false;
        }
        return orAddressesMatch(a, stored);
    }
    if (orAddressAsserted) {
        return orAddressesMatch(a, v);
    }
    return true;
}

oRNameExactMatchTyped satisfies TypedEquationFunction<ASN1Element>;

export
const oRNameExactMatch: Matcher = createEqualityMatcher(
    (el: ASN1Element): ASN1Element => el,
    oRNameExactMatchTyped,
);

export default oRNameExactMatch;
