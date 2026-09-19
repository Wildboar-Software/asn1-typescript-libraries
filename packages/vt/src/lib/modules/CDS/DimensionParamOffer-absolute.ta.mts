/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DimensionParamOffer_absolute
 * @description
 *
 * Offered `d-absolute` for one dimension. Bit = 1 is offered:
 * `yes`(0) allows POINTER-ABSOLUTE to set this coordinate (still
 * subject to `d-addressing`); `no`(1) is the default. ISO/IEC
 * 9040:1997 §18.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamOffer-absolute ::= BIT STRING { yes (0), no (1) }
 * ```
 */
export
type DimensionParamOffer_absolute = BIT_STRING;

/**
 * @summary DimensionParamOffer_absolute_yes
 * @description
 *
 * Offer `d-absolute` = `"yes"`: POINTER-ABSOLUTE may set this
 * coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 */
export
const DimensionParamOffer_absolute_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @description
 *
 * Offer `d-absolute` = `"yes"`: POINTER-ABSOLUTE may set this
 * coordinate. ISO/IEC 9040:1997 §18.2.3.
 * @constant
 */
export
const yes: number = DimensionParamOffer_absolute_yes; /* SHORT_NAMED_BIT */

/**
 * @summary DimensionParamOffer_absolute_no
 * @description
 *
 * Offer `d-absolute` = `"no"` (default). ISO/IEC 9040:1997 §18.2.3.
 * @constant
 */
export
const DimensionParamOffer_absolute_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @description
 *
 * Offer `d-absolute` = `"no"` (default). ISO/IEC 9040:1997 §18.2.3.
 * @constant
 */
export
const no: number = DimensionParamOffer_absolute_no; /* SHORT_NAMED_BIT */
export const _decode_DimensionParamOffer_absolute = $._decodeBitString;
export const _encode_DimensionParamOffer_absolute = $._encodeBitString;


/* eslint-enable */
