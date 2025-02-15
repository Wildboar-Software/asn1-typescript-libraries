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
    ObsoletedIPMsSubfield,
    _decode_ObsoletedIPMsSubfield,
    _encode_ObsoletedIPMsSubfield,
} from '../IPMSInformationObjects/ObsoletedIPMsSubfield.ta';
export {
    ObsoletedIPMsSubfield,
    _decode_ObsoletedIPMsSubfield,
    _encode_ObsoletedIPMsSubfield,
} from '../IPMSInformationObjects/ObsoletedIPMsSubfield.ta';

/* START_OF_SYMBOL_DEFINITION ObsoletedIPMsField */
/**
 * @summary ObsoletedIPMsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObsoletedIPMsField  ::=  SEQUENCE OF ObsoletedIPMsSubfield
 * ```
 */
export type ObsoletedIPMsField = ObsoletedIPMsSubfield[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ObsoletedIPMsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObsoletedIPMsField */
let _cached_decoder_for_ObsoletedIPMsField: $.ASN1Decoder<ObsoletedIPMsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObsoletedIPMsField */

/* START_OF_SYMBOL_DEFINITION _decode_ObsoletedIPMsField */
/**
 * @summary Decodes an ASN.1 element into a(n) ObsoletedIPMsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObsoletedIPMsField} The decoded data structure.
 */
export function _decode_ObsoletedIPMsField(el: _Element) {
    if (!_cached_decoder_for_ObsoletedIPMsField) {
        _cached_decoder_for_ObsoletedIPMsField = $._decodeSequenceOf<ObsoletedIPMsSubfield>(
            () => _decode_ObsoletedIPMsSubfield
        );
    }
    return _cached_decoder_for_ObsoletedIPMsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObsoletedIPMsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObsoletedIPMsField */
let _cached_encoder_for_ObsoletedIPMsField: $.ASN1Encoder<ObsoletedIPMsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObsoletedIPMsField */

/* START_OF_SYMBOL_DEFINITION _encode_ObsoletedIPMsField */
/**
 * @summary Encodes a(n) ObsoletedIPMsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObsoletedIPMsField, encoded as an ASN.1 Element.
 */
export function _encode_ObsoletedIPMsField(
    value: ObsoletedIPMsField,
    elGetter: $.ASN1Encoder<ObsoletedIPMsField>
) {
    if (!_cached_encoder_for_ObsoletedIPMsField) {
        _cached_encoder_for_ObsoletedIPMsField = $._encodeSequenceOf<ObsoletedIPMsSubfield>(
            () => _encode_ObsoletedIPMsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_ObsoletedIPMsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObsoletedIPMsField */

/* eslint-enable */
