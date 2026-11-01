/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gFarmDirEntry } from "../LdapGfarm/id-oc-gFarmDirEntry.va.mjs";
import { inumber } from "../LdapGfarm/inumber.oa.mjs";
import { entryName } from "../LdapGfarm/entryName.oa.mjs";
import { entryINumber } from "../LdapGfarm/entryINumber.oa.mjs";
// export { id_oc_gFarmDirEntry } from "../LdapGfarm/id-oc-gFarmDirEntry.va.mjs";


/**
 * @summary gFarmDirEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gFarmDirEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { inumber
 *                               | entryName
 *                               | entryINumber }
 *   LDAP-NAME                 {"GFarmDirEntry"}
 *   ID                        id-oc-gFarmDirEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gFarmDirEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ inumber, entryName, entryINumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GFarmDirEntry" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gFarmDirEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
