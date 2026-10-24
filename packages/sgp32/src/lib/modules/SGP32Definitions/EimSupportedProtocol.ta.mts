/* eslint-disable */
import {
    ASN1Element as _Element,
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EimSupportedProtocol
 * @description
 * 
 * Which ESipa transport and which eIM Package transfer method this eIM
 * supports (SGP.32 v1.2, section 4.2). Bits may be combined. When the field is
 * omitted on add, the eUICC stores the value in which only eimProprietary is
 * set (section 2.11.1.1).
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
 * @description
 * Set when the eIM supports eIM Package retrieval (section 3.1.1.1) using
 * HTTPS over TCP as described in section 3.1.2.1 (SGP.32 v1.2, section 4.2).
 */
export
const EimSupportedProtocol_eimRetrieveHttps: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary eimRetrieveHttps
 * @constant
 * @description
 * eIM Package retrieval over HTTPS/TCP (SGP.32 v1.2, section 4.2).
 */
export
const eimRetrieveHttps: number = EimSupportedProtocol_eimRetrieveHttps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimRetrieveCoaps
 * @constant
 * @description
 * Set when the eIM supports eIM Package retrieval (section 3.1.1.1) using
 * CoAP/DTLS over UDP as described in section 3.1.2.2 (SGP.32 v1.2, section
 * 4.2).
 */
export
const EimSupportedProtocol_eimRetrieveCoaps: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary eimRetrieveCoaps
 * @constant
 * @description
 * eIM Package retrieval over CoAP/DTLS/UDP (SGP.32 v1.2, section 4.2).
 */
export
const eimRetrieveCoaps: number = EimSupportedProtocol_eimRetrieveCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimInjectHttps
 * @constant
 * @description
 * Set when the eIM supports eIM Package injection (section 3.1.1.2) using
 * HTTPS over TCP as described in section 3.1.2.1 (SGP.32 v1.2, section 4.2).
 */
export
const EimSupportedProtocol_eimInjectHttps: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary eimInjectHttps
 * @constant
 * @description
 * eIM Package injection over HTTPS/TCP (SGP.32 v1.2, section 4.2).
 */
export
const eimInjectHttps: number = EimSupportedProtocol_eimInjectHttps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimInjectCoaps
 * @constant
 * @description
 * Set when the eIM supports eIM Package injection (section 3.1.1.2) using
 * CoAP/DTLS over UDP as described in section 3.1.2.2 (SGP.32 v1.2, section
 * 4.2).
 */
export
const EimSupportedProtocol_eimInjectCoaps: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary eimInjectCoaps
 * @constant
 * @description
 * eIM Package injection over CoAP/DTLS/UDP (SGP.32 v1.2, section 4.2).
 */
export
const eimInjectCoaps: number = EimSupportedProtocol_eimInjectCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimProprietary
 * @constant
 * @description
 * Set when the eIM supports a transport outside section 3.1.2 (SGP.32 v1.2,
 * section 4.2). This is the only bit the eUICC sets when eimSupportedProtocol
 * is omitted on add (section 2.11.1.1).
 */
export
const EimSupportedProtocol_eimProprietary: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary eimProprietary
 * @constant
 * @description
 * A transport outside section 3.1.2; also the bit stored when the field is
 * omitted on add (SGP.32 v1.2, sections 4.2 and 2.11.1.1).
 */
export
const eimProprietary: number = EimSupportedProtocol_eimProprietary; /* SHORT_NAMED_BIT */
export const _decode_EimSupportedProtocol: $.ASN1Decoder<EimSupportedProtocol> = $._decodeBitString;
export const _encode_EimSupportedProtocol: $.ASN1Encoder<EimSupportedProtocol> = $._encodeBitString;


/* eslint-enable */
