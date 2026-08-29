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
 * @summary pDUDiscard
 * @description
 *
 * Parent `specificProblems` value for a cLNS `communicationsAlarm` when a data
 * NPDU is discarded for any X.233 | ISO/IEC 8473-1 Table 7 reason except
 * congestion. Reported together with the matching `pDUDiscard*` reason OID.
 * Header via `notificationPDUHeader`; probableCause
 * `communicationsProtocolError`; severity Minor; no Cleared follow-up. Not used
 * for unknown protocol IDs.
 * ITU-T Rec. X.283 (12/97)
 * [§5.6](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscard OBJECT IDENTIFIER ::= {sseoi specificProblems(3) pDUDiscard(1)}
 * ```
 *
 * @constant
 */
export const pDUDiscard: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* specificProblems */ 3, /* pDUDiscard */ 1],
    sseoi
);

/* eslint-enable */
