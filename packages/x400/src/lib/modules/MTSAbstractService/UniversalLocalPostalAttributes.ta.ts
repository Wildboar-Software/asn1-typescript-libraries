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
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta';
export {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from '../MTSAbstractService/UniversalPDSParameter.ta';

/* START_OF_SYMBOL_DEFINITION UniversalLocalPostalAttributes */
/**
 * @summary UniversalLocalPostalAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalLocalPostalAttributes  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalLocalPostalAttributes = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalLocalPostalAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalLocalPostalAttributes */
let _cached_decoder_for_UniversalLocalPostalAttributes: $.ASN1Decoder<UniversalLocalPostalAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalLocalPostalAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalLocalPostalAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalLocalPostalAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalLocalPostalAttributes} The decoded data structure.
 */
export function _decode_UniversalLocalPostalAttributes(el: _Element) {
    if (!_cached_decoder_for_UniversalLocalPostalAttributes) {
        _cached_decoder_for_UniversalLocalPostalAttributes = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalLocalPostalAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalLocalPostalAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalLocalPostalAttributes */
let _cached_encoder_for_UniversalLocalPostalAttributes: $.ASN1Encoder<UniversalLocalPostalAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalLocalPostalAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalLocalPostalAttributes */
/**
 * @summary Encodes a(n) UniversalLocalPostalAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalLocalPostalAttributes, encoded as an ASN.1 Element.
 */
export function _encode_UniversalLocalPostalAttributes(
    value: UniversalLocalPostalAttributes,
    elGetter: $.ASN1Encoder<UniversalLocalPostalAttributes>
) {
    if (!_cached_encoder_for_UniversalLocalPostalAttributes) {
        _cached_encoder_for_UniversalLocalPostalAttributes = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalLocalPostalAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalLocalPostalAttributes */

/* eslint-enable */
