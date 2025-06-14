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
import { pDUDiscard } from '../NLM/pDUDiscard.va.mjs';
/* START_OF_SYMBOL_DEFINITION pDUDiscardLifetimeExpiredDuringReassembly */
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
export const pDUDiscardLifetimeExpiredDuringReassembly: OBJECT_IDENTIFIER = new _OID(
    [/* lifetimeExpiredDuringReassembly */ 161],
    pDUDiscard
);
/* END_OF_SYMBOL_DEFINITION pDUDiscardLifetimeExpiredDuringReassembly */

/* eslint-enable */
