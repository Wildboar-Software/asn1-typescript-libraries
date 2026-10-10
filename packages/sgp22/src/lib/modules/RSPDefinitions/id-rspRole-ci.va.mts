/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_ci
 * @description
 * 
 * Certificate Policies value of CERT.CI.SIG, the self-signed eSIM CA Root CA
 * certificate (keyCertSign and cRLSign). Same arc in SGP.22 v3.1 Annex H.
 * §4.5.2.1.0.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspRole-ci OBJECT IDENTIFIER ::= {id-rspRole 0}
 * ```
 * 
 * @constant
 */
export
const id_rspRole_ci: OBJECT_IDENTIFIER = _OID.fromParts([
    0,
], id_rspRole);

/* eslint-enable */
