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
 * @summary id_observer
 * @description
 *
 * Observer category `{id-obj-cat observer(3)}`. Law enforcement,
 * medical students, etc.; generally no health-professional
 * qualification. ITU-T X.1080.1 (05/2018) §8.2, §8.5.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-observer     OBJECT IDENTIFIER ::= { id-obj-cat observer(3) }
 * ```
 *
 * @constant
 */
export const id_observer: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* observer */ 3],
    id_obj_cat
);

/* eslint-enable */
