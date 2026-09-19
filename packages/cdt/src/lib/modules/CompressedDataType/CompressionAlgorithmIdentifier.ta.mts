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
import { AlgorithmID_ShortForm, AlgorithmID_ShortForm_zlibCompress /* IMPORTED_LONG_NAMED_INTEGER */, zlibCompress /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlgorithmID_ShortForm, _encode_AlgorithmID_ShortForm } from "../CompressedDataType/AlgorithmID-ShortForm.ta.mjs";
// export { AlgorithmID_ShortForm, AlgorithmID_ShortForm_zlibCompress /* IMPORTED_LONG_NAMED_INTEGER */, zlibCompress /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AlgorithmID_ShortForm, _encode_AlgorithmID_ShortForm } from "../CompressedDataType/AlgorithmID-ShortForm.ta.mjs";


/**
 * @summary CompressionAlgorithmIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompressionAlgorithmIdentifier  ::=  CHOICE {
 *     algorithmID-ShortForm  [0] IMPLICIT AlgorithmID-ShortForm,
 *     algorithmID-OID        [1] IMPLICIT OBJECT IDENTIFIER }
 * ```
 */
export
type CompressionAlgorithmIdentifier =
    { algorithmID_ShortForm: AlgorithmID_ShortForm } /* CHOICE_ALT_ROOT */
    | { algorithmID_OID: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CompressionAlgorithmIdentifier: $.ASN1Decoder<CompressionAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompressionAlgorithmIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompressionAlgorithmIdentifier (el: _Element): CompressionAlgorithmIdentifier {
    if (!_cached_decoder_for_CompressionAlgorithmIdentifier) { _cached_decoder_for_CompressionAlgorithmIdentifier = $._decode_inextensible_choice<CompressionAlgorithmIdentifier>({
    "CONTEXT 0": [ "algorithmID_ShortForm", $._decode_implicit<AlgorithmID_ShortForm>(() => _decode_AlgorithmID_ShortForm) ],
    "CONTEXT 1": [ "algorithmID_OID", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ]
}); }
    return _cached_decoder_for_CompressionAlgorithmIdentifier(el);
}

let _cached_encoder_for_CompressionAlgorithmIdentifier: $.ASN1Encoder<CompressionAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) CompressionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompressionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_CompressionAlgorithmIdentifier (value: CompressionAlgorithmIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompressionAlgorithmIdentifier) { _cached_encoder_for_CompressionAlgorithmIdentifier = $._encode_choice<CompressionAlgorithmIdentifier>({
    "algorithmID_ShortForm": $._encode_implicit(_TagClass.context, 0, () => _encode_AlgorithmID_ShortForm, $.BER),
    "algorithmID_OID": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_CompressionAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
