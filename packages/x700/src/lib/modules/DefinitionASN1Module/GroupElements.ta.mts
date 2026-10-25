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
    type TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';

/**
 * @summary GroupElements
 * @description
 *
 * GDMO attribute-group `GROUP ELEMENTS`: attributes that are members of
 * every instance of the group. Syntax of `groupElements`.
 * ITU-T Rec. X.750 (10/96)
 * [§8.1.2.3](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I). GDMO: X.722
 * (01/92)
 * [§8.8.3.1](https://www.itu.int/rec/T-REC-X.722-199201-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GroupElements  ::=  TemplateList
 * ```
 */
export type GroupElements = TemplateList; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) GroupElements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GroupElements} The decoded data structure.
 */
export const _decode_GroupElements: $.ASN1Decoder<GroupElements> = _decode_TemplateList;

/**
 * @summary Encodes a(n) GroupElements into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupElements, encoded as an ASN.1 Element.
 */
export const _encode_GroupElements: $.ASN1Encoder<GroupElements> = _encode_TemplateList;


/* eslint-enable */
