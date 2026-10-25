/* eslint-disable */
import {
    type ENUMERATED
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
 * Role of the party in partyInformation. The only defined name marks the
 * intercepted EPS or packet-domain target. Clause 10.5.2 and clause 6 table 6.2
 * place that target's identities in this party. Clause 7 table 7.2 places IMS
 * identities in the same party parameter.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-party-Qualifier ::= ENUMERATED {
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
 * @description
 * 
 * The intercepted EPS or packet-domain target. The only defined qualifier.
 * Clause 10.5.2 and clause 6 table 6.2 place the target identities in this
 * party. Value 3.
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_gPRSorEPS_Target: _enum_for_PartyInformation_party_Qualifier.gPRSorEPS_Target = _enum_for_PartyInformation_party_Qualifier.gPRSorEPS_Target; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRSorEPS_Target
 * @description
 * 
 * Intercepted EPS or packet-domain target (clause 10.5.2 and clause 6 table
 * 6.2).
 * @constant
 * @type {number}
 */
export
const gPRSorEPS_Target: _enum_for_PartyInformation_party_Qualifier.gPRSorEPS_Target = PartyInformation_party_Qualifier_gPRSorEPS_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyInformation_party_Qualifier: $.ASN1Decoder<PartyInformation_party_Qualifier> = $._decodeEnumerated;
export const _encode_PartyInformation_party_Qualifier: $.ASN1Encoder<PartyInformation_party_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
