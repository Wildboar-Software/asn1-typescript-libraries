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

/* START_OF_SYMBOL_DEFINITION LocationName */
/**
 * @summary LocationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocationName  ::=  GraphicString
 * ```
 */
export type LocationName = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION LocationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocationName */
let _cached_decoder_for_LocationName: $.ASN1Decoder<LocationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocationName */

/* START_OF_SYMBOL_DEFINITION _decode_LocationName */
/**
 * @summary Decodes an ASN.1 element into a(n) LocationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocationName} The decoded data structure.
 */
export function _decode_LocationName(el: _Element) {
    if (!_cached_decoder_for_LocationName) {
        _cached_decoder_for_LocationName = $._decodeGraphicString;
    }
    return _cached_decoder_for_LocationName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocationName */
let _cached_encoder_for_LocationName: $.ASN1Encoder<LocationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocationName */

/* START_OF_SYMBOL_DEFINITION _encode_LocationName */
/**
 * @summary Encodes a(n) LocationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationName, encoded as an ASN.1 Element.
 */
export function _encode_LocationName(
    value: LocationName,
    elGetter: $.ASN1Encoder<LocationName>
) {
    if (!_cached_encoder_for_LocationName) {
        _cached_encoder_for_LocationName = $._encodeGraphicString;
    }
    return _cached_encoder_for_LocationName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocationName */

/* eslint-enable */
