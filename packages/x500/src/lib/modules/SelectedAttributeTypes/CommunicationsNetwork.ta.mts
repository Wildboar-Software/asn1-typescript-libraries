/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CommunicationsNetwork
 * @description
 *
 * OID identifying the network (e.g. PSTN, ISDN, GSM). OID allocation is
 * outside X.520.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommunicationsNetwork  ::=  OBJECT IDENTIFIER
 * ```
 */
export type CommunicationsNetwork = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_CommunicationsNetwork = $._decodeObjectIdentifier;


export const _encode_CommunicationsNetwork = $._encodeObjectIdentifier;


/* eslint-enable */
