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
 * @summary id_ac_CAP_scf_gsmSSFGenericAC
 * @description
 *
 * OID of the gsmSCF/gsmSSF generic application context
 * `CAP-scf-gsmSSFGenericAC` (`{id-acE 8}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-CAP-scf-gsmSSFGenericAC            OBJECT IDENTIFIER ::= {id-acE 8}
 * ```
 * 
 * @constant
 */
export
const id_ac_CAP_scf_gsmSSFGenericAC: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], id_acE);

/* eslint-enable */
