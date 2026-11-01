/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsView } from "../LdapCommon389/id-oc-nsView.va.mjs";
import { nsViewFilter } from "../LdapCommon389/nsViewFilter.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


/**
 * @summary nsView
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsView OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsViewFilter
 *                               | description }
 *   LDAP-NAME                 {"nsView"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsView }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsView: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsViewFilter, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsView" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsView /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

