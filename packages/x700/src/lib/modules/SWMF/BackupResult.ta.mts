/* eslint-disable */
import {
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
    BackupResult_inLine,
    _decode_BackupResult_inLine,
    _encode_BackupResult_inLine,
} from '../SWMF/BackupResult-inLine.ta.mjs';
import {
    BackupResult_local,
    _decode_BackupResult_local,
    _encode_BackupResult_local,
} from '../SWMF/BackupResult-local.ta.mjs';
import {
    BackupResult_offLine,
    _decode_BackupResult_offLine,
    _encode_BackupResult_offLine,
} from '../SWMF/BackupResult-offLine.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BackupResult */
/**
 * @summary BackupResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackupResult  ::=  CHOICE {
 *   inLine
 *     [0]  CHOICE {success                 BIT STRING,
 *                  fail-pduSizeLimitation  [3]  NULL,
 *                  fail-securityLicensing  [4]  NULL,
 *                  fail-unknown            [5]  NULL},
 *   local
 *     [1]  SEQUENCE {destination  ObjectInstance, -- in the managed system --
 *                    success      BOOLEAN}, -- TRUE for success
 *   offLine
 *     [2]  SEQUENCE {destination  GraphicString, -- the remote system --
 *                    result
 *                      CHOICE {success                 [6]  NULL,
 *                              fail-securityLicensing  [7]  NULL,
 *                              fail-unknown            [8]  NULL}}
 * }
 * ```
 */
export type BackupResult =
    | { inLine: BackupResult_inLine } /* CHOICE_ALT_ROOT */
    | { local: BackupResult_local } /* CHOICE_ALT_ROOT */
    | { offLine: BackupResult_offLine } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BackupResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupResult */
let _cached_decoder_for_BackupResult: $.ASN1Decoder<BackupResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupResult */

/* START_OF_SYMBOL_DEFINITION _decode_BackupResult */
/**
 * @summary Decodes an ASN.1 element into a(n) BackupResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupResult} The decoded data structure.
 */
export function _decode_BackupResult(el: _Element) {
    if (!_cached_decoder_for_BackupResult) {
        _cached_decoder_for_BackupResult = $._decode_inextensible_choice<BackupResult>(
            {
                'CONTEXT 0': [
                    'inLine',
                    $._decode_explicit<BackupResult_inLine>(
                        () => _decode_BackupResult_inLine
                    ),
                ],
                'CONTEXT 1': [
                    'local',
                    $._decode_implicit<BackupResult_local>(
                        () => _decode_BackupResult_local
                    ),
                ],
                'CONTEXT 2': [
                    'offLine',
                    $._decode_implicit<BackupResult_offLine>(
                        () => _decode_BackupResult_offLine
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BackupResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BackupResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupResult */
let _cached_encoder_for_BackupResult: $.ASN1Encoder<BackupResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupResult */

/* START_OF_SYMBOL_DEFINITION _encode_BackupResult */
/**
 * @summary Encodes a(n) BackupResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupResult, encoded as an ASN.1 Element.
 */
export function _encode_BackupResult(
    value: BackupResult,
    elGetter: $.ASN1Encoder<BackupResult>
) {
    if (!_cached_encoder_for_BackupResult) {
        _cached_encoder_for_BackupResult = $._encode_choice<BackupResult>(
            {
                inLine: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_BackupResult_inLine,
                    $.BER
                ),
                local: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_BackupResult_local,
                    $.BER
                ),
                offLine: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_BackupResult_offLine,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BackupResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BackupResult */

/* eslint-enable */
