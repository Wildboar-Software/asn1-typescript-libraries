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
    type NWTPList,
    _decode_NWTPList,
    _encode_NWTPList,
} from '../M3100ASN1TypeModule2/NWTPList.ta.mjs';

/**
 * @summary CTPList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CTPList  ::=  NWTPList
 * ```
 */
export type CTPList = NWTPList; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CTPList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CTPList} The decoded data structure.
 */
export const _decode_CTPList: $.ASN1Decoder<CTPList> = _decode_NWTPList;

/**
 * @summary Encodes a(n) CTPList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTPList, encoded as an ASN.1 Element.
 */
export const _encode_CTPList: $.ASN1Encoder<CTPList> = _encode_NWTPList;


/* eslint-enable */
