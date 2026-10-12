/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PartyInformation_party_Qualifier {
    originating_Party = 0,
    terminating_Party = 1,
    forwarded_to_Party = 2,
    gPRS_Target = 3,
}

/**
 * @summary PartyInformation_party_Qualifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-party-Qualifier ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type PartyInformation_party_Qualifier = _enum_for_PartyInformation_party_Qualifier | ENUMERATED;

/**
 * @summary PartyInformation_party_Qualifier_originating_Party
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_originating_Party: PartyInformation_party_Qualifier = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_Party
 * @constant
 * @type {number}
 */
export
const originating_Party: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_originating_Party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_party_Qualifier_terminating_Party
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_terminating_Party: PartyInformation_party_Qualifier = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_Party
 * @constant
 * @type {number}
 */
export
const terminating_Party: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_terminating_Party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_party_Qualifier_forwarded_to_Party
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_forwarded_to_Party: PartyInformation_party_Qualifier = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded_to_Party
 * @constant
 * @type {number}
 */
export
const forwarded_to_Party: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_forwarded_to_Party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_party_Qualifier_gPRS_Target
 * @constant
 * @type {number}
 */
export
const PartyInformation_party_Qualifier_gPRS_Target: PartyInformation_party_Qualifier = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPRS_Target
 * @constant
 * @type {number}
 */
export
const gPRS_Target: PartyInformation_party_Qualifier = PartyInformation_party_Qualifier_gPRS_Target; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PartyInformation_party_Qualifier: $.ASN1Decoder<PartyInformation_party_Qualifier> = $._decodeEnumerated;
export const _encode_PartyInformation_party_Qualifier: $.ASN1Encoder<PartyInformation_party_Qualifier> = $._encodeEnumerated;


/* eslint-enable */
