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
/* START_OF_SYMBOL_DEFINITION id_med_device */
/**
 * @summary id_med_device
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-med-device   OBJECT IDENTIFIER ::= { id-obj-cat med-device(7) }
 * ```
 *
 * @constant
 */
export const id_med_device: OBJECT_IDENTIFIER = new _OID(
    [/* med-device */ 7],
    id_obj_cat
);
/* END_OF_SYMBOL_DEFINITION id_med_device */

/* eslint-enable */
