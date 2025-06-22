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
import { id_quantities } from '../Telebiometrics/id-quantities.va.mjs';

/**
 * @summary id_quantities_chemistry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-quantities-chemistry   OBJECT IDENTIFIER ::= {id-quantities chemistry(2)}
 * ```
 *
 * @constant
 */
export const id_quantities_chemistry: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* chemistry */ 2],
    id_quantities
);

/* eslint-enable */
