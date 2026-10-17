/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RemoteUserID
 * @description
 * 
 * Identity of a ProSe remote UE. Used for a connected remote UE and, alone, for
 * a disconnected one (clause 13.3.1 table 13.3.1-2). Clause 10.5.2 uses the
 * same identities on a tracking area or EPS location update of a target relay.
 * The handover text does not state the octet layout.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUserID  ::=  OCTET STRING
 * ```
 */
export
type RemoteUserID = OCTET_STRING; // OctetStringType
export const _decode_RemoteUserID: $.ASN1Decoder<RemoteUserID> = $._decodeOctetString;
export const _encode_RemoteUserID: $.ASN1Encoder<RemoteUserID> = $._encodeOctetString;


/* eslint-enable */
