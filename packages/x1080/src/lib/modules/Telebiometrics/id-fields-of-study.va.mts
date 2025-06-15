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
import { id_tmm } from '../Telebiometrics/id-tmm.va.mjs';

/**
 * @summary id_fields_of_study
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-fields-of-study        OBJECT IDENTIFIER ::= {id-tmm scientific(2)}
 * ```
 *
 * @constant
 */
export const id_fields_of_study: OBJECT_IDENTIFIER = new _OID(
    [/* scientific */ 2],
    id_tmm
);

/* eslint-enable */
