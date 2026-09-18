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
 * @constant
 */
export
const DimensionParamOffer_absolute_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @constant
 */
export
const yes: number = DimensionParamOffer_absolute_yes; /* SHORT_NAMED_BIT */

/**
 * @summary DimensionParamOffer_absolute_no
 * @constant
 */
export
const DimensionParamOffer_absolute_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @constant
 */
export
const no: number = DimensionParamOffer_absolute_no; /* SHORT_NAMED_BIT */
export const _decode_DimensionParamOffer_absolute = $._decodeBitString;
export const _encode_DimensionParamOffer_absolute = $._encodeBitString;


/* eslint-enable */
