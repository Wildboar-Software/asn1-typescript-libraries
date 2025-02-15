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
    OptionalObject,
    _decode_OptionalObject,
    _encode_OptionalObject,
} from '../ChangeOverASN1Productions/OptionalObject.ta';
export {
    OptionalObject,
    _decode_OptionalObject,
    _encode_OptionalObject,
} from '../ChangeOverASN1Productions/OptionalObject.ta';

/* START_OF_SYMBOL_DEFINITION PrimaryObjectSpecified */
/**
 * @summary PrimaryObjectSpecified
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryObjectSpecified  ::=  OptionalObject
 * ```
 */
export type PrimaryObjectSpecified = OptionalObject; // DefinedType
/* END_OF_SYMBOL_DEFINITION PrimaryObjectSpecified */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrimaryObjectSpecified */
let _cached_decoder_for_PrimaryObjectSpecified: $.ASN1Decoder<PrimaryObjectSpecified> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrimaryObjectSpecified */

/* START_OF_SYMBOL_DEFINITION _decode_PrimaryObjectSpecified */
/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryObjectSpecified
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryObjectSpecified} The decoded data structure.
 */
export function _decode_PrimaryObjectSpecified(el: _Element) {
    if (!_cached_decoder_for_PrimaryObjectSpecified) {
        _cached_decoder_for_PrimaryObjectSpecified = _decode_OptionalObject;
    }
    return _cached_decoder_for_PrimaryObjectSpecified(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrimaryObjectSpecified */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrimaryObjectSpecified */
let _cached_encoder_for_PrimaryObjectSpecified: $.ASN1Encoder<PrimaryObjectSpecified> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrimaryObjectSpecified */

/* START_OF_SYMBOL_DEFINITION _encode_PrimaryObjectSpecified */
/**
 * @summary Encodes a(n) PrimaryObjectSpecified into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryObjectSpecified, encoded as an ASN.1 Element.
 */
export function _encode_PrimaryObjectSpecified(
    value: PrimaryObjectSpecified,
    elGetter: $.ASN1Encoder<PrimaryObjectSpecified>
) {
    if (!_cached_encoder_for_PrimaryObjectSpecified) {
        _cached_encoder_for_PrimaryObjectSpecified = _encode_OptionalObject;
    }
    return _cached_encoder_for_PrimaryObjectSpecified(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrimaryObjectSpecified */

/* eslint-enable */
