/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransparencyInd
 * @description
 *
 * This field indicates whether the basic service was employed in transparent
 * or non-transparent mode. It should also be noted that this field is only
 * relevant for those services which may be operated in both transparent and
 * non-transparent modes.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.92.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransparencyInd  ::=  ENUMERATED {
 *    transparent       ( 0 ),
 *    nonTransparent    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TransparencyInd {
    transparent = 0,
    nonTransparent = 1,
}

/**
 * @summary TransparencyInd
 * @description
 *
 * This field indicates whether the basic service was employed in transparent
 * or non-transparent mode. It should also be noted that this field is only
 * relevant for those services which may be operated in both transparent and
 * non-transparent modes.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.92.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransparencyInd  ::=  ENUMERATED {
 *    transparent       ( 0 ),
 *    nonTransparent    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type TransparencyInd = _enum_for_TransparencyInd;

/**
 * @summary TransparencyInd
 * @description
 *
 * This field indicates whether the basic service was employed in transparent
 * or non-transparent mode. It should also be noted that this field is only
 * relevant for those services which may be operated in both transparent and
 * non-transparent modes.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.92.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransparencyInd  ::=  ENUMERATED {
 *    transparent       ( 0 ),
 *    nonTransparent    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const TransparencyInd = _enum_for_TransparencyInd;

/**
 * @summary TransparencyInd_transparent
 * @constant
 * @type {number}
 */
export
const TransparencyInd_transparent: TransparencyInd = TransparencyInd.transparent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transparent
 * @constant
 * @type {number}
 */
export
const transparent: TransparencyInd = TransparencyInd.transparent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TransparencyInd_nonTransparent
 * @constant
 * @type {number}
 */
export
const TransparencyInd_nonTransparent: TransparencyInd = TransparencyInd.nonTransparent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nonTransparent
 * @constant
 * @type {number}
 */
export
const nonTransparent: TransparencyInd = TransparencyInd.nonTransparent; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_TransparencyInd: $.ASN1Decoder<TransparencyInd> = $._decodeEnumerated;

export
const _encode_TransparencyInd: $.ASN1Encoder<TransparencyInd> = $._encodeEnumerated;

/* eslint-enable */
