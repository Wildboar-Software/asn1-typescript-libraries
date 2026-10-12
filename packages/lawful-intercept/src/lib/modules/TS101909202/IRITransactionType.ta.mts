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
export const _decode_IRITransactionType: $.ASN1Decoder<IRITransactionType> = $._decodeEnumerated;
export const _encode_IRITransactionType: $.ASN1Encoder<IRITransactionType> = $._encodeEnumerated;


/* eslint-enable */
