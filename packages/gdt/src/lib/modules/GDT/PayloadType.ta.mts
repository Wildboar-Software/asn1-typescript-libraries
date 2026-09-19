/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PayloadType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadType  ::=  INTEGER {
 *     dmt-unknown     (1000), -- UNKNOWN
 *     dmt-r14p        (2000), -- GDT
 *     dmt-layer2      (0),    -- General layer 2
 *     dmt-ip          (1),    -- Internet Protocol (IP)
 *     dmt-sctp        (2),    -- Stream Control Transmission Protocol (SCTP)
 *     dmt-tcp         (3),    -- Transmission Control Protocol (TCP)
 *     dmt-udp         (4),    -- User Datagram Protocol (UDP)
 *     dmt-m3ua        (5),    -- MTP Level 3 (MTP3) User Adaptation Layer
 *     dmt-m2ua        (6),    -- Message Transfer Part 2 User Adaptation Layer (M2UA)
 *     dmt-mtp3        (7),    -- MTP Level 3 (MTP3)
 *     dmt-isup        (8),    -- ISDN User Part (ISUP)
 *     dmt-h248        (9),    -- H.248 or Megaco or Gateway Control Protocol
 *     dmt-sccp        (10),   -- Signalling Connection Control Part (SCCP)
 *     dmt-smstpdu     (11),   -- SMS TPDU 3GPP TS 23.040
 *     dmt-smpp        (12),   -- Short Message Peer-to-Peer (SMPP)
 *     dmt-tcap        (13),   -- Transaction Capabilities Application Part (TCAP)
 *     dmt-rtp         (14),   -- Real-time Transport Protocol (RTP)
 *     dmt-sip         (15),   -- Session Initiation Protocol (SIP)
 *     dmt-pop3        (16),   -- Post Office Protocol (POP3)
 *     dmt-imap        (17),   -- Internet message access protocol (IMAP)
 *     dmt-http        (18),   -- Hypertext Transfer Protocol (HTTP)
 *     dmt-radius      (19),   -- Remote Authentication Dial In User Service (RADIUS)
 *     dmt-dhcp        (20),   -- Dynamic Host Configuration Protocol (DHCP)
 *     dmt-smtp        (21),   -- Simple Mail Transfer Protocol (SMTP)
 *     dmt-m2pa        (22),   -- Message Transfer Part 2 (MTP) User Peer-to-Peer Adaptation Layer (M2PA)
 *     dmt-mtp2        (23)    -- MTP Level 2 (MTP2)
 * }
 * ```
 */
export
type PayloadType = INTEGER;

/**
 * @summary PayloadType_dmt_unknown
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_unknown: PayloadType = 1000; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_unknown
 * @constant
 * @type {number}
 */
export
const dmt_unknown: PayloadType = PayloadType_dmt_unknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_r14p
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_r14p: PayloadType = 2000; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_r14p
 * @constant
 * @type {number}
 */
export
const dmt_r14p: PayloadType = PayloadType_dmt_r14p; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_layer2
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_layer2: PayloadType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_layer2
 * @constant
 * @type {number}
 */
export
const dmt_layer2: PayloadType = PayloadType_dmt_layer2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_ip
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_ip: PayloadType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_ip
 * @constant
 * @type {number}
 */
export
const dmt_ip: PayloadType = PayloadType_dmt_ip; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_sctp
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_sctp: PayloadType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_sctp
 * @constant
 * @type {number}
 */
export
const dmt_sctp: PayloadType = PayloadType_dmt_sctp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_tcp
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_tcp: PayloadType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_tcp
 * @constant
 * @type {number}
 */
export
const dmt_tcp: PayloadType = PayloadType_dmt_tcp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_udp
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_udp: PayloadType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_udp
 * @constant
 * @type {number}
 */
export
const dmt_udp: PayloadType = PayloadType_dmt_udp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_m3ua
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_m3ua: PayloadType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_m3ua
 * @constant
 * @type {number}
 */
export
const dmt_m3ua: PayloadType = PayloadType_dmt_m3ua; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_m2ua
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_m2ua: PayloadType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_m2ua
 * @constant
 * @type {number}
 */
export
const dmt_m2ua: PayloadType = PayloadType_dmt_m2ua; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_mtp3
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_mtp3: PayloadType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_mtp3
 * @constant
 * @type {number}
 */
export
const dmt_mtp3: PayloadType = PayloadType_dmt_mtp3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_isup
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_isup: PayloadType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_isup
 * @constant
 * @type {number}
 */
export
const dmt_isup: PayloadType = PayloadType_dmt_isup; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_h248
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_h248: PayloadType = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_h248
 * @constant
 * @type {number}
 */
export
const dmt_h248: PayloadType = PayloadType_dmt_h248; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_sccp
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_sccp: PayloadType = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_sccp
 * @constant
 * @type {number}
 */
export
const dmt_sccp: PayloadType = PayloadType_dmt_sccp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_smstpdu
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_smstpdu: PayloadType = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_smstpdu
 * @constant
 * @type {number}
 */
export
const dmt_smstpdu: PayloadType = PayloadType_dmt_smstpdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_smpp
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_smpp: PayloadType = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_smpp
 * @constant
 * @type {number}
 */
export
const dmt_smpp: PayloadType = PayloadType_dmt_smpp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_tcap
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_tcap: PayloadType = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_tcap
 * @constant
 * @type {number}
 */
export
const dmt_tcap: PayloadType = PayloadType_dmt_tcap; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_rtp
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_rtp: PayloadType = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_rtp
 * @constant
 * @type {number}
 */
export
const dmt_rtp: PayloadType = PayloadType_dmt_rtp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_sip
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_sip: PayloadType = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_sip
 * @constant
 * @type {number}
 */
export
const dmt_sip: PayloadType = PayloadType_dmt_sip; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_pop3
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_pop3: PayloadType = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_pop3
 * @constant
 * @type {number}
 */
export
const dmt_pop3: PayloadType = PayloadType_dmt_pop3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_imap
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_imap: PayloadType = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_imap
 * @constant
 * @type {number}
 */
export
const dmt_imap: PayloadType = PayloadType_dmt_imap; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_http
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_http: PayloadType = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_http
 * @constant
 * @type {number}
 */
export
const dmt_http: PayloadType = PayloadType_dmt_http; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_radius
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_radius: PayloadType = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_radius
 * @constant
 * @type {number}
 */
export
const dmt_radius: PayloadType = PayloadType_dmt_radius; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_dhcp
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_dhcp: PayloadType = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_dhcp
 * @constant
 * @type {number}
 */
export
const dmt_dhcp: PayloadType = PayloadType_dmt_dhcp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_smtp
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_smtp: PayloadType = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_smtp
 * @constant
 * @type {number}
 */
export
const dmt_smtp: PayloadType = PayloadType_dmt_smtp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_m2pa
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_m2pa: PayloadType = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_m2pa
 * @constant
 * @type {number}
 */
export
const dmt_m2pa: PayloadType = PayloadType_dmt_m2pa; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_mtp2
 * @constant
 * @type {number}
 */
export
const PayloadType_dmt_mtp2: PayloadType = 23; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PayloadType_dmt_mtp2
 * @constant
 * @type {number}
 */
export
const dmt_mtp2: PayloadType = PayloadType_dmt_mtp2; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_PayloadType: $.ASN1Decoder<PayloadType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PayloadType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PayloadType (el: _Element): PayloadType {
    if (!_cached_decoder_for_PayloadType) { _cached_decoder_for_PayloadType = $._decodeInteger; }
    return _cached_decoder_for_PayloadType(el);
}

let _cached_encoder_for_PayloadType: $.ASN1Encoder<PayloadType> | null = null;

/**
 * @summary Encodes a(n) PayloadType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadType, encoded as an ASN.1 Element.
 */
export
function _encode_PayloadType (value: PayloadType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PayloadType) { _cached_encoder_for_PayloadType = $._encodeInteger; }
    return _cached_encoder_for_PayloadType(value, elGetter);
}


/* eslint-enable */
