/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Diagnostics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Diagnostics              ::=    INTEGER
 * { duplicateInvokeId              (100)
 * , otherReason                    (127)
 * }
 * ```
 */
export
type Diagnostics = INTEGER;

/**
 * @summary Diagnostics_duplicateInvokeId
 * @constant
 * @type {number}
 */
export
const Diagnostics_duplicateInvokeId: Diagnostics = 100; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Diagnostics_duplicateInvokeId
 * @constant
 * @type {number}
 */
export
const duplicateInvokeId: Diagnostics = Diagnostics_duplicateInvokeId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Diagnostics_otherReason
 * @constant
 * @type {number}
 */
export
const Diagnostics_otherReason: Diagnostics = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Diagnostics_otherReason
 * @constant
 * @type {number}
 */
export
const otherReason: Diagnostics = Diagnostics_otherReason; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_Diagnostics: $.ASN1Decoder<Diagnostics> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Diagnostics
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Diagnostics (el: _Element): Diagnostics {
    if (!_cached_decoder_for_Diagnostics) { _cached_decoder_for_Diagnostics = $._decodeInteger; }
    return _cached_decoder_for_Diagnostics(el);
}

let _cached_encoder_for_Diagnostics: $.ASN1Encoder<Diagnostics> | null = null;

/**
 * @summary Encodes a(n) Diagnostics into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Diagnostics, encoded as an ASN.1 Element.
 */
export
function _encode_Diagnostics (value: Diagnostics, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Diagnostics) { _cached_encoder_for_Diagnostics = $._encodeInteger; }
    return _cached_encoder_for_Diagnostics(value, elGetter);
}


/* eslint-enable */
