/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";
// export { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_dp_auth
 * @description
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
