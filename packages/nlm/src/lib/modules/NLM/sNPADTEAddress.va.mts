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
} from '@wildboar/asn1';
import { sseoi } from '../NLM/sseoi.va.mjs';

/**
 * @summary sNPADTEAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sNPADTEAddress OBJECT IDENTIFIER ::= {sseoi sNPAAddressType(5) dTEAddress(1)}
 * ```
 *
 * @constant
 */
export const sNPADTEAddress: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* sNPAAddressType */ 5, /* dTEAddress */ 1],
    sseoi
);

/* eslint-enable */
