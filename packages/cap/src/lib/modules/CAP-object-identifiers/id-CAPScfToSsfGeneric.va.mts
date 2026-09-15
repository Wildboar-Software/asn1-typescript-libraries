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
 * @summary id_CAPScfToSsfGeneric
 * @description
 *
 * OID of the gsmSCF/gsmSSF generic contract `CAPScfToSsfGeneric`
 * (`{id-contractE 6}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-CAPScfToSsfGeneric                OBJECT IDENTIFIER ::= {id-contractE 6}
 * ```
 * 
 * @constant
 */
export
const id_CAPScfToSsfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], id_contractE);

/* eslint-enable */
