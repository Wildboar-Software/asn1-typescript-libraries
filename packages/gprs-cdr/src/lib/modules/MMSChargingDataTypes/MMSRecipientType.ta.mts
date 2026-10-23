/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSRecipientType
 * @description
 * 
 * Role of one address on a multi-recipient MM: To (`tO`), Cc (`cC`), or
 * Bcc (`bCC`). TS 32.270 does not define this indication.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRecipientType  ::=  ENUMERATED {
 *    tO          ( 0 ),
 *    cC          ( 1 ),
 *    bCC         ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSRecipientType {
    tO = 0,
    cC = 1,
    bCC = 2,
}

/**
 * @summary MMSRecipientType
 * @description
 * 
 * Role of one address on a multi-recipient MM: To (`tO`), Cc (`cC`), or
 * Bcc (`bCC`). TS 32.270 does not define this indication.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRecipientType  ::=  ENUMERATED {
 *    tO          ( 0 ),
 *    cC          ( 1 ),
 *    bCC         ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
type MMSRecipientType = _enum_for_MMSRecipientType;

/**
 * @summary MMSRecipientType
 * @description
 * 
 * Role of one address on a multi-recipient MM: To (`tO`), Cc (`cC`), or
 * Bcc (`bCC`). TS 32.270 does not define this indication.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRecipientType  ::=  ENUMERATED {
 *    tO          ( 0 ),
 *    cC          ( 1 ),
 *    bCC         ( 2 ) }
 * ```
 * 
 * @enum {number}
 */
export
const MMSRecipientType = _enum_for_MMSRecipientType;

/**
 * @summary MMSRecipientType_tO
 * @constant
 * @type {number}
 */
export
const MMSRecipientType_tO: MMSRecipientType = MMSRecipientType.tO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tO
 * @constant
 * @type {number}
 */
export
const tO: MMSRecipientType = MMSRecipientType.tO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRecipientType_cC
 * @constant
 * @type {number}
 */
export
const MMSRecipientType_cC: MMSRecipientType = MMSRecipientType.cC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cC
 * @constant
 * @type {number}
 */
export
const cC: MMSRecipientType = MMSRecipientType.cC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSRecipientType_bCC
 * @constant
 * @type {number}
 */
export
const MMSRecipientType_bCC: MMSRecipientType = MMSRecipientType.bCC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bCC
 * @constant
 * @type {number}
 */
export
const bCC: MMSRecipientType = MMSRecipientType.bCC; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MMSRecipientType: $.ASN1Decoder<MMSRecipientType> = $._decodeEnumerated;

export
const _encode_MMSRecipientType: $.ASN1Encoder<MMSRecipientType> = $._encodeEnumerated;

/* eslint-enable */
