/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_asx_attributeDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-attributeDescriptor                 OBJECT IDENTIFIER ::= {id-ce 48 2}
 * ```
 *
 * @constant
 */
export const id_asx_attributeDescriptor: OBJECT_IDENTIFIER = _OID.fromParts(
    [48, 2],
    id_ce
);

/* eslint-enable */
