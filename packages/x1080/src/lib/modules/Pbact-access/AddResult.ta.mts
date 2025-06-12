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
    AccessdErr,
    _decode_AccessdErr,
    _encode_AccessdErr,
} from '../Pbact-access/AccessdErr.ta.mjs';
export {
    AccessdErr,
    _decode_AccessdErr,
    _encode_AccessdErr,
} from '../Pbact-access/AccessdErr.ta.mjs';

/* START_OF_SYMBOL_DEFINITION AddResult */
/**
 * @summary AddResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddResult  ::=  CHOICE {
 *   success   [0] NULL,
 *   failure   [1] AccessdErr,
 *   ... }
 * ```
 */
export type AddResult =
    | { success: NULL } /* CHOICE_ALT_ROOT */
    | { failure: AccessdErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AddResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddResult */
let _cached_decoder_for_AddResult: $.ASN1Decoder<AddResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddResult */

/* START_OF_SYMBOL_DEFINITION _decode_AddResult */
/**
 * @summary Decodes an ASN.1 element into a(n) AddResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddResult} The decoded data structure.
 */
export function _decode_AddResult(el: _Element) {
    if (!_cached_decoder_for_AddResult) {
        _cached_decoder_for_AddResult = $._decode_extensible_choice<AddResult>({
            'CONTEXT 0': [
                'success',
                $._decode_implicit<NULL>(() => $._decodeNull),
            ],
            'CONTEXT 1': [
                'failure',
                $._decode_explicit<AccessdErr>(() => _decode_AccessdErr),
            ],
        });
    }
    return _cached_decoder_for_AddResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddResult */
let _cached_encoder_for_AddResult: $.ASN1Encoder<AddResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddResult */

/* START_OF_SYMBOL_DEFINITION _encode_AddResult */
/**
 * @summary Encodes a(n) AddResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddResult, encoded as an ASN.1 Element.
 */
export function _encode_AddResult(
    value: AddResult,
    elGetter: $.ASN1Encoder<AddResult>
) {
    if (!_cached_encoder_for_AddResult) {
        _cached_encoder_for_AddResult = $._encode_choice<AddResult>(
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
    return _cached_encoder_for_AddResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddResult */

/* eslint-enable */
