/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pe } from "../PKIX1Explicit88/id-pe.va.mjs";


/**
 * @summary id_pe_qcStatements
 * @description
 *
 * Extension OID for `qcStatements`
 * ([RFC 3739 §3.2.6](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.6)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pe-qcStatements          OBJECT IDENTIFIER ::= { id-pe 3 }
 * ```
 *
 * @constant
 */
export const id_pe_qcStatements: OBJECT_IDENTIFIER = _OID.fromParts([3], id_pe);

/* eslint-enable */
