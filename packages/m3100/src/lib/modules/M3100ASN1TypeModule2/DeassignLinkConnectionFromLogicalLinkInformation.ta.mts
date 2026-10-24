/* eslint-disable */
import {
    type ASN1Element as _Element,
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
    LinkConnectionList,
    _decode_LinkConnectionList,
    _encode_LinkConnectionList,
} from '../M3100ASN1TypeModule2/LinkConnectionList.ta.mjs';

/**
 * @summary DeassignLinkConnectionFromLogicalLinkInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeassignLinkConnectionFromLogicalLinkInformation  ::=  LinkConnectionList
 * ```
 */
export type DeassignLinkConnectionFromLogicalLinkInformation = LinkConnectionList; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DeassignLinkConnectionFromLogicalLinkInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeassignLinkConnectionFromLogicalLinkInformation} The decoded data structure.
 */
export const _decode_DeassignLinkConnectionFromLogicalLinkInformation: $.ASN1Decoder<DeassignLinkConnectionFromLogicalLinkInformation> = _decode_LinkConnectionList;

/**
 * @summary Encodes a(n) DeassignLinkConnectionFromLogicalLinkInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeassignLinkConnectionFromLogicalLinkInformation, encoded as an ASN.1 Element.
 */
export const _encode_DeassignLinkConnectionFromLogicalLinkInformation: $.ASN1Encoder<DeassignLinkConnectionFromLogicalLinkInformation> = _encode_LinkConnectionList;


/* eslint-enable */
