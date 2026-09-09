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
 * @summary id_contractE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contractE                    OBJECT IDENTIFIER ::= {id-CAPOE    contract(26)}
 * ```
 * 
 * @constant
 */
export
const id_contractE: OBJECT_IDENTIFIER = _OID.fromParts([
    /* contract */ 26,
], id_CAPOE);

/* eslint-enable */
