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
    RelatedMessageReference,
    _decode_RelatedMessageReference,
    _encode_RelatedMessageReference,
} from '../EDIMSInformationObjects/RelatedMessageReference.ta';
export {
    RelatedMessageReference,
    _decode_RelatedMessageReference,
    _encode_RelatedMessageReference,
} from '../EDIMSInformationObjects/RelatedMessageReference.ta';

/* START_OF_SYMBOL_DEFINITION RelatedMessagesField */
/**
 * @summary RelatedMessagesField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedMessagesField  ::=  SEQUENCE OF RelatedMessageReference
 * ```
 */
export type RelatedMessagesField = RelatedMessageReference[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RelatedMessagesField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedMessagesField */
let _cached_decoder_for_RelatedMessagesField: $.ASN1Decoder<RelatedMessagesField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedMessagesField */

/* START_OF_SYMBOL_DEFINITION _decode_RelatedMessagesField */
/**
 * @summary Decodes an ASN.1 element into a(n) RelatedMessagesField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedMessagesField} The decoded data structure.
 */
export function _decode_RelatedMessagesField(el: _Element) {
    if (!_cached_decoder_for_RelatedMessagesField) {
        _cached_decoder_for_RelatedMessagesField = $._decodeSequenceOf<RelatedMessageReference>(
            () => _decode_RelatedMessageReference
        );
    }
    return _cached_decoder_for_RelatedMessagesField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelatedMessagesField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedMessagesField */
let _cached_encoder_for_RelatedMessagesField: $.ASN1Encoder<RelatedMessagesField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedMessagesField */

/* START_OF_SYMBOL_DEFINITION _encode_RelatedMessagesField */
/**
 * @summary Encodes a(n) RelatedMessagesField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedMessagesField, encoded as an ASN.1 Element.
 */
export function _encode_RelatedMessagesField(
    value: RelatedMessagesField,
    elGetter: $.ASN1Encoder<RelatedMessagesField>
) {
    if (!_cached_encoder_for_RelatedMessagesField) {
        _cached_encoder_for_RelatedMessagesField = $._encodeSequenceOf<RelatedMessageReference>(
            () => _encode_RelatedMessageReference,
            $.BER
        );
    }
    return _cached_encoder_for_RelatedMessagesField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelatedMessagesField */

/* eslint-enable */
