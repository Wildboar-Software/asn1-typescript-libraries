/* eslint-disable */
import {
    ASN1Element as _Element,
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaCapabilities_ipaSupportedProtocols
 * @description
 * 
 * eIM Package transfer transports this IPA supports. A bit set to 1 means that
 * transport is supported. The field itself is optional on `IpaCapabilities`.
 * SGP.32 v1.2, section 4.1.
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
 * @description
 * Set to 1 for eIM Package retrieval (section 3.1.1.1) using HTTPS over TCP,
 * as described in section 3.1.2.1. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaRetrieveHttps: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ipaRetrieveHttps
 * @description
 * Set to 1 for eIM Package retrieval using HTTPS over TCP. SGP.32 v1.2,
 * section 4.1.
 * @constant
 */
export
const ipaRetrieveHttps: number = IpaCapabilities_ipaSupportedProtocols_ipaRetrieveHttps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaRetrieveCoaps
 * @description
 * Set to 1 for eIM Package retrieval (section 3.1.1.1) using CoAP/DTLS over
 * UDP, as described in section 3.1.2.2. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaRetrieveCoaps: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ipaRetrieveCoaps
 * @description
 * Set to 1 for eIM Package retrieval using CoAP/DTLS over UDP. SGP.32 v1.2,
 * section 4.1.
 * @constant
 */
export
const ipaRetrieveCoaps: number = IpaCapabilities_ipaSupportedProtocols_ipaRetrieveCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaInjectHttps
 * @description
 * Set to 1 for eIM Package injection (section 3.1.1.2) using HTTPS over TCP,
 * as described in section 3.1.2.1. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaInjectHttps: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ipaInjectHttps
 * @description
 * Set to 1 for eIM Package injection using HTTPS over TCP. SGP.32 v1.2,
 * section 4.1.
 * @constant
 */
export
const ipaInjectHttps: number = IpaCapabilities_ipaSupportedProtocols_ipaInjectHttps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaInjectCoaps
 * @description
 * Set to 1 for eIM Package injection (section 3.1.1.2) using CoAP/DTLS over
 * UDP, as described in section 3.1.2.2. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaInjectCoaps: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary ipaInjectCoaps
 * @description
 * Set to 1 for eIM Package injection using CoAP/DTLS over UDP. SGP.32 v1.2,
 * section 4.1.
 * @constant
 */
export
const ipaInjectCoaps: number = IpaCapabilities_ipaSupportedProtocols_ipaInjectCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary IpaCapabilities_ipaSupportedProtocols_ipaProprietary
 * @description
 * Set to 1 when the IPA supports a transport protocol that section 3.1.2 does
 * not describe. SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const IpaCapabilities_ipaSupportedProtocols_ipaProprietary: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary ipaProprietary
 * @description
 * Set to 1 for a transport protocol that section 3.1.2 does not describe.
 * SGP.32 v1.2, section 4.1.
 * @constant
 */
export
const ipaProprietary: number = IpaCapabilities_ipaSupportedProtocols_ipaProprietary; /* SHORT_NAMED_BIT */
export const _decode_IpaCapabilities_ipaSupportedProtocols: $.ASN1Decoder<IpaCapabilities_ipaSupportedProtocols> = $._decodeBitString;
export const _encode_IpaCapabilities_ipaSupportedProtocols: $.ASN1Encoder<IpaCapabilities_ipaSupportedProtocols> = $._encodeBitString;


/* eslint-enable */
