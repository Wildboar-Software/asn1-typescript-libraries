/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_amdmapTimestamp_2 } from "../LdapAmd/id-oc-amdmapTimestamp-2.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { amdmapName } from "../LdapAmd/amdmapName.oa.mjs";
import { amdmapTimestamp } from "../LdapAmd/amdmapTimestamp.oa.mjs";
// export { id_oc_amdmapTimestamp_2 } from "../LdapAmd/id-oc-amdmapTimestamp-2.va.mjs";


/**
 * @summary amdmapTimestamp_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * amdmapTimestamp-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | amdmapName
 *                               | amdmapTimestamp }
 *   LDAP-NAME                 {"amdmapTimestamp"}
 *   LDAP-DESC                 "Timestamp for an AMD map"
 *   ID                        id-oc-amdmapTimestamp-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const amdmapTimestamp_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, amdmapName, amdmapTimestamp, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "amdmapTimestamp" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Timestamp for an AMD map" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_amdmapTimestamp_2 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
