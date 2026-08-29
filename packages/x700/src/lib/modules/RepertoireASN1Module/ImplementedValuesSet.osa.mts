/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { type MKMF_VALUES } from '../RepertoireASN1Module/MKMF-VALUES.oca.mjs';
/**
 * @summary ImplementedValuesSet
 * @description
 *
 * Extensible object set of `MKMF-VALUES` that constrains
 * `ImplementedValues`. The rec publishes it empty (`{...}`); an
 * implementation fills it with the attributes it documents. ITU-T
 * Rec. X.750 Cor.1 (02/00)
 * [A.2.4](https://www.itu.int/rec/T-REC-X.750-200002-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImplementedValuesSet MKMF-VALUES ::= {...}
 * ```
 *
 * @constant
 * @type {MKMF_VALUES[]}
 *
 */
export const ImplementedValuesSet: MKMF_VALUES[] = [];

/* eslint-enable */
