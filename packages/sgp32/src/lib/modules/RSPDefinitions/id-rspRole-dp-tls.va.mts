/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";
// export { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_dp_tls
 * @description
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
