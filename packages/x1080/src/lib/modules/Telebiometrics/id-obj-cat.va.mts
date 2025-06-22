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
import { id_telebio } from '../Telebiometrics/id-telebio.va.mjs';

/**
 * @summary id_obj_cat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-obj-cat                OBJECT IDENTIFIER ::= { id-telebio obj-cat(3) }
 * ```
 *
 * @constant
 */
export const id_obj_cat: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* obj-cat */ 3],
    id_telebio
);

/* eslint-enable */
