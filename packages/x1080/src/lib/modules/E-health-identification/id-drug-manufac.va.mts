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
import { id_obj_cat } from '../Telebiometrics/id-obj-cat.va.mjs';

/**
 * @summary id_drug_manufac
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-drug-manufac OBJECT IDENTIFIER ::= { id-obj-cat drug-manufac(6) }
 * ```
 *
 * @constant
 */
export const id_drug_manufac: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* drug-manufac */ 6],
    id_obj_cat
);

/* eslint-enable */
