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
import { id_obj_cat } from '../Telebiometrics/id-obj-cat.va.mjs';

/**
 * @summary id_med_staff
 * @description
 *
 * Medical-staff category `{id-obj-cat med-staff(2)}`. Doctors,
 * surgeons, nurses, dentists, physiotherapists, psychologists, etc.
 * — not pharmaceutical staff. ITU-T X.1080.1 (05/2018) §8.2, §8.4.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-med-staff    OBJECT IDENTIFIER ::= { id-obj-cat med-staff(2) }
 * ```
 *
 * @constant
 */
export const id_med_staff: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* med-staff */ 2],
    id_obj_cat
);

/* eslint-enable */
