/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PeerDiscoveryDEF, _decode_PeerDiscoveryDEF, _encode_PeerDiscoveryDEF } from "../SCPP-MESSAGES/PeerDiscoveryDEF.ta.mjs";
import { PeerSetupDEF, _decode_PeerSetupDEF, _encode_PeerSetupDEF } from "../SCPP-MESSAGES/PeerSetupDEF.ta.mjs";
import { DataExchangeDEF, _decode_DataExchangeDEF, _encode_DataExchangeDEF } from "../SCPP-MESSAGES/DataExchangeDEF.ta.mjs";
import { PeerKeepAliveDEF, _decode_PeerKeepAliveDEF, _encode_PeerKeepAliveDEF } from "../SCPP-MESSAGES/PeerKeepAliveDEF.ta.mjs";
import { PeerReleaseDEF, _decode_PeerReleaseDEF, _encode_PeerReleaseDEF } from "../SCPP-MESSAGES/PeerReleaseDEF.ta.mjs";


/**
 * @summary SCPP_PDU_igcs_message_body
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCPP-PDU-igcs-message-body ::= CHOICE {
 *     peerDiscovery  PeerDiscoveryDEF,
 *     peerSetup      PeerSetupDEF,
 *     dataExchange   DataExchangeDEF,
 *     peerKeepAlive  PeerKeepAliveDEF,
 *     peerRelease    PeerReleaseDEF
 * }
 * ```
 */
export
type SCPP_PDU_igcs_message_body =
    { peerDiscovery: PeerDiscoveryDEF } /* CHOICE_ALT_ROOT */
    | { peerSetup: PeerSetupDEF } /* CHOICE_ALT_ROOT */
    | { dataExchange: DataExchangeDEF } /* CHOICE_ALT_ROOT */
    | { peerKeepAlive: PeerKeepAliveDEF } /* CHOICE_ALT_ROOT */
    | { peerRelease: PeerReleaseDEF } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SCPP_PDU_igcs_message_body: $.ASN1Decoder<SCPP_PDU_igcs_message_body> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCPP_PDU_igcs_message_body
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCPP_PDU_igcs_message_body (el: _Element): SCPP_PDU_igcs_message_body {
    if (!_cached_decoder_for_SCPP_PDU_igcs_message_body) { _cached_decoder_for_SCPP_PDU_igcs_message_body = $._decode_inextensible_choice<SCPP_PDU_igcs_message_body>({
    "CONTEXT 0": [ "peerDiscovery", _decode_PeerDiscoveryDEF ],
    "CONTEXT 1": [ "peerSetup", _decode_PeerSetupDEF ],
    "CONTEXT 2": [ "dataExchange", _decode_DataExchangeDEF ],
    "CONTEXT 3": [ "peerKeepAlive", _decode_PeerKeepAliveDEF ],
    "CONTEXT 4": [ "peerRelease", _decode_PeerReleaseDEF ]
}); }
    return _cached_decoder_for_SCPP_PDU_igcs_message_body(el);
}

let _cached_encoder_for_SCPP_PDU_igcs_message_body: $.ASN1Encoder<SCPP_PDU_igcs_message_body> | null = null;

/**
 * @summary Encodes a(n) SCPP_PDU_igcs_message_body into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCPP_PDU_igcs_message_body, encoded as an ASN.1 Element.
 */
export
function _encode_SCPP_PDU_igcs_message_body (value: SCPP_PDU_igcs_message_body, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCPP_PDU_igcs_message_body) { _cached_encoder_for_SCPP_PDU_igcs_message_body = $._encode_choice<SCPP_PDU_igcs_message_body>({
    "peerDiscovery": $._encode_implicit(_TagClass.context, 0, () => _encode_PeerDiscoveryDEF, $.BER),
    "peerSetup": $._encode_implicit(_TagClass.context, 1, () => _encode_PeerSetupDEF, $.BER),
    "dataExchange": $._encode_implicit(_TagClass.context, 2, () => _encode_DataExchangeDEF, $.BER),
    "peerKeepAlive": $._encode_implicit(_TagClass.context, 3, () => _encode_PeerKeepAliveDEF, $.BER),
    "peerRelease": $._encode_implicit(_TagClass.context, 4, () => _encode_PeerReleaseDEF, $.BER),
}, $.BER); }
    return _cached_encoder_for_SCPP_PDU_igcs_message_body(value, elGetter);
}


/* eslint-enable */
