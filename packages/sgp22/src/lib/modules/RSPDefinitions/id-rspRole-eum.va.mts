/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_eum
 * @description
 * 
 * Variant O Certificate Policies value for CERT.EUM.SIG. The arc `{id-rspRole
 * 2}` is what SGP.22 v3.1 Annex H calls `id-rspRole-eum-v2`. The v3
 * `id-rspRole-eum` arc is `{id-rspRole-ciSubCa 0}`. §4.5.2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspRole-eum OBJECT IDENTIFIER ::= {id-rspRole 2}
 * ```
 * 
 * @constant
 */
export
const id_rspRole_eum: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_rspRole);

/* eslint-enable */
