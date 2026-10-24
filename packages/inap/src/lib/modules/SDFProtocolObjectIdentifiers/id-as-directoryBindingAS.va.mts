/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_as } from "../SDFProtocolObjectIdentifiers/id-as.va.mjs";
// export { id_as } from "../SDFProtocolObjectIdentifiers/id-as.va.mjs";


/**
 * @summary id_as_directoryBindingAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-directoryBindingAS OBJECT IDENTIFIER ::= {id-as 2}
 * ```
 * 
 * @constant
 */
export
const id_as_directoryBindingAS: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], id_as);

/* eslint-enable */
