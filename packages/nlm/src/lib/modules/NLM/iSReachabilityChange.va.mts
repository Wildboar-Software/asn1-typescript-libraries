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
 * @summary iSReachabilityChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iSReachabilityChange OBJECT IDENTIFIER ::= {sseoi informationtype(4) iSReachabilityChange(1)}
 * ```
 *
 * @constant
 */
export const iSReachabilityChange: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* informationtype */ 4, /* iSReachabilityChange */ 1],
    sseoi
);

/* eslint-enable */
