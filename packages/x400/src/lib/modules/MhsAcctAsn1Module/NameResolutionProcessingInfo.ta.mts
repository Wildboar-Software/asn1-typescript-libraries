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
    DirectoryNameAndOptionalORAddress,
    _decode_DirectoryNameAndOptionalORAddress,
    _encode_DirectoryNameAndOptionalORAddress,
} from '../MhsAcctAsn1Module/DirectoryNameAndOptionalORAddress.ta.mjs';
/**
 * @summary NameResolutionProcessingInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameResolutionProcessingInfo  ::=  DirectoryNameAndOptionalORAddress
 * ```
 */
export type NameResolutionProcessingInfo = DirectoryNameAndOptionalORAddress; // DefinedType

let _cached_decoder_for_NameResolutionProcessingInfo: $.ASN1Decoder<NameResolutionProcessingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameResolutionProcessingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameResolutionProcessingInfo} The decoded data structure.
 */
export function _decode_NameResolutionProcessingInfo(el: _Element) {
    if (!_cached_decoder_for_NameResolutionProcessingInfo) {
        _cached_decoder_for_NameResolutionProcessingInfo = _decode_DirectoryNameAndOptionalORAddress;
    }
    return _cached_decoder_for_NameResolutionProcessingInfo(el);
}

let _cached_encoder_for_NameResolutionProcessingInfo: $.ASN1Encoder<NameResolutionProcessingInfo> | null = null;

/**
 * @summary Encodes a(n) NameResolutionProcessingInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameResolutionProcessingInfo, encoded as an ASN.1 Element.
 */
export function _encode_NameResolutionProcessingInfo(
    value: NameResolutionProcessingInfo,
    elGetter: $.ASN1Encoder<NameResolutionProcessingInfo>
) {
    if (!_cached_encoder_for_NameResolutionProcessingInfo) {
        _cached_encoder_for_NameResolutionProcessingInfo = _encode_DirectoryNameAndOptionalORAddress;
    }
    return _cached_encoder_for_NameResolutionProcessingInfo(value, elGetter);
}


/* eslint-enable */
