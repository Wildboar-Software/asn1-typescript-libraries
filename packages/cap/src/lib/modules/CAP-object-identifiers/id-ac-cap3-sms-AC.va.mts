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
import { id_ac3E } from "../CAP-object-identifiers/id-ac3E.va.mjs";
// export { id_ac3E } from "../CAP-object-identifiers/id-ac3E.va.mjs";


/**
 * @summary id_ac_cap3_sms_AC
 * @description
 *
 * OID of the CAP3 SMS application context `cap3-sms-AC` (`{id-ac3E 61}`). Used
 * for gprsSSF/gsmSCF or gsmSSF/gsmSCF SMS.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-cap3-sms-AC                OBJECT IDENTIFIER ::= {id-ac3E 61}
 * ```
 * 
 * @constant
 */
export
const id_ac_cap3_sms_AC: OBJECT_IDENTIFIER = _OID.fromParts([
    61,
], id_ac3E);

/* eslint-enable */
