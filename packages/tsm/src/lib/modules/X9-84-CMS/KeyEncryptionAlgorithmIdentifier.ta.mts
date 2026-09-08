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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../X9-84-CMS/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../X9-84-CMS/AlgorithmIdentifier.ta.mjs";


/**
 * @summary KeyEncryptionAlgorithmIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyEncryptionAlgorithmIdentifier  ::= 
 *       AlgorithmIdentifier {{KeyEncryptionAlgorithms}}
 * ```
 */
export
type KeyEncryptionAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_KeyEncryptionAlgorithmIdentifier: $.ASN1Decoder<KeyEncryptionAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyEncryptionAlgorithmIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeyEncryptionAlgorithmIdentifier (el: _Element): KeyEncryptionAlgorithmIdentifier {
    if (!_cached_decoder_for_KeyEncryptionAlgorithmIdentifier) { _cached_decoder_for_KeyEncryptionAlgorithmIdentifier = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_KeyEncryptionAlgorithmIdentifier(el);
}

let _cached_encoder_for_KeyEncryptionAlgorithmIdentifier: $.ASN1Encoder<KeyEncryptionAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) KeyEncryptionAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyEncryptionAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_KeyEncryptionAlgorithmIdentifier (value: KeyEncryptionAlgorithmIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeyEncryptionAlgorithmIdentifier) { _cached_encoder_for_KeyEncryptionAlgorithmIdentifier = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_KeyEncryptionAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
