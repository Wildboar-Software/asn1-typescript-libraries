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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION VideotexData */
/**
 * @summary VideotexData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideotexData  ::=  VideotexString
 * ```
 */
export type VideotexData = VideotexString; // VideotexString
/* END_OF_SYMBOL_DEFINITION VideotexData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_VideotexData */
let _cached_decoder_for_VideotexData: $.ASN1Decoder<VideotexData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_VideotexData */

/* START_OF_SYMBOL_DEFINITION _decode_VideotexData */
/**
 * @summary Decodes an ASN.1 element into a(n) VideotexData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VideotexData} The decoded data structure.
 */
export function _decode_VideotexData(el: _Element) {
    if (!_cached_decoder_for_VideotexData) {
        _cached_decoder_for_VideotexData = $._decodeVideotexString;
    }
    return _cached_decoder_for_VideotexData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_VideotexData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_VideotexData */
let _cached_encoder_for_VideotexData: $.ASN1Encoder<VideotexData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_VideotexData */

/* START_OF_SYMBOL_DEFINITION _encode_VideotexData */
/**
 * @summary Encodes a(n) VideotexData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VideotexData, encoded as an ASN.1 Element.
 */
export function _encode_VideotexData(
    value: VideotexData,
    elGetter: $.ASN1Encoder<VideotexData>
) {
    if (!_cached_encoder_for_VideotexData) {
        _cached_encoder_for_VideotexData = $._encodeVideotexString;
    }
    return _cached_encoder_for_VideotexData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_VideotexData */

/* eslint-enable */
