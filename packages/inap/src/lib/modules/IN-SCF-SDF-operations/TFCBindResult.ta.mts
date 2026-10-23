/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TFCBindArgument, _decode_TFCBindArgument, _encode_TFCBindArgument } from "../IN-SCF-SDF-operations/TFCBindArgument.ta.mjs";
// export { TFCBindArgument, _decode_TFCBindArgument, _encode_TFCBindArgument } from "../IN-SCF-SDF-operations/TFCBindArgument.ta.mjs";


/**
 * @summary TFCBindResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TFCBindResult  ::= 
 *   TFCBindArgument
 * ```
 */
export
type TFCBindResult = TFCBindArgument; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TFCBindResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TFCBindResult: $.ASN1Decoder<TFCBindResult> = _decode_TFCBindArgument;

/**
 * @summary Encodes a(n) TFCBindResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TFCBindResult, encoded as an ASN.1 Element.
 */
export const _encode_TFCBindResult: (value: TFCBindResult, elGetter: $.ASN1Encoder<any>) => _Element = _encode_TFCBindArgument;


/* eslint-enable */
