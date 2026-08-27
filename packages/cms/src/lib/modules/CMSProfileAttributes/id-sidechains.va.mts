/* eslint-disable */
import { itu_t, ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_sidechains
 * @description
 *
 * OID for the sidechains profile attribute. (ITU-T X.894 | ISO/IEC 24824-4 Annex A.17).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sidechains OBJECT IDENTIFIER ::= {itu-t recommendation(0) x(24)
 * cms-profile(894) attribute(2) sidechains(6)}
 * ```
 *
 * @constant
 */
export const id_sidechains: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* sidechains */ 6,
    ],
    itu_t
);

/* eslint-enable */
