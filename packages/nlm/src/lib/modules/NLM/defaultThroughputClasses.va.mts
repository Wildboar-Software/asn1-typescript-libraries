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
} from 'asn1-ts';
import { aoi } from '../NLM/aoi.va.mjs';

/**
 * @summary defaultThroughputClasses
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultThroughputClasses OBJECT IDENTIFIER ::= {aoi 112}
 * ```
 *
 * @constant
 */
export const defaultThroughputClasses: OBJECT_IDENTIFIER = new _OID([112], aoi);

/* eslint-enable */
