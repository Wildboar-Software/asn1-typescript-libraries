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
import { Named_Variable_instance, _decode_Named_Variable_instance, _encode_Named_Variable_instance } from "../MMS-SCI-Module-1/Named-Variable-instance.ta.mjs";
// export { Named_Variable_instance, _decode_Named_Variable_instance, _encode_Named_Variable_instance } from "../MMS-SCI-Module-1/Named-Variable-instance.ta.mjs";
import { Unnamed_Variable_instance, _decode_Unnamed_Variable_instance, _encode_Unnamed_Variable_instance } from "../MMS-SCI-Module-1/Unnamed-Variable-instance.ta.mjs";
// export { Unnamed_Variable_instance, _decode_Unnamed_Variable_instance, _encode_Unnamed_Variable_instance } from "../MMS-SCI-Module-1/Unnamed-Variable-instance.ta.mjs";


/**
 * @summary Event_Condition_instance_definition_details_monitoredVariable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Condition-instance-definition-details-monitoredVariable ::= CHOICE {
 *     named [11] IMPLICIT Named-Variable-instance,
 *     unnamed [12] IMPLICIT Unnamed-Variable-instance,
 *     unspecified [13] IMPLICIT NULL
 * }
 * ```
 */
export
type Event_Condition_instance_definition_details_monitoredVariable =
    { named: Named_Variable_instance } /* CHOICE_ALT_ROOT */
    | { unnamed: Unnamed_Variable_instance } /* CHOICE_ALT_ROOT */
    | { unspecified: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Event_Condition_instance_definition_details_monitoredVariable: $.ASN1Decoder<Event_Condition_instance_definition_details_monitoredVariable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Condition_instance_definition_details_monitoredVariable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Condition_instance_definition_details_monitoredVariable (el: _Element): Event_Condition_instance_definition_details_monitoredVariable {
    if (!_cached_decoder_for_Event_Condition_instance_definition_details_monitoredVariable) { _cached_decoder_for_Event_Condition_instance_definition_details_monitoredVariable = $._decode_inextensible_choice<Event_Condition_instance_definition_details_monitoredVariable>({
    "CONTEXT 11": [ "named", $._decode_implicit<Named_Variable_instance>(() => _decode_Named_Variable_instance) ],
    "CONTEXT 12": [ "unnamed", $._decode_implicit<Unnamed_Variable_instance>(() => _decode_Unnamed_Variable_instance) ],
    "CONTEXT 13": [ "unspecified", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Event_Condition_instance_definition_details_monitoredVariable(el);
}

let _cached_encoder_for_Event_Condition_instance_definition_details_monitoredVariable: $.ASN1Encoder<Event_Condition_instance_definition_details_monitoredVariable> | null = null;

/**
 * @summary Encodes a(n) Event_Condition_instance_definition_details_monitoredVariable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Condition_instance_definition_details_monitoredVariable, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Condition_instance_definition_details_monitoredVariable (value: Event_Condition_instance_definition_details_monitoredVariable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Condition_instance_definition_details_monitoredVariable) { _cached_encoder_for_Event_Condition_instance_definition_details_monitoredVariable = $._encode_choice<Event_Condition_instance_definition_details_monitoredVariable>({
    "named": $._encode_implicit(_TagClass.context, 11, () => _encode_Named_Variable_instance, $.BER),
    "unnamed": $._encode_implicit(_TagClass.context, 12, () => _encode_Unnamed_Variable_instance, $.BER),
    "unspecified": $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Event_Condition_instance_definition_details_monitoredVariable(value, elGetter);
}


/* eslint-enable */
