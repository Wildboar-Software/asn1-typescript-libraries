/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxAuthCustomScope } from "../LdapOx/id-oc-oxAuthCustomScope.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { defaultScope } from "./defaultScope.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { oxAttributes } from "./oxAttributes.oa.mjs";
import { oxAuthClaim } from "./oxAuthClaim.oa.mjs";
import { oxAuthGroupClaims } from "./oxAuthGroupClaims.oa.mjs";
import { oxIconUrl } from "./oxIconUrl.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxScopeType } from "./oxScopeType.oa.mjs";
import { oxScriptDn } from "./oxScriptDn.oa.mjs";
import { oxUmaPolicyScriptDn } from "./oxUmaPolicyScriptDn.oa.mjs";

/**
 * @summary oxAuthCustomScope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthCustomScope OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { defaultScope
 *                               | description
 *                               | displayName
 *                               | inum
 *                               | oxScopeType
 *                               | oxAuthClaim
 *                               | oxScriptDn
 *                               | oxAuthGroupClaims
 *                               | oxId
 *                               | oxIconUrl
 *                               | oxUmaPolicyScriptDn
 *                               | oxAttributes
 *                               | exp
 *                               | del }
 *   LDAP-NAME                 {"oxAuthCustomScope"}
 *   ID                        id-oc-oxAuthCustomScope }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthCustomScope: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [defaultScope, description, displayName, inum, oxScopeType, oxAuthClaim, oxScriptDn, oxAuthGroupClaims, oxId, oxIconUrl, oxUmaPolicyScriptDn, oxAttributes, exp, del] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxAuthCustomScope"],
    "&id": id_oc_oxAuthCustomScope /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
