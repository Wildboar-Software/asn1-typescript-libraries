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
 * @summary MACAlgorithmIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MACAlgorithmIdentifier  ::=  AlgorithmIdentifier {{MACAlgorithms}}
 * ```
 */
export
type MACAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType

let _cached_decoder_for_MACAlgorithmIdentifier: $.ASN1Decoder<MACAlgorithmIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MACAlgorithmIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MACAlgorithmIdentifier (el: _Element): MACAlgorithmIdentifier {
    if (!_cached_decoder_for_MACAlgorithmIdentifier) { _cached_decoder_for_MACAlgorithmIdentifier = _decode_AlgorithmIdentifier; }
    return _cached_decoder_for_MACAlgorithmIdentifier(el);
}

let _cached_encoder_for_MACAlgorithmIdentifier: $.ASN1Encoder<MACAlgorithmIdentifier> | null = null;

/**
 * @summary Encodes a(n) MACAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MACAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_MACAlgorithmIdentifier (value: MACAlgorithmIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MACAlgorithmIdentifier) { _cached_encoder_for_MACAlgorithmIdentifier = _encode_AlgorithmIdentifier; }
    return _cached_encoder_for_MACAlgorithmIdentifier(value, elGetter);
}


/* eslint-enable */
