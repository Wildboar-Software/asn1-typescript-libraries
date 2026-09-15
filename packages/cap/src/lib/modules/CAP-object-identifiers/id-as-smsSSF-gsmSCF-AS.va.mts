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
import { id_as } from "../CAP-object-identifiers/id-as.va.mjs";
// export { id_as } from "../CAP-object-identifiers/id-as.va.mjs";


/**
 * @summary id_as_smsSSF_gsmSCF_AS
 * @description
 *
 * OID of the SMS abstract syntax `smsSSF-gsmSCF-AS` (`{id-as 61}`). Used for
 * gprsSSF/gsmSCF or gsmSSF/gsmSCF.
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-smsSSF-gsmSCF-AS                OBJECT IDENTIFIER ::= {id-as 61}
 * ```
 * 
 * @constant
 */
export
const id_as_smsSSF_gsmSCF_AS: OBJECT_IDENTIFIER = _OID.fromParts([
    61,
], id_as);

/* eslint-enable */
