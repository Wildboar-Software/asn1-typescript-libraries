/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ldap_enterprise as id_pen } from "@wildboar/x500/UsefulDefinitions";
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
    25178,
], id_pen);

/* eslint-enable */

