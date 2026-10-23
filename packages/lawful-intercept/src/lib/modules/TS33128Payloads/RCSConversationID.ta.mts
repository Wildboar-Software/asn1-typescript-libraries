/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UUID, _decode_UUID, _encode_UUID } from "../TS33128Payloads/UUID.ta.mjs";
// export { UUID, _decode_UUID, _encode_UUID } from "../TS33128Payloads/UUID.ta.mjs";


/**
 * @summary RCSConversationID
 * @description
 * 
 * CPM Conversation Identity associated with a CPM Standalone Message, CPM File
 * Transfer, or CPM Session. See OMA-TS-CPM_Conversation_Function [109] clause
 * 5.3.
 *
 * 3GPP TS 33.128, clause 7.13.3.1.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSConversationID  ::=  UUID
 * ```
 */
export
type RCSConversationID = UUID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RCSConversationID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RCSConversationID: $.ASN1Decoder<RCSConversationID> = _decode_UUID;

/**
 * @summary Encodes a(n) RCSConversationID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSConversationID, encoded as an ASN.1 Element.
 */
export const _encode_RCSConversationID: (value: RCSConversationID, elGetter: $.ASN1Encoder<any>) => _Element = _encode_UUID;


/* eslint-enable */
