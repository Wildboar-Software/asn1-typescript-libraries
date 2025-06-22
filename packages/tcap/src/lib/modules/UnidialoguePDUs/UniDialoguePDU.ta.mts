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
    AUDT_apdu,
    _decode_AUDT_apdu,
    _encode_AUDT_apdu,
} from '../UnidialoguePDUs/AUDT-apdu.ta.mjs';
/**
 * @summary UniDialoguePDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniDialoguePDU  ::=  CHOICE {unidialoguePDU  AUDT-apdu
 * }
 * ```
 */
export type UniDialoguePDU = {
    unidialoguePDU: AUDT_apdu;
} /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UniDialoguePDU: $.ASN1Decoder<UniDialoguePDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UniDialoguePDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniDialoguePDU} The decoded data structure.
 */
export function _decode_UniDialoguePDU(el: _Element) {
    if (!_cached_decoder_for_UniDialoguePDU) {
        _cached_decoder_for_UniDialoguePDU = $._decode_inextensible_choice<UniDialoguePDU>(
            {
                'APPLICATION 0': ['unidialoguePDU', _decode_AUDT_apdu],
            }
        );
    }
    return _cached_decoder_for_UniDialoguePDU(el);
}

let _cached_encoder_for_UniDialoguePDU: $.ASN1Encoder<UniDialoguePDU> | null = null;

/**
 * @summary Encodes a(n) UniDialoguePDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniDialoguePDU, encoded as an ASN.1 Element.
 */
export function _encode_UniDialoguePDU(
    value: UniDialoguePDU,
    elGetter: $.ASN1Encoder<UniDialoguePDU>
) {
    if (!_cached_encoder_for_UniDialoguePDU) {
        _cached_encoder_for_UniDialoguePDU = $._encode_choice<UniDialoguePDU>(
            {
                unidialoguePDU: _encode_AUDT_apdu,
            },
            $.BER
        );
    }
    return _cached_encoder_for_UniDialoguePDU(value, elGetter);
}


/* eslint-enable */
