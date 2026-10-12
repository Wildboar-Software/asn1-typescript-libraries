/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Email_Format
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Email-Format  ::=  ENUMERATED
 * {
 *     ip-packet(1),
 *         -- When this is the email format, the content will contain the bytes of the IP packet from
 *         -- the IP header through to the end of the IP packet
 *         -- Meets requirement E.2.7
 *     application(2)
 *         -- Only the IP stack Layer 4 payload, (i.e. no IP or TCP headers)
 *         -- Meets requirement E.2.8
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Email_Format {
    ip_packet = 1,
    application = 2,
}

/**
 * @summary Email_Format
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Email-Format  ::=  ENUMERATED
 * {
 *     ip-packet(1),
 *         -- When this is the email format, the content will contain the bytes of the IP packet from
 *         -- the IP header through to the end of the IP packet
 *         -- Meets requirement E.2.7
 *     application(2)
 *         -- Only the IP stack Layer 4 payload, (i.e. no IP or TCP headers)
 *         -- Meets requirement E.2.8
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Email_Format = _enum_for_Email_Format;

/**
 * @summary Email_Format
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Email-Format  ::=  ENUMERATED
 * {
 *     ip-packet(1),
 *         -- When this is the email format, the content will contain the bytes of the IP packet from
 *         -- the IP header through to the end of the IP packet
 *         -- Meets requirement E.2.7
 *     application(2)
 *         -- Only the IP stack Layer 4 payload, (i.e. no IP or TCP headers)
 *         -- Meets requirement E.2.8
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Email_Format = _enum_for_Email_Format;

/**
 * @summary Email_Format_ip_packet
 * @constant
 * @type {number}
 */
export
const Email_Format_ip_packet: Email_Format = Email_Format.ip_packet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ip_packet
 * @constant
 * @type {number}
 */
export
const ip_packet: Email_Format = Email_Format.ip_packet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Email_Format_application
 * @constant
 * @type {number}
 */
export
const Email_Format_application: Email_Format = Email_Format.application; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary application
 * @constant
 * @type {number}
 */
export
const application: Email_Format = Email_Format.application; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Email_Format: $.ASN1Decoder<Email_Format> = $._decodeEnumerated;
export const _encode_Email_Format: $.ASN1Encoder<Email_Format> = $._encodeEnumerated;


/* eslint-enable */
