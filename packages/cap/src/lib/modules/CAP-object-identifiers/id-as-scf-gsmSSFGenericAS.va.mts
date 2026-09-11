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
import { id_asE } from "../CAP-object-identifiers/id-asE.va.mjs";
// export { id_asE } from "../CAP-object-identifiers/id-asE.va.mjs";


/**
 * @summary id_as_scf_gsmSSFGenericAS
 * @description
 *
 * OID of the gsmSCF/gsmSSF generic abstract syntax `scf-gsmSSFGenericAS`
 * (`{id-asE 7}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-scf-gsmSSFGenericAS            OBJECT IDENTIFIER ::= {id-asE 7}
 * ```
 * 
 * @constant
 */
export
const id_as_scf_gsmSSFGenericAS: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], id_asE);

/* eslint-enable */
