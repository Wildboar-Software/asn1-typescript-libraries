/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSOverNASIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOverNASIndicator  ::=  ENUMERATED
 * {
 *     sMSOverNASNotAllowed(1),
 *     sMSOverNASAllowed(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMSOverNASIndicator {
    sMSOverNASNotAllowed = 1,
    sMSOverNASAllowed = 2,
}

/**
 * @summary SMSOverNASIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOverNASIndicator  ::=  ENUMERATED
 * {
 *     sMSOverNASNotAllowed(1),
 *     sMSOverNASAllowed(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMSOverNASIndicator = _enum_for_SMSOverNASIndicator;

/**
 * @summary SMSOverNASIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOverNASIndicator  ::=  ENUMERATED
 * {
 *     sMSOverNASNotAllowed(1),
 *     sMSOverNASAllowed(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMSOverNASIndicator = _enum_for_SMSOverNASIndicator;

/**
 * @summary SMSOverNASIndicator_sMSOverNASNotAllowed
 * @constant
 * @type {number}
 */
export
const SMSOverNASIndicator_sMSOverNASNotAllowed: SMSOverNASIndicator = SMSOverNASIndicator.sMSOverNASNotAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSOverNASNotAllowed
 * @constant
 * @type {number}
 */
export
const sMSOverNASNotAllowed: SMSOverNASIndicator = SMSOverNASIndicator.sMSOverNASNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSOverNASIndicator_sMSOverNASAllowed
 * @constant
 * @type {number}
 */
export
const SMSOverNASIndicator_sMSOverNASAllowed: SMSOverNASIndicator = SMSOverNASIndicator.sMSOverNASAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSOverNASAllowed
 * @constant
 * @type {number}
 */
export
const sMSOverNASAllowed: SMSOverNASIndicator = SMSOverNASIndicator.sMSOverNASAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_SMSOverNASIndicator: $.ASN1Decoder<SMSOverNASIndicator> = $._decodeEnumerated;

export const _encode_SMSOverNASIndicator: $.ASN1Encoder<SMSOverNASIndicator> = $._encodeEnumerated;


/* eslint-enable */
