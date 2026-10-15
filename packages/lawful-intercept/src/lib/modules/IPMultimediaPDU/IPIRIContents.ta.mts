/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../IPMultimediaPDU/SIPMessage.ta.mjs";
// export { SIPMessage, _decode_SIPMessage, _encode_SIPMessage } from "../IPMultimediaPDU/SIPMessage.ta.mjs";
import { H323Message, _decode_H323Message, _encode_H323Message } from "../IPMultimediaPDU/H323Message.ta.mjs";
// export { H323Message, _decode_H323Message, _encode_H323Message } from "../IPMultimediaPDU/H323Message.ta.mjs";
import { NationalIPMMIRIParameters, _decode_NationalIPMMIRIParameters, _encode_NationalIPMMIRIParameters } from "../IPMultimediaPDU/NationalIPMMIRIParameters.ta.mjs";
// export { NationalIPMMIRIParameters, _decode_NationalIPMMIRIParameters, _encode_NationalIPMMIRIParameters } from "../IPMultimediaPDU/NationalIPMMIRIParameters.ta.mjs";


/**
 * @summary IPIRIContents
 * @description
 *
 * The intercepted IP multimedia signalling carried in one `IPMMIRI`.
 *
 * SIP (IETF RFC 3261) and H.323 are reported either as the original IP
 * packet, headers included, or as the application message plus the
 * network-layer addresses of that message (clauses 5.2.1, 5.2.2, and
 * 5.2.7). XCAP (IETF RFC 4825), including the 3GPP Ut interface, is
 * the HTTP message only (clause 5.2.4). National parameters are a
 * separate alternative and are delivered as an IRI-REPORT record.
 *
 * IRI-only intercepts that must remove message content use
 * `iRIOnlyOriginalIPMMMessage` or `iRIOnlySIPMessage` so the receiver
 * can tell that the body was modified (clause 5.2.6). Post-dialled
 * digits carried as RTP telephony events use `iRIOnlyRTPPacket`
 * (clause 5.2.8).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5.2 and 7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPIRIContents  ::=  CHOICE
 * {
 *     originalIPMMMessage         [0] OCTET STRING,
 *         -- Copy of the IP MM signalling packet including the original IP and UDP/TCP headers
 *     sIPMessage                  [1] SIPMessage,
 *         -- Copy of the SIP content and the source and destination IP address of the intercepted
 *         -- SIP message as transmitted on the network layer (see clause 5.2.7).
 *     h323Message                 [2] H323Message,
 *         -- Copy of the H.323 content and the source and destination IP address of the intercepted
 *         -- H.323 message as transmitted on the network layer (see clause 5.2.7).
 *     ...,
 *     nationalIPMMIRIParameters   [3] NationalIPMMIRIParameters,
 *         -- This parameter is used according to national regulations
 *         -- This parameter shall be delivered as an IRI-Report-record
 *     xCAPMessage                 [4] OCTET STRING,
 *         -- Copy of the XCAP message including all HTTP headers and contents
 *     iRIOnlyOriginalIPMMMessage  [5] OCTET STRING,
 *         -- Copy of the IP MM signalling packet including the original IP and UDP/TCP headers
 *         -- see clause 5.2.6.
 *     iRIOnlySIPMessage           [6] SIPMessage,
 *         -- Copy of the SIP content and the source and destination IP address of the intercepted
 *         -- SIP message as transmitted on the network layer.
 *         -- (see clause 5.2.6 and 5.2.7).
 *     iRIOnlyRTPPacket            [7] OCTET STRING
 *         -- Copy of the RTP packet containing telephony events including the original IP and UDP headers
 *         -- (see clause 5.2.8.1).
 * }
 * ```
 */
