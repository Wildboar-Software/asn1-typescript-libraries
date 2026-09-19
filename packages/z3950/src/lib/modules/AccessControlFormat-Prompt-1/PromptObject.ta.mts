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
import { Challenge, _decode_Challenge, _encode_Challenge } from "../AccessControlFormat-Prompt-1/Challenge.ta.mjs";
// export { Challenge, _decode_Challenge, _encode_Challenge } from "../AccessControlFormat-Prompt-1/Challenge.ta.mjs";
import { Response, _decode_Response, _encode_Response } from "../AccessControlFormat-Prompt-1/Response.ta.mjs";
// export { Response, _decode_Response, _encode_Response } from "../AccessControlFormat-Prompt-1/Response.ta.mjs";


/**
 * @summary PromptObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptObject  ::=  CHOICE{
 *    challenge    [1] IMPLICIT Challenge,
 *    response     [2] IMPLICIT Response}
 * ```
 */
export
type PromptObject =
    { challenge: Challenge } /* CHOICE_ALT_ROOT */
    | { response: Response } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PromptObject: $.ASN1Decoder<PromptObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PromptObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PromptObject (el: _Element): PromptObject {
    if (!_cached_decoder_for_PromptObject) { _cached_decoder_for_PromptObject = $._decode_inextensible_choice<PromptObject>({
    "CONTEXT 1": [ "challenge", $._decode_implicit<Challenge>(() => _decode_Challenge) ],
    "CONTEXT 2": [ "response", $._decode_implicit<Response>(() => _decode_Response) ]
}); }
    return _cached_decoder_for_PromptObject(el);
}

let _cached_encoder_for_PromptObject: $.ASN1Encoder<PromptObject> | null = null;

/**
 * @summary Encodes a(n) PromptObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PromptObject, encoded as an ASN.1 Element.
 */
export
function _encode_PromptObject (value: PromptObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PromptObject) { _cached_encoder_for_PromptObject = $._encode_choice<PromptObject>({
    "challenge": $._encode_implicit(_TagClass.context, 1, () => _encode_Challenge, $.BER),
    "response": $._encode_implicit(_TagClass.context, 2, () => _encode_Response, $.BER),
}, $.BER); }
    return _cached_encoder_for_PromptObject(value, elGetter);
}


/* eslint-enable */
