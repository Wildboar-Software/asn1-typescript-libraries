/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { PeerDiscoveryDEF, _decode_PeerDiscoveryDEF, _encode_PeerDiscoveryDEF } from "../SCPP-MESSAGES/PeerDiscoveryDEF.ta.mjs";
// export { PeerDiscoveryDEF, _decode_PeerDiscoveryDEF, _encode_PeerDiscoveryDEF } from "../SCPP-MESSAGES/PeerDiscoveryDEF.ta.mjs";
import { PeerSetupDEF, _decode_PeerSetupDEF, _encode_PeerSetupDEF } from "../SCPP-MESSAGES/PeerSetupDEF.ta.mjs";
// export { PeerSetupDEF, _decode_PeerSetupDEF, _encode_PeerSetupDEF } from "../SCPP-MESSAGES/PeerSetupDEF.ta.mjs";
import { DataExchangeDEF, _decode_DataExchangeDEF, _encode_DataExchangeDEF } from "../SCPP-MESSAGES/DataExchangeDEF.ta.mjs";
// export { DataExchangeDEF, _decode_DataExchangeDEF, _encode_DataExchangeDEF } from "../SCPP-MESSAGES/DataExchangeDEF.ta.mjs";
import { PeerKeepAliveDEF, _decode_PeerKeepAliveDEF, _encode_PeerKeepAliveDEF } from "../SCPP-MESSAGES/PeerKeepAliveDEF.ta.mjs";
// export { PeerKeepAliveDEF, _decode_PeerKeepAliveDEF, _encode_PeerKeepAliveDEF } from "../SCPP-MESSAGES/PeerKeepAliveDEF.ta.mjs";
import { PeerReleaseDEF, _decode_PeerReleaseDEF, _encode_PeerReleaseDEF } from "../SCPP-MESSAGES/PeerReleaseDEF.ta.mjs";
// export { PeerReleaseDEF, _decode_PeerReleaseDEF, _encode_PeerReleaseDEF } from "../SCPP-MESSAGES/PeerReleaseDEF.ta.mjs";


/**
 * @summary SCPP_PDU_igcs_message_body
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCPP-PDU-igcs-message-body ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
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
    "peerDiscovery": _encode_PeerDiscoveryDEF,
    "peerSetup": _encode_PeerSetupDEF,
    "dataExchange": _encode_DataExchangeDEF,
    "peerKeepAlive": _encode_PeerKeepAliveDEF,
    "peerRelease": _encode_PeerReleaseDEF,
}, $.BER); }
    return _cached_encoder_for_SCPP_PDU_igcs_message_body(value, elGetter);
}


/* eslint-enable */
