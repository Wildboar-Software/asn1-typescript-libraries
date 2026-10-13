/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";
// export { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";


/**
 * @summary id_swb_ers_pkc_cert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb-ers-pkc-cert             OBJECT IDENTIFIER ::= {id-swb 16}
 * ```
 * 
 * @constant
 */
export
const id_swb_ers_pkc_cert: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], id_swb);

/* eslint-enable */
