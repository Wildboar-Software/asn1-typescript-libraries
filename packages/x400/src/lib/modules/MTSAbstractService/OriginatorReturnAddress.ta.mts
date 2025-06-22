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
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from '../MTSAbstractService/ORAddress.ta.mjs';
/**
 * @summary OriginatorReturnAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorReturnAddress  ::=  ORAddress
 * ```
 */
export type OriginatorReturnAddress = ORAddress; // DefinedType

let _cached_decoder_for_OriginatorReturnAddress: $.ASN1Decoder<OriginatorReturnAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorReturnAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorReturnAddress} The decoded data structure.
 */
export function _decode_OriginatorReturnAddress(el: _Element) {
    if (!_cached_decoder_for_OriginatorReturnAddress) {
        _cached_decoder_for_OriginatorReturnAddress = _decode_ORAddress;
    }
    return _cached_decoder_for_OriginatorReturnAddress(el);
}

let _cached_encoder_for_OriginatorReturnAddress: $.ASN1Encoder<OriginatorReturnAddress> | null = null;

/**
 * @summary Encodes a(n) OriginatorReturnAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorReturnAddress, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorReturnAddress(
    value: OriginatorReturnAddress,
    elGetter: $.ASN1Encoder<OriginatorReturnAddress>
) {
    if (!_cached_encoder_for_OriginatorReturnAddress) {
        _cached_encoder_for_OriginatorReturnAddress = _encode_ORAddress;
    }
    return _cached_encoder_for_OriginatorReturnAddress(value, elGetter);
}


/* eslint-enable */
