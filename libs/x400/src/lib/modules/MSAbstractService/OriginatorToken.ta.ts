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
    MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta';
export {
    MessageToken,
    _decode_MessageToken,
    _encode_MessageToken,
} from '../MTSAbstractService/MessageToken.ta';

/* START_OF_SYMBOL_DEFINITION OriginatorToken */
/**
 * @summary OriginatorToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorToken  ::=
 *   MessageToken
 *     (CONSTRAINED BY {
 *
 *        -- Must contain an asymmetric-token with an encrypted-data component --})
 * ```
 */
export type OriginatorToken = MessageToken; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginatorToken */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorToken */
let _cached_decoder_for_OriginatorToken: $.ASN1Decoder<OriginatorToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorToken */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorToken */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorToken} The decoded data structure.
 */
export function _decode_OriginatorToken(el: _Element) {
    if (!_cached_decoder_for_OriginatorToken) {
        _cached_decoder_for_OriginatorToken = _decode_MessageToken;
    }
    return _cached_decoder_for_OriginatorToken(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorToken */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorToken */
let _cached_encoder_for_OriginatorToken: $.ASN1Encoder<OriginatorToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorToken */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorToken */
/**
 * @summary Encodes a(n) OriginatorToken into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorToken, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorToken(
    value: OriginatorToken,
    elGetter: $.ASN1Encoder<OriginatorToken>
) {
    if (!_cached_encoder_for_OriginatorToken) {
        _cached_encoder_for_OriginatorToken = _encode_MessageToken;
    }
    return _cached_encoder_for_OriginatorToken(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorToken */

/* eslint-enable */
