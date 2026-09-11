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
 * @summary id_ac_CAP_gsmSCF_gprsSSF_AC
 * @description
 *
 * OID of the gsmSCF/gprsSSF application context `CAP-gsmSCF-gprsSSF-AC`
 * (`{id-ac3E 51}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-CAP-gsmSCF-gprsSSF-AC            OBJECT IDENTIFIER ::= {id-ac3E 51}
 * ```
 * 
 * @constant
 */
export
const id_ac_CAP_gsmSCF_gprsSSF_AC: OBJECT_IDENTIFIER = _OID.fromParts([
    51,
], id_ac3E);

/* eslint-enable */
