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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.mjs';
/**
 * @summary BodyPartSecurityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSecurityLabel  ::=  CHOICE {
 *   body-part-unlabelled      [0]  NULL,
 *   body-part-security-label  [1]  SecurityLabel
 * }
 * ```
 */
export type BodyPartSecurityLabel =
    | { body_part_unlabelled: NULL } /* CHOICE_ALT_ROOT */
    | { body_part_security_label: SecurityLabel } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BodyPartSecurityLabel: $.ASN1Decoder<BodyPartSecurityLabel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSecurityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSecurityLabel} The decoded data structure.
 */
export function _decode_BodyPartSecurityLabel(el: _Element): BodyPartSecurityLabel {
    if (!_cached_decoder_for_BodyPartSecurityLabel) {
        _cached_decoder_for_BodyPartSecurityLabel = $._decode_inextensible_choice<BodyPartSecurityLabel>(
            {
                'CONTEXT 0': [
                    'body_part_unlabelled',
                    $._decode_implicit<NULL>(() => $._decodeNull),
                ],
                'CONTEXT 1': [
                    'body_part_security_label',
                    $._decode_implicit<SecurityLabel>(
                        () => _decode_SecurityLabel
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_BodyPartSecurityLabel(el);
}

let _cached_encoder_for_BodyPartSecurityLabel: $.ASN1Encoder<BodyPartSecurityLabel> | null = null;

/**
 * @summary Encodes a(n) BodyPartSecurityLabel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSecurityLabel, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSecurityLabel(
    value: BodyPartSecurityLabel,
    elGetter: $.ASN1Encoder<BodyPartSecurityLabel>
): _Element {
    if (!_cached_encoder_for_BodyPartSecurityLabel) {
        _cached_encoder_for_BodyPartSecurityLabel = $._encode_choice<BodyPartSecurityLabel>(
            {
                body_part_unlabelled: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                body_part_security_label: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_SecurityLabel,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartSecurityLabel(value, elGetter);
}


/* eslint-enable */
