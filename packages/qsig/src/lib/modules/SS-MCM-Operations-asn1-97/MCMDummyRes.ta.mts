/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCMExtensions, _decode_MCMExtensions, _encode_MCMExtensions } from "../SS-MCM-Operations-asn1-97/MCMExtensions.ta.mjs";

/**
 * @summary MCMDummyRes
 * @description
 *
 * Result of an SS-MCM operation that confirms without
 * defined result parameters (ECMA-347 §6.3.1). Only a
 * manufacturer extension may be present. Returned by
 * `mCMNewMsg`, `mCMNoNewMsg`, `mCMUpdate`, and `mCMService`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMDummyRes  ::=  MCMExtensions
 * ```
 */
export
type MCMDummyRes = MCMExtensions; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MCMDummyRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MCMDummyRes: $.ASN1Decoder<MCMDummyRes> = _decode_MCMExtensions;

/**
 * @summary Encodes a(n) MCMDummyRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMDummyRes, encoded as an ASN.1 Element.
 */
export const _encode_MCMDummyRes: $.ASN1Encoder<MCMDummyRes> = _encode_MCMExtensions;

/* eslint-enable */
