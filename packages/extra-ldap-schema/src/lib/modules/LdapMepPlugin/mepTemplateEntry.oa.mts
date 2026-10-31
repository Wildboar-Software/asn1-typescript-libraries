/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mepTemplateEntry } from "../LdapMepPlugin/id-oc-mepTemplateEntry.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mepMappedAttr } from "./mepMappedAttr.oa.mjs";
import { mepRDNAttr } from "./mepRDNAttr.oa.mjs";
import { mepStaticAttr } from "./mepStaticAttr.oa.mjs";

/**
 * @summary mepTemplateEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mepTemplateEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { commonName
 *                               | mepStaticAttr
 *                               | mepMappedAttr
 *                               | mepRDNAttr }
 *   LDAP-NAME                 {"mepTemplateEntry"}
 *   LDAP-DESC                 "Managed Entries Template Entry"
 *   ID                        id-oc-mepTemplateEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mepTemplateEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, mepStaticAttr, mepMappedAttr, mepRDNAttr] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mepTemplateEntry"],
    "&ldapDesc": "Managed Entries Template Entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mepTemplateEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
