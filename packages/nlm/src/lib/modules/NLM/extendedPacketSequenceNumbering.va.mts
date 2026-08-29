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
 * @summary extendedPacketSequenceNumbering
 * @description
 *
 * Modulo of the packet sequence-number space. Syntax `PacketSequencing`.
 * 8208/X.25 require support for at least one of 8 and 128; a SET to an
 * unsupported value shall fail.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extendedPacketSequenceNumbering OBJECT IDENTIFIER ::= {aoi 49}
 * ```
 *
 * @constant
 */
export const extendedPacketSequenceNumbering: OBJECT_IDENTIFIER = _OID.fromParts(
    [49],
    aoi
);

/* eslint-enable */
