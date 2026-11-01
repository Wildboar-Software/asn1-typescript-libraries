/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { idnsName } from "../LdapIpadns/idnsName.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { id_oc_ipaDNSZone } from "../LdapIpadns/id-oc-ipaDNSZone.va.mjs";


/**
 * @summary ipaDNSZone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaDNSZone OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { idnsName }
 *   MAY CONTAIN               { managedBy }
 *   LDAP-NAME                 {"ipaDNSZone"}
 *   ID                        id-oc-ipaDNSZone }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaDNSZone: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ idnsName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ managedBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaDNSZone" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaDNSZone /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

