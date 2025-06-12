/* eslint-disable */
import { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
import { mda_md2 } from "../PKIXAlgs-2009/mda-md2.oa.mjs";
import { mda_md5 } from "../PKIXAlgs-2009/mda-md5.oa.mjs";
import { mda_sha1 } from "../PKIXAlgs-2009/mda-sha1.oa.mjs";
export { DIGEST_ALGORITHM } from "../AlgorithmInformation-2009/DIGEST-ALGORITHM.oca.mjs";
export { mda_md2 } from "../PKIXAlgs-2009/mda-md2.oa.mjs";
export { mda_md5 } from "../PKIXAlgs-2009/mda-md5.oa.mjs";
export { mda_sha1 } from "../PKIXAlgs-2009/mda-sha1.oa.mjs";

/* START_OF_SYMBOL_DEFINITION HashAlgs */
/**
 * @summary HashAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashAlgs DIGEST-ALGORITHM ::= {
 * mda-md2    |
 * mda-md5    |
 * mda-sha1,
 * ... -- Extensible
 * }
 * ```
 *
 * @constant
 * @type {DIGEST_ALGORITHM[]}
 *
 */
export const HashAlgs: DIGEST_ALGORITHM[] = [mda_md2, mda_md5, mda_sha1];
/* END_OF_SYMBOL_DEFINITION HashAlgs */

/* eslint-enable */
