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
    BuiltInDomainDefinedAttribute,
    _decode_BuiltInDomainDefinedAttribute,
    _encode_BuiltInDomainDefinedAttribute,
} from '../MTSAbstractService/BuiltInDomainDefinedAttribute.ta';
export {
    BuiltInDomainDefinedAttribute,
    _decode_BuiltInDomainDefinedAttribute,
    _encode_BuiltInDomainDefinedAttribute,
} from '../MTSAbstractService/BuiltInDomainDefinedAttribute.ta';

/* START_OF_SYMBOL_DEFINITION BuiltInDomainDefinedAttributes */
/**
 * @summary BuiltInDomainDefinedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInDomainDefinedAttributes  ::=
 *   SEQUENCE SIZE (1..ub-domain-defined-attributes) OF
 *     BuiltInDomainDefinedAttribute
 * ```
 */
export type BuiltInDomainDefinedAttributes = BuiltInDomainDefinedAttribute[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BuiltInDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BuiltInDomainDefinedAttributes */
let _cached_decoder_for_BuiltInDomainDefinedAttributes: $.ASN1Decoder<BuiltInDomainDefinedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BuiltInDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_BuiltInDomainDefinedAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInDomainDefinedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInDomainDefinedAttributes} The decoded data structure.
 */
export function _decode_BuiltInDomainDefinedAttributes(el: _Element) {
    if (!_cached_decoder_for_BuiltInDomainDefinedAttributes) {
        _cached_decoder_for_BuiltInDomainDefinedAttributes = $._decodeSequenceOf<BuiltInDomainDefinedAttribute>(
            () => _decode_BuiltInDomainDefinedAttribute
        );
    }
    return _cached_decoder_for_BuiltInDomainDefinedAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BuiltInDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BuiltInDomainDefinedAttributes */
let _cached_encoder_for_BuiltInDomainDefinedAttributes: $.ASN1Encoder<BuiltInDomainDefinedAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BuiltInDomainDefinedAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_BuiltInDomainDefinedAttributes */
/**
 * @summary Encodes a(n) BuiltInDomainDefinedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInDomainDefinedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInDomainDefinedAttributes(
    value: BuiltInDomainDefinedAttributes,
    elGetter: $.ASN1Encoder<BuiltInDomainDefinedAttributes>
) {
    if (!_cached_encoder_for_BuiltInDomainDefinedAttributes) {
        _cached_encoder_for_BuiltInDomainDefinedAttributes = $._encodeSequenceOf<BuiltInDomainDefinedAttribute>(
            () => _encode_BuiltInDomainDefinedAttribute,
            $.BER
        );
    }
    return _cached_encoder_for_BuiltInDomainDefinedAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BuiltInDomainDefinedAttributes */

/* eslint-enable */
