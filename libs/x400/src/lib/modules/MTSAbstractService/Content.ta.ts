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

/* START_OF_SYMBOL_DEFINITION Content */
/**
 * @summary Content
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Content  ::=
 *   OCTET
 *     STRING
 * ```
 */
export type Content = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Content */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Content */
let _cached_decoder_for_Content: $.ASN1Decoder<Content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Content */

/* START_OF_SYMBOL_DEFINITION _decode_Content */
/**
 * @summary Decodes an ASN.1 element into a(n) Content
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Content} The decoded data structure.
 */
export function _decode_Content(el: _Element) {
    if (!_cached_decoder_for_Content) {
        _cached_decoder_for_Content = $._decodeOctetString;
    }
    return _cached_decoder_for_Content(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Content */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Content */
let _cached_encoder_for_Content: $.ASN1Encoder<Content> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Content */

/* START_OF_SYMBOL_DEFINITION _encode_Content */
/**
 * @summary Encodes a(n) Content into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Content, encoded as an ASN.1 Element.
 */
export function _encode_Content(
    value: Content,
    elGetter: $.ASN1Encoder<Content>
) {
    if (!_cached_encoder_for_Content) {
        _cached_encoder_for_Content = $._encodeOctetString;
    }
    return _cached_encoder_for_Content(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Content */

/* eslint-enable */
