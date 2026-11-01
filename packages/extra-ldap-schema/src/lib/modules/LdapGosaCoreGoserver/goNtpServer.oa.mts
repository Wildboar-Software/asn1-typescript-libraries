/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_goNtpServer } from "../LdapGosaCoreGoserver/id-oc-goNtpServer.va.mjs";
import { goTimeSource } from "../LdapGosaCoreGoserver/goTimeSource.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goNtpServerStatus } from "../LdapGosaCoreGoserver/goNtpServerStatus.oa.mjs";
// export { id_oc_goNtpServer } from "../LdapGosaCoreGoserver/id-oc-goNtpServer.va.mjs";


/**
 * @summary goNtpServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goNtpServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { goTimeSource
 *                               | description
 *                               | goNtpServerStatus }
 *   LDAP-NAME                 {"goNtpServer"}
 *   LDAP-DESC                 "Time server description (v2.7)"
 *   ID                        id-oc-goNtpServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goNtpServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ goTimeSource, description, goNtpServerStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goNtpServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Time server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goNtpServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
