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
    ForwardedContentToken_Item,
    _decode_ForwardedContentToken_Item,
    _encode_ForwardedContentToken_Item,
} from '../IPMSSecurityExtensions/ForwardedContentToken-Item.ta.js';
export {
    ForwardedContentToken_Item,
    _decode_ForwardedContentToken_Item,
    _encode_ForwardedContentToken_Item,
} from '../IPMSSecurityExtensions/ForwardedContentToken-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION ForwardedContentToken */
/**
 * @summary ForwardedContentToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardedContentToken  ::=
 *   SET OF
 *     SET {body-part-number  BodyPartNumber,
 *          body-part-choice
 *            CHOICE {forwarding-token              MessageToken,
 *                    message-or-content-body-part  ForwardedContentToken
 *          }}
 * ```
 */
export type ForwardedContentToken = ForwardedContentToken_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ForwardedContentToken */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardedContentToken */
let _cached_decoder_for_ForwardedContentToken: $.ASN1Decoder<ForwardedContentToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ForwardedContentToken */

/* START_OF_SYMBOL_DEFINITION _decode_ForwardedContentToken */
/**
 * @summary Decodes an ASN.1 element into a(n) ForwardedContentToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardedContentToken} The decoded data structure.
 */
export function _decode_ForwardedContentToken(el: _Element) {
    if (!_cached_decoder_for_ForwardedContentToken) {
        _cached_decoder_for_ForwardedContentToken = $._decodeSetOf<ForwardedContentToken_Item>(
            () => _decode_ForwardedContentToken_Item
        );
    }
    return _cached_decoder_for_ForwardedContentToken(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ForwardedContentToken */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardedContentToken */
let _cached_encoder_for_ForwardedContentToken: $.ASN1Encoder<ForwardedContentToken> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ForwardedContentToken */

/* START_OF_SYMBOL_DEFINITION _encode_ForwardedContentToken */
/**
 * @summary Encodes a(n) ForwardedContentToken into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardedContentToken, encoded as an ASN.1 Element.
 */
export function _encode_ForwardedContentToken(
    value: ForwardedContentToken,
    elGetter: $.ASN1Encoder<ForwardedContentToken>
) {
    if (!_cached_encoder_for_ForwardedContentToken) {
        _cached_encoder_for_ForwardedContentToken = $._encodeSetOf<ForwardedContentToken_Item>(
            () => _encode_ForwardedContentToken_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ForwardedContentToken(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ForwardedContentToken */

/* eslint-enable */
