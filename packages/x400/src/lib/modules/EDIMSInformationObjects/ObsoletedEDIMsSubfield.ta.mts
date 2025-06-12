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
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';
export {
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ObsoletedEDIMsSubfield */
/**
 * @summary ObsoletedEDIMsSubfield
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObsoletedEDIMsSubfield  ::=  EDIMIdentifier
 * ```
 */
export type ObsoletedEDIMsSubfield = EDIMIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION ObsoletedEDIMsSubfield */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObsoletedEDIMsSubfield */
let _cached_decoder_for_ObsoletedEDIMsSubfield: $.ASN1Decoder<ObsoletedEDIMsSubfield> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObsoletedEDIMsSubfield */

/* START_OF_SYMBOL_DEFINITION _decode_ObsoletedEDIMsSubfield */
/**
 * @summary Decodes an ASN.1 element into a(n) ObsoletedEDIMsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObsoletedEDIMsSubfield} The decoded data structure.
 */
export function _decode_ObsoletedEDIMsSubfield(el: _Element) {
    if (!_cached_decoder_for_ObsoletedEDIMsSubfield) {
        _cached_decoder_for_ObsoletedEDIMsSubfield = _decode_EDIMIdentifier;
    }
    return _cached_decoder_for_ObsoletedEDIMsSubfield(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObsoletedEDIMsSubfield */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObsoletedEDIMsSubfield */
let _cached_encoder_for_ObsoletedEDIMsSubfield: $.ASN1Encoder<ObsoletedEDIMsSubfield> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObsoletedEDIMsSubfield */

/* START_OF_SYMBOL_DEFINITION _encode_ObsoletedEDIMsSubfield */
/**
 * @summary Encodes a(n) ObsoletedEDIMsSubfield into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObsoletedEDIMsSubfield, encoded as an ASN.1 Element.
 */
export function _encode_ObsoletedEDIMsSubfield(
    value: ObsoletedEDIMsSubfield,
    elGetter: $.ASN1Encoder<ObsoletedEDIMsSubfield>
) {
    if (!_cached_encoder_for_ObsoletedEDIMsSubfield) {
        _cached_encoder_for_ObsoletedEDIMsSubfield = _encode_EDIMIdentifier;
    }
    return _cached_encoder_for_ObsoletedEDIMsSubfield(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObsoletedEDIMsSubfield */

/* eslint-enable */
