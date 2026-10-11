/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_dp_tls
 * @description
 * 
 * Variant O Certificate Policies value for CERT.DP.TLS, the SM-DP+ certificate
 * used to establish TLS. The arc `{id-rspRole 3}` is what SGP.22 v3.1 Annex H
 * calls `id-rspRole-dp-tls-v2`. TLS certificates may chain to a public CA
 * rather than an eSIM CA Root CA. §4.5.2 and §4.5.2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspRole-dp-tls OBJECT IDENTIFIER ::= {id-rspRole 3}
 * ```
 * 
 * @constant
 */
export
const id_rspRole_dp_tls: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_rspRole);

/* eslint-enable */
