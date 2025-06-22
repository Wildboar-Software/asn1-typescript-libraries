/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CommunicationsNetwork
 * @description
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
