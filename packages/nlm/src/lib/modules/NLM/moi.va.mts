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
 * @summary moi
 * @description
 *
 * Managed-object-class registrations (`networkSubsystem(1)`, `nSAP(4)`,
 * `cLNS(21)`, `x25PLE(25)`, …).
 * ITU-T Rec. X.283 (12/97)
 * [§6.1.1](https://www.itu.int/rec/T-REC-X.283-199712-I), Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * moi OBJECT IDENTIFIER ::= {nloi managedObjectClass(3)}
 * ```
 *
 * @constant
 */
export const moi: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* managedObjectClass */ 3],
    nloi
);

/* eslint-enable */
