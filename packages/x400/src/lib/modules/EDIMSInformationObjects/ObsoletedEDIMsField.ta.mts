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
import {
    ObsoletedEDIMsSubfield,
    _decode_ObsoletedEDIMsSubfield,
    _encode_ObsoletedEDIMsSubfield,
} from '../EDIMSInformationObjects/ObsoletedEDIMsSubfield.ta.mjs';
export {
    ObsoletedEDIMsSubfield,
    _decode_ObsoletedEDIMsSubfield,
    _encode_ObsoletedEDIMsSubfield,
} from '../EDIMSInformationObjects/ObsoletedEDIMsSubfield.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ObsoletedEDIMsField */
/**
 * @summary ObsoletedEDIMsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObsoletedEDIMsField  ::=  SEQUENCE OF ObsoletedEDIMsSubfield
 * ```
 */
export type ObsoletedEDIMsField = ObsoletedEDIMsSubfield[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ObsoletedEDIMsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObsoletedEDIMsField */
let _cached_decoder_for_ObsoletedEDIMsField: $.ASN1Decoder<ObsoletedEDIMsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObsoletedEDIMsField */

/* START_OF_SYMBOL_DEFINITION _decode_ObsoletedEDIMsField */
/**
 * @summary Decodes an ASN.1 element into a(n) ObsoletedEDIMsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObsoletedEDIMsField} The decoded data structure.
 */
export function _decode_ObsoletedEDIMsField(el: _Element) {
    if (!_cached_decoder_for_ObsoletedEDIMsField) {
        _cached_decoder_for_ObsoletedEDIMsField = $._decodeSequenceOf<ObsoletedEDIMsSubfield>(
            () => _decode_ObsoletedEDIMsSubfield
        );
    }
    return _cached_decoder_for_ObsoletedEDIMsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObsoletedEDIMsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObsoletedEDIMsField */
let _cached_encoder_for_ObsoletedEDIMsField: $.ASN1Encoder<ObsoletedEDIMsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObsoletedEDIMsField */

/* START_OF_SYMBOL_DEFINITION _encode_ObsoletedEDIMsField */
/**
 * @summary Encodes a(n) ObsoletedEDIMsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObsoletedEDIMsField, encoded as an ASN.1 Element.
 */
export function _encode_ObsoletedEDIMsField(
    value: ObsoletedEDIMsField,
    elGetter: $.ASN1Encoder<ObsoletedEDIMsField>
) {
    if (!_cached_encoder_for_ObsoletedEDIMsField) {
        _cached_encoder_for_ObsoletedEDIMsField = $._encodeSequenceOf<ObsoletedEDIMsSubfield>(
            () => _encode_ObsoletedEDIMsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_ObsoletedEDIMsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObsoletedEDIMsField */

/* eslint-enable */
