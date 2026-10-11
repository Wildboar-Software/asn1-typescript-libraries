/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_rsp
 * @description
 * 
 * GSMA Remote SIM Provisioning arc `{joint-iso-itu-t(2)
 * international-organizations(23) gsma(146) rsp(1)}`. Parent of the
 * certificate-object and metadata arcs. SGP.22 v3.1 Annex H.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rsp OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) international-organizations(23) gsma(146) rsp(1)}
 * ```
 * 
 * @constant
 */
export
const id_rsp: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* international-organizations */ 23,
    /* gsma */ 146,
    /* rsp */ 1,
]);

/* eslint-enable */
