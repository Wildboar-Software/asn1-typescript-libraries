/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";
// export { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_ci
 * @description
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
