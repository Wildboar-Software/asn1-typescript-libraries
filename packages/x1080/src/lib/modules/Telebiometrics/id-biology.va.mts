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
import { id_fields_of_study } from '../Telebiometrics/id-fields-of-study.va.mjs';

/**
 * @summary id_biology
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-biology                OBJECT IDENTIFIER ::= {id-fields-of-study biology(3)}
 * ```
 *
 * @constant
 */
export const id_biology: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* biology */ 3],
    id_fields_of_study
);

/* eslint-enable */
