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
import { id_acE } from "../CAP-object-identifiers/id-acE.va.mjs";
// export { id_acE } from "../CAP-object-identifiers/id-acE.va.mjs";


/**
 * @summary id_ac_cap4_sms_AC
 * @description
 *
 * OID of the CAP4 SMS application context `cap4-sms-AC` (`{id-acE 61}`). Used
 * for gprsSSF/gsmSCF or gsmSSF/gsmSCF SMS.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-cap4-sms-AC                OBJECT IDENTIFIER ::= {id-acE 61}
 * ```
 * 
 * @constant
 */
export
const id_ac_cap4_sms_AC: OBJECT_IDENTIFIER = _OID.fromParts([
    61,
], id_acE);

/* eslint-enable */
