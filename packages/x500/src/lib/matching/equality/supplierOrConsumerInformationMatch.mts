import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { valueEqualityMatcher } from "../valueEqualityMatcher.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import { readDecoded } from "../readValue.mjs";
import {
    type ConsumerInformation,
    _decode_ConsumerInformation,
} from "../../modules/DSAOperationalAttributeTypes/ConsumerInformation.ta.mjs";
import {
    supplierOrConsumerInformationMatch_AssertionType as AssertionType,
    _decode_supplierOrConsumerInformationMatch_AssertionType as _decode_AssertionType,
} from "../../modules/DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch-AssertionType.ta.mjs";
import { compareName } from "@wildboar/dn";

/**
 * Rec. ITU-T X.501 (10/2019), clause 24.2.1.9.3
 * `supplierOrConsumerInformationMatch`.
 *
 * Equality for `SupplierInformation` or `ConsumerInformation`.
 * TRUE iff `ae-title` matches as a distinguished name and the
 * agreement `identifier` INTEGER matches.
 *
 * `assertion` may be an element or the assertion type. `value` may
 * be an element or `ConsumerInformation` (a subset of
 * `SupplierInformation`).
 */
/**
 * `supplierOrConsumerInformationMatch` on decoded values.
 *
 * `ConsumerInformation` is a subset of `SupplierInformation`. The
 * additional elements defined in `SupplierInformation` do not matter to
 * this matching rule.
 *
 * @param a Presented assertion.
 * @param value Stored consumer information, or that value already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the agreement id and names match.
 */
export
function supplierOrConsumerInformationMatchTyped (
    a: AssertionType,
    value: ConsumerInformation | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const v = readDecoded(value, _decode_ConsumerInformation);
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    const idMatches = a.agreement_identifier === v.agreementID.identifier;
    if (!idMatches && !(flags & MATCH_FLAG_CONSTANT_TIME)) {
        return false;
    }
    const nameMatches = compareName(a.ae_title, v.ae_title, getEqualityMatcher);
    return idMatches && nameMatches;
}

supplierOrConsumerInformationMatchTyped satisfies TypedEquationFunction<AssertionType>;

/**
 * `supplierOrConsumerInformationMatch` as a `Matcher`.
 */
export
const supplierOrConsumerInformationMatch: Matcher = createEqualityMatcher(
    _decode_AssertionType,
    supplierOrConsumerInformationMatchTyped,
    undefined,
    true,
);

export default supplierOrConsumerInformationMatch;
