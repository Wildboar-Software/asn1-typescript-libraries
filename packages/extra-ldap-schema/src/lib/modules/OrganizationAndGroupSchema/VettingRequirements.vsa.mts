/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary VettingRequirements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VettingRequirements OBJECT IDENTIFIER ::= {
 *     id-vetreq-backgroundCheck
 *     | id-vetreq-creditCheck
 *     | id-vetreq-criminalHistoryCheck
 *     | id-vetreq-employmentHistoryCheck
 *     | id-vetreq-drugTest
 *     | id-vetreq-medicalRecordsCheck
 *     | id-vetreq-familyBackgroundCheck
 *     | id-vetreq-letterOfRecommendation
 *     | id-vetreq-intelligenceTest
 *     | id-vetreq-medicalInspection
 *     | id-vetreq-physicalFitness
 *     | id-vetreq-residentialHistoryCheck
 *     | id-vetreq-relationshipHistoryCheck
 *     | id-vetreq-oath
 *     | id-vetreq-nonDisclsoureAgreement
 *     | id-vetreq-polygraph
 *     | id-vetreq-demonstrativeAct
 *     | id-vetreq-incomeVerification
 *     | id-vetreq-academicHistoryCheck,
 *     ...
 * }
 * ```
 * 
 * @type {OBJECT_IDENTIFIER}
 */
export
type VettingRequirements = OBJECT_IDENTIFIER; // VALUE_SET_TYPE

export
const _decode_VettingRequirements: $.ASN1Decoder<VettingRequirements> = $._decodeObjectIdentifier;

export
const _encode_VettingRequirements: $.ASN1Encoder<VettingRequirements> = $._encodeObjectIdentifier;

/* eslint-enable */
