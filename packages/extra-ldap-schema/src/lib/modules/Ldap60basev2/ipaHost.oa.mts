/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { fqdn } from "../Ldap60basev2/fqdn.oa.mjs";
import { id_oc_ipaHost } from "../Ldap60basev2/id-oc-ipaHost.va.mjs";
import { userClass } from "../LdapSchema2ldifCosine/userClass.oa.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { enrolledBy } from "./enrolledBy.oa.mjs";
import { ipaAssignedIDView } from "./ipaAssignedIDView.oa.mjs";
import { ipaClientVersion } from "./ipaClientVersion.oa.mjs";

/**
 * @summary ipaHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaHost OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { fqdn }
 *   MAY CONTAIN               { userPassword
 *                               | ipaClientVersion
 *                               | enrolledBy
 *                               | memberOf
 *                               | userClass
 *                               | ipaAssignedIDView }
 *   LDAP-NAME                 {"ipaHost"}
 *   ID                        id-oc-ipaHost }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaHost: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [fqdn] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [userPassword, ipaClientVersion, enrolledBy, memberOf, userClass, ipaAssignedIDView] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaHost"],
    "&id": id_oc_ipaHost /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
