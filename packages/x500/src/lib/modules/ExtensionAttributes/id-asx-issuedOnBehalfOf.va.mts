/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_asx_issuedOnBehalfOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-issuedOnBehalfOf                    OBJECT IDENTIFIER ::= {id-ce 64 2}
 * ```
 *
 * @constant
 */
export const id_asx_issuedOnBehalfOf: OBJECT_IDENTIFIER = new _OID(
    [64, 2],
    id_ce
);

/* eslint-enable */
