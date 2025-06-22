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
import { id_x1080_1 } from '../E-health-identification/id-x1080-1.va.mjs';

/**
 * @summary id_x1080_1_modules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-x1080-1-modules     OBJECT IDENTIFIER ::= { id-x1080-1 module(0) }
 * ```
 *
 * @constant
 */
export const id_x1080_1_modules: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* module */ 0],
    id_x1080_1
);

/* eslint-enable */
