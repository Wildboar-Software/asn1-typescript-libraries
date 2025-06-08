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

/* START_OF_SYMBOL_DEFINITION PersonRespon */
/**
 * @summary PersonRespon
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonRespon  ::=  GraphicString(SIZE (0..64))
 * ```
 */
export type PersonRespon = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION PersonRespon */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonRespon */
let _cached_decoder_for_PersonRespon: $.ASN1Decoder<PersonRespon> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonRespon */

/* START_OF_SYMBOL_DEFINITION _decode_PersonRespon */
/**
 * @summary Decodes an ASN.1 element into a(n) PersonRespon
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PersonRespon} The decoded data structure.
 */
export function _decode_PersonRespon(el: _Element) {
    if (!_cached_decoder_for_PersonRespon) {
        _cached_decoder_for_PersonRespon = $._decodeGraphicString;
    }
    return _cached_decoder_for_PersonRespon(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PersonRespon */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonRespon */
let _cached_encoder_for_PersonRespon: $.ASN1Encoder<PersonRespon> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonRespon */

/* START_OF_SYMBOL_DEFINITION _encode_PersonRespon */
/**
 * @summary Encodes a(n) PersonRespon into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersonRespon, encoded as an ASN.1 Element.
 */
export function _encode_PersonRespon(
    value: PersonRespon,
    elGetter: $.ASN1Encoder<PersonRespon>
) {
    if (!_cached_encoder_for_PersonRespon) {
        _cached_encoder_for_PersonRespon = $._encodeGraphicString;
    }
    return _cached_encoder_for_PersonRespon(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PersonRespon */

/* eslint-enable */
