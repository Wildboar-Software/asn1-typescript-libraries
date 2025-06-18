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
import { id_tai } from "../TAI/id-tai.va.mjs";
/**
 * @summary id_tai_at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-tai-at                                   OBJECT IDENTIFIER ::= {id-tai attributes(1)}
 * ```
 * 
 * @constant
 */
export
const id_tai_at: OBJECT_IDENTIFIER = new _OID([
    /* attributes */ 1,
], id_tai);

/* eslint-enable */
