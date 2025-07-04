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
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from '@wildboar/pki-stub/src/lib/modules/PKI-Stub/RelativeDistinguishedName.ta.mjs';

/**
 * @summary ProtectionUnit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionUnit  ::=  CHOICE {
 *   protectingUnit  [0]  RelativeDistinguishedName,
 *   protectedUnit   [1]  RelativeDistinguishedName
 * }
 * ```
 */
export type ProtectionUnit =
    | { protectingUnit: RelativeDistinguishedName } /* CHOICE_ALT_ROOT */
    | { protectedUnit: RelativeDistinguishedName } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ProtectionUnit: $.ASN1Decoder<ProtectionUnit> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionUnit
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionUnit} The decoded data structure.
 */
export function _decode_ProtectionUnit(el: _Element): ProtectionUnit {
    if (!_cached_decoder_for_ProtectionUnit) {
        _cached_decoder_for_ProtectionUnit = $._decode_inextensible_choice<ProtectionUnit>(
            {
                'CONTEXT 0': [
                    'protectingUnit',
                    $._decode_implicit<RelativeDistinguishedName>(
                        () => _decode_RelativeDistinguishedName
                    ),
                ],
                'CONTEXT 1': [
                    'protectedUnit',
                    $._decode_implicit<RelativeDistinguishedName>(
                        () => _decode_RelativeDistinguishedName
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ProtectionUnit(el);
}


let _cached_encoder_for_ProtectionUnit: $.ASN1Encoder<ProtectionUnit> | null = null;


/**
 * @summary Encodes a(n) ProtectionUnit into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionUnit, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionUnit(
    value: ProtectionUnit,
    elGetter: $.ASN1Encoder<ProtectionUnit>
): _Element {
    if (!_cached_encoder_for_ProtectionUnit) {
        _cached_encoder_for_ProtectionUnit = $._encode_choice<ProtectionUnit>(
            {
                protectingUnit: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_RelativeDistinguishedName,
                    $.BER
                ),
                protectedUnit: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RelativeDistinguishedName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ProtectionUnit(value, elGetter);
}


/* eslint-enable */
