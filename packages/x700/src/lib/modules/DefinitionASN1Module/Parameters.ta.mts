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
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';

/**
 * @summary Parameters
 * @description
 *
 * GDMO `PARAMETERS` construct: parameter templates associated with an
 * attribute, action, notification, or similar. Syntax of `parameters`.
 * ITU-T Rec. X.750 (10/96)
 * [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Parameters  ::=  TemplateList
 * ```
 */
export type Parameters = TemplateList; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Parameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Parameters} The decoded data structure.
 */
export const _decode_Parameters: $.ASN1Decoder<Parameters> = _decode_TemplateList;

/**
 * @summary Encodes a(n) Parameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Parameters, encoded as an ASN.1 Element.
 */
export const _encode_Parameters: $.ASN1Encoder<Parameters> = _encode_TemplateList;


/* eslint-enable */
