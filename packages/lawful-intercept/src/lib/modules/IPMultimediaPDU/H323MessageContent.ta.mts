/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary H323MessageContent
 * @description
 *
 * The H.323 PDU inside an intercepted `H323Message`, selected by
 * protocol.
 *
 * H.225.0 call signalling, H.245 call control, and available H.225.0
 * RAS are each a named alternative (clause 5.2.2). The specification
 * does not define the contents of `genericMessageContent`, and it
 * does not say which alternative carries H.450.x or
 * subscriber-controlled input.
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5.2.2 and 7.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * H323MessageContent  ::=  CHOICE
 * {
 *     h225CSMessageContent        [0] OCTET STRING,
 *     h225RASMessageContent       [1] OCTET STRING,
 *     h245MessageContent          [2] OCTET STRING,
 *     genericMessageContent       [3] OCTET STRING,
 *     ...
 * }
 * ```
 */
export
type H323MessageContent =
    /**
     * H.225.0 call-signalling PDU (ITU-T H.225.0). Clause 5.2.2 calls
     * this basic call signalling.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.2.2.
     */
    { h225CSMessageContent: OCTET_STRING } /* CHOICE_ALT_ROOT */
    /**
     * H.225.0 Registration, Administration, and Status PDU. Intercepted
     * when the events are available at the IRI IIF.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.2.2.
     */
    | { h225RASMessageContent: OCTET_STRING } /* CHOICE_ALT_ROOT */
    /**
     * H.245 call-control PDU (ITU-T H.245).
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.2.2.
     */
    | { h245MessageContent: OCTET_STRING } /* CHOICE_ALT_ROOT */
    /**
     * The specification names this alternative and does not define its
     * contents.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 7.
     */
    | { genericMessageContent: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_H323MessageContent: $.ASN1Decoder<H323MessageContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) H323MessageContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_H323MessageContent (el: _Element): H323MessageContent {
    if (!_cached_decoder_for_H323MessageContent) { _cached_decoder_for_H323MessageContent = $._decode_extensible_choice<H323MessageContent>({
    "CONTEXT 0": [ "h225CSMessageContent", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "h225RASMessageContent", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "h245MessageContent", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "genericMessageContent", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_H323MessageContent(el);
}

let _cached_encoder_for_H323MessageContent: $.ASN1Encoder<H323MessageContent> | null = null;

/**
 * @summary Encodes a(n) H323MessageContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The H323MessageContent, encoded as an ASN.1 Element.
 */
export
function _encode_H323MessageContent (value: H323MessageContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_H323MessageContent) { _cached_encoder_for_H323MessageContent = $._encode_choice<H323MessageContent>({
    "h225CSMessageContent": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "h225RASMessageContent": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "h245MessageContent": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "genericMessageContent": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_H323MessageContent(value, elGetter);
}


/* eslint-enable */
