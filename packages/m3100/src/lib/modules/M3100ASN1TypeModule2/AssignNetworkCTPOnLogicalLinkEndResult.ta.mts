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
    type CTPList,
    _decode_CTPList,
    _encode_CTPList,
} from '../M3100ASN1TypeModule2/CTPList.ta.mjs';

/**
 * @summary AssignNetworkCTPOnLogicalLinkEndResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssignNetworkCTPOnLogicalLinkEndResult  ::=  CTPList
 * ```
 */
export type AssignNetworkCTPOnLogicalLinkEndResult = CTPList; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AssignNetworkCTPOnLogicalLinkEndResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssignNetworkCTPOnLogicalLinkEndResult} The decoded data structure.
 */
export const _decode_AssignNetworkCTPOnLogicalLinkEndResult: $.ASN1Decoder<AssignNetworkCTPOnLogicalLinkEndResult> = _decode_CTPList;

/**
 * @summary Encodes a(n) AssignNetworkCTPOnLogicalLinkEndResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssignNetworkCTPOnLogicalLinkEndResult, encoded as an ASN.1 Element.
 */
export const _encode_AssignNetworkCTPOnLogicalLinkEndResult: $.ASN1Encoder<AssignNetworkCTPOnLogicalLinkEndResult> = _encode_CTPList;


/* eslint-enable */
