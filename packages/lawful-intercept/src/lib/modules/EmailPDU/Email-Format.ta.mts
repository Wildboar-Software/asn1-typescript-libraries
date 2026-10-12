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

let _cached_decoder_for_Email_Format: $.ASN1Decoder<Email_Format> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Email_Format
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Email_Format (el: _Element): Email_Format {
    if (!_cached_decoder_for_Email_Format) { _cached_decoder_for_Email_Format = $._decodeEnumerated; }
    return _cached_decoder_for_Email_Format(el);
}

let _cached_encoder_for_Email_Format: $.ASN1Encoder<Email_Format> | null = null;

/**
 * @summary Encodes a(n) Email_Format into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Email_Format, encoded as an ASN.1 Element.
 */
export
function _encode_Email_Format (value: Email_Format, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Email_Format) { _cached_encoder_for_Email_Format = $._encodeEnumerated; }
    return _cached_encoder_for_Email_Format(value, elGetter);
}


/* eslint-enable */
