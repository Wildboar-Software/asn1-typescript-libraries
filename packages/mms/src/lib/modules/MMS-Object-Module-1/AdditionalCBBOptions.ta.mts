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
 * Extended parameter CBBs (cspi):
 * des = string Display Enhancement; dei = integer Display Enhancement;
 * recl = nested Event Condition Lists. SIZE(3). ISO 9506-1:2003 §8.1.3.19,
 * §8.2;
 * ISO 9506-2:2003 Initiate PDUs.
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
 * @description
 *
 * String form of Display Enhancement wherever it occurs. ISO 9506-1:2003
 * §8.1.3.19.1.
 *
 * @constant
 */
export
const AdditionalCBBOptions_des: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary des
 * @description
 *
 * String form of Display Enhancement wherever it occurs. ISO 9506-1:2003
 * §8.1.3.19.1.
 *
 * @constant
 */
export
const des: number = AdditionalCBBOptions_des; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalCBBOptions_dei
 * @description
 *
 * Integer form of Display Enhancement wherever it occurs. ISO 9506-1:2003
 * §8.1.3.19.2.
 *
 * @constant
 */
export
const AdditionalCBBOptions_dei: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dei
 * @description
 *
 * Integer form of Display Enhancement wherever it occurs. ISO 9506-1:2003
 * §8.1.3.19.2.
 *
 * @constant
 */
export
const dei: number = AdditionalCBBOptions_dei; /* SHORT_NAMED_BIT */

/**
 * @summary AdditionalCBBOptions_recl
 * @description
 *
 * List of Event Condition List names (nested ECLs). ISO 9506-1:2003
 * §8.1.3.19.3.
 *
 * @constant
 */
export
const AdditionalCBBOptions_recl: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary recl
 * @description
 *
 * List of Event Condition List names (nested ECLs). ISO 9506-1:2003
 * §8.1.3.19.3.
 *
 * @constant
 */
export
const recl: number = AdditionalCBBOptions_recl; /* SHORT_NAMED_BIT */
export const _decode_AdditionalCBBOptions = $._decodeBitString;
export const _encode_AdditionalCBBOptions = $._encodeBitString;


/* eslint-enable */
