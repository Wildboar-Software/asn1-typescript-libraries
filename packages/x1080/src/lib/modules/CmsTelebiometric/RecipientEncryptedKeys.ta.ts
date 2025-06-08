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
    RecipientEncryptedKey,
    _decode_RecipientEncryptedKey,
    _encode_RecipientEncryptedKey,
} from '../CmsTelebiometric/RecipientEncryptedKey.ta';
export {
    RecipientEncryptedKey,
    _decode_RecipientEncryptedKey,
    _encode_RecipientEncryptedKey,
} from '../CmsTelebiometric/RecipientEncryptedKey.ta';

/* START_OF_SYMBOL_DEFINITION RecipientEncryptedKeys */
/**
 * @summary RecipientEncryptedKeys
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientEncryptedKeys  ::=  SEQUENCE (SIZE (1)) OF RecipientEncryptedKey
 * ```
 */
export type RecipientEncryptedKeys = RecipientEncryptedKey[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RecipientEncryptedKeys */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientEncryptedKeys */
let _cached_decoder_for_RecipientEncryptedKeys: $.ASN1Decoder<RecipientEncryptedKeys> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientEncryptedKeys */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientEncryptedKeys */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientEncryptedKeys
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientEncryptedKeys} The decoded data structure.
 */
export function _decode_RecipientEncryptedKeys(el: _Element) {
    if (!_cached_decoder_for_RecipientEncryptedKeys) {
        _cached_decoder_for_RecipientEncryptedKeys = $._decodeSequenceOf<RecipientEncryptedKey>(
            () => _decode_RecipientEncryptedKey
        );
    }
    return _cached_decoder_for_RecipientEncryptedKeys(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientEncryptedKeys */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientEncryptedKeys */
let _cached_encoder_for_RecipientEncryptedKeys: $.ASN1Encoder<RecipientEncryptedKeys> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientEncryptedKeys */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientEncryptedKeys */
/**
 * @summary Encodes a(n) RecipientEncryptedKeys into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientEncryptedKeys, encoded as an ASN.1 Element.
 */
export function _encode_RecipientEncryptedKeys(
    value: RecipientEncryptedKeys,
    elGetter: $.ASN1Encoder<RecipientEncryptedKeys>
) {
    if (!_cached_encoder_for_RecipientEncryptedKeys) {
        _cached_encoder_for_RecipientEncryptedKeys = $._encodeSequenceOf<RecipientEncryptedKey>(
            () => _encode_RecipientEncryptedKey,
            $.BER
        );
    }
    return _cached_encoder_for_RecipientEncryptedKeys(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientEncryptedKeys */

/* eslint-enable */
