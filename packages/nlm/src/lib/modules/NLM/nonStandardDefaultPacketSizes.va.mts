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
 * @summary nonStandardDefaultPacketSizes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonStandardDefaultPacketSizes OBJECT IDENTIFIER ::= {aoi 151}
 * ```
 *
 * @constant
 */
export const nonStandardDefaultPacketSizes: OBJECT_IDENTIFIER = _OID.fromParts(
    [151],
    aoi
);

/* eslint-enable */
