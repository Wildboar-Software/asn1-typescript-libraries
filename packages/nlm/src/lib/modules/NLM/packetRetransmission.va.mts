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
 * @summary packetRetransmission
 * @description
 *
 * Packet retransmission facility (X.2). `true` = subscribed. If not subscribed,
 * reject timer/count attributes have NULL values. Syntax `Boolean`. Conditional
 * package `packetRetransmissionProcedures-P` (8208/X.25 §13.4).
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * packetRetransmission OBJECT IDENTIFIER ::= {aoi 161}
 * ```
 *
 * @constant
 */
export const packetRetransmission: OBJECT_IDENTIFIER = _OID.fromParts([161], aoi);

/* eslint-enable */
