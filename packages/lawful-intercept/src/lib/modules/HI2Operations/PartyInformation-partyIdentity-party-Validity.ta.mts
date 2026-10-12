/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PartyInformation_partyIdentity_party_Validity {
    trusted = 0,
    untrusted = 1,
    operator_added = 2,
}

/**
 * @summary PartyInformation_partyIdentity_party_Validity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-partyIdentity-party-Validity ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type PartyInformation_partyIdentity_party_Validity = _enum_for_PartyInformation_partyIdentity_party_Validity | ENUMERATED;

/**
 * @summary PartyInformation_partyIdentity_party_Validity_trusted
 * @constant
 * @type {number}
 */
export
const PartyInformation_partyIdentity_party_Validity_trusted: PartyInformation_partyIdentity_party_Validity = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trusted
 * @constant
 * @type {number}
 */
export
const trusted: PartyInformation_partyIdentity_party_Validity = PartyInformation_partyIdentity_party_Validity_trusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_partyIdentity_party_Validity_untrusted
 * @constant
 * @type {number}
 */
export
const PartyInformation_partyIdentity_party_Validity_untrusted: PartyInformation_partyIdentity_party_Validity = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary untrusted
 * @constant
 * @type {number}
 */
export
const untrusted: PartyInformation_partyIdentity_party_Validity = PartyInformation_partyIdentity_party_Validity_untrusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyInformation_partyIdentity_party_Validity_operator_added
 * @constant
 * @type {number}
 */
export
const PartyInformation_partyIdentity_party_Validity_operator_added: PartyInformation_partyIdentity_party_Validity = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operator_added
 * @constant
 * @type {number}
 */
export
const operator_added: PartyInformation_partyIdentity_party_Validity = PartyInformation_partyIdentity_party_Validity_operator_added; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PartyInformation_partyIdentity_party_Validity: $.ASN1Decoder<PartyInformation_partyIdentity_party_Validity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyInformation_partyIdentity_party_Validity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyInformation_partyIdentity_party_Validity (el: _Element): PartyInformation_partyIdentity_party_Validity {
    if (!_cached_decoder_for_PartyInformation_partyIdentity_party_Validity) { _cached_decoder_for_PartyInformation_partyIdentity_party_Validity = $._decodeEnumerated; }
    return _cached_decoder_for_PartyInformation_partyIdentity_party_Validity(el);
}

let _cached_encoder_for_PartyInformation_partyIdentity_party_Validity: $.ASN1Encoder<PartyInformation_partyIdentity_party_Validity> | null = null;

/**
 * @summary Encodes a(n) PartyInformation_partyIdentity_party_Validity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyInformation_partyIdentity_party_Validity, encoded as an ASN.1 Element.
 */
export
function _encode_PartyInformation_partyIdentity_party_Validity (value: PartyInformation_partyIdentity_party_Validity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyInformation_partyIdentity_party_Validity) { _cached_encoder_for_PartyInformation_partyIdentity_party_Validity = $._encodeEnumerated; }
    return _cached_encoder_for_PartyInformation_partyIdentity_party_Validity(value, elGetter);
}


/* eslint-enable */
