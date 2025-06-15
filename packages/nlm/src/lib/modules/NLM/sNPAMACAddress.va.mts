/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { sseoi } from '../NLM/sseoi.va.mjs';

/**
 * @summary sNPAMACAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sNPAMACAddress OBJECT IDENTIFIER ::= {sseoi sNPAAddressType(5) mACAddress(2)}
 * ```
 *
 * @constant
 */
export const sNPAMACAddress: OBJECT_IDENTIFIER = new _OID(
    [/* sNPAAddressType */ 5, /* mACAddress */ 2],
    sseoi
);

/* eslint-enable */
