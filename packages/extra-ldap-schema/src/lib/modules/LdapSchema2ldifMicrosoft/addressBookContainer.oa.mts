/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { displayName } from "../LdapSchema2ldifMicrosoft/displayName.oa.mjs";
import { purportedSearch } from "../MSUser/purportedSearch.oa.mjs";
import { id_oc_addressBookContainer } from "../LdapSchema2ldifMicrosoft/id-oc-addressBookContainer.va.mjs";

/**
 * @summary addressBookContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * addressBookContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { displayName }
 *   MAY CONTAIN               { purportedSearch }
 *   LDAP-NAME                 {"addressBookContainer"}
 *   ID                        id-oc-addressBookContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const addressBookContainer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ displayName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ purportedSearch, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "addressBookContainer" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_addressBookContainer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
