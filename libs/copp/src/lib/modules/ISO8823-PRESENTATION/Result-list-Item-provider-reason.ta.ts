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

/* START_OF_SYMBOL_DEFINITION Result_list_Item_provider_reason */
/**
 * @summary Result_list_Item_provider_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result-list-Item-provider-reason ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Result_list_Item_provider_reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Result_list_Item_provider_reason */

/* START_OF_SYMBOL_DEFINITION Result_list_Item_provider_reason_reason_not_specified */
/**
 * @summary Result_list_Item_provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_reason_not_specified: Result_list_Item_provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Result_list_Item_provider_reason_reason_not_specified */

/* START_OF_SYMBOL_DEFINITION reason_not_specified */
/**
 * @summary Result_list_Item_provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const reason_not_specified: Result_list_Item_provider_reason = Result_list_Item_provider_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reason_not_specified */

/* START_OF_SYMBOL_DEFINITION Result_list_Item_provider_reason_abstract_syntax_not_supported */
/**
 * @summary Result_list_Item_provider_reason_abstract_syntax_not_supported
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_abstract_syntax_not_supported: Result_list_Item_provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Result_list_Item_provider_reason_abstract_syntax_not_supported */

/* START_OF_SYMBOL_DEFINITION abstract_syntax_not_supported */
/**
 * @summary Result_list_Item_provider_reason_abstract_syntax_not_supported
 * @constant
 * @type {number}
 */
export const abstract_syntax_not_supported: Result_list_Item_provider_reason = Result_list_Item_provider_reason_abstract_syntax_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION abstract_syntax_not_supported */

/* START_OF_SYMBOL_DEFINITION Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported */
/**
 * @summary Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported: Result_list_Item_provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported */

/* START_OF_SYMBOL_DEFINITION proposed_transfer_syntaxes_not_supported */
/**
 * @summary Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported
 * @constant
 * @type {number}
 */
export const proposed_transfer_syntaxes_not_supported: Result_list_Item_provider_reason = Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION proposed_transfer_syntaxes_not_supported */

/* START_OF_SYMBOL_DEFINITION Result_list_Item_provider_reason_local_limit_on_DCS_exceeded */
/**
 * @summary Result_list_Item_provider_reason_local_limit_on_DCS_exceeded
 * @constant
 * @type {number}
 */
export const Result_list_Item_provider_reason_local_limit_on_DCS_exceeded: Result_list_Item_provider_reason = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Result_list_Item_provider_reason_local_limit_on_DCS_exceeded */

/* START_OF_SYMBOL_DEFINITION local_limit_on_DCS_exceeded */
/**
 * @summary Result_list_Item_provider_reason_local_limit_on_DCS_exceeded
 * @constant
 * @type {number}
 */
export const local_limit_on_DCS_exceeded: Result_list_Item_provider_reason = Result_list_Item_provider_reason_local_limit_on_DCS_exceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION local_limit_on_DCS_exceeded */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Result_list_Item_provider_reason */
let _cached_decoder_for_Result_list_Item_provider_reason: $.ASN1Decoder<Result_list_Item_provider_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Result_list_Item_provider_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Result_list_Item_provider_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) Result_list_Item_provider_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Result_list_Item_provider_reason} The decoded data structure.
 */
export function _decode_Result_list_Item_provider_reason(el: _Element) {
    if (!_cached_decoder_for_Result_list_Item_provider_reason) {
        _cached_decoder_for_Result_list_Item_provider_reason = $._decodeInteger;
    }
    return _cached_decoder_for_Result_list_Item_provider_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Result_list_Item_provider_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Result_list_Item_provider_reason */
let _cached_encoder_for_Result_list_Item_provider_reason: $.ASN1Encoder<Result_list_Item_provider_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Result_list_Item_provider_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Result_list_Item_provider_reason */
/**
 * @summary Encodes a(n) Result_list_Item_provider_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result_list_Item_provider_reason, encoded as an ASN.1 Element.
 */
export function _encode_Result_list_Item_provider_reason(
    value: Result_list_Item_provider_reason,
    elGetter: $.ASN1Encoder<Result_list_Item_provider_reason>
) {
    if (!_cached_encoder_for_Result_list_Item_provider_reason) {
        _cached_encoder_for_Result_list_Item_provider_reason = $._encodeInteger;
    }
    return _cached_encoder_for_Result_list_Item_provider_reason(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Result_list_Item_provider_reason */

/* eslint-enable */
