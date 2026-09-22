/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";
// export { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_dp_pb
 * @description
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
