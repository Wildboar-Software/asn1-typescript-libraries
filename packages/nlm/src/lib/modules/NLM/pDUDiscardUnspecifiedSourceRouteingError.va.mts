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
import { pDUDiscard } from '../NLM/pDUDiscard.va.mjs';

/**
 * @summary pDUDiscardUnspecifiedSourceRouteingError
 * @description
 *
 * X.233 | ISO/IEC 8473-1 Table 7 Reason for Discard code 144. Paired with
 * `pDUDiscard` in `specificProblems`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.6](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardUnspecifiedSourceRouteingError OBJECT IDENTIFIER ::= {pDUDiscard unspecifiedSourceRouteingError(144)}
 * ```
 *
 * @constant
 */
export const pDUDiscardUnspecifiedSourceRouteingError: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* unspecifiedSourceRouteingError */ 144],
    pDUDiscard
);

/* eslint-enable */
