/* eslint-disable */
import { itu_t, ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";


/**
 * @summary id_signerInfos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signerInfos     OBJECT IDENTIFIER ::= {itu-t recommendation(0) x(24)
 * cms-profile(894) attribute(2) signerInfos(1)}
 * ```
 *
 * @constant
 */
export const id_signerInfos: OBJECT_IDENTIFIER = new _OID(
    [
        /* recommendation */ 0,
        /* x */ 24,
        /* cms-profile */ 894,
        /* attribute */ 2,
        /* signerInfos */ 1,
    ],
    itu_t
);

/* eslint-enable */
