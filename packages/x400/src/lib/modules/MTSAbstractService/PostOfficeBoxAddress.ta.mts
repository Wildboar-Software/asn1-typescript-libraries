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
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from '../MTSAbstractService/PDSParameter.ta.mjs';
/**
 * @summary PostOfficeBoxAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostOfficeBoxAddress  ::=  PDSParameter
 * ```
 */
export type PostOfficeBoxAddress = PDSParameter; // DefinedType

let _cached_decoder_for_PostOfficeBoxAddress: $.ASN1Decoder<PostOfficeBoxAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PostOfficeBoxAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostOfficeBoxAddress} The decoded data structure.
 */
export function _decode_PostOfficeBoxAddress(el: _Element): PostOfficeBoxAddress {
    if (!_cached_decoder_for_PostOfficeBoxAddress) {
        _cached_decoder_for_PostOfficeBoxAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_PostOfficeBoxAddress(el);
}

let _cached_encoder_for_PostOfficeBoxAddress: $.ASN1Encoder<PostOfficeBoxAddress> | null = null;

/**
 * @summary Encodes a(n) PostOfficeBoxAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostOfficeBoxAddress, encoded as an ASN.1 Element.
 */
export function _encode_PostOfficeBoxAddress(
    value: PostOfficeBoxAddress,
    elGetter: $.ASN1Encoder<PostOfficeBoxAddress>
): _Element {
    if (!_cached_encoder_for_PostOfficeBoxAddress) {
        _cached_encoder_for_PostOfficeBoxAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_PostOfficeBoxAddress(value, elGetter);
}


/* eslint-enable */
