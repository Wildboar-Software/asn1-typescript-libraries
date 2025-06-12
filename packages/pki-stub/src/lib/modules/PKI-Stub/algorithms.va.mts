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
import { ds } from "../PKI-Stub/ds.va.mjs";

/* START_OF_SYMBOL_DEFINITION algorithms */
/**
 * @summary algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithms           OBJECT IDENTIFIER ::= {ds 44}
 * ```
 *
 * @constant
 */
export const algorithms: OBJECT_IDENTIFIER = new _OID([44], ds);
/* END_OF_SYMBOL_DEFINITION algorithms */

/* eslint-enable */
