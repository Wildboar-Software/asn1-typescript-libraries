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
import { id_ac } from "../CAP-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../CAP-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_gsmSRF_gsmSCF
 * @description
 *
 * OID of the gsmSRF/gsmSCF application context `gsmSRF-gsmSCF` (`{id-ac 14}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-gsmSRF-gsmSCF                OBJECT IDENTIFIER ::= {id-ac 14}
 * ```
 * 
 * @constant
 */
export
const id_ac_gsmSRF_gsmSCF: OBJECT_IDENTIFIER = _OID.fromParts([
    14,
], id_ac);

/* eslint-enable */
