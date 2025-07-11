/* eslint-disable */
import { ct_asymmetric_key_package } from "../AsymmetricKeyPackageModuleV1/ct-asymmetric-key-package.oa.mjs";
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";

/**
 * @summary ContentSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentSet CONTENT-TYPE ::= {
 * ct-asymmetric-key-package,
 * ... -- Expect additional content types --
 * }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE[]}
 *
 */
export const ContentSet: CONTENT_TYPE<any>[] = [ct_asymmetric_key_package];

/* eslint-enable */
