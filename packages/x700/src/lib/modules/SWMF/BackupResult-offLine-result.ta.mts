/* eslint-disable */
import {
    NULL,
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

/* START_OF_SYMBOL_DEFINITION BackupResult_offLine_result */
/**
 * @summary BackupResult_offLine_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackupResult-offLine-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BackupResult_offLine_result =
    | { success: NULL } /* CHOICE_ALT_ROOT */
    | { fail_securityLicensing: NULL } /* CHOICE_ALT_ROOT */
    | { fail_unknown: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION BackupResult_offLine_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupResult_offLine_result */
let _cached_decoder_for_BackupResult_offLine_result: $.ASN1Decoder<BackupResult_offLine_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackupResult_offLine_result */

/* START_OF_SYMBOL_DEFINITION _decode_BackupResult_offLine_result */
/**
 * @summary Decodes an ASN.1 element into a(n) BackupResult_offLine_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupResult_offLine_result} The decoded data structure.
 */
export function _decode_BackupResult_offLine_result(el: _Element) {
    if (!_cached_decoder_for_BackupResult_offLine_result) {
        _cached_decoder_for_BackupResult_offLine_result = $._decode_inextensible_choice<BackupResult_offLine_result>(
            {
                'CONTEXT 6': [
                    'success',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 7': [
                    'fail_securityLicensing',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 8': [
                    'fail_unknown',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_BackupResult_offLine_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BackupResult_offLine_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupResult_offLine_result */
let _cached_encoder_for_BackupResult_offLine_result: $.ASN1Encoder<BackupResult_offLine_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackupResult_offLine_result */

/* START_OF_SYMBOL_DEFINITION _encode_BackupResult_offLine_result */
/**
 * @summary Encodes a(n) BackupResult_offLine_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupResult_offLine_result, encoded as an ASN.1 Element.
 */
export function _encode_BackupResult_offLine_result(
    value: BackupResult_offLine_result,
    elGetter: $.ASN1Encoder<BackupResult_offLine_result>
) {
    if (!_cached_encoder_for_BackupResult_offLine_result) {
        _cached_encoder_for_BackupResult_offLine_result = $._encode_choice<BackupResult_offLine_result>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => $._encodeNull,
                    $.BER
                ),
                fail_securityLicensing: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => $._encodeNull,
                    $.BER
                ),
                fail_unknown: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BackupResult_offLine_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BackupResult_offLine_result */

/* eslint-enable */
