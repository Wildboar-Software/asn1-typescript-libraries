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
 * @summary id_pharm_staff
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pharm-staff  OBJECT IDENTIFIER ::= { id-obj-cat pharm-staff(4) }
 * ```
 *
 * @constant
 */
export const id_pharm_staff: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* pharm-staff */ 4],
    id_obj_cat
);

/* eslint-enable */
