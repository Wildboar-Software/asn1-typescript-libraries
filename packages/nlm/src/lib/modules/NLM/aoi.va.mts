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
import { nloi } from '../NLM/nloi.va.mjs';

/**
 * @summary aoi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aoi OBJECT IDENTIFIER ::= {nloi attribute(7)}
 * ```
 *
 * @constant
 */
export const aoi: OBJECT_IDENTIFIER = _OID.fromParts([/* attribute */ 7], nloi);

/* eslint-enable */
