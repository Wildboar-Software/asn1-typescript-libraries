/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Counter
 * @description
 *
 * 32-bit (exactly 4 octets) counter in `OtherInfo.keyInfo`
 * parameters. Initial value `00000001` hex; converted to INTEGER,
 * incremented, and converted back each hash block of the ASN.1 KDF.
 * ANS X9.42-2003 §7.7.1, §A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Counter  ::=  OCTET STRING (SIZE (4))
 * ```
 */
export type Counter = OCTET_STRING; // OctetStringType




export const _decode_Counter = $._decodeOctetString;




export const _encode_Counter = $._encodeOctetString;


/* eslint-enable */
