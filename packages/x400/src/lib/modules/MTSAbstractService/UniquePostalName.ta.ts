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
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from '../MTSAbstractService/PDSParameter.ta.js';
export {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from '../MTSAbstractService/PDSParameter.ta.js';

/* START_OF_SYMBOL_DEFINITION UniquePostalName */
/**
 * @summary UniquePostalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniquePostalName  ::=  PDSParameter
 * ```
 */
export type UniquePostalName = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniquePostalName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniquePostalName */
let _cached_decoder_for_UniquePostalName: $.ASN1Decoder<UniquePostalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniquePostalName */

/* START_OF_SYMBOL_DEFINITION _decode_UniquePostalName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniquePostalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniquePostalName} The decoded data structure.
 */
export function _decode_UniquePostalName(el: _Element) {
    if (!_cached_decoder_for_UniquePostalName) {
        _cached_decoder_for_UniquePostalName = _decode_PDSParameter;
    }
    return _cached_decoder_for_UniquePostalName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniquePostalName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniquePostalName */
let _cached_encoder_for_UniquePostalName: $.ASN1Encoder<UniquePostalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniquePostalName */

/* START_OF_SYMBOL_DEFINITION _encode_UniquePostalName */
/**
 * @summary Encodes a(n) UniquePostalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniquePostalName, encoded as an ASN.1 Element.
 */
export function _encode_UniquePostalName(
    value: UniquePostalName,
    elGetter: $.ASN1Encoder<UniquePostalName>
) {
    if (!_cached_encoder_for_UniquePostalName) {
        _cached_encoder_for_UniquePostalName = _encode_PDSParameter;
    }
    return _cached_encoder_for_UniquePostalName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniquePostalName */

/* eslint-enable */
