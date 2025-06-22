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
 * @summary id_tai_ce
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-tai-ce                                   OBJECT IDENTIFIER ::= {id-tai certificate-extensions(2)}
 * ```
 * 
 * @constant
 */
export
const id_tai_ce: OBJECT_IDENTIFIER = _OID.fromParts([
    /* certificate-extensions */ 2,
], id_tai);

/* eslint-enable */
