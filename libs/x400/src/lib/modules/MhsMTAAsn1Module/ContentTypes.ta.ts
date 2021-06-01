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
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta';
export {
    ContentType,
    _decode_ContentType,
    _encode_ContentType,
} from '../MTSAbstractService/ContentType.ta';

/* START_OF_SYMBOL_DEFINITION ContentTypes */
/**
 * @summary ContentTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentTypes  ::=  SET OF ContentType
 * ```
 */
export type ContentTypes = ContentType[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ContentTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentTypes */
let _cached_decoder_for_ContentTypes: $.ASN1Decoder<ContentTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentTypes */

/* START_OF_SYMBOL_DEFINITION _decode_ContentTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentTypes} The decoded data structure.
 */
export function _decode_ContentTypes(el: _Element) {
    if (!_cached_decoder_for_ContentTypes) {
        _cached_decoder_for_ContentTypes = $._decodeSetOf<ContentType>(
            () => _decode_ContentType
        );
    }
    return _cached_decoder_for_ContentTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentTypes */
let _cached_encoder_for_ContentTypes: $.ASN1Encoder<ContentTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentTypes */

/* START_OF_SYMBOL_DEFINITION _encode_ContentTypes */
/**
 * @summary Encodes a(n) ContentTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentTypes, encoded as an ASN.1 Element.
 */
export function _encode_ContentTypes(
    value: ContentTypes,
    elGetter: $.ASN1Encoder<ContentTypes>
) {
    if (!_cached_encoder_for_ContentTypes) {
        _cached_encoder_for_ContentTypes = $._encodeSetOf<ContentType>(
            () => _encode_ContentType,
            $.BER
        );
    }
    return _cached_encoder_for_ContentTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentTypes */

/* eslint-enable */
