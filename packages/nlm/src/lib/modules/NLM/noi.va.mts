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
import { nloi } from '../NLM/nloi.va.mjs';

/**
 * @summary noi
 * @description
 *
 * Notification arc. Annex A allocates `{nloi notification(10)}` but lists no
 * NLM-defined notifications (objectCreation, communicationsAlarm,
 * communicationsInformation come from DMI/GMI; NLM supplies `informationType` /
 * `specificProblems` values under `sseoi`).
 * ITU-T Rec. X.283 (12/97)
 * [§6.1.1](https://www.itu.int/rec/T-REC-X.283-199712-I), Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noi OBJECT IDENTIFIER ::= {nloi notification(10)}
 * ```
 *
 * @constant
 */
export const noi: OBJECT_IDENTIFIER = _OID.fromParts([/* notification */ 10], nloi);

/* eslint-enable */
