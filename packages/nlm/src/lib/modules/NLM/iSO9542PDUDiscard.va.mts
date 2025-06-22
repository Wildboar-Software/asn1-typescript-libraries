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
 * @summary iSO9542PDUDiscard
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iSO9542PDUDiscard OBJECT IDENTIFIER ::= {sseoi specificProblems(3) iSO9542PDUDiscard(2)}
 * ```
 *
 * @constant
 */
export const iSO9542PDUDiscard: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* specificProblems */ 3, /* iSO9542PDUDiscard */ 2],
    sseoi
);

/* eslint-enable */
