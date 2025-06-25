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
    PbactErr,
    _enum_for_PbactErr,
    _decode_PbactErr,
    _encode_PbactErr,
} from '../Pbact-access/PbactErr.ta.mjs';

/**
 * @summary AccessdErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessdErr  ::=  CHOICE {
 *   cmsErr     [0] CmsErrorCode,
 *   pbactErr   [1] PbactErr,
 *   ... }
 * ```
 */
export type AccessdErr =
    | { cmsErr: CmsErrorCode } /* CHOICE_ALT_ROOT */
    | { pbactErr: PbactErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_AccessdErr: $.ASN1Decoder<AccessdErr> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AccessdErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessdErr} The decoded data structure.
 */
export function _decode_AccessdErr(el: _Element): AccessdErr {
    if (!_cached_decoder_for_AccessdErr) {
        _cached_decoder_for_AccessdErr = $._decode_extensible_choice<AccessdErr>(
            {
                'CONTEXT 0': [
                    'cmsErr',
                    $._decode_implicit<CmsErrorCode>(
                        () => _decode_CmsErrorCode
                    ),
                ],
                'CONTEXT 1': [
                    'pbactErr',
                    $._decode_implicit<PbactErr>(() => _decode_PbactErr),
                ],
            }
        );
    }
    return _cached_decoder_for_AccessdErr(el);
}


let _cached_encoder_for_AccessdErr: $.ASN1Encoder<AccessdErr> | null = null;


/**
 * @summary Encodes a(n) AccessdErr into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessdErr, encoded as an ASN.1 Element.
 */
export function _encode_AccessdErr(
    value: AccessdErr,
    elGetter: $.ASN1Encoder<AccessdErr>
): _Element {
    if (!_cached_encoder_for_AccessdErr) {
        _cached_encoder_for_AccessdErr = $._encode_choice<AccessdErr>(
            {
                cmsErr: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CmsErrorCode,
                    $.BER
                ),
                pbactErr: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_PbactErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AccessdErr(value, elGetter);
}


/* eslint-enable */
