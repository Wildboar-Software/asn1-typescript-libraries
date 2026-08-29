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
 * @summary flowControlParameterNegotiation
 * @description
 *
 * Flow-control parameter negotiation (X.2). When `true`, window and packet size
 * may be specified in call request/accept packets. When `false`, those fields
 * shall be omitted; IVMO or internal values are ignored. Syntax `Boolean`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * flowControlParameterNegotiation OBJECT IDENTIFIER ::= {aoi 119}
 * ```
 *
 * @constant
 */
export const flowControlParameterNegotiation: OBJECT_IDENTIFIER = _OID.fromParts(
    [119],
    aoi
);

/* eslint-enable */
