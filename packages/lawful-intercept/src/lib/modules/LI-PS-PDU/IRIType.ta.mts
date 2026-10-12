/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IRIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIType  ::=  ENUMERATED
 * {
 *     iRI-Begin(1),
 *     iRI-End(2),
 *     iRI-Continue(3),
 *     iRI-Report(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IRIType {
    iRI_Begin = 1,
    iRI_End = 2,
    iRI_Continue = 3,
    iRI_Report = 4,
}

/**
 * @summary IRIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIType  ::=  ENUMERATED
 * {
 *     iRI-Begin(1),
 *     iRI-End(2),
 *     iRI-Continue(3),
 *     iRI-Report(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type IRIType = _enum_for_IRIType;

/**
 * @summary IRIType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRIType  ::=  ENUMERATED
 * {
 *     iRI-Begin(1),
 *     iRI-End(2),
 *     iRI-Continue(3),
 *     iRI-Report(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const IRIType = _enum_for_IRIType;

/**
 * @summary IRIType_iRI_Begin
 * @constant
 * @type {number}
 */
export
const IRIType_iRI_Begin: IRIType = IRIType.iRI_Begin; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI_Begin
 * @constant
 * @type {number}
 */
export
const iRI_Begin: IRIType = IRIType.iRI_Begin; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRIType_iRI_End
 * @constant
 * @type {number}
 */
export
const IRIType_iRI_End: IRIType = IRIType.iRI_End; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI_End
 * @constant
 * @type {number}
 */
export
const iRI_End: IRIType = IRIType.iRI_End; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRIType_iRI_Continue
 * @constant
 * @type {number}
 */
export
const IRIType_iRI_Continue: IRIType = IRIType.iRI_Continue; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI_Continue
 * @constant
 * @type {number}
 */
export
const iRI_Continue: IRIType = IRIType.iRI_Continue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IRIType_iRI_Report
 * @constant
 * @type {number}
 */
export
const IRIType_iRI_Report: IRIType = IRIType.iRI_Report; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI_Report
 * @constant
 * @type {number}
 */
export
const iRI_Report: IRIType = IRIType.iRI_Report; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IRIType: $.ASN1Decoder<IRIType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRIType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRIType (el: _Element): IRIType {
    if (!_cached_decoder_for_IRIType) { _cached_decoder_for_IRIType = $._decodeEnumerated; }
    return _cached_decoder_for_IRIType(el);
}

let _cached_encoder_for_IRIType: $.ASN1Encoder<IRIType> | null = null;

/**
 * @summary Encodes a(n) IRIType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRIType, encoded as an ASN.1 Element.
 */
export
function _encode_IRIType (value: IRIType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRIType) { _cached_encoder_for_IRIType = $._encodeEnumerated; }
    return _cached_encoder_for_IRIType(value, elGetter);
}


/* eslint-enable */
