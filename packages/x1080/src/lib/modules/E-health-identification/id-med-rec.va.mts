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
 * @summary id_med_rec
 * @description
 *
 * Medical-record category `{id-obj-cat med-rec(10)}`. Includes dental
 * records and DNA profiles. ITU-T X.1080.1 (05/2018) §8.2, §8.12.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-med-rec      OBJECT IDENTIFIER ::= { id-obj-cat med-rec(10) }
 * ```
 *
 * @constant
 */
export const id_med_rec: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* med-rec */ 10],
    id_obj_cat
);

/* eslint-enable */
