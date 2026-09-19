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
import { FieldFlags, FieldFlags_sparse /* IMPORTED_LONG_NAMED_INTEGER */, sparse /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_all /* IMPORTED_LONG_NAMED_INTEGER */, all /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_default /* IMPORTED_LONG_NAMED_INTEGER */, default_ /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_identifier /* IMPORTED_LONG_NAMED_INTEGER */, identifier /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_description /* IMPORTED_LONG_NAMED_INTEGER */, description /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_tree /* IMPORTED_LONG_NAMED_INTEGER */, tree /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_value /* IMPORTED_LONG_NAMED_INTEGER */, value /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_connections /* IMPORTED_LONG_NAMED_INTEGER */, connections /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_FieldFlags, _encode_FieldFlags } from "../EmberPlus-Glow/FieldFlags.ta.mjs";
// export { FieldFlags, FieldFlags_sparse /* IMPORTED_LONG_NAMED_INTEGER */, sparse /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_all /* IMPORTED_LONG_NAMED_INTEGER */, all /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_default /* IMPORTED_LONG_NAMED_INTEGER */, default_ /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_identifier /* IMPORTED_LONG_NAMED_INTEGER */, identifier /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_description /* IMPORTED_LONG_NAMED_INTEGER */, description /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_tree /* IMPORTED_LONG_NAMED_INTEGER */, tree /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_value /* IMPORTED_LONG_NAMED_INTEGER */, value /* IMPORTED_SHORT_NAMED_INTEGER */, FieldFlags_connections /* IMPORTED_LONG_NAMED_INTEGER */, connections /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_FieldFlags, _encode_FieldFlags } from "../EmberPlus-Glow/FieldFlags.ta.mjs";
import { Invocation, _decode_Invocation, _encode_Invocation } from "../EmberPlus-Glow/Invocation.ta.mjs";
// export { Invocation, _decode_Invocation, _encode_Invocation } from "../EmberPlus-Glow/Invocation.ta.mjs";


/**
 * @summary Command_options
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Command-options ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Command_options =
    { dirFieldMask: FieldFlags } /* CHOICE_ALT_ROOT */
    | { invocation: Invocation } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Command_options: $.ASN1Decoder<Command_options> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Command_options
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Command_options (el: _Element): Command_options {
    if (!_cached_decoder_for_Command_options) { _cached_decoder_for_Command_options = $._decode_inextensible_choice<Command_options>({
    "CONTEXT 1": [ "dirFieldMask", $._decode_implicit<FieldFlags>(() => _decode_FieldFlags) ],
    "CONTEXT 2": [ "invocation", $._decode_implicit<Invocation>(() => _decode_Invocation) ]
}); }
    return _cached_decoder_for_Command_options(el);
}

let _cached_encoder_for_Command_options: $.ASN1Encoder<Command_options> | null = null;

/**
 * @summary Encodes a(n) Command_options into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Command_options, encoded as an ASN.1 Element.
 */
export
function _encode_Command_options (value: Command_options, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Command_options) { _cached_encoder_for_Command_options = $._encode_choice<Command_options>({
    "dirFieldMask": $._encode_implicit(_TagClass.context, 1, () => _encode_FieldFlags, $.BER),
    "invocation": $._encode_implicit(_TagClass.context, 2, () => _encode_Invocation, $.BER),
}, $.BER); }
    return _cached_encoder_for_Command_options(value, elGetter);
}


/* eslint-enable */
