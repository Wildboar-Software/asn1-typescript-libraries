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
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/DistinguishedName.ta.mjs';
import {
    AE_title,
    _decode_AE_title,
    _encode_AE_title,
} from '@wildboar/acse/src/lib/modules/ACSE-1/AE-title.ta.mjs';

/**
 * @summary InitiatorName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitiatorName  ::=  CHOICE {
 *   individualName  [1] IMPLICIT DistinguishedName,
 *   groupName       [2] IMPLICIT DistinguishedName,
 *   role            [3] IMPLICIT DistinguishedName,
 *   application     [4] IMPLICIT AE-title
 * }
 * ```
 */
export type InitiatorName =
    | { individualName: DistinguishedName } /* CHOICE_ALT_ROOT */
    | { groupName: DistinguishedName } /* CHOICE_ALT_ROOT */
    | { role: DistinguishedName } /* CHOICE_ALT_ROOT */
    | { application: AE_title } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InitiatorName: $.ASN1Decoder<InitiatorName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiatorName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitiatorName} The decoded data structure.
 */
export function _decode_InitiatorName(el: _Element) {
    if (!_cached_decoder_for_InitiatorName) {
        _cached_decoder_for_InitiatorName = $._decode_inextensible_choice<InitiatorName>(
            {
                'CONTEXT 1': [
                    'individualName',
                    $._decode_implicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    ),
                ],
                'CONTEXT 2': [
                    'groupName',
                    $._decode_implicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    ),
                ],
                'CONTEXT 3': [
                    'role',
                    $._decode_implicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    ),
                ],
                'CONTEXT 4': [
                    'application',
                    $._decode_implicit<AE_title>(() => _decode_AE_title),
                ],
            }
        );
    }
    return _cached_decoder_for_InitiatorName(el);
}

let _cached_encoder_for_InitiatorName: $.ASN1Encoder<InitiatorName> | null = null;

/**
 * @summary Encodes a(n) InitiatorName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiatorName, encoded as an ASN.1 Element.
 */
export function _encode_InitiatorName(
    value: InitiatorName,
    elGetter: $.ASN1Encoder<InitiatorName>
) {
    if (!_cached_encoder_for_InitiatorName) {
        _cached_encoder_for_InitiatorName = $._encode_choice<InitiatorName>(
            {
                individualName: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_DistinguishedName,
                    $.BER
                ),
                groupName: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_DistinguishedName,
                    $.BER
                ),
                role: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_DistinguishedName,
                    $.BER
                ),
                application: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_AE_title,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_InitiatorName(value, elGetter);
}


/* eslint-enable */
