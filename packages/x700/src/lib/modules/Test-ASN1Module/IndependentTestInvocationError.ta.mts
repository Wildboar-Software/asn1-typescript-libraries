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
    IndependentTestInvocationError_Item,
    _decode_IndependentTestInvocationError_Item,
    _encode_IndependentTestInvocationError_Item,
} from '../Test-ASN1Module/IndependentTestInvocationError-Item.ta.mjs';
export {
    IndependentTestInvocationError_Item,
    _decode_IndependentTestInvocationError_Item,
    _encode_IndependentTestInvocationError_Item,
} from '../Test-ASN1Module/IndependentTestInvocationError-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION IndependentTestInvocationError */
/**
 * @summary IndependentTestInvocationError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IndependentTestInvocationError  ::=
 *   SEQUENCE OF
 *     CHOICE {testInstanceCreated  [0]  IndependentTestResponse,
 *             tONotCreated         TONotCreated}
 * ```
 */
export type IndependentTestInvocationError = IndependentTestInvocationError_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION IndependentTestInvocationError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IndependentTestInvocationError */
let _cached_decoder_for_IndependentTestInvocationError: $.ASN1Decoder<IndependentTestInvocationError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IndependentTestInvocationError */

/* START_OF_SYMBOL_DEFINITION _decode_IndependentTestInvocationError */
/**
 * @summary Decodes an ASN.1 element into a(n) IndependentTestInvocationError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IndependentTestInvocationError} The decoded data structure.
 */
export function _decode_IndependentTestInvocationError(el: _Element) {
    if (!_cached_decoder_for_IndependentTestInvocationError) {
        _cached_decoder_for_IndependentTestInvocationError = $._decodeSequenceOf<IndependentTestInvocationError_Item>(
            () => _decode_IndependentTestInvocationError_Item
        );
    }
    return _cached_decoder_for_IndependentTestInvocationError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IndependentTestInvocationError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IndependentTestInvocationError */
let _cached_encoder_for_IndependentTestInvocationError: $.ASN1Encoder<IndependentTestInvocationError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IndependentTestInvocationError */

/* START_OF_SYMBOL_DEFINITION _encode_IndependentTestInvocationError */
/**
 * @summary Encodes a(n) IndependentTestInvocationError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndependentTestInvocationError, encoded as an ASN.1 Element.
 */
export function _encode_IndependentTestInvocationError(
    value: IndependentTestInvocationError,
    elGetter: $.ASN1Encoder<IndependentTestInvocationError>
) {
    if (!_cached_encoder_for_IndependentTestInvocationError) {
        _cached_encoder_for_IndependentTestInvocationError = $._encodeSequenceOf<IndependentTestInvocationError_Item>(
            () => _encode_IndependentTestInvocationError_Item,
            $.BER
        );
    }
    return _cached_encoder_for_IndependentTestInvocationError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IndependentTestInvocationError */

/* eslint-enable */
