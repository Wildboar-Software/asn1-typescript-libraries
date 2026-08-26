/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import { id_pda } from "../PKIXqualified97/id-pda.va.mjs";


/**
 * @summary id_pda_dateOfBirth
 * @description
 *
 * Attribute type OID for `dateOfBirth`
 * ([RFC 3739 §3.2.2](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.2),
 * Appendix A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda-dateOfBirth          AttributeType ::= { id-pda 1 }
 * ```
 *
 * @constant
 */
export const id_pda_dateOfBirth: AttributeType = _OID.fromParts([1], id_pda);

/* eslint-enable */
