/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_dp_auth
 * @description
 * 
 * Variant O Certificate Policies value for CERT.DPauth.SIG, the SM-DP+
 * authentication certificate. The eUICC verifies `serverSignature1` with this
 * key during ES10b.AuthenticateServer, and accepts the certificate only when
 * the policy OID identifies DPauth or DSauth. The arc `{id-rspRole 4}` is what
 * SGP.22 v3.1 Annex H calls `id-rspRole-dp-auth-v2`. §5.7.13 and §4.5.2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspRole-dp-auth OBJECT IDENTIFIER ::= {id-rspRole 4}
 * ```
 * 
 * @constant
 */
export
const id_rspRole_dp_auth: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], id_rspRole);

/* eslint-enable */
