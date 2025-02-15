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
    BodyPartReference,
    _decode_BodyPartReference,
    _encode_BodyPartReference,
} from '../IPMSInformationObjects/BodyPartReference.ta';
export {
    BodyPartReference,
    _decode_BodyPartReference,
    _encode_BodyPartReference,
} from '../IPMSInformationObjects/BodyPartReference.ta';

/* START_OF_SYMBOL_DEFINITION BodyPartReferences */
/**
 * @summary BodyPartReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartReferences  ::=  SEQUENCE OF BodyPartReference
 * ```
 */
export type BodyPartReferences = BodyPartReference[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BodyPartReferences */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartReferences */
let _cached_decoder_for_BodyPartReferences: $.ASN1Decoder<BodyPartReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartReferences */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartReferences */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartReferences} The decoded data structure.
 */
export function _decode_BodyPartReferences(el: _Element) {
    if (!_cached_decoder_for_BodyPartReferences) {
        _cached_decoder_for_BodyPartReferences = $._decodeSequenceOf<BodyPartReference>(
            () => _decode_BodyPartReference
        );
    }
    return _cached_decoder_for_BodyPartReferences(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartReferences */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartReferences */
let _cached_encoder_for_BodyPartReferences: $.ASN1Encoder<BodyPartReferences> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartReferences */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartReferences */
/**
 * @summary Encodes a(n) BodyPartReferences into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartReferences, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartReferences(
    value: BodyPartReferences,
    elGetter: $.ASN1Encoder<BodyPartReferences>
) {
    if (!_cached_encoder_for_BodyPartReferences) {
        _cached_encoder_for_BodyPartReferences = $._encodeSequenceOf<BodyPartReference>(
            () => _encode_BodyPartReference,
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartReferences(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartReferences */

/* eslint-enable */
