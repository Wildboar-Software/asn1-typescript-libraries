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
    PrivAssignErr,
    _decode_PrivAssignErr,
    _encode_PrivAssignErr,
} from '../Pbact-access/PrivAssignErr.ta';
export {
    PrivAssignErr,
    _decode_PrivAssignErr,
    _encode_PrivAssignErr,
} from '../Pbact-access/PrivAssignErr.ta';

/* START_OF_SYMBOL_DEFINITION PrivAssignResult_result */
/**
 * @summary PrivAssignResult_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivAssignResult-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PrivAssignResult_result =
    | { success: NULL } /* CHOICE_ALT_ROOT */
    | { failure: PrivAssignErr } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION PrivAssignResult_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivAssignResult_result */
let _cached_decoder_for_PrivAssignResult_result: $.ASN1Decoder<PrivAssignResult_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivAssignResult_result */

/* START_OF_SYMBOL_DEFINITION _decode_PrivAssignResult_result */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivAssignResult_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivAssignResult_result} The decoded data structure.
 */
export function _decode_PrivAssignResult_result(el: _Element) {
    if (!_cached_decoder_for_PrivAssignResult_result) {
        _cached_decoder_for_PrivAssignResult_result = $._decode_inextensible_choice<PrivAssignResult_result>(
            {
                'UNIVERSAL 5': ['success', $._decodeNull],
                'CONTEXT 0': ['failure', _decode_PrivAssignErr],
                'CONTEXT 1': ['failure', _decode_PrivAssignErr],
            }
        );
    }
    return _cached_decoder_for_PrivAssignResult_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivAssignResult_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivAssignResult_result */
let _cached_encoder_for_PrivAssignResult_result: $.ASN1Encoder<PrivAssignResult_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivAssignResult_result */

/* START_OF_SYMBOL_DEFINITION _encode_PrivAssignResult_result */
/**
 * @summary Encodes a(n) PrivAssignResult_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivAssignResult_result, encoded as an ASN.1 Element.
 */
export function _encode_PrivAssignResult_result(
    value: PrivAssignResult_result,
    elGetter: $.ASN1Encoder<PrivAssignResult_result>
) {
    if (!_cached_encoder_for_PrivAssignResult_result) {
        _cached_encoder_for_PrivAssignResult_result = $._encode_choice<PrivAssignResult_result>(
            {
                success: $._encodeNull,
                failure: _encode_PrivAssignErr,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrivAssignResult_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivAssignResult_result */

/* eslint-enable */
