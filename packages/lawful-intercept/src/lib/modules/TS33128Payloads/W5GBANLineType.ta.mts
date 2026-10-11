/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";

/**
 * @summary W5GBANLineType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * W5GBANLineType  ::=  ENUMERATED
 * {
 *     dSL(1),
 *     pON(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_W5GBANLineType {
    dSL = 1,
    pON = 2,
}

/**
 * @summary W5GBANLineType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * W5GBANLineType  ::=  ENUMERATED
 * {
 *     dSL(1),
 *     pON(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type W5GBANLineType = _enum_for_W5GBANLineType;

/**
 * @summary W5GBANLineType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * W5GBANLineType  ::=  ENUMERATED
 * {
 *     dSL(1),
 *     pON(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const W5GBANLineType = _enum_for_W5GBANLineType;

/**
 * @summary W5GBANLineType_dSL
 * @constant
 * @type {number}
 */
export
const W5GBANLineType_dSL: W5GBANLineType = W5GBANLineType.dSL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSL
 * @constant
 * @type {number}
 */
export
const dSL: W5GBANLineType = W5GBANLineType.dSL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary W5GBANLineType_pON
 * @constant
 * @type {number}
 */
export
const W5GBANLineType_pON: W5GBANLineType = W5GBANLineType.pON; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pON
 * @constant
 * @type {number}
 */
export
const pON: W5GBANLineType = W5GBANLineType.pON; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_W5GBANLineType: $.ASN1Decoder<W5GBANLineType> = $._decodeEnumerated;

export const _encode_W5GBANLineType: $.ASN1Encoder<W5GBANLineType> = $._encodeEnumerated;

/* eslint-enable */
