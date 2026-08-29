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
import { type UMF_AUDIT } from '../UsageMeteringFunction/UMF-AUDIT.oca.mjs';
/**
 * @summary AuditInfoSet
 * @description
 *
 * Extensible set of `UMF-AUDIT` information objects. Empty in
 * this Recommendation; specializations add members that bind a
 * service OID to an audit-details syntax. ITU-T Rec. X.742
 * (1995)/Cor.2 (02/2000)
 * [§4](https://www.itu.int/rec/T-REC-X.742-200002-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuditInfoSet UMF-AUDIT ::= {...}
 * ```
 *
 * @constant
 * @type {UMF_AUDIT[]}
 *
 */
export const AuditInfoSet: UMF_AUDIT[] = [];

/* eslint-enable */
