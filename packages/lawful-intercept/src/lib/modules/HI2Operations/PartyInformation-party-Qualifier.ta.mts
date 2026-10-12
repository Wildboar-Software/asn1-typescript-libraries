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

let _cached_decoder_for_PartyInformation_party_Qualifier: $.ASN1Decoder<PartyInformation_party_Qualifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyInformation_party_Qualifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyInformation_party_Qualifier (el: _Element): PartyInformation_party_Qualifier {
    if (!_cached_decoder_for_PartyInformation_party_Qualifier) { _cached_decoder_for_PartyInformation_party_Qualifier = $._decodeEnumerated; }
    return _cached_decoder_for_PartyInformation_party_Qualifier(el);
}

let _cached_encoder_for_PartyInformation_party_Qualifier: $.ASN1Encoder<PartyInformation_party_Qualifier> | null = null;

/**
 * @summary Encodes a(n) PartyInformation_party_Qualifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyInformation_party_Qualifier, encoded as an ASN.1 Element.
 */
export
function _encode_PartyInformation_party_Qualifier (value: PartyInformation_party_Qualifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyInformation_party_Qualifier) { _cached_encoder_for_PartyInformation_party_Qualifier = $._encodeEnumerated; }
    return _cached_encoder_for_PartyInformation_party_Qualifier(value, elGetter);
}


/* eslint-enable */
