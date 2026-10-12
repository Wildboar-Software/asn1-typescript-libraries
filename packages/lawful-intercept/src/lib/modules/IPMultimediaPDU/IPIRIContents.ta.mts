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
    { originalIPMMMessage: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { sIPMessage: SIPMessage } /* CHOICE_ALT_ROOT */
    | { h323Message: H323Message } /* CHOICE_ALT_ROOT */
    | { nationalIPMMIRIParameters: NationalIPMMIRIParameters } /* CHOICE_ALT_EXT */
    | { xCAPMessage: OCTET_STRING } /* CHOICE_ALT_EXT */
    | { iRIOnlyOriginalIPMMMessage: OCTET_STRING } /* CHOICE_ALT_EXT */
    | { iRIOnlySIPMessage: SIPMessage } /* CHOICE_ALT_EXT */
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
