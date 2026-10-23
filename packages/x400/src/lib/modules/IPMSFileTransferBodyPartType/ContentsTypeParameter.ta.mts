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
    Contents_Type_Attribute,
    _decode_Contents_Type_Attribute,
    _encode_Contents_Type_Attribute,
} from '../IPMSFileTransferBodyPartType/Contents-Type-Attribute.ta.mjs';
/**
 * @summary ContentsTypeParameter
 * @description
 *
 * The contents type parameter indicates the abstract data types of the contents of the
 * file and the structuring information which is necessary if the complete file structure
 * and semantics are to be maintained during the transfer of the See ITU-T X.420 (1999),
 * §7.4.12.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentsTypeParameter  ::=  Contents-Type-Attribute
 * ```
 */
export type ContentsTypeParameter = Contents_Type_Attribute; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ContentsTypeParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentsTypeParameter} The decoded data structure.
 */
export const _decode_ContentsTypeParameter: $.ASN1Decoder<ContentsTypeParameter> = _decode_Contents_Type_Attribute;

/**
 * @summary Encodes a(n) ContentsTypeParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentsTypeParameter, encoded as an ASN.1 Element.
 */
export const _encode_ContentsTypeParameter: $.ASN1Encoder<ContentsTypeParameter> = _encode_Contents_Type_Attribute;


/* eslint-enable */
