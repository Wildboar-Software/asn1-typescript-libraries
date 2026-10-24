/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PartyInformation_party_Qualifier {
    iWLAN_Target = 1,
}

/**
 * @summary PartyInformation_party_Qualifier
 * @description
 * 
 * Role of the party in an I-WLAN IRI record. Annex B.7 names only the I-WLAN
 * target.
 * 
 * 3GPP TS 33.108, annex B.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-party-Qualifier ::= ENUMERATED {
 *     iWLAN-Target(1),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PartyInformation_party_Qualifier = _enum_for_PartyInformation_party_Qualifier | ENUMERATED;

/**
 * @summary PartyInformation_party_Qualifier_iWLAN_Target
 * @description
 * 
 * This party is the I-WLAN interception target.
 * 
 * 3GPP TS 33.108, annex B.7. Clause 8 does not further define this value.
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_iWLAN_Target: PartyInformation_party_Qualifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iWLAN_Target
 * @description
 * 
 * The party is the I-WLAN target. Clause 8 does not further define this value.
 * @constant
 * @type {number}
 */
export
const iWLAN_Target: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_iWLAN_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyInformation_party_Qualifier: $.ASN1Decoder<PartyInformation_party_Qualifier> = $._decodeEnumerated;
export const _encode_PartyInformation_party_Qualifier: $.ASN1Encoder<PartyInformation_party_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
