/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_qcs } from "../PKIXqualified97/id-qcs.va.mjs";

/**
 * @summary id_qcs_pkixQCSyntax_v2
 * @description
 *
 * Statement OID for `qcStatement-2`: conformance with this Qualified
 * Certificate profile (version 2 / RFC 3739)
 * ([RFC 3739 §3.2.6.1](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.6.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-qcs-pkixQCSyntax-v2      OBJECT IDENTIFIER ::= { id-qcs 2 }
 * ```
 *
 * @constant
 */
export const id_qcs_pkixQCSyntax_v2: OBJECT_IDENTIFIER = _OID.fromParts([2], id_qcs);

/* eslint-enable */
