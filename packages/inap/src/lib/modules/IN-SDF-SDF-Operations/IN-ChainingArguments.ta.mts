/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChainingArguments, _decode_ChainingArguments, _encode_ChainingArguments } from "../DistributedOperations/ChainingArguments.ta.mjs";
// export { ChainingArguments, _decode_ChainingArguments, _encode_ChainingArguments } from "../DistributedOperations/ChainingArguments.ta.mjs";


/**
 * @summary IN_ChainingArguments
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-ChainingArguments  ::= 
 *   ChainingArguments
 *     (WITH COMPONENTS {
 *        ...,
 *        aliasedRDNs  ABSENT,
 *        info         ABSENT,
 *        timeLimit    ABSENT
 *      })
 * ```
 */
export
type IN_ChainingArguments = ChainingArguments; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ChainingArguments
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_ChainingArguments: $.ASN1Decoder<IN_ChainingArguments> = _decode_ChainingArguments;

/**
 * @summary Encodes a(n) IN_ChainingArguments into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ChainingArguments, encoded as an ASN.1 Element.
 */
export const _encode_IN_ChainingArguments: (value: IN_ChainingArguments, elGetter: $.ASN1Encoder<any>) => _Element = _encode_ChainingArguments;


/* eslint-enable */
