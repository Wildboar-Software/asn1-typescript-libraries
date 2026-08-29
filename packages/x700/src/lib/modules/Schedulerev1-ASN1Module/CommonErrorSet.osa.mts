/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { type SCHED_ERROR } from '../Schedulerev1-ASN1Module/SCHED-ERROR.oca.mjs';
/**
 * @summary CommonErrorSet
 * @description
 *
 * Extensible set of `SCHED-ERROR` objects that may appear in
 * `CommonError.errorId`. Published as `{...}`; the rec defines
 * no members. ITU-T Rec. X.746 (02/00)
 * [A.6](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * Erratum 1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonErrorSet SCHED-ERROR ::= {...}
 * ```
 *
 * @constant
 * @type {SCHED_ERROR[]}
 *
 */
export const CommonErrorSet: SCHED_ERROR[] = [];

/* eslint-enable */
