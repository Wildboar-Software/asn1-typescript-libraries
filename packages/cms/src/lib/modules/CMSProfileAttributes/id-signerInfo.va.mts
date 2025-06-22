/* eslint-disable */
import { itu_t, ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_signerInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signerInfo OBJECT IDENTIFIER ::= {itu-t recommendation(0) x(24)
 * cms-profile(894) attribute(2) signerInfo(0)}
 * ```
 *
 * @constant
 */
export const id_signerInfo: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* signerInfo */ 0,
    ],
    itu_t
);

/* eslint-enable */
