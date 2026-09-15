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
 * @summary id_capGprsSsfTogsmScf
 * @description
 *
 * OID of the gprsSSF→gsmSCF contract `capGprsSsfTogsmScf` (`{id-contract 14}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-capGprsSsfTogsmScf                OBJECT IDENTIFIER ::= {id-contract 14}
 * ```
 * 
 * @constant
 */
export
const id_capGprsSsfTogsmScf: OBJECT_IDENTIFIER = _OID.fromParts([
    14,
], id_contract);

/* eslint-enable */
