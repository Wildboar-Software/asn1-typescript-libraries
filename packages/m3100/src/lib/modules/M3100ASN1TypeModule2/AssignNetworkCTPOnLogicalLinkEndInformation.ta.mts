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
    CTPList,
    _decode_CTPList,
    _encode_CTPList,
} from '../M3100ASN1TypeModule2/CTPList.ta.mjs';

/**
 * @summary AssignNetworkCTPOnLogicalLinkEndInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssignNetworkCTPOnLogicalLinkEndInformation  ::=  CTPList
 * ```
 */
export type AssignNetworkCTPOnLogicalLinkEndInformation = CTPList; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AssignNetworkCTPOnLogicalLinkEndInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssignNetworkCTPOnLogicalLinkEndInformation} The decoded data structure.
 */
export const _decode_AssignNetworkCTPOnLogicalLinkEndInformation: $.ASN1Decoder<AssignNetworkCTPOnLogicalLinkEndInformation> = _decode_CTPList;

/**
 * @summary Encodes a(n) AssignNetworkCTPOnLogicalLinkEndInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssignNetworkCTPOnLogicalLinkEndInformation, encoded as an ASN.1 Element.
 */
export const _encode_AssignNetworkCTPOnLogicalLinkEndInformation: $.ASN1Encoder<AssignNetworkCTPOnLogicalLinkEndInformation> = _encode_CTPList;


/* eslint-enable */
