/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NPartsMessage, _decode_NPartsMessage, _encode_NPartsMessage } from "../IN-SCF-SDF-datatypes/NPartsMessage.ta.mjs";
// export { NPartsMessage, _decode_NPartsMessage, _encode_NPartsMessage } from "../IN-SCF-SDF-datatypes/NPartsMessage.ta.mjs";


/**
 * @summary TwoPartMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TwoPartMessage  ::=  NPartsMessage
 * ```
 */
export
type TwoPartMessage = NPartsMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TwoPartMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TwoPartMessage: $.ASN1Decoder<TwoPartMessage> = _decode_NPartsMessage;

/**
 * @summary Encodes a(n) TwoPartMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TwoPartMessage, encoded as an ASN.1 Element.
 */
export const _encode_TwoPartMessage: $.ASN1Encoder<TwoPartMessage> = _encode_NPartsMessage;


/* eslint-enable */
