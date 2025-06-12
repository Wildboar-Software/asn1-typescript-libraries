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
} from "asn1-ts";
import { algorithms } from "../PKI-Stub/algorithms.va.js";

/* START_OF_SYMBOL_DEFINITION id_algo */
/**
 * @summary id_algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo              OBJECT IDENTIFIER ::= algorithms
 * ```
 *
 * @constant
 */
export const id_algo: OBJECT_IDENTIFIER = algorithms;
/* END_OF_SYMBOL_DEFINITION id_algo */

/* eslint-enable */
