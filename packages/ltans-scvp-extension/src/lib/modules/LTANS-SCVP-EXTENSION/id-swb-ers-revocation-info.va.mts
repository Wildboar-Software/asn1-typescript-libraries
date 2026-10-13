/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";
// export { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";


/**
 * @summary id_swb_ers_revocation_info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb-ers-revocation-info      OBJECT IDENTIFIER ::= {id-swb 19}
 * ```
 * 
 * @constant
 */
export
const id_swb_ers_revocation_info: OBJECT_IDENTIFIER = _OID.fromParts([
    19,
], id_swb);

/* eslint-enable */
