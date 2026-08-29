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
 * @summary id_chemistry
 * @description
 *
 * Chemistry field of study `{id-fields-of-study chemistry(2)}`. One
 * of the five X.1080.x fields. X.1080.1 intro, Annex A; X.1082
 * §3.2.12.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-chemistry              OBJECT IDENTIFIER ::= {id-fields-of-study
 *                                                  chemistry(2)}
 * ```
 *
 * @constant
 */
export const id_chemistry: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* chemistry */ 2],
    id_fields_of_study
);

/* eslint-enable */
