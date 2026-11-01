/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gotoKioskProfile } from "../LdapGosaCoreGoto/gotoKioskProfile.oa.mjs";
// export { gotoKioskProfile } from "../LdapGosaCoreGoto/gotoKioskProfile.oa.mjs";
import { id_oc_goEnvironmentServer } from "../LdapGosaCoreGoserver/id-oc-goEnvironmentServer.va.mjs";
// export { id_oc_goEnvironmentServer } from "../LdapGosaCoreGoserver/id-oc-goEnvironmentServer.va.mjs";


/**
 * @summary goEnvironmentServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goEnvironmentServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gotoKioskProfile }
 *   LDAP-NAME                 {"goEnvironmentServer"}
 *   LDAP-DESC                 "Environment server definition (v2.7)"
 *   ID                        id-oc-goEnvironmentServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goEnvironmentServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gotoKioskProfile, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goEnvironmentServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Environment server definition (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goEnvironmentServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
