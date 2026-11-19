import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { compareRDNSequence } from "@wildboar/dn";
import {
    createEqualityMatcher,
    type Matcher,
} from "@wildboar/x500";
import { _decode_ORName } from "@wildboar/x400/MTSAbstractService";
import { orAddressesMatch } from "./orAddressUtilities.js";
import { namingEqualityMatcher } from "../namingEqualityMatcher.js";

export
const oRNameExactMatch: Matcher = createEqualityMatcher(
    _decode_ORName,
    (
        assertion,
        value,
        getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
        flags?: number,
    ): boolean => {
        const a = assertion;
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
            const v = _decode_ORName(value);
            if (!v.directory_name) {
                return false;
            }
            const namesMatch = compareRDNSequence(
                a.directory_name!.rdnSequence,
                v.directory_name.rdnSequence,
                namingEqualityMatcher(getEqualityMatcher, flags),
            );
            if (!namesMatch) {
                return false;
            }
            return orAddressesMatch(a, v);
        }
        if (orAddressAsserted) {
            return orAddressesMatch(a, v);
        }
        return true;
    },
);

export default oRNameExactMatch;
