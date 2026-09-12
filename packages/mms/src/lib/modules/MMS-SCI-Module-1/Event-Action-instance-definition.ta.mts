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
import { Event_Action_instance_definition_details, _decode_Event_Action_instance_definition_details, _encode_Event_Action_instance_definition_details } from "../MMS-SCI-Module-1/Event-Action-instance-definition-details.ta.mjs";
// export { Event_Action_instance_definition_details, _decode_Event_Action_instance_definition_details, _encode_Event_Action_instance_definition_details } from "../MMS-SCI-Module-1/Event-Action-instance-definition-details.ta.mjs";


/**
 * @summary Event_Action_instance_definition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Event-Action-instance-definition ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Event_Action_instance_definition =
    { reference: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { details: Event_Action_instance_definition_details } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Event_Action_instance_definition: $.ASN1Decoder<Event_Action_instance_definition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Event_Action_instance_definition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Event_Action_instance_definition (el: _Element): Event_Action_instance_definition {
    if (!_cached_decoder_for_Event_Action_instance_definition) { _cached_decoder_for_Event_Action_instance_definition = $._decode_inextensible_choice<Event_Action_instance_definition>({
    "CONTEXT 1": [ "reference", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 2": [ "details", $._decode_implicit<Event_Action_instance_definition_details>(() => _decode_Event_Action_instance_definition_details) ]
}); }
    return _cached_decoder_for_Event_Action_instance_definition(el);
}

let _cached_encoder_for_Event_Action_instance_definition: $.ASN1Encoder<Event_Action_instance_definition> | null = null;

/**
 * @summary Encodes a(n) Event_Action_instance_definition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_Action_instance_definition, encoded as an ASN.1 Element.
 */
export
function _encode_Event_Action_instance_definition (value: Event_Action_instance_definition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Event_Action_instance_definition) { _cached_encoder_for_Event_Action_instance_definition = $._encode_choice<Event_Action_instance_definition>({
    "reference": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
    "details": $._encode_implicit(_TagClass.context, 2, () => _encode_Event_Action_instance_definition_details, $.BER),
}, $.BER); }
    return _cached_encoder_for_Event_Action_instance_definition(value, elGetter);
}


/* eslint-enable */
