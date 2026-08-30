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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PDP_ContextInfoList, _decode_PDP_ContextInfoList, _encode_PDP_ContextInfoList } from "../MAP-MS-DataTypes/PDP-ContextInfoList.ta.mjs";
// export { PDP_ContextInfoList, _decode_PDP_ContextInfoList, _encode_PDP_ContextInfoList } from "../MAP-MS-DataTypes/PDP-ContextInfoList.ta.mjs";
import { NotReachableReason, _enum_for_NotReachableReason, NotReachableReason_msPurged /* IMPORTED_LONG_ENUMERATION_ITEM */, msPurged /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotReachableReason_imsiDetached /* IMPORTED_LONG_ENUMERATION_ITEM */, imsiDetached /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotReachableReason_restrictedArea /* IMPORTED_LONG_ENUMERATION_ITEM */, restrictedArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotReachableReason_notRegistered /* IMPORTED_LONG_ENUMERATION_ITEM */, notRegistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NotReachableReason, _encode_NotReachableReason } from "../MAP-MS-DataTypes/NotReachableReason.ta.mjs";
// export { NotReachableReason, _enum_for_NotReachableReason, NotReachableReason_msPurged /* IMPORTED_LONG_ENUMERATION_ITEM */, msPurged /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotReachableReason_imsiDetached /* IMPORTED_LONG_ENUMERATION_ITEM */, imsiDetached /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotReachableReason_restrictedArea /* IMPORTED_LONG_ENUMERATION_ITEM */, restrictedArea /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotReachableReason_notRegistered /* IMPORTED_LONG_ENUMERATION_ITEM */, notRegistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NotReachableReason, _encode_NotReachableReason } from "../MAP-MS-DataTypes/NotReachableReason.ta.mjs";


/**
 * @summary PS_SubscriberState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PS-SubscriberState  ::=  CHOICE {
 *     notProvidedFromSGSNorMME    [0] NULL,
 *     ps-Detached    [1] NULL,
 *     ps-AttachedNotReachableForPaging    [2] NULL,
 *     ps-AttachedReachableForPaging    [3] NULL,
 *     ps-PDP-ActiveNotReachableForPaging    [4] PDP-ContextInfoList,
 *     ps-PDP-ActiveReachableForPaging    [5] PDP-ContextInfoList,
 *     netDetNotReachable    NotReachableReason }
 * ```
 */
export
type PS_SubscriberState =
    { notProvidedFromSGSNorMME: NULL } /* CHOICE_ALT_ROOT */
    | { ps_Detached: NULL } /* CHOICE_ALT_ROOT */
    | { ps_AttachedNotReachableForPaging: NULL } /* CHOICE_ALT_ROOT */
    | { ps_AttachedReachableForPaging: NULL } /* CHOICE_ALT_ROOT */
    | { ps_PDP_ActiveNotReachableForPaging: PDP_ContextInfoList } /* CHOICE_ALT_ROOT */
    | { ps_PDP_ActiveReachableForPaging: PDP_ContextInfoList } /* CHOICE_ALT_ROOT */
    | { netDetNotReachable: NotReachableReason } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PS_SubscriberState: $.ASN1Decoder<PS_SubscriberState> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PS_SubscriberState
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PS_SubscriberState (el: _Element): PS_SubscriberState {
    if (!_cached_decoder_for_PS_SubscriberState) { _cached_decoder_for_PS_SubscriberState = $._decode_inextensible_choice<PS_SubscriberState>({
    "CONTEXT 0": [ "notProvidedFromSGSNorMME", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "ps_Detached", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "ps_AttachedNotReachableForPaging", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "ps_AttachedReachableForPaging", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "ps_PDP_ActiveNotReachableForPaging", $._decode_implicit<PDP_ContextInfoList>(() => _decode_PDP_ContextInfoList) ],
    "CONTEXT 5": [ "ps_PDP_ActiveReachableForPaging", $._decode_implicit<PDP_ContextInfoList>(() => _decode_PDP_ContextInfoList) ],
    "UNIVERSAL 10": [ "netDetNotReachable", _decode_NotReachableReason ]
}); }
    return _cached_decoder_for_PS_SubscriberState(el);
}

let _cached_encoder_for_PS_SubscriberState: $.ASN1Encoder<PS_SubscriberState> | null = null;

/**
 * @summary Encodes a(n) PS_SubscriberState into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PS_SubscriberState, encoded as an ASN.1 Element.
 */
export
function _encode_PS_SubscriberState (value: PS_SubscriberState, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PS_SubscriberState) { _cached_encoder_for_PS_SubscriberState = $._encode_choice<PS_SubscriberState>({
    "notProvidedFromSGSNorMME": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "ps_Detached": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "ps_AttachedNotReachableForPaging": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "ps_AttachedReachableForPaging": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "ps_PDP_ActiveNotReachableForPaging": $._encode_implicit(_TagClass.context, 4, () => _encode_PDP_ContextInfoList, $.BER),
    "ps_PDP_ActiveReachableForPaging": $._encode_implicit(_TagClass.context, 5, () => _encode_PDP_ContextInfoList, $.BER),
    "netDetNotReachable": _encode_NotReachableReason,
}, $.BER); }
    return _cached_encoder_for_PS_SubscriberState(value, elGetter);
}


/* eslint-enable */
