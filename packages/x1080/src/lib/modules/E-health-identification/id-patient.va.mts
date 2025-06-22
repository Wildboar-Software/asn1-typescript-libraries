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
 * @summary id_patient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-patient      OBJECT IDENTIFIER ::= { id-obj-cat patient(1) }
 * ```
 *
 * @constant
 */
export const id_patient: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* patient */ 1],
    id_obj_cat
);

/* eslint-enable */
