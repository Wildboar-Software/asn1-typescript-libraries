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

/* START_OF_SYMBOL_DEFINITION UnitsTotal */
/**
 * @summary UnitsTotal
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitsTotal  ::=  INTEGER
 * ```
 */
export type UnitsTotal = INTEGER;
/* END_OF_SYMBOL_DEFINITION UnitsTotal */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitsTotal */
let _cached_decoder_for_UnitsTotal: $.ASN1Decoder<UnitsTotal> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnitsTotal */

/* START_OF_SYMBOL_DEFINITION _decode_UnitsTotal */
/**
 * @summary Decodes an ASN.1 element into a(n) UnitsTotal
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitsTotal} The decoded data structure.
 */
export function _decode_UnitsTotal(el: _Element) {
    if (!_cached_decoder_for_UnitsTotal) {
        _cached_decoder_for_UnitsTotal = $._decodeInteger;
    }
    return _cached_decoder_for_UnitsTotal(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnitsTotal */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitsTotal */
let _cached_encoder_for_UnitsTotal: $.ASN1Encoder<UnitsTotal> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnitsTotal */

/* START_OF_SYMBOL_DEFINITION _encode_UnitsTotal */
/**
 * @summary Encodes a(n) UnitsTotal into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitsTotal, encoded as an ASN.1 Element.
 */
export function _encode_UnitsTotal(
    value: UnitsTotal,
    elGetter: $.ASN1Encoder<UnitsTotal>
) {
    if (!_cached_encoder_for_UnitsTotal) {
        _cached_encoder_for_UnitsTotal = $._encodeInteger;
    }
    return _cached_encoder_for_UnitsTotal(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnitsTotal */

/* eslint-enable */
