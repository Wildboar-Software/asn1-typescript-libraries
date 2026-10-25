/* eslint-disable */
import { ASN1Element as _Element, ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ApplicationContext
 * @description
 *
 * OSI application-context OID in use on an association (DAP/DSP/DOP/DISP
 * ACs), not an LDAP OID. MATCHES FOR EQUALITY.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationContext  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ApplicationContext = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ApplicationContext: $.ASN1Decoder<ObjectIdentifier> = $._decodeObjectIdentifier;


export const _encode_ApplicationContext: $.ASN1Encoder<ObjectIdentifier> = $._encodeObjectIdentifier;


/* eslint-enable */
