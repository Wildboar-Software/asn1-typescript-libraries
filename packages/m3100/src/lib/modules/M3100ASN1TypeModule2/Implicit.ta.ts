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

/* START_OF_SYMBOL_DEFINITION Implicit */
/**
 * @summary Implicit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Implicit  ::=  BOOLEAN(TRUE)
 * ```
 */
export type Implicit = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION Implicit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Implicit */
let _cached_decoder_for_Implicit: $.ASN1Decoder<Implicit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Implicit */

/* START_OF_SYMBOL_DEFINITION _decode_Implicit */
/**
 * @summary Decodes an ASN.1 element into a(n) Implicit
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Implicit} The decoded data structure.
 */
export function _decode_Implicit(el: _Element) {
    if (!_cached_decoder_for_Implicit) {
        _cached_decoder_for_Implicit = $._decodeBoolean;
    }
    return _cached_decoder_for_Implicit(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Implicit */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Implicit */
let _cached_encoder_for_Implicit: $.ASN1Encoder<Implicit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Implicit */

/* START_OF_SYMBOL_DEFINITION _encode_Implicit */
/**
 * @summary Encodes a(n) Implicit into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Implicit, encoded as an ASN.1 Element.
 */
export function _encode_Implicit(
    value: Implicit,
    elGetter: $.ASN1Encoder<Implicit>
) {
    if (!_cached_encoder_for_Implicit) {
        _cached_encoder_for_Implicit = $._encodeBoolean;
    }
    return _cached_encoder_for_Implicit(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Implicit */

/* eslint-enable */
