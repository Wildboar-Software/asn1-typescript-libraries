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
import { Operations, Operations_compute_checksum /* IMPORTED_LONG_NAMED_BIT */, compute_checksum /* IMPORTED_SHORT_NAMED_BIT */, Operations_compute_signature /* IMPORTED_LONG_NAMED_BIT */, compute_signature /* IMPORTED_SHORT_NAMED_BIT */, Operations_verify_checksum /* IMPORTED_LONG_NAMED_BIT */, verify_checksum /* IMPORTED_SHORT_NAMED_BIT */, Operations_verify_signature /* IMPORTED_LONG_NAMED_BIT */, verify_signature /* IMPORTED_SHORT_NAMED_BIT */, Operations_encipher /* IMPORTED_LONG_NAMED_BIT */, encipher /* IMPORTED_SHORT_NAMED_BIT */, Operations_decipher /* IMPORTED_LONG_NAMED_BIT */, decipher /* IMPORTED_SHORT_NAMED_BIT */, Operations_hash /* IMPORTED_LONG_NAMED_BIT */, hash /* IMPORTED_SHORT_NAMED_BIT */, Operations_generate_key /* IMPORTED_LONG_NAMED_BIT */, generate_key /* IMPORTED_SHORT_NAMED_BIT */, Operations_derive_key /* IMPORTED_LONG_NAMED_BIT */, derive_key /* IMPORTED_SHORT_NAMED_BIT */, _decode_Operations, _encode_Operations } from "../CryptographicInformationFramework/Operations.ta.mjs";
// export { Operations, Operations_compute_checksum /* IMPORTED_LONG_NAMED_BIT */, compute_checksum /* IMPORTED_SHORT_NAMED_BIT */, Operations_compute_signature /* IMPORTED_LONG_NAMED_BIT */, compute_signature /* IMPORTED_SHORT_NAMED_BIT */, Operations_verify_checksum /* IMPORTED_LONG_NAMED_BIT */, verify_checksum /* IMPORTED_SHORT_NAMED_BIT */, Operations_verify_signature /* IMPORTED_LONG_NAMED_BIT */, verify_signature /* IMPORTED_SHORT_NAMED_BIT */, Operations_encipher /* IMPORTED_LONG_NAMED_BIT */, encipher /* IMPORTED_SHORT_NAMED_BIT */, Operations_decipher /* IMPORTED_LONG_NAMED_BIT */, decipher /* IMPORTED_SHORT_NAMED_BIT */, Operations_hash /* IMPORTED_LONG_NAMED_BIT */, hash /* IMPORTED_SHORT_NAMED_BIT */, Operations_generate_key /* IMPORTED_LONG_NAMED_BIT */, generate_key /* IMPORTED_SHORT_NAMED_BIT */, Operations_derive_key /* IMPORTED_LONG_NAMED_BIT */, derive_key /* IMPORTED_SHORT_NAMED_BIT */, _decode_Operations, _encode_Operations } from "../CryptographicInformationFramework/Operations.ta.mjs";


/**
 * @summary PublicKeyOperations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicKeyOperations  ::=  Operations
 * ```
 */
export
type PublicKeyOperations = Operations; // DefinedType

let _cached_decoder_for_PublicKeyOperations: $.ASN1Decoder<PublicKeyOperations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeyOperations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PublicKeyOperations (el: _Element): PublicKeyOperations {
    if (!_cached_decoder_for_PublicKeyOperations) { _cached_decoder_for_PublicKeyOperations = _decode_Operations; }
    return _cached_decoder_for_PublicKeyOperations(el);
}

let _cached_encoder_for_PublicKeyOperations: $.ASN1Encoder<PublicKeyOperations> | null = null;

/**
 * @summary Encodes a(n) PublicKeyOperations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeyOperations, encoded as an ASN.1 Element.
 */
export
function _encode_PublicKeyOperations (value: PublicKeyOperations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PublicKeyOperations) { _cached_encoder_for_PublicKeyOperations = _encode_Operations; }
    return _cached_encoder_for_PublicKeyOperations(value, elGetter);
}


/* eslint-enable */
