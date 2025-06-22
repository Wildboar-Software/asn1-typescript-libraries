/* eslint-disable */
import {
    BIT_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary BackupResult_inLine
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackupResult-inLine ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type BackupResult_inLine =
    | { success: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { fail_pduSizeLimitation: NULL } /* CHOICE_ALT_ROOT */
    | { fail_securityLicensing: NULL } /* CHOICE_ALT_ROOT */
    | { fail_unknown: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BackupResult_inLine: $.ASN1Decoder<BackupResult_inLine> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BackupResult_inLine
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupResult_inLine} The decoded data structure.
 */
export function _decode_BackupResult_inLine(el: _Element) {
    if (!_cached_decoder_for_BackupResult_inLine) {
        _cached_decoder_for_BackupResult_inLine = $._decode_inextensible_choice<BackupResult_inLine>(
            {
                'UNIVERSAL 3': ['success', $._decodeBitString],
                'CONTEXT 3': [
                    'fail_pduSizeLimitation',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 4': [
                    'fail_securityLicensing',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 5': [
                    'fail_unknown',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
            }
        );
    }
    return _cached_decoder_for_BackupResult_inLine(el);
}

let _cached_encoder_for_BackupResult_inLine: $.ASN1Encoder<BackupResult_inLine> | null = null;

/**
 * @summary Encodes a(n) BackupResult_inLine into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupResult_inLine, encoded as an ASN.1 Element.
 */
export function _encode_BackupResult_inLine(
    value: BackupResult_inLine,
    elGetter: $.ASN1Encoder<BackupResult_inLine>
) {
    if (!_cached_encoder_for_BackupResult_inLine) {
        _cached_encoder_for_BackupResult_inLine = $._encode_choice<BackupResult_inLine>(
            {
                success: $._encodeBitString,
                fail_pduSizeLimitation: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => $._encodeNull,
                    $.BER
                ),
                fail_securityLicensing: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => $._encodeNull,
                    $.BER
                ),
                fail_unknown: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => $._encodeNull,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BackupResult_inLine(value, elGetter);
}


/* eslint-enable */
