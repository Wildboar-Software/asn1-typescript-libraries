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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION FNUAMSSecurityCheckField */
/**
 * @summary FNUAMSSecurityCheckField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNUAMSSecurityCheckField  ::=  BOOLEAN
 * ```
 */
export type FNUAMSSecurityCheckField = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION FNUAMSSecurityCheckField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSSecurityCheckField */
let _cached_decoder_for_FNUAMSSecurityCheckField: $.ASN1Decoder<FNUAMSSecurityCheckField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FNUAMSSecurityCheckField */

/* START_OF_SYMBOL_DEFINITION _decode_FNUAMSSecurityCheckField */
/**
 * @summary Decodes an ASN.1 element into a(n) FNUAMSSecurityCheckField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FNUAMSSecurityCheckField} The decoded data structure.
 */
export function _decode_FNUAMSSecurityCheckField(el: _Element) {
    if (!_cached_decoder_for_FNUAMSSecurityCheckField) {
        _cached_decoder_for_FNUAMSSecurityCheckField = $._decodeBoolean;
    }
    return _cached_decoder_for_FNUAMSSecurityCheckField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FNUAMSSecurityCheckField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSSecurityCheckField */
let _cached_encoder_for_FNUAMSSecurityCheckField: $.ASN1Encoder<FNUAMSSecurityCheckField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FNUAMSSecurityCheckField */

/* START_OF_SYMBOL_DEFINITION _encode_FNUAMSSecurityCheckField */
/**
 * @summary Encodes a(n) FNUAMSSecurityCheckField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FNUAMSSecurityCheckField, encoded as an ASN.1 Element.
 */
export function _encode_FNUAMSSecurityCheckField(
    value: FNUAMSSecurityCheckField,
    elGetter: $.ASN1Encoder<FNUAMSSecurityCheckField>
) {
    if (!_cached_encoder_for_FNUAMSSecurityCheckField) {
        _cached_encoder_for_FNUAMSSecurityCheckField = $._encodeBoolean;
    }
    return _cached_encoder_for_FNUAMSSecurityCheckField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FNUAMSSecurityCheckField */

/* eslint-enable */
