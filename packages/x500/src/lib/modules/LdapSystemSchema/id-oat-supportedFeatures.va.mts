/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_oat } from "../UsefulDefinitions/id-oat.va.mjs";
/**
 * @summary id_oat_supportedFeatures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oat-supportedFeatures                  OBJECT IDENTIFIER ::= {id-oat 5}
 * ```
 *
 * @constant
 */
export const id_oat_supportedFeatures: OBJECT_IDENTIFIER = _OID.fromParts(
    [5],
    id_oat
);

/* eslint-enable */
