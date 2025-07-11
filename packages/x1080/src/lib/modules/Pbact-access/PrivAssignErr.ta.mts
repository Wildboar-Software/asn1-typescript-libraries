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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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


let _cached_decoder_for_PrivAssignErr: $.ASN1Decoder<PrivAssignErr> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PrivAssignErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivAssignErr} The decoded data structure.
 */
export function _decode_PrivAssignErr(el: _Element): PrivAssignErr {
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


let _cached_encoder_for_PrivAssignErr: $.ASN1Encoder<PrivAssignErr> | null = null;


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
): _Element {
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


/* eslint-enable */
