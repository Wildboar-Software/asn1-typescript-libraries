/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_cusfTDPGenericInvocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cusfTDPGenericInvocation OBJECT IDENTIFIER ::= {id-package cusfTDPGenericInvocation(62)}
 * ```
 * 
 * @constant
 */
export
const id_package_cusfTDPGenericInvocation: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusfTDPGenericInvocation */ 62,
], id_package);

/* eslint-enable */
