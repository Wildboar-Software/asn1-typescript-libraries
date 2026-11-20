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
    (el) => {
        const decoded = _decode_ORName(el);
        if (decoded.isEmpty()) {
            throw new Error("oRNameExactMatch: assertion is empty");
        }
        return decoded;
    },
    (
        assertion,
        value,
        getEqualityMatcher?: (attributeType: OBJECT_IDENTIFIER) => Matcher | undefined,
        flags?: number,
    ): boolean | undefined => {
        const a = assertion;
        const v = _decode_ORName(value);
        if (v.isEmpty()) {
            return undefined;
        }
        const directoryNameAsserted: boolean = !!a.directory_name;
        const directoryNamePresent: boolean = !!v.directory_name;
        if (directoryNameAsserted !== directoryNamePresent) {
            return false;
        }
        if (directoryNameAsserted) {
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
        }
        if (a.isEmptyOrAddress() !== v.isEmptyOrAddress())
            return false;
        if (a.isEmptyOrAddress()) {
            return true;
        }
        return orAddressesMatch(a, v);
    },
);

export default oRNameExactMatch;
