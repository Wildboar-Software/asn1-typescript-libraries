/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PartyInformation_party_Qualifier {
    gPRS_Target = 3,
}

/**
 * @summary PartyInformation_party_Qualifier
 * @description
 * 
 * Role of the party whose identities are reported. In this module the only
 * named role is the GPRS target. Annex B.3 does not define further values. 3GPP
 * TS 33.108, clause 6.5 and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-party-Qualifier ::= ENUMERATED {
 *     gPRS-Target(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PartyInformation_party_Qualifier = _enum_for_PartyInformation_party_Qualifier | ENUMERATED;

/**
 * @summary PartyInformation_party_Qualifier_gPRS_Target
 * @description
 * 
 * The party is the intercepted GPRS target. This is the only role named in this
 * module (value 3). The LEMF uses it to bind the accompanying identities to
 * that target. 3GPP TS 33.108, table 6.2 and annex B.3.
 * 
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_gPRS_Target = _enum_for_PartyInformation_party_Qualifier.gPRS_Target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRS_Target
 * @description
 * 
 * The party is the GPRS target (3GPP TS 33.108, annex B.3).
 * 
 * @constant
 * @type {number}
 */
export
const gPRS_Target = PartyInformation_party_Qualifier_gPRS_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyInformation_party_Qualifier: $.ASN1Decoder<PartyInformation_party_Qualifier> = $._decodeEnumerated;
export const _encode_PartyInformation_party_Qualifier: $.ASN1Encoder<PartyInformation_party_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
