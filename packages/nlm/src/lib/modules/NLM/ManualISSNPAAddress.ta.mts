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
    SNPAAddress,
    _decode_SNPAAddress,
    _encode_SNPAAddress,
} from '../NLM/SNPAAddress.ta.mjs';

/**
 * @summary ManualISSNPAAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManualISSNPAAddress  ::=  SET OF SNPAAddress
 * ```
 */
export type ManualISSNPAAddress = SNPAAddress[]; // SetOfType


let _cached_decoder_for_ManualISSNPAAddress: $.ASN1Decoder<ManualISSNPAAddress> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ManualISSNPAAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManualISSNPAAddress} The decoded data structure.
 */
export function _decode_ManualISSNPAAddress(el: _Element): ManualISSNPAAddress {
    if (!_cached_decoder_for_ManualISSNPAAddress) {
        _cached_decoder_for_ManualISSNPAAddress = $._decodeSetOf<SNPAAddress>(
            () => _decode_SNPAAddress
        );
    }
    return _cached_decoder_for_ManualISSNPAAddress(el);
}


let _cached_encoder_for_ManualISSNPAAddress: $.ASN1Encoder<ManualISSNPAAddress> | null = null;


/**
 * @summary Encodes a(n) ManualISSNPAAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManualISSNPAAddress, encoded as an ASN.1 Element.
 */
export function _encode_ManualISSNPAAddress(
    value: ManualISSNPAAddress,
    elGetter: $.ASN1Encoder<ManualISSNPAAddress>
): _Element {
    if (!_cached_encoder_for_ManualISSNPAAddress) {
        _cached_encoder_for_ManualISSNPAAddress = $._encodeSetOf<SNPAAddress>(
            () => _encode_SNPAAddress,
            $.BER
        );
    }
    return _cached_encoder_for_ManualISSNPAAddress(value, elGetter);
}


/* eslint-enable */
