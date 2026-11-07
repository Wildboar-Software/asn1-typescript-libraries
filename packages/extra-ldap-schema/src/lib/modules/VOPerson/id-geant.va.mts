/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../VOPerson/ID.ta.mjs";


/**
 * @summary id_geant
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-geant                            ID ::= {id-pen 25178}
 * ```
 * 
 * @constant
 */
export
const id_geant: ID = _OID.fromParts([
    1,
    3,
    6,
    1,
    4,
    1,
    25178,
]);

/* eslint-enable */
