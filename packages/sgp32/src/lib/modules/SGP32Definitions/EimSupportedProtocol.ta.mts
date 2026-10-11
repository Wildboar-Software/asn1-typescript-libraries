/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EimSupportedProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimSupportedProtocol  ::=  BIT STRING {
 *     eimRetrieveHttps(0),
 *     eimRetrieveCoaps(1),
 *     eimInjectHttps(2),
 *     eimInjectCoaps(3),
 *     eimProprietary(4)
 * }
 * ```
 */
export
type EimSupportedProtocol = BIT_STRING;

/**
 * @summary EimSupportedProtocol_eimRetrieveHttps
 * @constant
 */
export
const EimSupportedProtocol_eimRetrieveHttps: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary eimRetrieveHttps
 * @constant
 */
export
const eimRetrieveHttps: number = EimSupportedProtocol_eimRetrieveHttps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimRetrieveCoaps
 * @constant
 */
export
const EimSupportedProtocol_eimRetrieveCoaps: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary eimRetrieveCoaps
 * @constant
 */
export
const eimRetrieveCoaps: number = EimSupportedProtocol_eimRetrieveCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimInjectHttps
 * @constant
 */
export
const EimSupportedProtocol_eimInjectHttps: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary eimInjectHttps
 * @constant
 */
export
const eimInjectHttps: number = EimSupportedProtocol_eimInjectHttps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimInjectCoaps
 * @constant
 */
export
const EimSupportedProtocol_eimInjectCoaps: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary eimInjectCoaps
 * @constant
 */
export
const eimInjectCoaps: number = EimSupportedProtocol_eimInjectCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimProprietary
 * @constant
 */
export
const EimSupportedProtocol_eimProprietary: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary eimProprietary
 * @constant
 */
export
const eimProprietary: number = EimSupportedProtocol_eimProprietary; /* SHORT_NAMED_BIT */
export const _decode_EimSupportedProtocol: $.ASN1Decoder<EimSupportedProtocol> = $._decodeBitString;
export const _encode_EimSupportedProtocol: $.ASN1Encoder<EimSupportedProtocol> = $._encodeBitString;


/* eslint-enable */
