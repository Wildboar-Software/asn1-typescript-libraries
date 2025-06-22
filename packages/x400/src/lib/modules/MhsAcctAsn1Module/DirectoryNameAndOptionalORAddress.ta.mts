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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary DirectoryNameAndOptionalORAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryNameAndOptionalORAddress  ::=  ORName
 * ```
 */
export type DirectoryNameAndOptionalORAddress = ORName; // DefinedType

let _cached_decoder_for_DirectoryNameAndOptionalORAddress: $.ASN1Decoder<DirectoryNameAndOptionalORAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryNameAndOptionalORAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryNameAndOptionalORAddress} The decoded data structure.
 */
export function _decode_DirectoryNameAndOptionalORAddress(el: _Element) {
    if (!_cached_decoder_for_DirectoryNameAndOptionalORAddress) {
        _cached_decoder_for_DirectoryNameAndOptionalORAddress = _decode_ORName;
    }
    return _cached_decoder_for_DirectoryNameAndOptionalORAddress(el);
}

let _cached_encoder_for_DirectoryNameAndOptionalORAddress: $.ASN1Encoder<DirectoryNameAndOptionalORAddress> | null = null;

/**
 * @summary Encodes a(n) DirectoryNameAndOptionalORAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryNameAndOptionalORAddress, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryNameAndOptionalORAddress(
    value: DirectoryNameAndOptionalORAddress,
    elGetter: $.ASN1Encoder<DirectoryNameAndOptionalORAddress>
) {
    if (!_cached_encoder_for_DirectoryNameAndOptionalORAddress) {
        _cached_encoder_for_DirectoryNameAndOptionalORAddress = _encode_ORName;
    }
    return _cached_encoder_for_DirectoryNameAndOptionalORAddress(
        value,
        elGetter
    );
}


/* eslint-enable */
