/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";


/**
 * @summary id_swb_ers_best_cert_path
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb-ers-best-cert-path       OBJECT IDENTIFIER ::= {id-swb 17}
 * ```
 * 
 * @constant
 */
export
const id_swb_ers_best_cert_path: OBJECT_IDENTIFIER = _OID.fromParts([
    17,
], id_swb);

/* eslint-enable */
