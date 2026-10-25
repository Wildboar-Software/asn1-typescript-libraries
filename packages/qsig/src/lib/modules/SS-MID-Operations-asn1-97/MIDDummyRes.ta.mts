/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MIDExtensions, _decode_MIDExtensions, _encode_MIDExtensions } from "../SS-MID-Operations-asn1-97/MIDExtensions.ta.mjs";

/**
 * @summary MIDDummyRes
 * @description
 *
 * Result of `mIDMailboxID` and `mIDMailboxAuth` (ECMA-347
 * §7.3.1). Confirms the invoke. Only a manufacturer
 * extension may be present. The procedures define no
 * result parameters (§7.5.1.1.2, §7.5.2.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIDDummyRes  ::=  MIDExtensions
 * ```
 */
export
type MIDDummyRes = MIDExtensions; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MIDDummyRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MIDDummyRes: $.ASN1Decoder<MIDDummyRes> = _decode_MIDExtensions;

/**
 * @summary Encodes a(n) MIDDummyRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MIDDummyRes, encoded as an ASN.1 Element.
 */
export const _encode_MIDDummyRes: $.ASN1Encoder<MIDDummyRes> = _encode_MIDExtensions;

/* eslint-enable */
