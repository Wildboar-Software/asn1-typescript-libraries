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
    type Result_list,
    _decode_Result_list,
    _encode_Result_list,
} from '../ISO8823-PRESENTATION/Result-list.ta.mjs';

/**
 * @summary Presentation_context_definition_result_list
 * @description
 *
 * One result per CP definition-list item (X.226 §6.2.3.5, §6.2.4.4).
 * Accepted items become the initial DCS (X.226 §6.2.5.9).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-definition-result-list  ::=  Result-list
 * ```
 */
export type Presentation_context_definition_result_list = Result_list; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_definition_result_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_definition_result_list} The decoded data structure.
 */
export const _decode_Presentation_context_definition_result_list: $.ASN1Decoder<Presentation_context_definition_result_list> = _decode_Result_list;

/**
 * @summary Encodes a(n) Presentation_context_definition_result_list into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_definition_result_list, encoded as an ASN.1 Element.
 */
export const _encode_Presentation_context_definition_result_list: $.ASN1Encoder<Presentation_context_definition_result_list> = _encode_Result_list;


/* eslint-enable */
