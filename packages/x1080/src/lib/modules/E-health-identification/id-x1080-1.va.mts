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
import { id_thprot } from '../Telebiometrics/id-thprot.va.mjs';

/**
 * @summary id_x1080_1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-x1080-1 OBJECT IDENTIFIER ::= { id-thprot part1(1) }
 * ```
 *
 * @constant
 */
export const id_x1080_1: OBJECT_IDENTIFIER = new _OID(
    [/* part1 */ 1],
    id_thprot
);

/* eslint-enable */
