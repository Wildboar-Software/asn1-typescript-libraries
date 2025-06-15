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
    CmsErrorCode,
    _enum_for_CmsErrorCode,
    _decode_CmsErrorCode,
    _encode_CmsErrorCode,
} from '../CmsTelebiometric/CmsErrorCode.ta.mjs';
import {
    AssignErr,
    _enum_for_AssignErr,
    _decode_AssignErr,
    _encode_AssignErr,
} from '../Pbact-access/AssignErr.ta.mjs';
/* START_OF_SYMBOL_DEFINITION PrivAssignErr */
/**
 * @summary PrivAssignErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivAssignErr  ::=  CHOICE {
 *   cmsErr     [0] CmsErrorCode,
 *   assignErr  [1] AssignErr,
 *   ... }
 * ```
 */
export type PrivAssignErr =
    | { cmsErr: CmsErrorCode } /* CHOICE_ALT_ROOT */
    | { assignErr: AssignErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION PrivAssignErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivAssignErr */
let _cached_decoder_for_PrivAssignErr: $.ASN1Decoder<PrivAssignErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivAssignErr */

/* START_OF_SYMBOL_DEFINITION _decode_PrivAssignErr */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivAssignErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivAssignErr} The decoded data structure.
 */
export function _decode_PrivAssignErr(el: _Element) {
    if (!_cached_decoder_for_PrivAssignErr) {
        _cached_decoder_for_PrivAssignErr = $._decode_extensible_choice<PrivAssignErr>(
            {
                'CONTEXT 0': [
                    'cmsErr',
                    $._decode_implicit<CmsErrorCode>(
                        () => _decode_CmsErrorCode
                    ),
                ],
                'CONTEXT 1': [
                    'assignErr',
                    $._decode_implicit<AssignErr>(() => _decode_AssignErr),
                ],
            }
        );
    }
    return _cached_decoder_for_PrivAssignErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivAssignErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivAssignErr */
let _cached_encoder_for_PrivAssignErr: $.ASN1Encoder<PrivAssignErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivAssignErr */

/* START_OF_SYMBOL_DEFINITION _encode_PrivAssignErr */
/**
 * @summary Encodes a(n) PrivAssignErr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivAssignErr, encoded as an ASN.1 Element.
 */
export function _encode_PrivAssignErr(
    value: PrivAssignErr,
    elGetter: $.ASN1Encoder<PrivAssignErr>
) {
    if (!_cached_encoder_for_PrivAssignErr) {
        _cached_encoder_for_PrivAssignErr = $._encode_choice<PrivAssignErr>(
            {
                cmsErr: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CmsErrorCode,
                    $.BER
                ),
                assignErr: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AssignErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PrivAssignErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivAssignErr */

/* eslint-enable */
