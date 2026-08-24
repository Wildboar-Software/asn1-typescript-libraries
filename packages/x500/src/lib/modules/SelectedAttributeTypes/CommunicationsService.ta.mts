/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CommunicationsService
 * @description
 *
 * OID identifying the service class (e.g. telephone, facsimile, email). OID
 * allocation is outside X.520.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommunicationsService  ::=  OBJECT IDENTIFIER
 * ```
 */
export type CommunicationsService = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_CommunicationsService = $._decodeObjectIdentifier;


export const _encode_CommunicationsService = $._encodeObjectIdentifier;


/* eslint-enable */
