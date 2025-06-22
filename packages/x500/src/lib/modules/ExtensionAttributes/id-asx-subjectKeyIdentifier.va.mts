/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_asx_subjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-subjectKeyIdentifier                OBJECT IDENTIFIER ::= {id-ce 14 2}
 * ```
 *
 * @constant
 */
export const id_asx_subjectKeyIdentifier: OBJECT_IDENTIFIER = _OID.fromParts(
    [14, 2],
    id_ce
);

/* eslint-enable */
