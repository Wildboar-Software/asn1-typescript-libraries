/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCDataRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCDataRequestType  ::=  ENUMERATED
 * {
 *     oneToOneFD(1),
 *     groupFD(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MCDataRequestType {
    oneToOneFD = 1,
    groupFD = 2,
}

/**
 * @summary MCDataRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCDataRequestType  ::=  ENUMERATED
 * {
 *     oneToOneFD(1),
 *     groupFD(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MCDataRequestType = _enum_for_MCDataRequestType;

/**
 * @summary MCDataRequestType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCDataRequestType  ::=  ENUMERATED
 * {
 *     oneToOneFD(1),
 *     groupFD(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MCDataRequestType = _enum_for_MCDataRequestType;

/**
 * @summary MCDataRequestType_oneToOneFD
 * @constant
 * @type {number}
 */
export
const MCDataRequestType_oneToOneFD: MCDataRequestType = MCDataRequestType.oneToOneFD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneToOneFD
 * @constant
 * @type {number}
 */
export
const oneToOneFD: MCDataRequestType = MCDataRequestType.oneToOneFD; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCDataRequestType_groupFD
 * @constant
 * @type {number}
 */
export
const MCDataRequestType_groupFD: MCDataRequestType = MCDataRequestType.groupFD; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupFD
 * @constant
 * @type {number}
 */
export
const groupFD: MCDataRequestType = MCDataRequestType.groupFD; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MCDataRequestType: $.ASN1Decoder<MCDataRequestType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCDataRequestType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCDataRequestType (el: _Element): MCDataRequestType {
    if (!_cached_decoder_for_MCDataRequestType) { _cached_decoder_for_MCDataRequestType = $._decodeEnumerated; }
    return _cached_decoder_for_MCDataRequestType(el);
}

let _cached_encoder_for_MCDataRequestType: $.ASN1Encoder<MCDataRequestType> | null = null;

/**
 * @summary Encodes a(n) MCDataRequestType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCDataRequestType, encoded as an ASN.1 Element.
 */
export
function _encode_MCDataRequestType (value: MCDataRequestType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCDataRequestType) { _cached_encoder_for_MCDataRequestType = $._encodeEnumerated; }
    return _cached_encoder_for_MCDataRequestType(value, elGetter);
}


/* eslint-enable */
