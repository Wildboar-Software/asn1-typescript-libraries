/* eslint-disable */
import {
    NULL,
    OBJECT_IDENTIFIER,
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
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/**
 * @summary ValidateInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ValidateInfo  ::=  CHOICE {
 *   instanceDefaultValidationType  [0]  NULL, -- local matter
 *   registeredValidationType       [1]  OBJECT IDENTIFIER,
 *   systemSpecificValidationType   [2]  SET OF ManagementExtension
 * }
 * ```
 */
export type ValidateInfo =
    | { instanceDefaultValidationType: NULL } /* CHOICE_ALT_ROOT */
    | { registeredValidationType: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | {
          systemSpecificValidationType: ManagementExtension[];
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ValidateInfo: $.ASN1Decoder<ValidateInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValidateInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ValidateInfo} The decoded data structure.
 */
export function _decode_ValidateInfo(el: _Element): ValidateInfo {
    if (!_cached_decoder_for_ValidateInfo) {
        _cached_decoder_for_ValidateInfo = $._decode_inextensible_choice<ValidateInfo>(
            {
                'CONTEXT 0': [
                    'instanceDefaultValidationType',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'registeredValidationType',
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
                'CONTEXT 2': [
                    'systemSpecificValidationType',
                    $._decode_implicit<ManagementExtension[]>(() =>
                        $._decodeSetOf<ManagementExtension>(
                            () => _decode_ManagementExtension
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ValidateInfo(el);
}

let _cached_encoder_for_ValidateInfo: $.ASN1Encoder<ValidateInfo> | null = null;

/**
 * @summary Encodes a(n) ValidateInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidateInfo, encoded as an ASN.1 Element.
 */
export function _encode_ValidateInfo(
    value: ValidateInfo,
    elGetter: $.ASN1Encoder<ValidateInfo>
): _Element {
    if (!_cached_encoder_for_ValidateInfo) {
        _cached_encoder_for_ValidateInfo = $._encode_choice<ValidateInfo>(
            {
                instanceDefaultValidationType: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                registeredValidationType: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
                systemSpecificValidationType: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<ManagementExtension>(
                            () => _encode_ManagementExtension,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ValidateInfo(value, elGetter);
}


/* eslint-enable */
