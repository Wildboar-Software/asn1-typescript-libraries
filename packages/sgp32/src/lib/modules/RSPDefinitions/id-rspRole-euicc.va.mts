/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";
// export { id_rspRole } from "../RSPDefinitions/id-rspRole.va.mjs";


/**
 * @summary id_rspRole_euicc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rspRole-euicc OBJECT IDENTIFIER ::= {id-rspRole 1}
 * ```
 * 
 * @constant
 */
export
const id_rspRole_euicc: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_rspRole);

/* eslint-enable */
