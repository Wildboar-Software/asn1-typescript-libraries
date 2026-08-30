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
import { ResourceUnavailableReason, _enum_for_ResourceUnavailableReason, ResourceUnavailableReason_shortTermResourceLimitation /* IMPORTED_LONG_ENUMERATION_ITEM */, shortTermResourceLimitation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ResourceUnavailableReason_longTermResourceLimitation /* IMPORTED_LONG_ENUMERATION_ITEM */, longTermResourceLimitation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ResourceUnavailableReason, _encode_ResourceUnavailableReason } from "../MAP-DialogueInformation/ResourceUnavailableReason.ta.mjs";
// export { ResourceUnavailableReason, _enum_for_ResourceUnavailableReason, ResourceUnavailableReason_shortTermResourceLimitation /* IMPORTED_LONG_ENUMERATION_ITEM */, shortTermResourceLimitation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ResourceUnavailableReason_longTermResourceLimitation /* IMPORTED_LONG_ENUMERATION_ITEM */, longTermResourceLimitation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ResourceUnavailableReason, _encode_ResourceUnavailableReason } from "../MAP-DialogueInformation/ResourceUnavailableReason.ta.mjs";
import { ProcedureCancellationReason, _enum_for_ProcedureCancellationReason, ProcedureCancellationReason_handoverCancellation /* IMPORTED_LONG_ENUMERATION_ITEM */, handoverCancellation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_radioChannelRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, radioChannelRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_networkPathRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, networkPathRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_callRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, callRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_associatedProcedureFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, associatedProcedureFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_tandemDialogueRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, tandemDialogueRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_remoteOperationsFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, remoteOperationsFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProcedureCancellationReason, _encode_ProcedureCancellationReason } from "../MAP-DialogueInformation/ProcedureCancellationReason.ta.mjs";
// export { ProcedureCancellationReason, _enum_for_ProcedureCancellationReason, ProcedureCancellationReason_handoverCancellation /* IMPORTED_LONG_ENUMERATION_ITEM */, handoverCancellation /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_radioChannelRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, radioChannelRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_networkPathRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, networkPathRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_callRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, callRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_associatedProcedureFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, associatedProcedureFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_tandemDialogueRelease /* IMPORTED_LONG_ENUMERATION_ITEM */, tandemDialogueRelease /* IMPORTED_SHORT_ENUMERATION_ITEM */, ProcedureCancellationReason_remoteOperationsFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, remoteOperationsFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ProcedureCancellationReason, _encode_ProcedureCancellationReason } from "../MAP-DialogueInformation/ProcedureCancellationReason.ta.mjs";


/**
 * @summary MAP_UserAbortChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-UserAbortChoice  ::=  CHOICE {
 *     userSpecificReason    [0] NULL,
 *     userResourceLimitation    [1] NULL,
 *     resourceUnavailable    [2] ResourceUnavailableReason,
 *     applicationProcedureCancellation    [3] ProcedureCancellationReason}
 * ```
 */
export
type MAP_UserAbortChoice =
    { userSpecificReason: NULL } /* CHOICE_ALT_ROOT */
    | { userResourceLimitation: NULL } /* CHOICE_ALT_ROOT */
    | { resourceUnavailable: ResourceUnavailableReason } /* CHOICE_ALT_ROOT */
    | { applicationProcedureCancellation: ProcedureCancellationReason } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MAP_UserAbortChoice: $.ASN1Decoder<MAP_UserAbortChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_UserAbortChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_UserAbortChoice (el: _Element): MAP_UserAbortChoice {
    if (!_cached_decoder_for_MAP_UserAbortChoice) { _cached_decoder_for_MAP_UserAbortChoice = $._decode_inextensible_choice<MAP_UserAbortChoice>({
    "CONTEXT 0": [ "userSpecificReason", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "userResourceLimitation", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "resourceUnavailable", $._decode_implicit<ResourceUnavailableReason>(() => _decode_ResourceUnavailableReason) ],
    "CONTEXT 3": [ "applicationProcedureCancellation", $._decode_implicit<ProcedureCancellationReason>(() => _decode_ProcedureCancellationReason) ]
}); }
    return _cached_decoder_for_MAP_UserAbortChoice(el);
}

let _cached_encoder_for_MAP_UserAbortChoice: $.ASN1Encoder<MAP_UserAbortChoice> | null = null;

/**
 * @summary Encodes a(n) MAP_UserAbortChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_UserAbortChoice, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_UserAbortChoice (value: MAP_UserAbortChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_UserAbortChoice) { _cached_encoder_for_MAP_UserAbortChoice = $._encode_choice<MAP_UserAbortChoice>({
    "userSpecificReason": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "userResourceLimitation": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "resourceUnavailable": $._encode_implicit(_TagClass.context, 2, () => _encode_ResourceUnavailableReason, $.BER),
    "applicationProcedureCancellation": $._encode_implicit(_TagClass.context, 3, () => _encode_ProcedureCancellationReason, $.BER),
}, $.BER); }
    return _cached_encoder_for_MAP_UserAbortChoice(value, elGetter);
}


/* eslint-enable */
