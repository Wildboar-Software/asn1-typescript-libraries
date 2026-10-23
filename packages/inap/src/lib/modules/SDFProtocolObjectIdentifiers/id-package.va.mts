/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { in_ds } from "../SDFProtocolObjectIdentifiers/in-ds.va.mjs";
// export { in_ds } from "../SDFProtocolObjectIdentifiers/in-ds.va.mjs";


/**
 * @summary id_package
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-package OBJECT IDENTIFIER ::= {in-ds 27}
 * ```
 * 
 * @constant
 */
export
const id_package: OBJECT_IDENTIFIER = _OID.fromParts([
    27,
], in_ds);

/* eslint-enable */
