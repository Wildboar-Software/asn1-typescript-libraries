/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service2 ::=  ENUMERATED{
 *         audioMessageWaitingIndicator(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Service2 {
    audioMessageWaitingIndicator = 0,
}

/**
 * @summary Service2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service2 ::=  ENUMERATED{
 *         audioMessageWaitingIndicator(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Service2 = _enum_for_Service2;

/**
 * @summary Service2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service2 ::=  ENUMERATED{
 *         audioMessageWaitingIndicator(0)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Service2 = _enum_for_Service2;

/**
 * @summary Service2_audioMessageWaitingIndicator
 * @constant
 * @type {number}
 */
export
const Service2_audioMessageWaitingIndicator: Service2 = Service2.audioMessageWaitingIndicator; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary audioMessageWaitingIndicator
 * @constant
 * @type {number}
 */
export
const audioMessageWaitingIndicator: Service2 = Service2.audioMessageWaitingIndicator; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Service2: $.ASN1Decoder<Service2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service2 (el: _Element): Service2 {
    if (!_cached_decoder_for_Service2) { _cached_decoder_for_Service2 = $._decodeEnumerated; }
    return _cached_decoder_for_Service2(el);
}

let _cached_encoder_for_Service2: $.ASN1Encoder<Service2> | null = null;

/**
 * @summary Encodes a(n) Service2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service2, encoded as an ASN.1 Element.
 */
export
function _encode_Service2 (value: Service2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service2) { _cached_encoder_for_Service2 = $._encodeEnumerated; }
    return _cached_encoder_for_Service2(value, elGetter);
}


/* eslint-enable */
