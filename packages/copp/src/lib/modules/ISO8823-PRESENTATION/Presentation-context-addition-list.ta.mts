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
    type Context_list,
    _decode_Context_list,
    _encode_Context_list,
} from '../ISO8823-PRESENTATION/Context-list.ta.mjs';

/**
 * @summary Presentation_context_addition_list
 * @description
 *
 * Contexts proposed for addition to the DCS on AC. PCIDs unused on this
 * connection; odd if sender is initiator, even if responder
 * (X.226 §6.5.2.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-addition-list  ::=  Context-list
 * ```
 */
export type Presentation_context_addition_list = Context_list; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_addition_list
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_addition_list} The decoded data structure.
 */
export const _decode_Presentation_context_addition_list: $.ASN1Decoder<Presentation_context_addition_list> = _decode_Context_list;

/**
 * @summary Encodes a(n) Presentation_context_addition_list into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_addition_list, encoded as an ASN.1 Element.
 */
export const _encode_Presentation_context_addition_list: $.ASN1Encoder<Presentation_context_addition_list> = _encode_Context_list;


/* eslint-enable */
