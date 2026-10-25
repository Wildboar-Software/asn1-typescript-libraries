/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PartyInformation_party_Qualifier {
    mBMS_Target = 1,
}

/**
 * @summary PartyInformation_party_Qualifier
 * @description
 * 
 * Role of the party in an MBMS IRI record. Annex B.8 names only the MBMS
 * target.
 * 
 * 3GPP TS 33.108, annex B.8.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-party-Qualifier ::= ENUMERATED {
 *     mBMS-Target(1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PartyInformation_party_Qualifier = _enum_for_PartyInformation_party_Qualifier | ENUMERATED;

/**
 * @summary PartyInformation_party_Qualifier_mBMS_Target
 * @description
 * 
 * This party is the MBMS interception target.
 * 
 * 3GPP TS 33.108, annex B.8. Clause 9 does not further define this value.
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_mBMS_Target: PartyInformation_party_Qualifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mBMS_Target
 * @description
 * 
 * The party is the MBMS target. Clause 9 does not further define this value.
 * @constant
 * @type {number}
 */
export
const mBMS_Target: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_mBMS_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyInformation_party_Qualifier: $.ASN1Decoder<PartyInformation_party_Qualifier> = $._decodeEnumerated;
export const _encode_PartyInformation_party_Qualifier: $.ASN1Encoder<PartyInformation_party_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
