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
 * `specificProblems` of a linkage `communicationsAlarm` when an ISO 9542 PDU is
 * discarded by header-error detection or protocol error processing.
 * probableCause `communicationsProtocolError`; severity Minor; no Cleared
 * follow-up. Counted by `invalid9542PDUs`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
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
