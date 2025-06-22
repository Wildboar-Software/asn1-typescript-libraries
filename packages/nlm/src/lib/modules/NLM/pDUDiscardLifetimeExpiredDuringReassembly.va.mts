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
import { pDUDiscard } from '../NLM/pDUDiscard.va.mjs';

/**
 * @summary pDUDiscardLifetimeExpiredDuringReassembly
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardLifetimeExpiredDuringReassembly OBJECT IDENTIFIER ::= {pDUDiscard lifetimeExpiredDuringReassembly(161)}
 * ```
 *
 * @constant
 */
export const pDUDiscardLifetimeExpiredDuringReassembly: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* lifetimeExpiredDuringReassembly */ 161],
    pDUDiscard
);

/* eslint-enable */
