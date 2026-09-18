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
 * @summary ParameterOffers_dimensionOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-dimensionOffer ::= BIT STRING {
 *     oneDimension    (0),
 *     twoDimensions   (1),
 *     threeDimensions (2)
 * }
 * ```
 */
export
type ParameterOffers_dimensionOffer = BIT_STRING;

/**
 * @summary ParameterOffers_dimensionOffer_oneDimension
 * @constant
 */
export
const ParameterOffers_dimensionOffer_oneDimension: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary oneDimension
 * @constant
 */
export
const oneDimension: number = ParameterOffers_dimensionOffer_oneDimension; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_dimensionOffer_twoDimensions
 * @constant
 */
export
const ParameterOffers_dimensionOffer_twoDimensions: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary twoDimensions
 * @constant
 */
export
const twoDimensions: number = ParameterOffers_dimensionOffer_twoDimensions; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_dimensionOffer_threeDimensions
 * @constant
 */
export
const ParameterOffers_dimensionOffer_threeDimensions: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary threeDimensions
 * @constant
 */
export
const threeDimensions: number = ParameterOffers_dimensionOffer_threeDimensions; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_dimensionOffer = $._decodeBitString;
export const _encode_ParameterOffers_dimensionOffer = $._encodeBitString;


/* eslint-enable */
