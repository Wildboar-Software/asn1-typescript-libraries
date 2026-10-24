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
    type DirectoryNameAndOptionalORAddress,
    _decode_DirectoryNameAndOptionalORAddress,
    _encode_DirectoryNameAndOptionalORAddress,
} from '../MhsAcctAsn1Module/DirectoryNameAndOptionalORAddress.ta.mjs';
/**
 * @summary NameResolutionProcessingInfo
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameResolutionProcessingInfo  ::=  DirectoryNameAndOptionalORAddress
 * ```
 */
export type NameResolutionProcessingInfo = DirectoryNameAndOptionalORAddress; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NameResolutionProcessingInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameResolutionProcessingInfo} The decoded data structure.
 */
export const _decode_NameResolutionProcessingInfo: $.ASN1Decoder<NameResolutionProcessingInfo> = _decode_DirectoryNameAndOptionalORAddress;

/**
 * @summary Encodes a(n) NameResolutionProcessingInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameResolutionProcessingInfo, encoded as an ASN.1 Element.
 */
export const _encode_NameResolutionProcessingInfo: $.ASN1Encoder<NameResolutionProcessingInfo> = _encode_DirectoryNameAndOptionalORAddress;


/* eslint-enable */
