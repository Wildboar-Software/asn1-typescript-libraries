/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_dp_pb
 * @description
 * 
 * Variant O Certificate Policies value for CERT.DPpb.SIG, the SM-DP+ Profile
 * Package Binding certificate. ES8+.InitialiseSecureChannel is signed with
 * SK.DPpb.SIG, and ES10b.PrepareDownload carries this certificate. The arc
 * `{id-rspRole 5}` is what SGP.22 v3.1 Annex H calls `id-rspRole-dp-pb-v2`.
 * §5.5.1 and §4.5.2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspRole-dp-pb OBJECT IDENTIFIER ::= {id-rspRole 5}
 * ```
 * 
 * @constant
 */
export
const id_rspRole_dp_pb: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_rspRole);

/* eslint-enable */
