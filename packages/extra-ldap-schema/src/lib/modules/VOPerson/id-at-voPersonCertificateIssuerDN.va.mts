/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../VOPerson/ID.ta.mjs";
import { id_voPersonObjectClass } from "../VOPerson/id-voPersonObjectClass.va.mjs";


/**
 * @summary id_at_voPersonCertificateIssuerDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-voPersonCertificateIssuerDN   ID ::= { id-voPersonObjectClass 4 }
 * ```
 * 
 * @constant
 */
export
const id_at_voPersonCertificateIssuerDN: ID = _OID.fromParts([
    4,
], id_voPersonObjectClass);

/* eslint-enable */

