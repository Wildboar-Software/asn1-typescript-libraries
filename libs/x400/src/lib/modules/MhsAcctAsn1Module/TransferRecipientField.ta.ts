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
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta';
export {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta';

/* START_OF_SYMBOL_DEFINITION TransferRecipientField */
/**
 * @summary TransferRecipientField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransferRecipientField  ::=  MTAName
 * ```
 */
export type TransferRecipientField = MTAName; // DefinedType
/* END_OF_SYMBOL_DEFINITION TransferRecipientField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TransferRecipientField */
let _cached_decoder_for_TransferRecipientField: $.ASN1Decoder<TransferRecipientField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TransferRecipientField */

/* START_OF_SYMBOL_DEFINITION _decode_TransferRecipientField */
/**
 * @summary Decodes an ASN.1 element into a(n) TransferRecipientField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransferRecipientField} The decoded data structure.
 */
export function _decode_TransferRecipientField(el: _Element) {
    if (!_cached_decoder_for_TransferRecipientField) {
        _cached_decoder_for_TransferRecipientField = _decode_MTAName;
    }
    return _cached_decoder_for_TransferRecipientField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TransferRecipientField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TransferRecipientField */
let _cached_encoder_for_TransferRecipientField: $.ASN1Encoder<TransferRecipientField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TransferRecipientField */

/* START_OF_SYMBOL_DEFINITION _encode_TransferRecipientField */
/**
 * @summary Encodes a(n) TransferRecipientField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferRecipientField, encoded as an ASN.1 Element.
 */
export function _encode_TransferRecipientField(
    value: TransferRecipientField,
    elGetter: $.ASN1Encoder<TransferRecipientField>
) {
    if (!_cached_encoder_for_TransferRecipientField) {
        _cached_encoder_for_TransferRecipientField = _encode_MTAName;
    }
    return _cached_encoder_for_TransferRecipientField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TransferRecipientField */

/* eslint-enable */
