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
    type Presentation_selector,
    _decode_Presentation_selector,
    _encode_Presentation_selector,
} from '../ISO8823-PRESENTATION/Presentation-selector.ta.mjs';

/**
 * @summary Calling_presentation_selector
 * @description
 *
 * Calling PSAP selector from `P-CONNECT` request (X.226 §6.2.2.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Calling-presentation-selector  ::=  Presentation-selector
 * ```
 */
export type Calling_presentation_selector = Presentation_selector; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) Calling_presentation_selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Calling_presentation_selector} The decoded data structure.
 */
export const _decode_Calling_presentation_selector: $.ASN1Decoder<Calling_presentation_selector> = _decode_Presentation_selector;

/**
 * @summary Encodes a(n) Calling_presentation_selector into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Calling_presentation_selector, encoded as an ASN.1 Element.
 */
export const _encode_Calling_presentation_selector: $.ASN1Encoder<Calling_presentation_selector> = _encode_Presentation_selector;


/* eslint-enable */
