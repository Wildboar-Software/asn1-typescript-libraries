/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_qcs } from "../PKIXqualified97/id-qcs.va.mjs";

/**
 * @summary id_qcs_pkixQCSyntax_v1
 * @description
 *
 * Statement OID for `qcStatement-1`: conformance with RFC 3039
 * (Qualified Certificate profile version 1)
 * ([RFC 3739 §3.2.6.1](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.6.1)).
 * MUST NOT appear in certificates issued under RFC 3739.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-qcs-pkixQCSyntax-v1      OBJECT IDENTIFIER ::= { id-qcs 1 }
 * ```
 *
 * @constant
 */
export const id_qcs_pkixQCSyntax_v1: OBJECT_IDENTIFIER = _OID.fromParts([1], id_qcs);

/* eslint-enable */
