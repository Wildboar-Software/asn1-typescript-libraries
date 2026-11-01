/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nextcloudEnabled } from "../LdapNextcloud/nextcloudEnabled.oa.mjs";
// export { nextcloudEnabled } from "../LdapNextcloud/nextcloudEnabled.oa.mjs";
import { id_oc_nextcloudGroup } from "../LdapNextcloud/id-oc-nextcloudGroup.va.mjs";
// export { id_oc_nextcloudGroup } from "../LdapNextcloud/id-oc-nextcloudGroup.va.mjs";


/**
 * @summary nextcloudGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nextcloudGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { nextcloudEnabled }
 *   LDAP-NAME                 {"nextcloudGroup"}
 *   LDAP-DESC                 "A Nextcloud group"
 *   ID                        id-oc-nextcloudGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nextcloudGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nextcloudEnabled, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nextcloudGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A Nextcloud group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nextcloudGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
