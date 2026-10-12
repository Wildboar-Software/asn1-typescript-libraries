/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRITransactionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRITransactionType  ::=  ENUMERATED {
 *     iRIbegin,
 *     iRIcontinue,
 *     iRIend,
 *     iRIreport
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IRITransactionType {
    iRIbegin = 0,
    iRIcontinue = 1,
    iRIend = 2,
    iRIreport = 3,
}

/**
 * @summary IRITransactionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRITransactionType  ::=  ENUMERATED {
 *     iRIbegin,
 *     iRIcontinue,
 *     iRIend,
 *     iRIreport
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IRITransactionType = _enum_for_IRITransactionType;

/**
 * @summary IRITransactionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRITransactionType  ::=  ENUMERATED {
 *     iRIbegin,
 *     iRIcontinue,
 *     iRIend,
 *     iRIreport
 * }
 * ```
 * 
 * @enum {number}
 */
export
const IRITransactionType = _enum_for_IRITransactionType;

/**
 * @summary IRITransactionType_iRIbegin
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIbegin: IRITransactionType = IRITransactionType.iRIbegin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIbegin
 * @constant
 * @type {number}
 */
export
const iRIbegin: IRITransactionType = IRITransactionType.iRIbegin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRITransactionType_iRIcontinue
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIcontinue: IRITransactionType = IRITransactionType.iRIcontinue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIcontinue
 * @constant
 * @type {number}
 */
export
const iRIcontinue: IRITransactionType = IRITransactionType.iRIcontinue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRITransactionType_iRIend
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIend: IRITransactionType = IRITransactionType.iRIend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIend
 * @constant
 * @type {number}
 */
export
const iRIend: IRITransactionType = IRITransactionType.iRIend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRITransactionType_iRIreport
 * @constant
 * @type {number}
 */
export
const IRITransactionType_iRIreport: IRITransactionType = IRITransactionType.iRIreport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRIreport
 * @constant
 * @type {number}
 */
export
const iRIreport: IRITransactionType = IRITransactionType.iRIreport; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IRITransactionType: $.ASN1Decoder<IRITransactionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRITransactionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRITransactionType (el: _Element): IRITransactionType {
    if (!_cached_decoder_for_IRITransactionType) { _cached_decoder_for_IRITransactionType = $._decodeEnumerated; }
    return _cached_decoder_for_IRITransactionType(el);
}

let _cached_encoder_for_IRITransactionType: $.ASN1Encoder<IRITransactionType> | null = null;

/**
 * @summary Encodes a(n) IRITransactionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRITransactionType, encoded as an ASN.1 Element.
 */
export
function _encode_IRITransactionType (value: IRITransactionType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRITransactionType) { _cached_encoder_for_IRITransactionType = $._encodeEnumerated; }
    return _cached_encoder_for_IRITransactionType(value, elGetter);
}


/* eslint-enable */
