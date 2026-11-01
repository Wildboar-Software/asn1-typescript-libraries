import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { readDecoded } from "../readValue.mjs";
import {
    SupplierAndConsumers,
    _decode_SupplierAndConsumers,
} from "../../modules/DSAOperationalAttributeTypes/SupplierAndConsumers.ta.mjs";
import {
    type Name,
    _decode_Name,
} from "../../modules/InformationFramework/Name.ta.mjs";
import { compareName } from "@wildboar/dn";

/**
 * Rec. ITU-T X.501 (10/2019), clause 24.2.1.9.4
 * `supplierAndConsumersMatch`.
 *
 * Equality for `SupplierAndConsumers` (and compatible types). TRUE
 * iff the `ae-title` components match as distinguished names.
 *
 * `assertion` may be an element or a `Name`. `value` may be an
 * element or a `SupplierAndConsumers`.
 */
/**
 * `supplierAndConsumersMatch` on a decoded name and value.
 *
 * @param assertion Presented `ae-title`.
 * @param value Stored supplier and consumers, or that value already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the names match.
 */
export
function supplierAndConsumersMatchTyped (
    assertion: Name,
    value: SupplierAndConsumers | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const stored = readDecoded(value, _decode_SupplierAndConsumers);
    return compareName(assertion, stored.ae_title, valueEqualityMatcher(getMatcher, flags));
}

supplierAndConsumersMatchTyped satisfies TypedEquationFunction<Name>;

/**
 * `supplierAndConsumersMatch` as a `Matcher`.
 */
export
const supplierAndConsumersMatch: Matcher = createEqualityMatcher(
    _decode_Name,
    supplierAndConsumersMatchTyped,
);

export default supplierAndConsumersMatch;
