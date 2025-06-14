/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
/* START_OF_SYMBOL_DEFINITION MTSBindExtensions */
/**
 * @summary MTSBindExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTSBindExtensions EXTENSION ::= {PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const MTSBindExtensions: EXTENSION[] = [...PrivateExtensions];
/* END_OF_SYMBOL_DEFINITION MTSBindExtensions */

/* eslint-enable */
