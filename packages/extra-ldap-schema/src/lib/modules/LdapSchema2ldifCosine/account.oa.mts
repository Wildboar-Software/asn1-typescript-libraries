/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
// export { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { id_oc_account } from "../LdapSchema2ldifCosine/id-oc-account.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { host } from "../LdapSchema2ldifCosine/host.oa.mjs";
// export { id_oc_account } from "../LdapSchema2ldifCosine/id-oc-account.va.mjs";


/**
 * @summary account
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * account OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { uid }
 *   MAY CONTAIN               { description
 *                               | seeAlso
 *                               | localityName
 *                               | organizationName
 *                               | organizationalUnitName
 *                               | host }
 *   LDAP-NAME                 {"account"}
 *   ID                        id-oc-account }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const account: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, seeAlso, localityName, organizationName, organizationalUnitName, host, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "account" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_account /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
