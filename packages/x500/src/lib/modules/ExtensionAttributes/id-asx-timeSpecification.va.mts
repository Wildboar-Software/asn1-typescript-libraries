/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_asx_timeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-timeSpecification                   OBJECT IDENTIFIER ::= {id-ce 43 2}
 * ```
 *
 * @constant
 */
export const id_asx_timeSpecification: OBJECT_IDENTIFIER = _OID.fromParts(
    [43, 2],
    id_ce
);

/* eslint-enable */
