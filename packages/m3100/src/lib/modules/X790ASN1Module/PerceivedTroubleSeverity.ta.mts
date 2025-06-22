/* eslint-disable */
import {
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
    PerceivedTroubleSeverity_number,
    _decode_PerceivedTroubleSeverity_number,
    _encode_PerceivedTroubleSeverity_number,
} from '../X790ASN1Module/PerceivedTroubleSeverity-number.ta.mjs';

/**
 * @summary PerceivedTroubleSeverity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerceivedTroubleSeverity  ::=  CHOICE {
 *   number
 *     INTEGER {-- Administrations may provide additional
 *              -- values and/or restrict the values supported
 *              outOfService(0), backInService(1), serviceImpairment(2),
 *              nonServiceAffectingTrouble(3)},
 *   identifier  OBJECT IDENTIFIER,
 *   ...
 * }
 * ```
 */
export type PerceivedTroubleSeverity =
    | { number_: PerceivedTroubleSeverity_number } /* CHOICE_ALT_ROOT */
    | { identifier: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_PerceivedTroubleSeverity: $.ASN1Decoder<PerceivedTroubleSeverity> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PerceivedTroubleSeverity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerceivedTroubleSeverity} The decoded data structure.
 */
export function _decode_PerceivedTroubleSeverity(el: _Element) {
    if (!_cached_decoder_for_PerceivedTroubleSeverity) {
        _cached_decoder_for_PerceivedTroubleSeverity = $._decode_extensible_choice<PerceivedTroubleSeverity>(
            {
                'UNIVERSAL 2': [
                    'number_',
                    _decode_PerceivedTroubleSeverity_number,
                ],
                'UNIVERSAL 6': ['identifier', $._decodeObjectIdentifier],
            }
        );
    }
    return _cached_decoder_for_PerceivedTroubleSeverity(el);
}


let _cached_encoder_for_PerceivedTroubleSeverity: $.ASN1Encoder<PerceivedTroubleSeverity> | null = null;


/**
 * @summary Encodes a(n) PerceivedTroubleSeverity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerceivedTroubleSeverity, encoded as an ASN.1 Element.
 */
export function _encode_PerceivedTroubleSeverity(
    value: PerceivedTroubleSeverity,
    elGetter: $.ASN1Encoder<PerceivedTroubleSeverity>
) {
    if (!_cached_encoder_for_PerceivedTroubleSeverity) {
        _cached_encoder_for_PerceivedTroubleSeverity = $._encode_choice<PerceivedTroubleSeverity>(
            {
                number_: _encode_PerceivedTroubleSeverity_number,
                identifier: $._encodeObjectIdentifier,
            },
            $.BER
        );
    }
    return _cached_encoder_for_PerceivedTroubleSeverity(value, elGetter);
}


/* eslint-enable */
