/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_nonAssistedConnectionEstablishment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-nonAssistedConnectionEstablishment OBJECT IDENTIFIER ::= {id-package nonAssistedConnectionEstablishment(18)}
 * ```
 * 
 * @constant
 */
export
const id_package_nonAssistedConnectionEstablishment: OBJECT_IDENTIFIER = _OID.fromParts([
    /* nonAssistedConnectionEstablishment */ 18,
], id_package);

/* eslint-enable */
