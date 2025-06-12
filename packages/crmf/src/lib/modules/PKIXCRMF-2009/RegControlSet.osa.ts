/* eslint-disable */
import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import { regCtrl_authenticator } from "../PKIXCRMF-2009/regCtrl-authenticator.oa.js";
import { regCtrl_oldCertID } from "../PKIXCRMF-2009/regCtrl-oldCertID.oa.js";
import { regCtrl_pkiArchiveOptions } from "../PKIXCRMF-2009/regCtrl-pkiArchiveOptions.oa.js";
import { regCtrl_pkiPublicationInfo } from "../PKIXCRMF-2009/regCtrl-pkiPublicationInfo.oa.js";
import { regCtrl_protocolEncrKey } from "../PKIXCRMF-2009/regCtrl-protocolEncrKey.oa.js";
import { regCtrl_regToken } from "../PKIXCRMF-2009/regCtrl-regToken.oa.js";

/* START_OF_SYMBOL_DEFINITION RegControlSet */
/**
 * @summary RegControlSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegControlSet ATTRIBUTE ::= {
 *     regCtrl-regToken | regCtrl-authenticator |
 *
 *     regCtrl-pkiPublicationInfo | regCtrl-pkiArchiveOptions |
 *     regCtrl-oldCertID | regCtrl-protocolEncrKey, ... }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const RegControlSet: ATTRIBUTE[] = [
    regCtrl_regToken,
    regCtrl_authenticator,
    regCtrl_pkiPublicationInfo,
    regCtrl_pkiArchiveOptions,
    regCtrl_oldCertID,
    regCtrl_protocolEncrKey,
];
/* END_OF_SYMBOL_DEFINITION RegControlSet */

/* eslint-enable */
