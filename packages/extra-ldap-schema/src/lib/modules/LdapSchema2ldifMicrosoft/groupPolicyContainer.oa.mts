/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { container } from "../LdapSchema2ldifMicrosoft/container.oa.mjs";
import { id_oc_groupPolicyContainer } from "../LdapSchema2ldifMicrosoft/id-oc-groupPolicyContainer.va.mjs";
import { flags } from "../MSUser/flags.oa.mjs";
import { versionNumber } from "../MSUser/versionNumber.oa.mjs";
import { gPCFunctionalityVersion } from "../MSUser/gPCFunctionalityVersion.oa.mjs";
import { gPCFileSysPath } from "../MSUser/gPCFileSysPath.oa.mjs";
import { gPCMachineExtensionNames } from "../MSUser/gPCMachineExtensionNames.oa.mjs";
import { gPCUserExtensionNames } from "../MSUser/gPCUserExtensionNames.oa.mjs";


/**
 * @summary groupPolicyContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupPolicyContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { container }
 *   MAY CONTAIN               { flags
 *                               | versionNumber
 *                               | gPCFunctionalityVersion
 *                               | gPCFileSysPath
 *                               | gPCMachineExtensionNames
 *                               | gPCUserExtensionNames }
 *   LDAP-NAME                 {"groupPolicyContainer"}
 *   ID                        id-oc-groupPolicyContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const groupPolicyContainer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ container, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ flags, versionNumber, gPCFunctionalityVersion, gPCFileSysPath, gPCMachineExtensionNames, gPCUserExtensionNames, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "groupPolicyContainer" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_groupPolicyContainer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

