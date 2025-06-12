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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';
export {
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION CustomerId */
/**
 * @summary CustomerId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CustomerId  ::=  SimpleNameType
 * ```
 */
export type CustomerId = SimpleNameType; // DefinedType
/* END_OF_SYMBOL_DEFINITION CustomerId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CustomerId */
let _cached_decoder_for_CustomerId: $.ASN1Decoder<CustomerId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CustomerId */

/* START_OF_SYMBOL_DEFINITION _decode_CustomerId */
/**
 * @summary Decodes an ASN.1 element into a(n) CustomerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CustomerId} The decoded data structure.
 */
export function _decode_CustomerId(el: _Element) {
    if (!_cached_decoder_for_CustomerId) {
        _cached_decoder_for_CustomerId = _decode_SimpleNameType;
    }
    return _cached_decoder_for_CustomerId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CustomerId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CustomerId */
let _cached_encoder_for_CustomerId: $.ASN1Encoder<CustomerId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CustomerId */

/* START_OF_SYMBOL_DEFINITION _encode_CustomerId */
/**
 * @summary Encodes a(n) CustomerId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CustomerId, encoded as an ASN.1 Element.
 */
export function _encode_CustomerId(
    value: CustomerId,
    elGetter: $.ASN1Encoder<CustomerId>
) {
    if (!_cached_encoder_for_CustomerId) {
        _cached_encoder_for_CustomerId = _encode_SimpleNameType;
    }
    return _cached_encoder_for_CustomerId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CustomerId */

/* eslint-enable */
