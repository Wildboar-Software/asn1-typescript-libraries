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
    ObjectInformation,
    _decode_ObjectInformation,
    _encode_ObjectInformation,
} from '../Pbact-access/ObjectInformation.ta.mjs';
export {
    ObjectInformation,
    _decode_ObjectInformation,
    _encode_ObjectInformation,
} from '../Pbact-access/ObjectInformation.ta.mjs';
import {
    AccessdErr,
    _decode_AccessdErr,
    _encode_AccessdErr,
} from '../Pbact-access/AccessdErr.ta.mjs';
export {
    AccessdErr,
    _decode_AccessdErr,
    _encode_AccessdErr,
} from '../Pbact-access/AccessdErr.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ReadResult_result */
/**
 * @summary ReadResult_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReadResult-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ReadResult_result =
    | { success: ObjectInformation } /* CHOICE_ALT_ROOT */
    | { failure: AccessdErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ReadResult_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReadResult_result */
let _cached_decoder_for_ReadResult_result: $.ASN1Decoder<ReadResult_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReadResult_result */

/* START_OF_SYMBOL_DEFINITION _decode_ReadResult_result */
/**
 * @summary Decodes an ASN.1 element into a(n) ReadResult_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReadResult_result} The decoded data structure.
 */
export function _decode_ReadResult_result(el: _Element) {
    if (!_cached_decoder_for_ReadResult_result) {
        _cached_decoder_for_ReadResult_result = $._decode_extensible_choice<ReadResult_result>(
            {
                'CONTEXT 0': [
                    'success',
                    $._decode_implicit<ObjectInformation>(
                        () => _decode_ObjectInformation
                    ),
                ],
                'CONTEXT 1': [
                    'failure',
                    $._decode_explicit<AccessdErr>(() => _decode_AccessdErr),
                ],
            }
        );
    }
    return _cached_decoder_for_ReadResult_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReadResult_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReadResult_result */
let _cached_encoder_for_ReadResult_result: $.ASN1Encoder<ReadResult_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReadResult_result */

/* START_OF_SYMBOL_DEFINITION _encode_ReadResult_result */
/**
 * @summary Encodes a(n) ReadResult_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadResult_result, encoded as an ASN.1 Element.
 */
export function _encode_ReadResult_result(
    value: ReadResult_result,
    elGetter: $.ASN1Encoder<ReadResult_result>
) {
    if (!_cached_encoder_for_ReadResult_result) {
        _cached_encoder_for_ReadResult_result = $._encode_choice<ReadResult_result>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ObjectInformation,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AccessdErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ReadResult_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReadResult_result */

/* eslint-enable */
