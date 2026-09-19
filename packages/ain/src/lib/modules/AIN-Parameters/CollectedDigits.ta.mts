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
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";


/**
 * @summary CollectedDigits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectedDigits  ::=  [23] IMPLICIT AINDigits
 * ```
 */
export
type CollectedDigits = AINDigits; // DefinedType

let _cached_decoder_for_CollectedDigits: $.ASN1Decoder<CollectedDigits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CollectedDigits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CollectedDigits (el: _Element): CollectedDigits {
    if (!_cached_decoder_for_CollectedDigits) { _cached_decoder_for_CollectedDigits = $._decode_implicit<CollectedDigits>(() => _decode_AINDigits); }
    return _cached_decoder_for_CollectedDigits(el);
}

let _cached_encoder_for_CollectedDigits: $.ASN1Encoder<CollectedDigits> | null = null;

/**
 * @summary Encodes a(n) CollectedDigits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CollectedDigits, encoded as an ASN.1 Element.
 */
export
function _encode_CollectedDigits (value: CollectedDigits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CollectedDigits) { _cached_encoder_for_CollectedDigits = $._encode_implicit(_TagClass.context, 23, () => _encode_AINDigits, $.BER); }
    return _cached_encoder_for_CollectedDigits(value, elGetter);
}


/* eslint-enable */
