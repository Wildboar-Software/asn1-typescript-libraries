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
import { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../MMS-Object-Module-1/Priority.ta.mjs";


/**
 * @summary Event_Condition_instance_definition_details_group_Priority_Override
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Condition-instance-definition-details-group-Priority-Override ::= CHOICE {
 *     priority [18] IMPLICIT Priority,
 *     undefined [19] IMPLICIT NULL
 * }
 * ```
 */
export
type Event_Condition_instance_definition_details_group_Priority_Override =
    { priority: Priority } /* CHOICE_ALT_ROOT */
    | { undefined: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Event_Condition_instance_definition_details_group_Priority_Override: $.ASN1Decoder<Event_Condition_instance_definition_details_group_Priority_Override> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Condition_instance_definition_details_group_Priority_Override
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Condition_instance_definition_details_group_Priority_Override (el: _Element): Event_Condition_instance_definition_details_group_Priority_Override {
    if (!_cached_decoder_for_Event_Condition_instance_definition_details_group_Priority_Override) { _cached_decoder_for_Event_Condition_instance_definition_details_group_Priority_Override = $._decode_inextensible_choice<Event_Condition_instance_definition_details_group_Priority_Override>({
    "CONTEXT 18": [ "priority", $._decode_implicit<Priority>(() => _decode_Priority) ],
    "CONTEXT 19": [ "undefined", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Event_Condition_instance_definition_details_group_Priority_Override(el);
}

let _cached_encoder_for_Event_Condition_instance_definition_details_group_Priority_Override: $.ASN1Encoder<Event_Condition_instance_definition_details_group_Priority_Override> | null = null;

/**
 * @summary Encodes a(n) Event_Condition_instance_definition_details_group_Priority_Override into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Condition_instance_definition_details_group_Priority_Override, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Condition_instance_definition_details_group_Priority_Override (value: Event_Condition_instance_definition_details_group_Priority_Override, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Condition_instance_definition_details_group_Priority_Override) { _cached_encoder_for_Event_Condition_instance_definition_details_group_Priority_Override = $._encode_choice<Event_Condition_instance_definition_details_group_Priority_Override>({
    "priority": $._encode_implicit(_TagClass.context, 18, () => _encode_Priority, $.BER),
    "undefined": $._encode_implicit(_TagClass.context, 19, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Event_Condition_instance_definition_details_group_Priority_Override(value, elGetter);
}


/* eslint-enable */
