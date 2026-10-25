/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PartyInformation_party_Qualifier {
    mMS_Target = 1,
}

/**
 * @summary PartyInformation_party_Qualifier
 * @description
 * 
 * Role of the party in an MMS IRI record. Annex B.15 names only the MMS target.
 * 
 * 3GPP TS 33.108, annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-party-Qualifier ::= ENUMERATED {
 *     mMS-Target(1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PartyInformation_party_Qualifier = _enum_for_PartyInformation_party_Qualifier | ENUMERATED;

/**
 * @summary PartyInformation_party_Qualifier_mMS_Target
 * @description
 * 
 * This party is the MMS interception target.
 * 
 * 3GPP TS 33.108, annex B.15. Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_mMS_Target: _enum_for_PartyInformation_party_Qualifier.mMS_Target = _enum_for_PartyInformation_party_Qualifier.mMS_Target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mMS_Target
 * @description
 * 
 * The party is the MMS target. Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const mMS_Target: _enum_for_PartyInformation_party_Qualifier.mMS_Target = PartyInformation_party_Qualifier_mMS_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyInformation_party_Qualifier: $.ASN1Decoder<PartyInformation_party_Qualifier> = $._decodeEnumerated;
export const _encode_PartyInformation_party_Qualifier: $.ASN1Encoder<PartyInformation_party_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
