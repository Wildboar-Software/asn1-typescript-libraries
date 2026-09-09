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
import { id_CAP } from "../CAP-object-identifiers/id-CAP.va.mjs";
// export { id_CAP } from "../CAP-object-identifiers/id-CAP.va.mjs";


/**
 * @summary id_ac
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac                        OBJECT IDENTIFIER ::= {id-CAP    ac(3)}
 * ```
 * 
 * @constant
 */
export
const id_ac: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ac */ 3,
], id_CAP);

/* eslint-enable */
