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
import {
    Restriction,
    _decode_Restriction,
    _encode_Restriction,
} from '../MTSAbstractService/Restriction.ta';
export {
    Restriction,
    _decode_Restriction,
    _encode_Restriction,
} from '../MTSAbstractService/Restriction.ta';

/* START_OF_SYMBOL_DEFINITION Restrictions */
/**
 * @summary Restrictions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Restrictions  ::=  SET OF Restriction
 * ```
 */
export type Restrictions = Restriction[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Restrictions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Restrictions */
let _cached_decoder_for_Restrictions: $.ASN1Decoder<Restrictions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Restrictions */

/* START_OF_SYMBOL_DEFINITION _decode_Restrictions */
/**
 * @summary Decodes an ASN.1 element into a(n) Restrictions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Restrictions} The decoded data structure.
 */
export function _decode_Restrictions(el: _Element) {
    if (!_cached_decoder_for_Restrictions) {
        _cached_decoder_for_Restrictions = $._decodeSetOf<Restriction>(
            () => _decode_Restriction
        );
    }
    return _cached_decoder_for_Restrictions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Restrictions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Restrictions */
let _cached_encoder_for_Restrictions: $.ASN1Encoder<Restrictions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Restrictions */

/* START_OF_SYMBOL_DEFINITION _encode_Restrictions */
/**
 * @summary Encodes a(n) Restrictions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Restrictions, encoded as an ASN.1 Element.
 */
export function _encode_Restrictions(
    value: Restrictions,
    elGetter: $.ASN1Encoder<Restrictions>
) {
    if (!_cached_encoder_for_Restrictions) {
        _cached_encoder_for_Restrictions = $._encodeSetOf<Restriction>(
            () => _encode_Restriction,
            $.BER
        );
    }
    return _cached_encoder_for_Restrictions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Restrictions */

/* eslint-enable */
