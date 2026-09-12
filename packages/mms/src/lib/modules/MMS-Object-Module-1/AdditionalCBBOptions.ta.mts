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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdditionalCBBOptions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalCBBOptions  ::=  BIT STRING {
 *     des  (0),
 *     dei  (1),
 *     recl (2)
 * } (SIZE(3))
 * ```
 */
export
type AdditionalCBBOptions = BIT_STRING;

/**
 * @summary AdditionalCBBOptions_des
 * @constant
 */
export
const AdditionalCBBOptions_des: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary des
 * @constant
 */
export
const des: number = AdditionalCBBOptions_des; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalCBBOptions_dei
 * @constant
 */
export
const AdditionalCBBOptions_dei: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dei
 * @constant
 */
export
const dei: number = AdditionalCBBOptions_dei; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalCBBOptions_recl
 * @constant
 */
export
const AdditionalCBBOptions_recl: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary recl
 * @constant
 */
export
const recl: number = AdditionalCBBOptions_recl; /* SHORT_NAMED_BIT */
export const _decode_AdditionalCBBOptions = $._decodeBitString;
export const _encode_AdditionalCBBOptions = $._encodeBitString;


/* eslint-enable */
