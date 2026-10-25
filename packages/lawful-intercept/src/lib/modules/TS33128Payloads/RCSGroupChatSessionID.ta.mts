/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SIPURI, _decode_SIPURI, _encode_SIPURI } from "../TS33128Payloads/SIPURI.ta.mjs";
// export { SIPURI, _decode_SIPURI, _encode_SIPURI } from "../TS33128Payloads/SIPURI.ta.mjs";


/**
 * @summary RCSGroupChatSessionID
 * @description
 * 
 * Shall contain the SIPURI that uniquely identifies the CPM Group Session for
 * an RCS Group Chat. See OMA-TS-CPM_System_Description-V2 [82] clause 5.1.1.5.
 *
 * 3GPP TS 33.128, clause 7.13.3.1.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSGroupChatSessionID  ::=  SIPURI
 * ```
 */
export
type RCSGroupChatSessionID = SIPURI; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RCSGroupChatSessionID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RCSGroupChatSessionID: $.ASN1Decoder<RCSGroupChatSessionID> = _decode_SIPURI;

/**
 * @summary Encodes a(n) RCSGroupChatSessionID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSGroupChatSessionID, encoded as an ASN.1 Element.
 */
export const _encode_RCSGroupChatSessionID: $.ASN1Encoder<RCSGroupChatSessionID> = _encode_SIPURI;


/* eslint-enable */
