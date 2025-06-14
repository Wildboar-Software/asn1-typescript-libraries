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
/* START_OF_SYMBOL_DEFINITION pDUDiscard */
/**
 * @summary pDUDiscard
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscard OBJECT IDENTIFIER ::= {sseoi specificProblems(3) pDUDiscard(1)}
 * ```
 *
 * @constant
 */
export const pDUDiscard: OBJECT_IDENTIFIER = new _OID(
    [/* specificProblems */ 3, /* pDUDiscard */ 1],
    sseoi
);
/* END_OF_SYMBOL_DEFINITION pDUDiscard */

/* eslint-enable */
