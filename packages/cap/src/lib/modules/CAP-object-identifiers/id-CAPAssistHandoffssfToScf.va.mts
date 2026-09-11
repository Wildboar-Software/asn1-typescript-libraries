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
import { id_contractE } from "../CAP-object-identifiers/id-contractE.va.mjs";
// export { id_contractE } from "../CAP-object-identifiers/id-contractE.va.mjs";


/**
 * @summary id_CAPAssistHandoffssfToScf
 * @description
 *
 * OID of the gsmSSF/gsmSCF assist-handoff contract `CAPAssistHandoffssfToScf`
 * (`{id-contractE 5}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CAPAssistHandoffssfToScf            OBJECT IDENTIFIER ::= {id-contractE 5}
 * ```
 * 
 * @constant
 */
export
const id_CAPAssistHandoffssfToScf: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_contractE);

/* eslint-enable */
