/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_cusfTDPSpecificInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cusfTDPSpecificInvocation OBJECT IDENTIFIER ::= {id-package cusfTDPSpecificInvocation(61)}
 * ```
 * 
 * @constant
 */
export
const id_package_cusfTDPSpecificInvocation: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusfTDPSpecificInvocation */ 61,
], id_package);

/* eslint-enable */
