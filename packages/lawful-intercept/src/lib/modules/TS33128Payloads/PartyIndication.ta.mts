/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyIndication  ::=  ENUMERATED
 * {
 *     callingParty(1),
 *     calledParty(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PartyIndication {
    callingParty = 1,
    calledParty = 2,
}

/**
 * @summary PartyIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyIndication  ::=  ENUMERATED
 * {
 *     callingParty(1),
 *     calledParty(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PartyIndication = _enum_for_PartyIndication;

/**
 * @summary PartyIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyIndication  ::=  ENUMERATED
 * {
 *     callingParty(1),
 *     calledParty(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PartyIndication = _enum_for_PartyIndication;

/**
 * @summary PartyIndication_callingParty
 * @constant
 * @type {number}
 */
export
const PartyIndication_callingParty: PartyIndication = PartyIndication.callingParty; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callingParty
 * @constant
 * @type {number}
 */
export
const callingParty: PartyIndication = PartyIndication.callingParty; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PartyIndication_calledParty
 * @constant
 * @type {number}
 */
export
const PartyIndication_calledParty: PartyIndication = PartyIndication.calledParty; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary calledParty
 * @constant
 * @type {number}
 */
export
const calledParty: PartyIndication = PartyIndication.calledParty; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PartyIndication: $.ASN1Decoder<PartyIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyIndication (el: _Element): PartyIndication {
    if (!_cached_decoder_for_PartyIndication) { _cached_decoder_for_PartyIndication = $._decodeEnumerated; }
    return _cached_decoder_for_PartyIndication(el);
}

let _cached_encoder_for_PartyIndication: $.ASN1Encoder<PartyIndication> | null = null;

/**
 * @summary Encodes a(n) PartyIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyIndication, encoded as an ASN.1 Element.
 */
export
function _encode_PartyIndication (value: PartyIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyIndication) { _cached_encoder_for_PartyIndication = $._encodeEnumerated; }
    return _cached_encoder_for_PartyIndication(value, elGetter);
}


/* eslint-enable */
