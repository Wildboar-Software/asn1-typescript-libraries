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

export const _decode_IRIType: $.ASN1Decoder<IRIType> = $._decodeEnumerated;

export const _encode_IRIType: $.ASN1Encoder<IRIType> = $._encodeEnumerated;


/* eslint-enable */
