/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RemoteUserID, _decode_RemoteUserID, _encode_RemoteUserID } from "../EpsHI2Operations/RemoteUserID.ta.mjs";
// export { RemoteUserID, _decode_RemoteUserID, _encode_RemoteUserID } from "../EpsHI2Operations/RemoteUserID.ta.mjs";


/**
 * @summary RemoteUeContextDisconnected
 * @description
 * 
 * Identity of a ProSe remote UE that has disconnected from a ProSe
 * UE-to-network relay. Provide it when the relay is the target (table
 * 13.3.2.2-1). The module defines this as the remote-user identity alone, with
 * no IP address. Clause 13 does not state the octet layout.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUeContextDisconnected  ::=  RemoteUserID
 * ```
 */
export
type RemoteUeContextDisconnected = RemoteUserID; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUeContextDisconnected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RemoteUeContextDisconnected: $.ASN1Decoder<RemoteUeContextDisconnected> = _decode_RemoteUserID;

/**
 * @summary Encodes a(n) RemoteUeContextDisconnected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUeContextDisconnected, encoded as an ASN.1 Element.
 */
export const _encode_RemoteUeContextDisconnected: $.ASN1Encoder<RemoteUeContextDisconnected> = _encode_RemoteUserID;


/* eslint-enable */
