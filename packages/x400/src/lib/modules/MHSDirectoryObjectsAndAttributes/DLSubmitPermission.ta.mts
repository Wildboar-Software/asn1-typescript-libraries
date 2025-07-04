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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
import {
    ORNamePattern,
    _decode_ORNamePattern,
    _encode_ORNamePattern,
} from '../MHSDirectoryObjectsAndAttributes/ORNamePattern.ta.mjs';
import {
    Name,
    _decode_Name,
    _encode_Name,
} from '@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs';
/**
 * @summary DLSubmitPermission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLSubmitPermission  ::=  CHOICE {
 *   individual       [0]  ORName,
 *   member-of-dl     [1]  ORName,
 *   pattern-match    [2]  ORNamePattern,
 *   member-of-group  [3]  Name
 * }
 * ```
 */
export type DLSubmitPermission =
    | { individual: ORName } /* CHOICE_ALT_ROOT */
    | { member_of_dl: ORName } /* CHOICE_ALT_ROOT */
    | { pattern_match: ORNamePattern } /* CHOICE_ALT_ROOT */
    | { member_of_group: Name } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DLSubmitPermission: $.ASN1Decoder<DLSubmitPermission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DLSubmitPermission
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLSubmitPermission} The decoded data structure.
 */
export function _decode_DLSubmitPermission(el: _Element): DLSubmitPermission {
    if (!_cached_decoder_for_DLSubmitPermission) {
        _cached_decoder_for_DLSubmitPermission = $._decode_inextensible_choice<DLSubmitPermission>(
            {
                'CONTEXT 0': [
                    'individual',
                    $._decode_implicit<ORName>(() => _decode_ORName),
                ],
                'CONTEXT 1': [
                    'member_of_dl',
                    $._decode_implicit<ORName>(() => _decode_ORName),
                ],
                'CONTEXT 2': [
                    'pattern_match',
                    $._decode_implicit<ORNamePattern>(
                        () => _decode_ORNamePattern
                    ),
                ],
                'CONTEXT 3': [
                    'member_of_group',
                    $._decode_explicit<Name>(() => _decode_Name),
                ],
            }
        );
    }
    return _cached_decoder_for_DLSubmitPermission(el);
}

let _cached_encoder_for_DLSubmitPermission: $.ASN1Encoder<DLSubmitPermission> | null = null;

/**
 * @summary Encodes a(n) DLSubmitPermission into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLSubmitPermission, encoded as an ASN.1 Element.
 */
export function _encode_DLSubmitPermission(
    value: DLSubmitPermission,
    elGetter: $.ASN1Encoder<DLSubmitPermission>
): _Element {
    if (!_cached_encoder_for_DLSubmitPermission) {
        _cached_encoder_for_DLSubmitPermission = $._encode_choice<DLSubmitPermission>(
            {
                individual: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_ORName,
                    $.BER
                ),
                member_of_dl: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ORName,
                    $.BER
                ),
                pattern_match: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_ORNamePattern,
                    $.BER
                ),
                member_of_group: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Name,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DLSubmitPermission(value, elGetter);
}


/* eslint-enable */
