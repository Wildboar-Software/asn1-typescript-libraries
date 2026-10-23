/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary EPSRANCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSRANCause  ::=  ExternalASNType
 * ```
 */
export
type EPSRANCause = ExternalASNType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) EPSRANCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSRANCause: $.ASN1Decoder<EPSRANCause> = _decode_ExternalASNType;

/**
 * @summary Encodes a(n) EPSRANCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSRANCause, encoded as an ASN.1 Element.
 */
export const _encode_EPSRANCause: (value: EPSRANCause, elGetter: $.ASN1Encoder<any>) => _Element = _encode_ExternalASNType;


/* eslint-enable */
