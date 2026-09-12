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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary Event_Condition_instance_definition_details_displayEnhancement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Condition-instance-definition-details-displayEnhancement ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Event_Condition_instance_definition_details_displayEnhancement =
    { text: MMSString } /* CHOICE_ALT_ROOT */
    | { number_: INTEGER } /* CHOICE_ALT_ROOT */
    | { none: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Event_Condition_instance_definition_details_displayEnhancement: $.ASN1Decoder<Event_Condition_instance_definition_details_displayEnhancement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Condition_instance_definition_details_displayEnhancement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Condition_instance_definition_details_displayEnhancement (el: _Element): Event_Condition_instance_definition_details_displayEnhancement {
    if (!_cached_decoder_for_Event_Condition_instance_definition_details_displayEnhancement) { _cached_decoder_for_Event_Condition_instance_definition_details_displayEnhancement = $._decode_inextensible_choice<Event_Condition_instance_definition_details_displayEnhancement>({
    "CONTEXT 15": [ "text", $._decode_explicit<MMSString>(() => _decode_MMSString) ],
    "CONTEXT 16": [ "number_", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 17": [ "none", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Event_Condition_instance_definition_details_displayEnhancement(el);
}

let _cached_encoder_for_Event_Condition_instance_definition_details_displayEnhancement: $.ASN1Encoder<Event_Condition_instance_definition_details_displayEnhancement> | null = null;

/**
 * @summary Encodes a(n) Event_Condition_instance_definition_details_displayEnhancement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Condition_instance_definition_details_displayEnhancement, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Condition_instance_definition_details_displayEnhancement (value: Event_Condition_instance_definition_details_displayEnhancement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Condition_instance_definition_details_displayEnhancement) { _cached_encoder_for_Event_Condition_instance_definition_details_displayEnhancement = $._encode_choice<Event_Condition_instance_definition_details_displayEnhancement>({
    "text": $._encode_explicit(_TagClass.context, 15, () => _encode_MMSString, $.BER),
    "number_": $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER),
    "none": $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Event_Condition_instance_definition_details_displayEnhancement(value, elGetter);
}


/* eslint-enable */
