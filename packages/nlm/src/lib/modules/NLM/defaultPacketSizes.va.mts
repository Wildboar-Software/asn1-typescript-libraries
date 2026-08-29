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
 * @summary defaultPacketSizes
 * @description
 *
 * Default packet sizes (octets) for an X.25 PLE. Syntax `BidirectionalValues`.
 * `dontCare` means the 8208/X.25 default of 128; any other value is that agreed
 * via non-standard default packet sizes. Default `nullBidirectionalValues`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultPacketSizes OBJECT IDENTIFIER ::= {aoi 103}
 * ```
 *
 * @constant
 */
export const defaultPacketSizes: OBJECT_IDENTIFIER = _OID.fromParts([103], aoi);

/* eslint-enable */
