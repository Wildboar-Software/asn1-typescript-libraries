/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_initiateCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-initiateCall OBJECT IDENTIFIER ::= {id-package initiateCall(76)}
 * ```
 * 
 * @constant
 */
export
const id_package_initiateCall: OBJECT_IDENTIFIER = _OID.fromParts([
    /* initiateCall */ 76,
], id_package);

/* eslint-enable */
