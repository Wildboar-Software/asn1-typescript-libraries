/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Messaging_Party_Validity {
    unknown = 0,
    trusted = 1,
    untrusted = 2,
}

/**
 * @summary Messaging_Party_Validity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Party-Validity  ::=  ENUMERATED
 * {
 *     unknown(0),
 *     trusted(1),
 *     untrusted(2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Messaging_Party_Validity = _enum_for_Messaging_Party_Validity | ENUMERATED;

/**
 * @summary Messaging_Party_Validity_unknown
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Validity_unknown: Messaging_Party_Validity = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: Messaging_Party_Validity = Messaging_Party_Validity_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Validity_trusted
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Validity_trusted: Messaging_Party_Validity = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trusted
 * @constant
 * @type {number}
 */
export
const trusted: Messaging_Party_Validity = Messaging_Party_Validity_trusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Messaging_Party_Validity_untrusted
 * @constant
 * @type {number}
 */
export
const Messaging_Party_Validity_untrusted: Messaging_Party_Validity = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary untrusted
 * @constant
 * @type {number}
 */
export
const untrusted: Messaging_Party_Validity = Messaging_Party_Validity_untrusted; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Messaging_Party_Validity: $.ASN1Decoder<Messaging_Party_Validity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Party_Validity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Party_Validity (el: _Element): Messaging_Party_Validity {
    if (!_cached_decoder_for_Messaging_Party_Validity) { _cached_decoder_for_Messaging_Party_Validity = $._decodeEnumerated; }
    return _cached_decoder_for_Messaging_Party_Validity(el);
}

let _cached_encoder_for_Messaging_Party_Validity: $.ASN1Encoder<Messaging_Party_Validity> | null = null;

/**
 * @summary Encodes a(n) Messaging_Party_Validity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Party_Validity, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Party_Validity (value: Messaging_Party_Validity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Party_Validity) { _cached_encoder_for_Messaging_Party_Validity = $._encodeEnumerated; }
    return _cached_encoder_for_Messaging_Party_Validity(value, elGetter);
}


/* eslint-enable */
