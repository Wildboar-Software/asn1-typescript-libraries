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
 * @summary proi
 * @description
 *
 * Notification parameter registrations: `notificationPDUHeader(1)`,
 * `notificationData(7)`, `reachabilityChange(12)`.
 * ITU-T Rec. X.283 (12/97)
 * [§6.1.1](https://www.itu.int/rec/T-REC-X.283-199712-I), Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * proi OBJECT IDENTIFIER ::= {nloi parameter(5)}
 * ```
 *
 * @constant
 */
export const proi: OBJECT_IDENTIFIER = _OID.fromParts([/* parameter */ 5], nloi);

/* eslint-enable */
