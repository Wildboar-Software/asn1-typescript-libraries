/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import { friendlyName } from "../PKCS-9/friendlyName.oa.mjs";
import { localKeyId } from "../PKCS-9/localKeyId.oa.mjs";


/**
 * @summary PKCS12AttrSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS12AttrSet ATTRIBUTE ::= {
 *     friendlyName |
 *     localKeyId,
 *     ... -- Other attributes are allowed
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const PKCS12AttrSet: ATTRIBUTE[] = [friendlyName, localKeyId];

/* eslint-enable */
