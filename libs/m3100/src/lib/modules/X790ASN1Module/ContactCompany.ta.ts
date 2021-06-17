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
    GraphicStringBase,
    _decode_GraphicStringBase,
    _encode_GraphicStringBase,
} from '../X790ASN1Module/GraphicStringBase.ta';
export {
    GraphicStringBase,
    _decode_GraphicStringBase,
    _encode_GraphicStringBase,
} from '../X790ASN1Module/GraphicStringBase.ta';

/* START_OF_SYMBOL_DEFINITION ContactCompany */
/**
 * @summary ContactCompany
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContactCompany  ::=  GraphicStringBase
 * ```
 */
export type ContactCompany = GraphicStringBase; // DefinedType
/* END_OF_SYMBOL_DEFINITION ContactCompany */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactCompany */
let _cached_decoder_for_ContactCompany: $.ASN1Decoder<ContactCompany> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContactCompany */

/* START_OF_SYMBOL_DEFINITION _decode_ContactCompany */
/**
 * @summary Decodes an ASN.1 element into a(n) ContactCompany
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContactCompany} The decoded data structure.
 */
export function _decode_ContactCompany(el: _Element) {
    if (!_cached_decoder_for_ContactCompany) {
        _cached_decoder_for_ContactCompany = _decode_GraphicStringBase;
    }
    return _cached_decoder_for_ContactCompany(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContactCompany */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactCompany */
let _cached_encoder_for_ContactCompany: $.ASN1Encoder<ContactCompany> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContactCompany */

/* START_OF_SYMBOL_DEFINITION _encode_ContactCompany */
/**
 * @summary Encodes a(n) ContactCompany into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactCompany, encoded as an ASN.1 Element.
 */
export function _encode_ContactCompany(
    value: ContactCompany,
    elGetter: $.ASN1Encoder<ContactCompany>
) {
    if (!_cached_encoder_for_ContactCompany) {
        _cached_encoder_for_ContactCompany = _encode_GraphicStringBase;
    }
    return _cached_encoder_for_ContactCompany(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContactCompany */

/* eslint-enable */
