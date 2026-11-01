/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { nsContainer } from "../LdapCore389/nsContainer.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { id_oc_ipaIDView } from "../LdapIdviews/id-oc-ipaIDView.va.mjs";

/**
 * @summary ipaIDView
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaIDView OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nsContainer }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"ipaIDView"}
 *   ID                        id-oc-ipaIDView }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaIDView: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ nsContainer, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaIDView" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaIDView /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
