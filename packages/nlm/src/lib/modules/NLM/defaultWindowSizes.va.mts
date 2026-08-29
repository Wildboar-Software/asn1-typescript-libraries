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
 * @summary defaultWindowSizes
 * @description
 *
 * Default window sizes for an X.25 PLE. Syntax `BidirectionalValues`.
 * `dontCare` means the Recommendation default of 2; any other value is that
 * agreed via non-standard default window sizes. Default
 * `nullBidirectionalValues`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultWindowSizes OBJECT IDENTIFIER ::= {aoi 104}
 * ```
 *
 * @constant
 */
export const defaultWindowSizes: OBJECT_IDENTIFIER = _OID.fromParts([104], aoi);

/* eslint-enable */