export
type IPIRIContents =
    /**
     * Copy of the IP multimedia signalling packet, including the
     * original IP header and the UDP or TCP header.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 7.
     */
    { originalIPMMMessage: OCTET_STRING } /* CHOICE_ALT_ROOT */
    /**
     * SIP message, with the source and destination IP addresses of
     * that message as transmitted on the network layer. Those
     * addresses are not replaced by addresses of the signalling server
     * (clause 5.2.7). All SIP messages executed on behalf of the
     * target are subject to interception (clause 5.2.1). If the true
     * called party is carried in SIP INFO rather than in RTP, those
     * SIP messages are reported with this alternative (clause 5.2.8).
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5.2.1, 5.2.7, and
     * 5.2.8.
     */
    | { sIPMessage: SIPMessage } /* CHOICE_ALT_ROOT */
    /**
     * H.323 message, with the source and destination IP addresses of
     * that message as transmitted on the network layer (clause 5.2.7).
     * Call signalling (H.225.0), call control (H.245), H.450.x
     * supplementary-service signalling, subscriber-controlled input,
     * and available RAS are subject to interception (clause 5.2.2).
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5.2.2 and 5.2.7.
     */
    | { h323Message: H323Message } /* CHOICE_ALT_ROOT */
    /**
     * National parameters, populated under national regulations and
     * delivered as an IRI-REPORT record.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 7.
     */
    | { nationalIPMMIRIParameters: NationalIPMMIRIParameters } /* CHOICE_ALT_EXT */
    /**
     * One XCAP message sent or received on behalf of the target: the
     * complete HTTP application-layer contents, including all headers,
     * and not the underlying TCP/IP messages. The HTTP request and its
     * response share one CIN (clause 5.3.3).
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5.2.4 and 5.3.3.
     */
    | { xCAPMessage: OCTET_STRING } /* CHOICE_ALT_EXT */
    /**
     * Same layout as `originalIPMMMessage`, used when national
     * legislation requires the message body to be removed or modified
     * for an IRI-only intercept (clause B.1). This alternative signals
     * that the original body was modified. Transport-layer checksums
     * may no longer validate.
     *
     * For SMS in a SIP `MESSAGE` body
     * (`application/vnd.3gpp.sms`), each content element in
     * TP-User-Data is replaced by the equivalent of "Space" in the
     * original encoding, for the length given by TP-User-Data-Length
     * and accounting for UDHL when the user-data header is present
     * (3GPP TS 23.040). Information elements that are not classified
     * as "SMS Control" are converted to filler. The overall length of
     * TP-User-Data, and of the header when present, does not change.
     * The Data Coding Scheme (3GPP TS 23.038) is taken into account.
     * Content removal for messaging protocols other than SMS is for
     * further study.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.2.6.
     */
    | { iRIOnlyOriginalIPMMMessage: OCTET_STRING } /* CHOICE_ALT_EXT */
    /**
     * Same layout as `sIPMessage`, used when the SIP body has been
     * modified or removed for an IRI-only intercept. SMS redaction is
     * the procedure described for `iRIOnlyOriginalIPMMMessage`. Source
     * and destination addresses still follow clause 5.2.7.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5.2.6 and 5.2.7.
     */
    | { iRIOnlySIPMessage: SIPMessage } /* CHOICE_ALT_EXT */
    /**
     * One IP/UDP/RTP packet that carries post-dialled digits as RTP
     * telephony events (for example DTMF), including the original IP
     * and UDP headers. Used when the true called-party address is sent
     * on the media path after the initial SIP INVITE named an
     * intermediary. Reporting is provisioned per intercept. Each packet
     * uses the CIN of the associated session. The CSP may need to pass
     * CC to the mediation function so those RTP packets can be
     * extracted.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.2.8.1.
     */
    | { iRIOnlyRTPPacket: OCTET_STRING } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IPIRIContents: $.ASN1Decoder<IPIRIContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPIRIContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPIRIContents (el: _Element): IPIRIContents {
    if (!_cached_decoder_for_IPIRIContents) { _cached_decoder_for_IPIRIContents = $._decode_extensible_choice<IPIRIContents>({
    "CONTEXT 0": [ "originalIPMMMessage", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "sIPMessage", $._decode_implicit<SIPMessage>(() => _decode_SIPMessage) ],
    "CONTEXT 2": [ "h323Message", $._decode_implicit<H323Message>(() => _decode_H323Message) ],
    "CONTEXT 3": [ "nationalIPMMIRIParameters", $._decode_implicit<NationalIPMMIRIParameters>(() => _decode_NationalIPMMIRIParameters) ],
    "CONTEXT 4": [ "xCAPMessage", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 5": [ "iRIOnlyOriginalIPMMMessage", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 6": [ "iRIOnlySIPMessage", $._decode_implicit<SIPMessage>(() => _decode_SIPMessage) ],
    "CONTEXT 7": [ "iRIOnlyRTPPacket", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_IPIRIContents(el);
}

let _cached_encoder_for_IPIRIContents: $.ASN1Encoder<IPIRIContents> | null = null;

/**
 * @summary Encodes a(n) IPIRIContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPIRIContents, encoded as an ASN.1 Element.
 */
export
function _encode_IPIRIContents (value: IPIRIContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPIRIContents) { _cached_encoder_for_IPIRIContents = $._encode_choice<IPIRIContents>({
    "originalIPMMMessage": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "sIPMessage": $._encode_implicit(_TagClass.context, 1, () => _encode_SIPMessage, $.BER),
    "h323Message": $._encode_implicit(_TagClass.context, 2, () => _encode_H323Message, $.BER),
    "nationalIPMMIRIParameters": $._encode_implicit(_TagClass.context, 3, () => _encode_NationalIPMMIRIParameters, $.BER),
    "xCAPMessage": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
    "iRIOnlyOriginalIPMMMessage": $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER),
    "iRIOnlySIPMessage": $._encode_implicit(_TagClass.context, 6, () => _encode_SIPMessage, $.BER),
    "iRIOnlyRTPPacket": $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_IPIRIContents(value, elGetter);
}


/* eslint-enable */
