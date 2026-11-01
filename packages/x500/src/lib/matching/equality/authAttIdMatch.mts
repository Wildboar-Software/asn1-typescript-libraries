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
    id_ce_basicAttConstraints,
} from "../../modules/AttributeCertificateDefinitions/id-ce-basicAttConstraints.va.mjs";
import {
    type AuthorityAttributeIdentifierSyntax,
    _decode_AuthorityAttributeIdentifierSyntax,
} from "../../modules/AttributeCertificateDefinitions/AuthorityAttributeIdentifierSyntax.ta.mjs";
import {
    type AttributeCertificate,
    _decode_AttributeCertificate,
} from "../../modules/AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import type {
    Extension,
} from "../../modules/AuthenticationFramework/Extension.ta.mjs";
import { DERElement } from "@wildboar/asn1";
import compareIssuerSerial from "../../comparators/compareIssuerSerial.mjs";

/**
 * Rec. ITU-T X.509 (10/2019), clause 17.5.2.4.2 `authAttIdMatch`.
 *
 * TRUE iff the stored AC contains `authorityAttributeIdentifier`
 * and every component present in the presented
 * `AuthorityAttributeIdentifierSyntax` matches the stored
 * `IssuerSerial` pointers.
 */
/**
 * `authAttIdMatch` on decoded values.
 *
 * @param ass Presented authority attribute identifiers.
 * @param value Stored attribute certificate, or that certificate already decoded.
 * @param getMatcher Equality rule lookup for naming attributes.
 * @returns `true` when the issuer-serial lists match.
 */
export
function authAttIdMatchTyped (
    ass: AuthorityAttributeIdentifierSyntax,
    value: AttributeCertificate | ASN1Element,
    getMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean {
    const val = readDecoded(value, _decode_AttributeCertificate);
    const getEqualityMatcher = valueEqualityMatcher(getMatcher, flags);
    const ext: Extension | undefined = val.toBeSigned.extensions
        ?.find((ext: Extension): boolean => (ext.extnId.isEqualTo(id_ce_basicAttConstraints)));
    if (!ext) {
        return false;
    }
    const el: DERElement = new DERElement();
    el.fromBytes(ext.extnValue);
    const storedValue: AuthorityAttributeIdentifierSyntax = _decode_AuthorityAttributeIdentifierSyntax(el);
    /**
     * Even though the specification seems to prescribe a comparison of a
     * SEQUENCE to SEQUENCE, there is no significance to the SEQUENCE in
     * `AuthorityAttributeIdentifierSyntax`, so we sort by serial numbers, then
     * compare so we effectively ignore the ordering of elements.
     */
    const bSorted = storedValue.sort((a, b) => (
        a.serial.reduce((p, c) => (p + c), 0) - b.serial.reduce((p, c) => (p + c), 0)
    ));
    const aSorted = ass.sort((a, b) => (
        a.serial.reduce((p, c) => (p + c), 0) - b.serial.reduce((p, c) => (p + c), 0)
    ));
    return aSorted.every((a, i) => compareIssuerSerial(a, bSorted[i], getEqualityMatcher));
}

authAttIdMatchTyped satisfies TypedEquationFunction<AuthorityAttributeIdentifierSyntax>;

/**
 * `authAttIdMatch` as a `Matcher`.
 */
export
const authAttIdMatch: Matcher = createEqualityMatcher(
    _decode_AuthorityAttributeIdentifierSyntax,
    authAttIdMatchTyped,
);

export default authAttIdMatch;
