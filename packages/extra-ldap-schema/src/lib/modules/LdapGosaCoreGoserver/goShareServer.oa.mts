/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_goShareServer } from "../LdapGosaCoreGoserver/id-oc-goShareServer.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goExportEntry } from "../LdapGosaCoreGoserver/goExportEntry.oa.mjs";
import { goShareServerStatus } from "../LdapGosaCoreGoserver/goShareServerStatus.oa.mjs";
// export { id_oc_goShareServer } from "../LdapGosaCoreGoserver/id-oc-goShareServer.va.mjs";


/**
 * @summary goShareServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goShareServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | goExportEntry
 *                               | goShareServerStatus }
 *   LDAP-NAME                 {"goShareServer"}
 *   LDAP-DESC                 "Share server description (v2.7)"
 *   ID                        id-oc-goShareServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goShareServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, goExportEntry, goShareServerStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "goShareServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Share server description (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goShareServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
