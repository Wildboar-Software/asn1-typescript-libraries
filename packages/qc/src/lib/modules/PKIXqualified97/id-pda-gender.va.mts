/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import { id_pda } from "../PKIXqualified97/id-pda.va.mjs";


/**
 * @summary id_pda_gender
 * @description
 *
 * Attribute type OID for `gender`
 * ([RFC 3739 §3.2.2](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.2),
 * Appendix A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda-gender               AttributeType ::= { id-pda 3 }
 * ```
 *
 * @constant
 */
export const id_pda_gender: AttributeType = _OID.fromParts([3], id_pda);

/* eslint-enable */
