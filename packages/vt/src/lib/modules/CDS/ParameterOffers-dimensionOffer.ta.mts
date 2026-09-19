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
 * Offered `dimensions` bits. Bit = 1 means that value is offered:
 * `oneDimension`(0), `twoDimensions`(1), `threeDimensions`(2).
 * Default `"two"`. ISO/IEC 9040:1997 §18.1; ISO/IEC 9041-1:1997
 * §12.3.2.
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
 * @description
 *
 * Offer one-dimensional display object (`dimensions` = `"one"`).
 * ISO/IEC 9040:1997 §18.1.
 * @constant
 */
export
const ParameterOffers_dimensionOffer_oneDimension: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary oneDimension
 * @description
 *
 * Offer one-dimensional display object (`dimensions` = `"one"`).
 * ISO/IEC 9040:1997 §18.1.
 * @constant
 */
export
const oneDimension: number = ParameterOffers_dimensionOffer_oneDimension; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_dimensionOffer_twoDimensions
 * @description
 *
 * Offer two-dimensional display object (`dimensions` = `"two"`;
 * default). ISO/IEC 9040:1997 §18.1.
 * @constant
 */
export
const ParameterOffers_dimensionOffer_twoDimensions: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary twoDimensions
 * @description
 *
 * Offer two-dimensional display object (`dimensions` = `"two"`;
 * default). ISO/IEC 9040:1997 §18.1.
 * @constant
 */
export
const twoDimensions: number = ParameterOffers_dimensionOffer_twoDimensions; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_dimensionOffer_threeDimensions
 * @description
 *
 * Offer three-dimensional display object (`dimensions` = `"three"`).
 * ISO/IEC 9040:1997 §18.1.
 * @constant
 */
export
const ParameterOffers_dimensionOffer_threeDimensions: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary threeDimensions
 * @description
 *
 * Offer three-dimensional display object (`dimensions` = `"three"`).
 * ISO/IEC 9040:1997 §18.1.
 * @constant
 */
export
const threeDimensions: number = ParameterOffers_dimensionOffer_threeDimensions; /* SHORT_NAMED_BIT */
export const _decode_ParameterOffers_dimensionOffer = $._decodeBitString;
export const _encode_ParameterOffers_dimensionOffer = $._encodeBitString;


/* eslint-enable */
