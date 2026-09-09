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
 * @summary id_ac_CAP_gsmSSF_scfAssistHandoffAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-CAP-gsmSSF-scfAssistHandoffAC        OBJECT IDENTIFIER ::= {id-acE 6}
 * ```
 * 
 * @constant
 */
export
const id_ac_CAP_gsmSSF_scfAssistHandoffAC: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], id_acE);

/* eslint-enable */
