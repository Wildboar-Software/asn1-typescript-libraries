/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Service3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service3 ::=  ENUMERATED{
 *         distinctiveRingingCallWaiting(0),
 *         selectiveCallRejection(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Service3 {
    distinctiveRingingCallWaiting = 0,
    selectiveCallRejection = 1,
}

/**
 * @summary Service3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service3 ::=  ENUMERATED{
 *         distinctiveRingingCallWaiting(0),
 *         selectiveCallRejection(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type Service3 = _enum_for_Service3;

/**
 * @summary Service3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service3 ::=  ENUMERATED{
 *         distinctiveRingingCallWaiting(0),
 *         selectiveCallRejection(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const Service3 = _enum_for_Service3;

/**
 * @summary Service3_distinctiveRingingCallWaiting
 * @constant
 * @type {number}
 */
export
const Service3_distinctiveRingingCallWaiting: Service3 = Service3.distinctiveRingingCallWaiting; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distinctiveRingingCallWaiting
 * @constant
 * @type {number}
 */
export
const distinctiveRingingCallWaiting: Service3 = Service3.distinctiveRingingCallWaiting; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Service3_selectiveCallRejection
 * @constant
 * @type {number}
 */
export
const Service3_selectiveCallRejection: Service3 = Service3.selectiveCallRejection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary selectiveCallRejection
 * @constant
 * @type {number}
 */
export
const selectiveCallRejection: Service3 = Service3.selectiveCallRejection; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Service3: $.ASN1Decoder<Service3> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service3
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service3 (el: _Element): Service3 {
    if (!_cached_decoder_for_Service3) { _cached_decoder_for_Service3 = $._decodeEnumerated; }
    return _cached_decoder_for_Service3(el);
}

let _cached_encoder_for_Service3: $.ASN1Encoder<Service3> | null = null;

/**
 * @summary Encodes a(n) Service3 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service3, encoded as an ASN.1 Element.
 */
export
function _encode_Service3 (value: Service3, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service3) { _cached_encoder_for_Service3 = $._encodeEnumerated; }
    return _cached_encoder_for_Service3(value, elGetter);
}


/* eslint-enable */
