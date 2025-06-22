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
 * @summary id_culturology
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-culturology            OBJECT IDENTIFIER ::= {id-fields-of-study
 *                                                  culturology(4)}
 * ```
 *
 * @constant
 */
export const id_culturology: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* culturology */ 4],
    id_fields_of_study
);

/* eslint-enable */
