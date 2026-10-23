/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { in_ds } from "../SDFProtocolObjectIdentifiers/in-ds.va.mjs";
// export { in_ds } from "../SDFProtocolObjectIdentifiers/in-ds.va.mjs";


/**
 * @summary id_as
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as OBJECT IDENTIFIER ::= {in-ds 5}
 * ```
 * 
 * @constant
 */
export
const id_as: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], in_ds);

/* eslint-enable */
