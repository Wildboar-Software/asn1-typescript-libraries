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
    Result,
    Result_acceptance /* IMPORTED_LONG_NAMED_INTEGER */,
    acceptance /* IMPORTED_SHORT_NAMED_INTEGER */,
    Result_user_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
    user_rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
    Result_provider_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
    provider_rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Result,
    _encode_Result,
} from '../ISO8823-PRESENTATION/Result.ta';
export {
    Result,
    Result_acceptance /* IMPORTED_LONG_NAMED_INTEGER */,
    acceptance /* IMPORTED_SHORT_NAMED_INTEGER */,
    Result_user_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
    user_rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
    Result_provider_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
    provider_rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Result,
    _encode_Result,
} from '../ISO8823-PRESENTATION/Result.ta';

/* START_OF_SYMBOL_DEFINITION Default_context_result */
/**
 * @summary Default_context_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Default-context-result  ::=  Result
 * ```
 */
export type Default_context_result = Result; // DefinedType
/* END_OF_SYMBOL_DEFINITION Default_context_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Default_context_result */
let _cached_decoder_for_Default_context_result: $.ASN1Decoder<Default_context_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Default_context_result */

/* START_OF_SYMBOL_DEFINITION _decode_Default_context_result */
/**
 * @summary Decodes an ASN.1 element into a(n) Default_context_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Default_context_result} The decoded data structure.
 */
export function _decode_Default_context_result(el: _Element) {
    if (!_cached_decoder_for_Default_context_result) {
        _cached_decoder_for_Default_context_result = _decode_Result;
    }
    return _cached_decoder_for_Default_context_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Default_context_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Default_context_result */
let _cached_encoder_for_Default_context_result: $.ASN1Encoder<Default_context_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Default_context_result */

/* START_OF_SYMBOL_DEFINITION _encode_Default_context_result */
/**
 * @summary Encodes a(n) Default_context_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Default_context_result, encoded as an ASN.1 Element.
 */
export function _encode_Default_context_result(
    value: Default_context_result,
    elGetter: $.ASN1Encoder<Default_context_result>
) {
    if (!_cached_encoder_for_Default_context_result) {
        _cached_encoder_for_Default_context_result = _encode_Result;
    }
    return _cached_encoder_for_Default_context_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Default_context_result */

/* eslint-enable */
