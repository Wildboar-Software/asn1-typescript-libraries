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
 * @summary ParameterOffers_erasure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-erasure ::= BIT STRING { yes (0), no (1) }
 * ```
 */
export
type ParameterOffers_erasure = BIT_STRING;

/**
 * @summary ParameterOffers_erasure_yes
 * @constant
 */
export
const ParameterOffers_erasure_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @constant
 */
export
const yes: number = ParameterOffers_erasure_yes; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_erasure_no
 * @constant
 */
export
const ParameterOffers_erasure_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @constant
 */
export
const no: number = ParameterOffers_erasure_no; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_erasure = $._decodeBitString;
export const _encode_ParameterOffers_erasure = $._encodeBitString;


/* eslint-enable */
