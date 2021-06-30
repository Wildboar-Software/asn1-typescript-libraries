import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type EqualityMatcher from "../types/EqualityMatcher";
import {
    GeneralSubtree,
} from "../modules/CertificateExtensions/GeneralSubtree.ta";
import compareGeneralName from "./compareGeneralName";

const DEFAULT_MINIMUM: number = GeneralSubtree._default_value_for_minimum;

export
function compareGeneralSubtree (
    a: GeneralSubtree,
    b: GeneralSubtree,
    getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): boolean {
    if ((a.minimum ?? DEFAULT_MINIMUM) !== (b.minimum ?? DEFAULT_MINIMUM)) {
        return false;
    }
    if (a.maximum !== b.maximum) {
        return false;
    }
    return compareGeneralName(a.base, b.base, getEqualityMatcher);
}

export default compareGeneralSubtree;
