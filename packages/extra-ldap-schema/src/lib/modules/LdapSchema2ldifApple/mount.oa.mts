/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mount } from "../LdapSchema2ldifApple/id-oc-mount.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mountDirectory } from "./mountDirectory.oa.mjs";
import { mountDumpFrequency } from "./mountDumpFrequency.oa.mjs";
import { mountOption } from "./mountOption.oa.mjs";
import { mountPassNo } from "./mountPassNo.oa.mjs";
import { mountType } from "./mountType.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mountDirectory, mountType, mountOption, mountDumpFrequency, mountPassNo] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mount"],
    "&id": id_oc_mount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
