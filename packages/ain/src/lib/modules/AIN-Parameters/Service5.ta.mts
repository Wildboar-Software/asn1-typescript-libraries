/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service5
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service5 ::=  ENUMERATED{
 *         selectiveCallAcceptance(0),
 *         selectiveCallForwarding(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Service5 {
    selectiveCallAcceptance = 0,
    selectiveCallForwarding = 1,
}

/**
 * @summary Service5
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service5 ::=  ENUMERATED{
 *         selectiveCallAcceptance(0),
 *         selectiveCallForwarding(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Service5 = _enum_for_Service5;

/**
 * @summary Service5
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service5 ::=  ENUMERATED{
 *         selectiveCallAcceptance(0),
 *         selectiveCallForwarding(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Service5 = _enum_for_Service5;

/**
 * @summary Service5_selectiveCallAcceptance
 * @constant
 * @type {number}
 */
export
const Service5_selectiveCallAcceptance: Service5 = Service5.selectiveCallAcceptance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selectiveCallAcceptance
 * @constant
 * @type {number}
 */
export
const selectiveCallAcceptance: Service5 = Service5.selectiveCallAcceptance; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service5_selectiveCallForwarding
 * @constant
 * @type {number}
 */
export
const Service5_selectiveCallForwarding: Service5 = Service5.selectiveCallForwarding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selectiveCallForwarding
 * @constant
 * @type {number}
 */
export
const selectiveCallForwarding: Service5 = Service5.selectiveCallForwarding; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Service5: $.ASN1Decoder<Service5> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service5
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service5 (el: _Element): Service5 {
    if (!_cached_decoder_for_Service5) { _cached_decoder_for_Service5 = $._decodeEnumerated; }
    return _cached_decoder_for_Service5(el);
}

let _cached_encoder_for_Service5: $.ASN1Encoder<Service5> | null = null;

/**
 * @summary Encodes a(n) Service5 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service5, encoded as an ASN.1 Element.
 */
export
function _encode_Service5 (value: Service5, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service5) { _cached_encoder_for_Service5 = $._encodeEnumerated; }
    return _cached_encoder_for_Service5(value, elGetter);
}


/* eslint-enable */
