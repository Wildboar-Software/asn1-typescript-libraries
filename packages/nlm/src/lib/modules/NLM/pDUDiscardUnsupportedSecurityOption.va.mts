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
 * @summary pDUDiscardUnsupportedSecurityOption
 * @description
 *
 * X.233 | ISO/IEC 8473-1 Table 7 Reason for Discard code 178. Paired with
 * `pDUDiscard` in `specificProblems`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.6](https://www.itu.int/rec/T-REC-X.283-199712-I), §6.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardUnsupportedSecurityOption OBJECT IDENTIFIER ::= {pDUDiscard unsupportedSecurityOption(178)}
 * ```
 *
 * @constant
 */
export const pDUDiscardUnsupportedSecurityOption: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* unsupportedSecurityOption */ 178],
    pDUDiscard
);

/* eslint-enable */
