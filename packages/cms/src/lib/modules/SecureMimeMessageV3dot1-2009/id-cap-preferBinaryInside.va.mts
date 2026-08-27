/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_cap } from "../SecureMimeMessageV3dot1-2009/id-cap.va.mjs";

/**
 * @summary id_cap_preferBinaryInside
 * @description
 *
 * OID capability indicating ability to receive binary encoding inside the
 * CMS wrapper (`id-cap-preferBinaryInside`)
 * ([RFC 5751 §2.5.2](https://datatracker.ietf.org/doc/html/rfc5751#section-2.5.2),
 * [§3.1.2](https://datatracker.ietf.org/doc/html/rfc5751#section-3.1.2)).
 * Value field is ABSENT.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cap-preferBinaryInside  OBJECT IDENTIFIER ::= { id-cap 1 }
 * ```
 *
 * @constant
 */
export const id_cap_preferBinaryInside: OBJECT_IDENTIFIER = _OID.fromParts(
    [1],
    id_cap
);

/* eslint-enable */
