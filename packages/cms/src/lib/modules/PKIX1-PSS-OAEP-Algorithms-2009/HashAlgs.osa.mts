/* eslint-disable */
import { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
import { mda_sha224 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha224.oa.mjs";
import { mda_sha256 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha256.oa.mjs";
import { mda_sha384 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha384.oa.mjs";
import { mda_sha512 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mda-sha512.oa.mjs";
/* START_OF_SYMBOL_DEFINITION HashAlgs */
/**
 * @summary HashAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgs DIGEST-ALGORITHM ::= { mda-sha224 | mda-sha256 | mda-sha384 | mda-sha512,
 * ...
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM[]}
 *
 */
export const HashAlgs: DIGEST_ALGORITHM[] = [
    mda_sha224,
    mda_sha256,
    mda_sha384,
    mda_sha512,
];
/* END_OF_SYMBOL_DEFINITION HashAlgs */

/* eslint-enable */
