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
import { MAP_OpenInfo, _decode_MAP_OpenInfo, _encode_MAP_OpenInfo } from "../MAP-DialogueInformation/MAP-OpenInfo.ta.mjs";
// export { MAP_OpenInfo, _decode_MAP_OpenInfo, _encode_MAP_OpenInfo } from "../MAP-DialogueInformation/MAP-OpenInfo.ta.mjs";
import { MAP_AcceptInfo, _decode_MAP_AcceptInfo, _encode_MAP_AcceptInfo } from "../MAP-DialogueInformation/MAP-AcceptInfo.ta.mjs";
// export { MAP_AcceptInfo, _decode_MAP_AcceptInfo, _encode_MAP_AcceptInfo } from "../MAP-DialogueInformation/MAP-AcceptInfo.ta.mjs";
import { MAP_CloseInfo, _decode_MAP_CloseInfo, _encode_MAP_CloseInfo } from "../MAP-DialogueInformation/MAP-CloseInfo.ta.mjs";
// export { MAP_CloseInfo, _decode_MAP_CloseInfo, _encode_MAP_CloseInfo } from "../MAP-DialogueInformation/MAP-CloseInfo.ta.mjs";
import { MAP_RefuseInfo, _decode_MAP_RefuseInfo, _encode_MAP_RefuseInfo } from "../MAP-DialogueInformation/MAP-RefuseInfo.ta.mjs";
// export { MAP_RefuseInfo, _decode_MAP_RefuseInfo, _encode_MAP_RefuseInfo } from "../MAP-DialogueInformation/MAP-RefuseInfo.ta.mjs";
import { MAP_UserAbortInfo, _decode_MAP_UserAbortInfo, _encode_MAP_UserAbortInfo } from "../MAP-DialogueInformation/MAP-UserAbortInfo.ta.mjs";
// export { MAP_UserAbortInfo, _decode_MAP_UserAbortInfo, _encode_MAP_UserAbortInfo } from "../MAP-DialogueInformation/MAP-UserAbortInfo.ta.mjs";
import { MAP_ProviderAbortInfo, _decode_MAP_ProviderAbortInfo, _encode_MAP_ProviderAbortInfo } from "../MAP-DialogueInformation/MAP-ProviderAbortInfo.ta.mjs";
// export { MAP_ProviderAbortInfo, _decode_MAP_ProviderAbortInfo, _encode_MAP_ProviderAbortInfo } from "../MAP-DialogueInformation/MAP-ProviderAbortInfo.ta.mjs";


/**
 * @summary MAP_DialoguePDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-DialoguePDU  ::=  CHOICE {
 *     map-open    [0] MAP-OpenInfo,
 *     map-accept    [1] MAP-AcceptInfo,
 *     map-close    [2] MAP-CloseInfo,
 *     map-refuse    [3] MAP-RefuseInfo,
 *     map-userAbort    [4] MAP-UserAbortInfo,
 *     map-providerAbort    [5] MAP-ProviderAbortInfo}
 * ```
 */
export
type MAP_DialoguePDU =
    { map_open: MAP_OpenInfo } /* CHOICE_ALT_ROOT */
    | { map_accept: MAP_AcceptInfo } /* CHOICE_ALT_ROOT */
    | { map_close: MAP_CloseInfo } /* CHOICE_ALT_ROOT */
    | { map_refuse: MAP_RefuseInfo } /* CHOICE_ALT_ROOT */
    | { map_userAbort: MAP_UserAbortInfo } /* CHOICE_ALT_ROOT */
    | { map_providerAbort: MAP_ProviderAbortInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MAP_DialoguePDU: $.ASN1Decoder<MAP_DialoguePDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_DialoguePDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_DialoguePDU (el: _Element): MAP_DialoguePDU {
    if (!_cached_decoder_for_MAP_DialoguePDU) { _cached_decoder_for_MAP_DialoguePDU = $._decode_inextensible_choice<MAP_DialoguePDU>({
    "CONTEXT 0": [ "map_open", $._decode_implicit<MAP_OpenInfo>(() => _decode_MAP_OpenInfo) ],
    "CONTEXT 1": [ "map_accept", $._decode_implicit<MAP_AcceptInfo>(() => _decode_MAP_AcceptInfo) ],
    "CONTEXT 2": [ "map_close", $._decode_implicit<MAP_CloseInfo>(() => _decode_MAP_CloseInfo) ],
    "CONTEXT 3": [ "map_refuse", $._decode_implicit<MAP_RefuseInfo>(() => _decode_MAP_RefuseInfo) ],
    "CONTEXT 4": [ "map_userAbort", $._decode_implicit<MAP_UserAbortInfo>(() => _decode_MAP_UserAbortInfo) ],
    "CONTEXT 5": [ "map_providerAbort", $._decode_implicit<MAP_ProviderAbortInfo>(() => _decode_MAP_ProviderAbortInfo) ]
}); }
    return _cached_decoder_for_MAP_DialoguePDU(el);
}

let _cached_encoder_for_MAP_DialoguePDU: $.ASN1Encoder<MAP_DialoguePDU> | null = null;

/**
 * @summary Encodes a(n) MAP_DialoguePDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_DialoguePDU, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_DialoguePDU (value: MAP_DialoguePDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_DialoguePDU) { _cached_encoder_for_MAP_DialoguePDU = $._encode_choice<MAP_DialoguePDU>({
    "map_open": $._encode_implicit(_TagClass.context, 0, () => _encode_MAP_OpenInfo, $.BER),
    "map_accept": $._encode_implicit(_TagClass.context, 1, () => _encode_MAP_AcceptInfo, $.BER),
    "map_close": $._encode_implicit(_TagClass.context, 2, () => _encode_MAP_CloseInfo, $.BER),
    "map_refuse": $._encode_implicit(_TagClass.context, 3, () => _encode_MAP_RefuseInfo, $.BER),
    "map_userAbort": $._encode_implicit(_TagClass.context, 4, () => _encode_MAP_UserAbortInfo, $.BER),
    "map_providerAbort": $._encode_implicit(_TagClass.context, 5, () => _encode_MAP_ProviderAbortInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_MAP_DialoguePDU(value, elGetter);
}


/* eslint-enable */
