/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_logo } from "../LogotypeCertExtn/id-logo.va.mjs";
// export { id_logo } from "../LogotypeCertExtn/id-logo.va.mjs";


/**
 * @summary id_logo_loyalty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-logo-loyalty    OBJECT IDENTIFIER ::= { id-logo 1 }
 * ```
 * 
 * @constant
 */
export
const id_logo_loyalty: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], id_logo);

/* eslint-enable */
