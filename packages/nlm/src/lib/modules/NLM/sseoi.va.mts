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
 * @summary sseoi
 * @description
 *
 * Standard-specific extensions: `specificProblems`, `informationtype`, and
 * `sNPAAddressType` values used in notifications.
 * ITU-T Rec. X.283 (12/97)
 * [§6.1.1](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sseoi OBJECT IDENTIFIER ::= {nloi standardSpecificExtensions(0)}
 * ```
 *
 * @constant
 */
export const sseoi: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* standardSpecificExtensions */ 0],
    nloi
);

/* eslint-enable */
