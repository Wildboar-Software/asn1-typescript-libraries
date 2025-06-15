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
 * @summary id_methods_biology
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-methods-biology        OBJECT IDENTIFIER ::= {id-methods biology(3)}
 * ```
 *
 * @constant
 */
export const id_methods_biology: OBJECT_IDENTIFIER = new _OID(
    [/* biology */ 3],
    id_methods
);

/* eslint-enable */
