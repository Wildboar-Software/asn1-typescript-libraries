/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_jansStatEntry } from "../LdapOx/id-oc-jansStatEntry.va.mjs";
import { attr } from "./attr.oa.mjs";
import { dat } from "./dat.oa.mjs";
import { jansId } from "./jansId.oa.mjs";

/**
 * @summary jansStatEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * jansStatEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { jansId
 *                               | dat
 *                               | attr }
 *   LDAP-NAME                 {"jansStatEntry"}
 *   ID                        id-oc-jansStatEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const jansStatEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [jansId, dat, attr] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["jansStatEntry"],
    "&id": id_oc_jansStatEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
