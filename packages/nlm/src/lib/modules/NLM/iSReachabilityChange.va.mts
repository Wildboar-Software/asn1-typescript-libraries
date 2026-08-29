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
 * @summary iSReachabilityChange
 * @description
 *
 * `informationType` of GMI `communicationsInformation` when an ES or IS detects
 * a change in reachability of a neighbouring IS. `informationData` is
 * `ReachabilityChangeSyntax` (new state, NET, optional SNPA, optional reason).
 * ITU-T Rec. X.283 (12/97)
 * [§5.7](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iSReachabilityChange OBJECT IDENTIFIER ::= {sseoi informationtype(4) iSReachabilityChange(1)}
 * ```
 *
 * @constant
 */
export const iSReachabilityChange: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* informationtype */ 4, /* iSReachabilityChange */ 1],
    sseoi
);

/* eslint-enable */
