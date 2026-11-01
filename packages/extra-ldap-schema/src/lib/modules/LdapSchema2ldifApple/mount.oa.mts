/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_mount } from "../LdapSchema2ldifApple/id-oc-mount.va.mjs";
import { mountDirectory } from "../LdapSchema2ldifApple/mountDirectory.oa.mjs";
import { mountType } from "../LdapSchema2ldifApple/mountType.oa.mjs";
import { mountOption } from "../LdapSchema2ldifApple/mountOption.oa.mjs";
import { mountDumpFrequency } from "../LdapSchema2ldifApple/mountDumpFrequency.oa.mjs";
import { mountPassNo } from "../LdapSchema2ldifApple/mountPassNo.oa.mjs";


/**
 * @summary mount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { mountDirectory
 *                               | mountType
 *                               | mountOption
 *                               | mountDumpFrequency
 *                               | mountPassNo }
 *   LDAP-NAME                 {"mount"}
 *   ID                        id-oc-mount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mountDirectory, mountType, mountOption, mountDumpFrequency, mountPassNo, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mount" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

