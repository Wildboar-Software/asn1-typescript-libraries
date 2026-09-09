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
import { id_CAP3 } from "../CAP-object-identifiers/id-CAP3.va.mjs";
// export { id_CAP3 } from "../CAP-object-identifiers/id-CAP3.va.mjs";


/**
 * @summary id_contract3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract3                    OBJECT IDENTIFIER ::= {id-CAP3    contract(26)}
 * ```
 * 
 * @constant
 */
export
const id_contract3: OBJECT_IDENTIFIER = _OID.fromParts([
    /* contract */ 26,
], id_CAP3);

/* eslint-enable */
