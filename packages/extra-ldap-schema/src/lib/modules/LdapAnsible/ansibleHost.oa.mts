/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { ansibleVar } from "../LdapAnsible/ansibleVar.oa.mjs";
import { id_oc_ansibleHost } from "../LdapAnsible/id-oc-ansibleHost.va.mjs";


/**
 * @summary ansibleHost
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ansibleHost OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ansibleVar }
 *   LDAP-NAME                 {"ansibleHost"}
 *   LDAP-DESC                 "Ansible host entry"
 *   ID                        id-oc-ansibleHost }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ansibleHost: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ansibleVar, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ansibleHost" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Ansible host entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ansibleHost /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

