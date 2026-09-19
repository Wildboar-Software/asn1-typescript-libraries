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
import { Encryption, _decode_Encryption, _encode_Encryption } from "../AccessControlFormat-Prompt-1/Encryption.ta.mjs";
// export { Encryption, _decode_Encryption, _encode_Encryption } from "../AccessControlFormat-Prompt-1/Encryption.ta.mjs";


/**
 * @summary Response_Item_promptResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Response-Item-promptResponse ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Response_Item_promptResponse =
    { string_: InternationalString } /* CHOICE_ALT_ROOT */
    | { accept: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { acknowledge: NULL } /* CHOICE_ALT_ROOT */
    | { diagnostic: DiagRec } /* CHOICE_ALT_ROOT */
    | { encrypted: Encryption } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Response_Item_promptResponse: $.ASN1Decoder<Response_Item_promptResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Response_Item_promptResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Response_Item_promptResponse (el: _Element): Response_Item_promptResponse {
    if (!_cached_decoder_for_Response_Item_promptResponse) { _cached_decoder_for_Response_Item_promptResponse = $._decode_inextensible_choice<Response_Item_promptResponse>({
    "CONTEXT 1": [ "string_", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 2": [ "accept", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 3": [ "acknowledge", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "diagnostic", $._decode_implicit<DiagRec>(() => _decode_DiagRec) ],
    "CONTEXT 5": [ "encrypted", $._decode_implicit<Encryption>(() => _decode_Encryption) ]
}); }
    return _cached_decoder_for_Response_Item_promptResponse(el);
}

let _cached_encoder_for_Response_Item_promptResponse: $.ASN1Encoder<Response_Item_promptResponse> | null = null;

/**
 * @summary Encodes a(n) Response_Item_promptResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Response_Item_promptResponse, encoded as an ASN.1 Element.
 */
export
function _encode_Response_Item_promptResponse (value: Response_Item_promptResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Response_Item_promptResponse) { _cached_encoder_for_Response_Item_promptResponse = $._encode_choice<Response_Item_promptResponse>({
    "string_": $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER),
    "accept": $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER),
    "acknowledge": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "diagnostic": $._encode_implicit(_TagClass.context, 4, () => _encode_DiagRec, $.BER),
    "encrypted": $._encode_implicit(_TagClass.context, 5, () => _encode_Encryption, $.BER),
}, $.BER); }
    return _cached_encoder_for_Response_Item_promptResponse(value, elGetter);
}


/* eslint-enable */
