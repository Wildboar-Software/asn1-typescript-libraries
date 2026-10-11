/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_PartyInformation_party_Qualifier {
    gPRSorEPS_Target = 3,
}

/**
 * @summary PartyInformation_party_Qualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-party-Qualifier ::= ENUMERATED
 * {
 *     gPRSorEPS-Target(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PartyInformation_party_Qualifier = _enum_for_PartyInformation_party_Qualifier | ENUMERATED;

/**
 * @summary PartyInformation_party_Qualifier_gPRSorEPS_Target
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_gPRSorEPS_Target: PartyInformation_party_Qualifier = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSorEPS_Target
 * @constant
 * @type {number}
 */
export
const gPRSorEPS_Target: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_gPRSorEPS_Target; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_PartyInformation_party_Qualifier: $.ASN1Decoder<PartyInformation_party_Qualifier> = $._decodeEnumerated;

export const _encode_PartyInformation_party_Qualifier: $.ASN1Encoder<PartyInformation_party_Qualifier> = $._encodeEnumerated;

/* eslint-enable */
