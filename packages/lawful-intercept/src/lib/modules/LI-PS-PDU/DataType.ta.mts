/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_DataType {
    iRI = 1,
    cC = 2,
    iLHI = 3,
}

/**
 * @summary DataType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataType  ::=  ENUMERATED
 * {
 *     iRI(1),
 *     cC(2),
 *     ...,
 *     iLHI(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DataType = _enum_for_DataType | ENUMERATED;

/**
 * @summary DataType_iRI
 * @constant
 * @type {number}
 */
export
const DataType_iRI: DataType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI
 * @constant
 * @type {number}
 */
export
const iRI: DataType = DataType_iRI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataType_cC
 * @constant
 * @type {number}
 */
export
const DataType_cC: DataType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cC
 * @constant
 * @type {number}
 */
export
const cC: DataType = DataType_cC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataType_iLHI
 * @constant
 * @type {number}
 */
export
const DataType_iLHI: DataType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iLHI
 * @constant
 * @type {number}
 */
export
const iLHI: DataType = DataType_iLHI; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DataType: $.ASN1Decoder<DataType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataType (el: _Element): DataType {
    if (!_cached_decoder_for_DataType) { _cached_decoder_for_DataType = $._decodeEnumerated; }
    return _cached_decoder_for_DataType(el);
}

let _cached_encoder_for_DataType: $.ASN1Encoder<DataType> | null = null;

/**
 * @summary Encodes a(n) DataType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataType, encoded as an ASN.1 Element.
 */
export
function _encode_DataType (value: DataType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataType) { _cached_encoder_for_DataType = $._encodeEnumerated; }
    return _cached_encoder_for_DataType(value, elGetter);
}


/* eslint-enable */
