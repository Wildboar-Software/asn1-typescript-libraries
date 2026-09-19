/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionType {
    largeMessageStandalone = 1,
    oneTo1Chat = 2,
}

/**
 * @summary RCSSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionType = _enum_for_RCSSessionType;

/**
 * @summary RCSSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionType = _enum_for_RCSSessionType;

/**
 * @summary RCSSessionType_largeMessageStandalone
 * @constant
 * @type {number}
 */
export
const RCSSessionType_largeMessageStandalone: RCSSessionType = RCSSessionType.largeMessageStandalone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary largeMessageStandalone
 * @constant
 * @type {number}
 */
export
const largeMessageStandalone: RCSSessionType = RCSSessionType.largeMessageStandalone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionType_oneTo1Chat
 * @constant
 * @type {number}
 */
export
const RCSSessionType_oneTo1Chat: RCSSessionType = RCSSessionType.oneTo1Chat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTo1Chat
 * @constant
 * @type {number}
 */
export
const oneTo1Chat: RCSSessionType = RCSSessionType.oneTo1Chat; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RCSSessionType: $.ASN1Decoder<RCSSessionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSessionType (el: _Element): RCSSessionType {
    if (!_cached_decoder_for_RCSSessionType) { _cached_decoder_for_RCSSessionType = $._decodeEnumerated; }
    return _cached_decoder_for_RCSSessionType(el);
}

let _cached_encoder_for_RCSSessionType: $.ASN1Encoder<RCSSessionType> | null = null;

/**
 * @summary Encodes a(n) RCSSessionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionType, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSessionType (value: RCSSessionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSessionType) { _cached_encoder_for_RCSSessionType = $._encodeEnumerated; }
    return _cached_encoder_for_RCSSessionType(value, elGetter);
}


/* eslint-enable */
