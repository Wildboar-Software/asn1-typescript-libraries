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
import * as $ from '@wildboar/asn1/functional';
import {
    ARU_PPDU,
    _decode_ARU_PPDU,
    _encode_ARU_PPDU,
} from '../ISO8823-PRESENTATION/ARU-PPDU.ta.mjs';
import {
    ARP_PPDU,
    _decode_ARP_PPDU,
    _encode_ARP_PPDU,
} from '../ISO8823-PRESENTATION/ARP-PPDU.ta.mjs';

/**
 * @summary Abort_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort-type  ::=  CHOICE {
 *   aru-ppdu  ARU-PPDU -- for a P-U-ABORT --,
 *   arp-ppdu  ARP-PPDU -- for a P-P-ABORT
 * }
 * ```
 */
export type Abort_type =
    | { aru_ppdu: ARU_PPDU } /* CHOICE_ALT_ROOT */
    | { arp_ppdu: ARP_PPDU } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_Abort_type: $.ASN1Decoder<Abort_type> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Abort_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Abort_type} The decoded data structure.
 */
export function _decode_Abort_type(el: _Element) {
    if (!_cached_decoder_for_Abort_type) {
        _cached_decoder_for_Abort_type = $._decode_inextensible_choice<Abort_type>(
            {
                'UNIVERSAL 17': ['aru_ppdu', _decode_ARU_PPDU],
                'CONTEXT 0': ['aru_ppdu', _decode_ARU_PPDU],
                'UNIVERSAL 16': ['arp_ppdu', _decode_ARP_PPDU],
            }
        );
    }
    return _cached_decoder_for_Abort_type(el);
}


let _cached_encoder_for_Abort_type: $.ASN1Encoder<Abort_type> | null = null;


/**
 * @summary Encodes a(n) Abort_type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abort_type, encoded as an ASN.1 Element.
 */
export function _encode_Abort_type(
    value: Abort_type,
    elGetter: $.ASN1Encoder<Abort_type>
) {
    if (!_cached_encoder_for_Abort_type) {
        _cached_encoder_for_Abort_type = $._encode_choice<Abort_type>(
            {
                aru_ppdu: _encode_ARU_PPDU,
                arp_ppdu: _encode_ARP_PPDU,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Abort_type(value, elGetter);
}


/* eslint-enable */
