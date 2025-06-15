/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    ARP_PPDU,
    _decode_ARP_PPDU,
    _encode_ARP_PPDU,
} from "../OSIProtocolSpecification/ARP-PPDU.ta.mjs";
import {
    ARU_PPDU,
    _decode_ARU_PPDU,
    _encode_ARU_PPDU,
} from "../OSIProtocolSpecification/ARU-PPDU.ta.mjs";
/**
 * @summary PresentationAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PresentationAbort  ::=  CHOICE {
 *   aru-ppdu  ARU-PPDU,
 *   arp-ppdu  ARP-PPDU }
 * ```
 */
export type PresentationAbort =
    | { aru_ppdu: ARU_PPDU } /* CHOICE_ALT_ROOT */
    | { arp_ppdu: ARP_PPDU } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PresentationAbort: $.ASN1Decoder<PresentationAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentationAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PresentationAbort} The decoded data structure.
 */
export function _decode_PresentationAbort(el: _Element) {
    if (!_cached_decoder_for_PresentationAbort) {
        _cached_decoder_for_PresentationAbort = $._decode_inextensible_choice<PresentationAbort>(
            {
                "CONTEXT 0": ["aru_ppdu", _decode_ARU_PPDU],
                "UNIVERSAL 16": ["arp_ppdu", _decode_ARP_PPDU],
            }
        );
    }
    return _cached_decoder_for_PresentationAbort(el);
}

let _cached_encoder_for_PresentationAbort: $.ASN1Encoder<PresentationAbort> | null = null;

/**
 * @summary Encodes a(n) PresentationAbort into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentationAbort, encoded as an ASN.1 Element.
 */
export function _encode_PresentationAbort(
    value: PresentationAbort,
    elGetter: $.ASN1Encoder<PresentationAbort>
) {
    if (!_cached_encoder_for_PresentationAbort) {
        _cached_encoder_for_PresentationAbort = $._encode_choice<PresentationAbort>(
            {
                aru_ppdu: _encode_ARU_PPDU,
                arp_ppdu: _encode_ARP_PPDU,
            },
            $.DER
        );
    }
    return _cached_encoder_for_PresentationAbort(value, elGetter);
}


/* eslint-enable */
