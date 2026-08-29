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
import { id_tmm } from '../Telebiometrics/id-tmm.va.mjs';

/**
 * @summary id_fields_of_study
 * @description
 *
 * TMM scientific layer `{id-tmm scientific(2)}`. Children are the
 * five X.1080.x fields: physics(1), chemistry(2), biology(3),
 * culturology(4), psychology(5). X.1080.1 intro, Annex A;
 * X.1082 §3.2.12.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-fields-of-study        OBJECT IDENTIFIER ::= {id-tmm scientific(2)}
 * ```
 *
 * @constant
 */
export const id_fields_of_study: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* scientific */ 2],
    id_tmm
);

/* eslint-enable */
