/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxEntry } from "../LdapOx/id-oc-oxEntry.va.mjs";
import { iname } from "./iname.oa.mjs";
import { inum } from "./inum.oa.mjs";

/**
 * @summary oxEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { displayName
 *                               | iname
 *                               | inum }
 *   LDAP-NAME                 {"oxEntry"}
 *   ID                        id-oc-oxEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [displayName, iname, inum] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxEntry"],
    "&id": id_oc_oxEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
