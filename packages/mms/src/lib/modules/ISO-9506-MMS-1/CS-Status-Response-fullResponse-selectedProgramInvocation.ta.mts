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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary CS_Status_Response_fullResponse_selectedProgramInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-Status-Response-fullResponse-selectedProgramInvocation ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CS_Status_Response_fullResponse_selectedProgramInvocation =
    { programInvocation: Identifier } /* CHOICE_ALT_ROOT */
    | { noneSelected: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation: $.ASN1Decoder<CS_Status_Response_fullResponse_selectedProgramInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_Status_Response_fullResponse_selectedProgramInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_Status_Response_fullResponse_selectedProgramInvocation (el: _Element): CS_Status_Response_fullResponse_selectedProgramInvocation {
    if (!_cached_decoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation) { _cached_decoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation = $._decode_inextensible_choice<CS_Status_Response_fullResponse_selectedProgramInvocation>({
    "CONTEXT 3": [ "programInvocation", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 4": [ "noneSelected", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation(el);
}

let _cached_encoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation: $.ASN1Encoder<CS_Status_Response_fullResponse_selectedProgramInvocation> | null = null;

/**
 * @summary Encodes a(n) CS_Status_Response_fullResponse_selectedProgramInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_Status_Response_fullResponse_selectedProgramInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_CS_Status_Response_fullResponse_selectedProgramInvocation (value: CS_Status_Response_fullResponse_selectedProgramInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation) { _cached_encoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation = $._encode_choice<CS_Status_Response_fullResponse_selectedProgramInvocation>({
    "programInvocation": $._encode_explicit(_TagClass.context, 3, () => _encode_Identifier, $.BER),
    "noneSelected": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CS_Status_Response_fullResponse_selectedProgramInvocation(value, elGetter);
}


/* eslint-enable */
