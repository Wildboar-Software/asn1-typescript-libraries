/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_asx_targetingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-targetingInformation                OBJECT IDENTIFIER ::= {id-ce 55 2}
 * ```
 *
 * @constant
 */
export const id_asx_targetingInformation: OBJECT_IDENTIFIER = _OID.fromParts(
    [55, 2],
    id_ce
);

/* eslint-enable */
