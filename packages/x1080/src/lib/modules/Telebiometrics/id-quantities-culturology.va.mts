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
/* START_OF_SYMBOL_DEFINITION id_quantities_culturology */
/**
 * @summary id_quantities_culturology
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-quantities-culturology OBJECT IDENTIFIER ::= {id-quantities culturology(4)}
 * ```
 *
 * @constant
 */
export const id_quantities_culturology: OBJECT_IDENTIFIER = new _OID(
    [/* culturology */ 4],
    id_quantities
);
/* END_OF_SYMBOL_DEFINITION id_quantities_culturology */

/* eslint-enable */
