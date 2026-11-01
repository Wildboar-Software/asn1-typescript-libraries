/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_aldHostContext } from "../LdapAldHostMac/id-oc-aldHostContext.va.mjs";
import { x_ald_host_mac } from "../LdapAldHostMac/x-ald-host-mac.oa.mjs";
import { x_ald_host_mic_level } from "../LdapAldHostMac/x-ald-host-mic-level.oa.mjs";
// export { id_oc_aldHostContext } from "../LdapAldHostMac/id-oc-aldHostContext.va.mjs";


/**
 * @summary aldHostContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aldHostContext OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { x-ald-host-mac
 *                               | x-ald-host-mic-level }
 *   LDAP-NAME                 {"aldHostContext"}
 *   LDAP-DESC                 "Auxiliary class for host MAC/MIC context"
 *   ID                        id-oc-aldHostContext }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const aldHostContext: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ x_ald_host_mac, x_ald_host_mic_level, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "aldHostContext" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Auxiliary class for host MAC/MIC context" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_aldHostContext /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
