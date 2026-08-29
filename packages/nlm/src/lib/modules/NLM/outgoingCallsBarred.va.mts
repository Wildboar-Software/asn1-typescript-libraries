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
import { aoi } from '../NLM/aoi.va.mjs';

/**
 * @summary outgoingCallsBarred
 * @description
 *
 * Outgoing calls barred facility (X.2). `true` = subscribed. Syntax `Boolean`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * outgoingCallsBarred OBJECT IDENTIFIER ::= {aoi 159}
 * ```
 *
 * @constant
 */
export const outgoingCallsBarred: OBJECT_IDENTIFIER = _OID.fromParts([159], aoi);

/* eslint-enable */
