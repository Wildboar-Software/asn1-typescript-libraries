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
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.js';
export {
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.js';

/* START_OF_SYMBOL_DEFINITION TestActionPerformerId */
/**
 * @summary TestActionPerformerId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TestActionPerformerId  ::=  SimpleNameType
 * ```
 */
export type TestActionPerformerId = SimpleNameType; // DefinedType
/* END_OF_SYMBOL_DEFINITION TestActionPerformerId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TestActionPerformerId */
let _cached_decoder_for_TestActionPerformerId: $.ASN1Decoder<TestActionPerformerId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TestActionPerformerId */

/* START_OF_SYMBOL_DEFINITION _decode_TestActionPerformerId */
/**
 * @summary Decodes an ASN.1 element into a(n) TestActionPerformerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TestActionPerformerId} The decoded data structure.
 */
export function _decode_TestActionPerformerId(el: _Element) {
    if (!_cached_decoder_for_TestActionPerformerId) {
        _cached_decoder_for_TestActionPerformerId = _decode_SimpleNameType;
    }
    return _cached_decoder_for_TestActionPerformerId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TestActionPerformerId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TestActionPerformerId */
let _cached_encoder_for_TestActionPerformerId: $.ASN1Encoder<TestActionPerformerId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TestActionPerformerId */

/* START_OF_SYMBOL_DEFINITION _encode_TestActionPerformerId */
/**
 * @summary Encodes a(n) TestActionPerformerId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TestActionPerformerId, encoded as an ASN.1 Element.
 */
export function _encode_TestActionPerformerId(
    value: TestActionPerformerId,
    elGetter: $.ASN1Encoder<TestActionPerformerId>
) {
    if (!_cached_encoder_for_TestActionPerformerId) {
        _cached_encoder_for_TestActionPerformerId = _encode_SimpleNameType;
    }
    return _cached_encoder_for_TestActionPerformerId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TestActionPerformerId */

/* eslint-enable */
