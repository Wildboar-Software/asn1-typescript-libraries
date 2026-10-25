/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PositioningMode
 * @description
 * 
 * The PositioningMode represents the mode used to determine the location of the
 * UE when a certain positioning method is used, the PositioningMode is derived
 * from the data present in the PositioningMode type defined in TS 29.572 [24]
 * clause 6.1.6.3.7.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.53.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMode  ::=  ENUMERATED
 * {
 *     uEBased(1),
 *     uEAssisted(2),
 *     conventional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PositioningMode {
    /**
     * @description
     *
     * UE-based mode.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.53.
     */
    uEBased = 1,
    /**
     * @description
     *
     * UE-assisted mode.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.53.
     */
    uEAssisted = 2,
    /**
     * @description
     *
     * Conventional mode.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.53.
     */
    conventional = 3,
}

/**
 * @summary PositioningMode
 * @description
 * 
 * The PositioningMode represents the mode used to determine the location of the
 * UE when a certain positioning method is used, the PositioningMode is derived
 * from the data present in the PositioningMode type defined in TS 29.572 [24]
 * clause 6.1.6.3.7.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.53.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMode  ::=  ENUMERATED
 * {
 *     uEBased(1),
 *     uEAssisted(2),
 *     conventional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PositioningMode = _enum_for_PositioningMode;

/**
 * @summary PositioningMode
 * @description
 * 
 * The PositioningMode represents the mode used to determine the location of the
 * UE when a certain positioning method is used, the PositioningMode is derived
 * from the data present in the PositioningMode type defined in TS 29.572 [24]
 * clause 6.1.6.3.7.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.53.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMode  ::=  ENUMERATED
 * {
 *     uEBased(1),
 *     uEAssisted(2),
 *     conventional(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PositioningMode = _enum_for_PositioningMode;

/**
 * @summary PositioningMode_uEBased
 * @description
 *
 * UE-based mode.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.53.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMode_uEBased = PositioningMode.uEBased satisfies PositioningMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEBased
 * @description
 *
 * UE-based mode.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.53.
 *
 * @constant
 * @type {number}
 */
export
const uEBased = PositioningMode.uEBased satisfies PositioningMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMode_uEAssisted
 * @description
 *
 * UE-assisted mode.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.53.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMode_uEAssisted = PositioningMode.uEAssisted satisfies PositioningMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEAssisted
 * @description
 *
 * UE-assisted mode.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.53.
 *
 * @constant
 * @type {number}
 */
export
const uEAssisted = PositioningMode.uEAssisted satisfies PositioningMode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PositioningMode_conventional
 * @description
 *
 * Conventional mode.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.53.
 *
 * @constant
 * @type {number}
 */
export
const PositioningMode_conventional = PositioningMode.conventional satisfies PositioningMode; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary conventional
 * @description
 *
 * Conventional mode.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.53.
 *
 * @constant
 * @type {number}
 */
export
const conventional = PositioningMode.conventional satisfies PositioningMode; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PositioningMode: $.ASN1Decoder<PositioningMode> = $._decodeEnumerated;
export const _encode_PositioningMode: $.ASN1Encoder<PositioningMode> = $._encodeEnumerated;


/* eslint-enable */
