/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";
// export { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_eum
 * @description
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
