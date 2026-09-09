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
import { id_contract } from "../CAP-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../CAP-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_capGsmScfToGprsSsf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-capGsmScfToGprsSsf                OBJECT IDENTIFIER ::= {id-contract 15}
 * ```
 * 
 * @constant
 */
export
const id_capGsmScfToGprsSsf: OBJECT_IDENTIFIER = _OID.fromParts([
    15,
], id_contract);

/* eslint-enable */
