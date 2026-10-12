/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaCapabilities_ipaSupportedProtocols
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaCapabilities-ipaSupportedProtocols ::= BIT STRING {
 *     ipaRetrieveHttps(0),
 *     ipaRetrieveCoaps(1),
 *     ipaInjectHttps(2),
 *     ipaInjectCoaps(3),
 *     ipaProprietary(4)
 * }
 * ```
 */
export
type IpaCapabilities_ipaSupportedProtocols = BIT_STRING;

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaRetrieveHttps
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaRetrieveHttps: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ipaRetrieveHttps
 * @constant
 */
export
const ipaRetrieveHttps: number = IpaCapabilities_ipaSupportedProtocols_ipaRetrieveHttps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaRetrieveCoaps
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaRetrieveCoaps: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ipaRetrieveCoaps
 * @constant
 */
export
const ipaRetrieveCoaps: number = IpaCapabilities_ipaSupportedProtocols_ipaRetrieveCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaInjectHttps
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaInjectHttps: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ipaInjectHttps
 * @constant
 */
export
const ipaInjectHttps: number = IpaCapabilities_ipaSupportedProtocols_ipaInjectHttps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaInjectCoaps
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaInjectCoaps: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ipaInjectCoaps
 * @constant
 */
export
const ipaInjectCoaps: number = IpaCapabilities_ipaSupportedProtocols_ipaInjectCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaProprietary
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaProprietary: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ipaProprietary
 * @constant
 */
export
const ipaProprietary: number = IpaCapabilities_ipaSupportedProtocols_ipaProprietary; /* SHORT_NAMED_BIT */
export const _decode_IpaCapabilities_ipaSupportedProtocols: $.ASN1Decoder<IpaCapabilities_ipaSupportedProtocols> = $._decodeBitString;
export const _encode_IpaCapabilities_ipaSupportedProtocols: $.ASN1Encoder<IpaCapabilities_ipaSupportedProtocols> = $._encodeBitString;


/* eslint-enable */
