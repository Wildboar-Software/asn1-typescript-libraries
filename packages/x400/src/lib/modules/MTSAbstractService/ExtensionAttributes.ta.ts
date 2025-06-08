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
    ExtensionAttribute,
    _decode_ExtensionAttribute,
    _encode_ExtensionAttribute,
} from '../MTSAbstractService/ExtensionAttribute.ta';
export {
    ExtensionAttribute,
    _decode_ExtensionAttribute,
    _encode_ExtensionAttribute,
} from '../MTSAbstractService/ExtensionAttribute.ta';

/* START_OF_SYMBOL_DEFINITION ExtensionAttributes */
/**
 * @summary ExtensionAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttributes  ::=
 *   SET SIZE (1..ub-extension-attributes) OF ExtensionAttribute
 * ```
 */
export type ExtensionAttributes = ExtensionAttribute[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ExtensionAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionAttributes */
let _cached_decoder_for_ExtensionAttributes: $.ASN1Decoder<ExtensionAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionAttributes} The decoded data structure.
 */
export function _decode_ExtensionAttributes(el: _Element) {
    if (!_cached_decoder_for_ExtensionAttributes) {
        _cached_decoder_for_ExtensionAttributes = $._decodeSetOf<ExtensionAttribute>(
            () => _decode_ExtensionAttribute
        );
    }
    return _cached_decoder_for_ExtensionAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionAttributes */
let _cached_encoder_for_ExtensionAttributes: $.ASN1Encoder<ExtensionAttributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionAttributes */
/**
 * @summary Encodes a(n) ExtensionAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionAttributes, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionAttributes(
    value: ExtensionAttributes,
    elGetter: $.ASN1Encoder<ExtensionAttributes>
) {
    if (!_cached_encoder_for_ExtensionAttributes) {
        _cached_encoder_for_ExtensionAttributes = $._encodeSetOf<ExtensionAttribute>(
            () => _encode_ExtensionAttribute,
            $.BER
        );
    }
    return _cached_encoder_for_ExtensionAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionAttributes */

/* eslint-enable */
