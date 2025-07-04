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
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/PresentationAddress.ta.mjs';
/**
 * @summary PSAPAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSAPAddress  ::=  PresentationAddress
 * ```
 */
export type PSAPAddress = PresentationAddress; // DefinedType

let _cached_decoder_for_PSAPAddress: $.ASN1Decoder<PSAPAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PSAPAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PSAPAddress} The decoded data structure.
 */
export function _decode_PSAPAddress(el: _Element): PSAPAddress {
    if (!_cached_decoder_for_PSAPAddress) {
        _cached_decoder_for_PSAPAddress = _decode_PresentationAddress;
    }
    return _cached_decoder_for_PSAPAddress(el);
}

let _cached_encoder_for_PSAPAddress: $.ASN1Encoder<PSAPAddress> | null = null;

/**
 * @summary Encodes a(n) PSAPAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSAPAddress, encoded as an ASN.1 Element.
 */
export function _encode_PSAPAddress(
    value: PSAPAddress,
    elGetter: $.ASN1Encoder<PSAPAddress>
): _Element {
    if (!_cached_encoder_for_PSAPAddress) {
        _cached_encoder_for_PSAPAddress = _encode_PresentationAddress;
    }
    return _cached_encoder_for_PSAPAddress(value, elGetter);
}


/* eslint-enable */
