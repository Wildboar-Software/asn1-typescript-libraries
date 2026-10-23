/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { DetectionAction, _decode_DetectionAction, _encode_DetectionAction } from "../CSTA-make-predictive-call/DetectionAction.ta.mjs";



/**
 * @summary DefaultAction
 * @description
 *
 * Action when Make Predictive Call cannot meet
 * `signallingCondition` (ECMA-269 §17.1.20 Table 17-110 /
 * FR 4). Same enumerants as `DetectionAction`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefaultAction  ::=  DetectionAction
 * ```
 */
export
type DefaultAction = DetectionAction; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DefaultAction: $.ASN1Decoder<DefaultAction> = _decode_DetectionAction;

/**
 * @summary Encodes a(n) DefaultAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultAction, encoded as an ASN.1 Element.
 */
export const _encode_DefaultAction: $.ASN1Encoder<DefaultAction> = _encode_DetectionAction;


/* eslint-enable */
