/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_asx_authorizationValidation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-authorizationValidation             OBJECT IDENTIFIER ::= {id-ce 70 2}
 * ```
 *
 * @constant
 */
export const id_asx_authorizationValidation: OBJECT_IDENTIFIER = new _OID(
    [70, 2],
    id_ce
);

/* eslint-enable */
