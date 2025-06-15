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
import { id_measures } from '../Telebiometrics/id-measures.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_symbols */
/**
 * @summary id_symbols
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-symbols                OBJECT IDENTIFIER ::= {id-measures symbols(3)}
 * ```
 *
 * @constant
 */
export const id_symbols: OBJECT_IDENTIFIER = new _OID(
    [/* symbols */ 3],
    id_measures
);
/* END_OF_SYMBOL_DEFINITION id_symbols */

/* eslint-enable */
