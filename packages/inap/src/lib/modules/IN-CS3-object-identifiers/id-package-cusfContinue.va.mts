/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";
// export { id_package } from "../IN-CS3-object-identifiers/id-package.va.mjs";


/**
 * @summary id_package_cusfContinue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package-cusfContinue OBJECT IDENTIFIER ::= {id-package cusfContinue(71)}
 * ```
 * 
 * @constant
 */
export
const id_package_cusfContinue: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusfContinue */ 71,
], id_package);

/* eslint-enable */
