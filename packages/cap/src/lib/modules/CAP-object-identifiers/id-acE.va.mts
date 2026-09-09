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
} from "@wildboar/asn1";
import { id_CAPOE } from "../CAP-object-identifiers/id-CAPOE.va.mjs";
// export { id_CAPOE } from "../CAP-object-identifiers/id-CAPOE.va.mjs";


/**
 * @summary id_acE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-acE                        OBJECT IDENTIFIER ::= {id-CAPOE    ac(3)}
 * ```
 * 
 * @constant
 */
export
const id_acE: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ac */ 3,
], id_CAPOE);

/* eslint-enable */
