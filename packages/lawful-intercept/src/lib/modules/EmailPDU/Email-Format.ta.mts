/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Email_Format
 * @description
 *
 * How email captured content is framed.
 *
 * `ip-packet` is the constituent IP packets of the email, including TCP
 * acknowledgements, used when a wire-level record is required. `application` is
 * the set of commands and data that constitute the email (the TCP payload).
 * Annex I notes that application content can be built from a TCP stream or from
 * an application intercept, so a hybrid intercept can still produce one HI3
 * format.
 *
 * STARTTLS (IETF RFC 3207 for SMTP, IETF RFC 2595 and IETF RFC 4616 for POP3
 * and IMAP) prevents the clause E.1 and E.2 requirements from being met on an
 * IP-packet intercept unless the decryption key is available.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses E.2.7 and E.2.8 and annex I.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
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
    /**
     * Bytes of each IP packet from the IP header through the end of the packet.
     * Meets requirement E.2.7.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause E.2.7.
     */
    ip_packet = 1,
    /**
     * Only the IP-stack layer-4 payload: no IP or TCP headers. Meets
     * requirement E.2.8.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause E.2.8.
     */
    application = 2,
}

/**
 * @summary Email_Format
 * @description
 *
 * How email captured content is framed.
 *
 * `ip-packet` is the constituent IP packets of the email, including TCP
 * acknowledgements, used when a wire-level record is required. `application` is
 * the set of commands and data that constitute the email (the TCP payload).
 * Annex I notes that application content can be built from a TCP stream or from
 * an application intercept, so a hybrid intercept can still produce one HI3
 * format.
 *
 * STARTTLS (IETF RFC 3207 for SMTP, IETF RFC 2595 and IETF RFC 4616 for POP3
 * and IMAP) prevents the clause E.1 and E.2 requirements from being met on an
 * IP-packet intercept unless the decryption key is available.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses E.2.7 and E.2.8 and annex I.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
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
 * How email captured content is framed.
 *
 * `ip-packet` is the constituent IP packets of the email, including TCP
 * acknowledgements, used when a wire-level record is required. `application` is
 * the set of commands and data that constitute the email (the TCP payload).
 * Annex I notes that application content can be built from a TCP stream or from
 * an application intercept, so a hybrid intercept can still produce one HI3
 * format.
 *
 * STARTTLS (IETF RFC 3207 for SMTP, IETF RFC 2595 and IETF RFC 4616 for POP3
 * and IMAP) prevents the clause E.1 and E.2 requirements from being met on an
 * IP-packet intercept unless the decryption key is available.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses E.2.7 and E.2.8 and annex I.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
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
 * @description
 *
 * Bytes of each IP packet from the IP header through the end of the packet.
 * Meets requirement E.2.7.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause E.2.7.
 *
 * @constant
 * @type {number}
 */
export
const Email_Format_ip_packet = Email_Format.ip_packet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ip_packet
 * @description
 *
 * Bytes of each IP packet from the IP header through the end of the packet.
 * Meets requirement E.2.7.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause E.2.7.
 *
 * @constant
 * @type {number}
 */
export
const ip_packet = Email_Format.ip_packet; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Email_Format_application
 * @description
 *
 * Only the IP-stack layer-4 payload: no IP or TCP headers. Meets requirement
 * E.2.8.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause E.2.8.
 *
 * @constant
 * @type {number}
 */
export
const Email_Format_application = Email_Format.application; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary application
 * @description
 *
 * Only the IP-stack layer-4 payload: no IP or TCP headers. Meets requirement
 * E.2.8.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause E.2.8.
 *
 * @constant
 * @type {number}
 */
export
const application = Email_Format.application; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Email_Format: $.ASN1Decoder<Email_Format> = $._decodeEnumerated;
export const _encode_Email_Format: $.ASN1Encoder<Email_Format> = $._encodeEnumerated;


/* eslint-enable */
