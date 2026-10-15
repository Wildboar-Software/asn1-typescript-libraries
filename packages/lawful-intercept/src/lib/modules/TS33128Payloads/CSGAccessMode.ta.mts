/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSGAccessMode
 * @description
 * 
 * The CSGAccessMode indicates the mode in which the CSG cell User is accessing
 * to operate. CSGAccessMode is derived from the CSG-Access-Mode type defined in
 * TS 32.299. [111] clause 7.2.46A.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.83.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CSGAccessMode {
    closedMode = 1,
    /**
     * @description
     *
     * CSG Access mode is hybrid.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.83.
     */
    hybridMode = 2,
}

/**
 * @summary CSGAccessMode
 * @description
 * 
 * The CSGAccessMode indicates the mode in which the CSG cell User is accessing
 * to operate. CSGAccessMode is derived from the CSG-Access-Mode type defined in
 * TS 32.299. [111] clause 7.2.46A.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.83.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode
 * @description
 * 
 * The CSGAccessMode indicates the mode in which the CSG cell User is accessing
 * to operate. CSGAccessMode is derived from the CSG-Access-Mode type defined in
 * TS 32.299. [111] clause 7.2.46A.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.83.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSGAccessMode  ::=  ENUMERATED
 * {
 *     closedMode(1),
 *     hybridMode(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CSGAccessMode = _enum_for_CSGAccessMode;

/**
 * @summary CSGAccessMode_closedMode
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_closedMode: CSGAccessMode = CSGAccessMode.closedMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary closedMode
 * @constant
 * @type {number}
 */
export
const closedMode: CSGAccessMode = CSGAccessMode.closedMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CSGAccessMode_hybridMode
 * @description
 *
 * CSG Access mode is hybrid.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.83.
 *
 * @constant
 * @type {number}
 */
export
const CSGAccessMode_hybridMode: CSGAccessMode = CSGAccessMode.hybridMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hybridMode
 * @description
 *
 * CSG Access mode is hybrid.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.83.
 *
 * @constant
 * @type {number}
 */
export
const hybridMode: CSGAccessMode = CSGAccessMode.hybridMode; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CSGAccessMode: $.ASN1Decoder<CSGAccessMode> = $._decodeEnumerated;
export const _encode_CSGAccessMode: $.ASN1Encoder<CSGAccessMode> = $._encodeEnumerated;


/* eslint-enable */
