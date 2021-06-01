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
    ReplyRecipientsSubfield,
    _decode_ReplyRecipientsSubfield,
    _encode_ReplyRecipientsSubfield,
} from '../IPMSInformationObjects/ReplyRecipientsSubfield.ta';
export {
    ReplyRecipientsSubfield,
    _decode_ReplyRecipientsSubfield,
    _encode_ReplyRecipientsSubfield,
} from '../IPMSInformationObjects/ReplyRecipientsSubfield.ta';

/* START_OF_SYMBOL_DEFINITION ReplyRecipientsField */
/**
 * @summary ReplyRecipientsField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyRecipientsField  ::=  SEQUENCE OF ReplyRecipientsSubfield
 * ```
 */
export type ReplyRecipientsField = ReplyRecipientsSubfield[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ReplyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyRecipientsField */
let _cached_decoder_for_ReplyRecipientsField: $.ASN1Decoder<ReplyRecipientsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _decode_ReplyRecipientsField */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplyRecipientsField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyRecipientsField} The decoded data structure.
 */
export function _decode_ReplyRecipientsField(el: _Element) {
    if (!_cached_decoder_for_ReplyRecipientsField) {
        _cached_decoder_for_ReplyRecipientsField = $._decodeSequenceOf<ReplyRecipientsSubfield>(
            () => _decode_ReplyRecipientsSubfield
        );
    }
    return _cached_decoder_for_ReplyRecipientsField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyRecipientsField */
let _cached_encoder_for_ReplyRecipientsField: $.ASN1Encoder<ReplyRecipientsField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyRecipientsField */

/* START_OF_SYMBOL_DEFINITION _encode_ReplyRecipientsField */
/**
 * @summary Encodes a(n) ReplyRecipientsField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyRecipientsField, encoded as an ASN.1 Element.
 */
export function _encode_ReplyRecipientsField(
    value: ReplyRecipientsField,
    elGetter: $.ASN1Encoder<ReplyRecipientsField>
) {
    if (!_cached_encoder_for_ReplyRecipientsField) {
        _cached_encoder_for_ReplyRecipientsField = $._encodeSequenceOf<ReplyRecipientsSubfield>(
            () => _encode_ReplyRecipientsSubfield,
            $.BER
        );
    }
    return _cached_encoder_for_ReplyRecipientsField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplyRecipientsField */

/* eslint-enable */
