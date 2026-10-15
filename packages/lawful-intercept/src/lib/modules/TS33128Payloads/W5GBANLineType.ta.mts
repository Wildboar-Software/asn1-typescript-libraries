/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary W5GBANLineType
 * @description
 * 
 * The W5GBANLineType indicates the type of wireline access used connect to the
 * 5GS. The W5GBANLineType type is derived from the data present in the LineType
 * type defined in TS 29.571 [17] clause 5.4.3.33.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.32.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @description
     *
     * DSL Line.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.32.
     */
    dSL = 1,
    /**
     * @description
     *
     * PON Line.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.32.
     */
    pON = 2,
}

/**
 * @summary W5GBANLineType
 * @description
 * 
 * The W5GBANLineType indicates the type of wireline access used connect to the
 * 5GS. The W5GBANLineType type is derived from the data present in the LineType
 * type defined in TS 29.571 [17] clause 5.4.3.33.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.32.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * The W5GBANLineType indicates the type of wireline access used connect to the
 * 5GS. The W5GBANLineType type is derived from the data present in the LineType
 * type defined in TS 29.571 [17] clause 5.4.3.33.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.32.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * @description
 *
 * DSL Line.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.32.
 *
 * @constant
 * @type {number}
 */
export
const W5GBANLineType_dSL: W5GBANLineType = W5GBANLineType.dSL; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSL
 * @description
 *
 * DSL Line.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.32.
 *
 * @constant
 * @type {number}
 */
export
const dSL: W5GBANLineType = W5GBANLineType.dSL; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary W5GBANLineType_pON
 * @description
 *
 * PON Line.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.32.
 *
 * @constant
 * @type {number}
 */
export
const W5GBANLineType_pON: W5GBANLineType = W5GBANLineType.pON; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pON
 * @description
 *
 * PON Line.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.32.
 *
 * @constant
 * @type {number}
 */
export
const pON: W5GBANLineType = W5GBANLineType.pON; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_W5GBANLineType: $.ASN1Decoder<W5GBANLineType> = $._decodeEnumerated;
export const _encode_W5GBANLineType: $.ASN1Encoder<W5GBANLineType> = $._encodeEnumerated;


/* eslint-enable */
