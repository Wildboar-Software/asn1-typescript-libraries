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
import { NotificationEvent, NotificationEvent_notificationInstall /* IMPORTED_LONG_NAMED_BIT */, notificationInstall /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationEnable /* IMPORTED_LONG_NAMED_BIT */, notificationEnable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDisable /* IMPORTED_LONG_NAMED_BIT */, notificationDisable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDelete /* IMPORTED_LONG_NAMED_BIT */, notificationDelete /* IMPORTED_SHORT_NAMED_BIT */, _decode_NotificationEvent, _encode_NotificationEvent } from "../RSPDefinitions/NotificationEvent.ta.mjs";
// export { NotificationEvent, NotificationEvent_notificationInstall /* IMPORTED_LONG_NAMED_BIT */, notificationInstall /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationEnable /* IMPORTED_LONG_NAMED_BIT */, notificationEnable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDisable /* IMPORTED_LONG_NAMED_BIT */, notificationDisable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDelete /* IMPORTED_LONG_NAMED_BIT */, notificationDelete /* IMPORTED_SHORT_NAMED_BIT */, _decode_NotificationEvent, _encode_NotificationEvent } from "../RSPDefinitions/NotificationEvent.ta.mjs";


/**
 * @summary IpaEuiccDataRequest_searchCriteriaNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaEuiccDataRequest-searchCriteriaNotification ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type IpaEuiccDataRequest_searchCriteriaNotification =
    { seqNumber: INTEGER } /* CHOICE_ALT_ROOT */
    | { profileManagementOperation: NotificationEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaNotification: $.ASN1Decoder<IpaEuiccDataRequest_searchCriteriaNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaEuiccDataRequest_searchCriteriaNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaEuiccDataRequest_searchCriteriaNotification (el: _Element): IpaEuiccDataRequest_searchCriteriaNotification {
    if (!_cached_decoder_for_IpaEuiccDataRequest_searchCriteriaNotification) { _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaNotification = $._decode_inextensible_choice<IpaEuiccDataRequest_searchCriteriaNotification>({
    "CONTEXT 0": [ "seqNumber", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "profileManagementOperation", $._decode_implicit<NotificationEvent>(() => _decode_NotificationEvent) ]
}); }
    return _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaNotification(el);
}

let _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaNotification: $.ASN1Encoder<IpaEuiccDataRequest_searchCriteriaNotification> | null = null;

/**
 * @summary Encodes a(n) IpaEuiccDataRequest_searchCriteriaNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaEuiccDataRequest_searchCriteriaNotification, encoded as an ASN.1 Element.
 */
export
function _encode_IpaEuiccDataRequest_searchCriteriaNotification (value: IpaEuiccDataRequest_searchCriteriaNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaEuiccDataRequest_searchCriteriaNotification) { _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaNotification = $._encode_choice<IpaEuiccDataRequest_searchCriteriaNotification>({
    "seqNumber": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "profileManagementOperation": $._encode_implicit(_TagClass.context, 1, () => _encode_NotificationEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaNotification(value, elGetter);
}


/* eslint-enable */
