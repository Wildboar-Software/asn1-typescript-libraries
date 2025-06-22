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
import { id_methods } from '../Telebiometrics/id-methods.va.mjs';

/**
 * @summary id_methods_chemistry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-methods-chemistry      OBJECT IDENTIFIER ::= {id-methods chemistry(2)}
 * ```
 *
 * @constant
 */
export const id_methods_chemistry: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* chemistry */ 2],
    id_methods
);

/* eslint-enable */
