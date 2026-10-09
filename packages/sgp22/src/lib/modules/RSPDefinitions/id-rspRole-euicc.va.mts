/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_euicc
 * @description
 * 
 * Variant O Certificate Policies value for CERT.EUICC.SIG. The arc `{id-rspRole
 * 1}` is what SGP.22 v3.1 Annex H calls `id-rspRole-euicc-v2`. v3.1 uses that
 * OID for a certificate in a Variant O chain, and a different arc
 * (`{id-rspRole-eumSubCa 0}`) for `id-rspRole-euicc` in Variants Ov3, A, B, and
 * C. §4.5.2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspRole-euicc OBJECT IDENTIFIER ::= {id-rspRole 1}
 * ```
 * 
 * @constant
 */
export
const id_rspRole_euicc: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_rspRole);

/* eslint-enable */
