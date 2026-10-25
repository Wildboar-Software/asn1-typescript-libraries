/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AForASSessionWithQoSOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AForASSessionWithQoSOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     pATCH(3),
 *     dELETE(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AForASSessionWithQoSOpType {
    pOST = 1,
    pUT = 2,
    pATCH = 3,
    dELETE = 4,
}

/**
 * @summary AForASSessionWithQoSOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AForASSessionWithQoSOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     pATCH(3),
 *     dELETE(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AForASSessionWithQoSOpType = _enum_for_AForASSessionWithQoSOpType;

/**
 * @summary AForASSessionWithQoSOpType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AForASSessionWithQoSOpType  ::=  ENUMERATED
 * {
 *     pOST(1),
 *     pUT(2),
 *     pATCH(3),
 *     dELETE(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AForASSessionWithQoSOpType: typeof _enum_for_AForASSessionWithQoSOpType = _enum_for_AForASSessionWithQoSOpType;

/**
 * @summary AForASSessionWithQoSOpType_pOST
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSOpType_pOST: _enum_for_AForASSessionWithQoSOpType.pOST = AForASSessionWithQoSOpType.pOST; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pOST
 * @constant
 * @type {number}
 */
export
const pOST: _enum_for_AForASSessionWithQoSOpType.pOST = AForASSessionWithQoSOpType.pOST; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSOpType_pUT
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSOpType_pUT: _enum_for_AForASSessionWithQoSOpType.pUT = AForASSessionWithQoSOpType.pUT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pUT
 * @constant
 * @type {number}
 */
export
const pUT: _enum_for_AForASSessionWithQoSOpType.pUT = AForASSessionWithQoSOpType.pUT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSOpType_pATCH
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSOpType_pATCH: _enum_for_AForASSessionWithQoSOpType.pATCH = AForASSessionWithQoSOpType.pATCH; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pATCH
 * @constant
 * @type {number}
 */
export
const pATCH: _enum_for_AForASSessionWithQoSOpType.pATCH = AForASSessionWithQoSOpType.pATCH; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AForASSessionWithQoSOpType_dELETE
 * @constant
 * @type {number}
 */
export
const AForASSessionWithQoSOpType_dELETE: _enum_for_AForASSessionWithQoSOpType.dELETE = AForASSessionWithQoSOpType.dELETE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dELETE
 * @constant
 * @type {number}
 */
export
const dELETE: _enum_for_AForASSessionWithQoSOpType.dELETE = AForASSessionWithQoSOpType.dELETE; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AForASSessionWithQoSOpType: $.ASN1Decoder<AForASSessionWithQoSOpType> = $._decodeEnumerated;
export const _encode_AForASSessionWithQoSOpType: $.ASN1Encoder<AForASSessionWithQoSOpType> = $._encodeEnumerated;


/* eslint-enable */
