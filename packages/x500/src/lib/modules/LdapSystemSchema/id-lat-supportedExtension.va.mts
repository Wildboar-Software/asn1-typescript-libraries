/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_lat } from "../UsefulDefinitions/id-lat.va.mjs";
/**
 * @summary id_lat_supportedExtension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-supportedExtension                 OBJECT IDENTIFIER ::= {id-lat 7}
 * ```
 *
 * @constant
 */
export const id_lat_supportedExtension: OBJECT_IDENTIFIER = _OID.fromParts(
    [7],
    id_lat
);

/* eslint-enable */
