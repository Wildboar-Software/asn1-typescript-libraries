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
 * @summary id_med_softw
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-med-softw    OBJECT IDENTIFIER ::= { id-obj-cat med-softw(8) }
 * ```
 *
 * @constant
 */
export const id_med_softw: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* med-softw */ 8],
    id_obj_cat
);

/* eslint-enable */
