/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../SDFProtocolObjectIdentifiers/id-as.va.mjs";
// export { id_as } from "../SDFProtocolObjectIdentifiers/id-as.va.mjs";


/**
 * @summary id_as_directoryOperationsAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-directoryOperationsAS OBJECT IDENTIFIER ::= {id-as 1}
 * ```
 * 
 * @constant
 */
export
const id_as_directoryOperationsAS: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_as);

/* eslint-enable */
