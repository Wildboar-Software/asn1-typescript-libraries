/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MgtOctetString
 * @description
 *
 * CMIP OCTET STRING wrapper. Used for PDU octets in communications
 * notifications. Empty is a valid empty encoding, not "absent".
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtOctetString  ::=  OCTET STRING
 * ```
 */
export type MgtOctetString = OCTET_STRING; // OctetStringType


export const _decode_MgtOctetString = $._decodeOctetString;


export const _encode_MgtOctetString = $._encodeOctetString;


/* eslint-enable */
