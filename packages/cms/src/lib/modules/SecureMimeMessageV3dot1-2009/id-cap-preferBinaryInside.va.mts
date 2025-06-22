/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_cap } from "../SecureMimeMessageV3dot1-2009/id-cap.va.mjs";

/**
 * @summary id_cap_preferBinaryInside
 * @description
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
