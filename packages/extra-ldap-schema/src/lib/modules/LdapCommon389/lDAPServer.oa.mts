/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_lDAPServer } from "../LdapCommon389/id-oc-lDAPServer.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { generation } from "../LdapCommon389/generation.oa.mjs";
import { changeLogMaximumAge } from "../LdapCommon389/changeLogMaximumAge.oa.mjs";
import { changeLogMaximumSize } from "../LdapCommon389/changeLogMaximumSize.oa.mjs";
// export { id_oc_lDAPServer } from "../LdapCommon389/id-oc-lDAPServer.va.mjs";


/**
 * @summary lDAPServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lDAPServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | localityName
 *                               | organizationalUnitName
 *                               | seeAlso
 *                               | generation
 *                               | changeLogMaximumAge
 *                               | changeLogMaximumSize }
 *   LDAP-NAME                 {"LDAPServer"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-lDAPServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const lDAPServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, localityName, organizationalUnitName, seeAlso, generation, changeLogMaximumAge, changeLogMaximumSize, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "LDAPServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_lDAPServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
