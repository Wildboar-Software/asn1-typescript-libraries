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
    AccessdErr,
    _decode_AccessdErr,
    _encode_AccessdErr,
} from '../Pbact-access/AccessdErr.ta';
export {
    AccessdErr,
    _decode_AccessdErr,
    _encode_AccessdErr,
} from '../Pbact-access/AccessdErr.ta';

/* START_OF_SYMBOL_DEFINITION DeleteResult */
/**
 * @summary DeleteResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteResult  ::=  CHOICE {
 *   success   [0] NULL,
 *   failure   [1] AccessdErr,
 *   ... }
 * ```
 */
export type DeleteResult =
    | { success: NULL } /* CHOICE_ALT_ROOT */
    | { failure: AccessdErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION DeleteResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteResult */
let _cached_decoder_for_DeleteResult: $.ASN1Decoder<DeleteResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteResult */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteResult */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteResult} The decoded data structure.
 */
export function _decode_DeleteResult(el: _Element) {
    if (!_cached_decoder_for_DeleteResult) {
        _cached_decoder_for_DeleteResult = $._decode_extensible_choice<DeleteResult>(
            {
                'CONTEXT 0': [
                    'success',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'failure',
                    $._decode_explicit<AccessdErr>(() => _decode_AccessdErr),
                ],
            }
        );
    }
    return _cached_decoder_for_DeleteResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteResult */
let _cached_encoder_for_DeleteResult: $.ASN1Encoder<DeleteResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteResult */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteResult */
/**
 * @summary Encodes a(n) DeleteResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteResult, encoded as an ASN.1 Element.
 */
export function _encode_DeleteResult(
    value: DeleteResult,
    elGetter: $.ASN1Encoder<DeleteResult>
) {
    if (!_cached_encoder_for_DeleteResult) {
        _cached_encoder_for_DeleteResult = $._encode_choice<DeleteResult>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
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
    return _cached_encoder_for_DeleteResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteResult */

/* eslint-enable */
