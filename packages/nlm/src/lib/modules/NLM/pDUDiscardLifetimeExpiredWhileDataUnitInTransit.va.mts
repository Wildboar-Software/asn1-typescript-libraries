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
/* START_OF_SYMBOL_DEFINITION pDUDiscardLifetimeExpiredWhileDataUnitInTransit */
/**
 * @summary pDUDiscardLifetimeExpiredWhileDataUnitInTransit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardLifetimeExpiredWhileDataUnitInTransit OBJECT IDENTIFIER ::= {pDUDiscard lifetimeExpiredWhileDataUnitInTransit(160)}
 * ```
 *
 * @constant
 */
export const pDUDiscardLifetimeExpiredWhileDataUnitInTransit: OBJECT_IDENTIFIER = new _OID(
    [/* lifetimeExpiredWhileDataUnitInTransit */ 160],
    pDUDiscard
);
/* END_OF_SYMBOL_DEFINITION pDUDiscardLifetimeExpiredWhileDataUnitInTransit */

/* eslint-enable */
