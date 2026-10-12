/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_iWLAN_Target: PartyInformation_party_Qualifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iWLAN_Target
 * @constant
 * @type {number}
 */
export
const iWLAN_Target: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_iWLAN_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyInformation_party_Qualifier: $.ASN1Decoder<PartyInformation_party_Qualifier> = $._decodeEnumerated;
export const _encode_PartyInformation_party_Qualifier: $.ASN1Encoder<PartyInformation_party_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
