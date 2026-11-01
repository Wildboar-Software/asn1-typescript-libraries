/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_freenitMailingListIdNext } from "../LdapMailinglist/id-oc-freenitMailingListIdNext.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mlidNumber } from "../LdapMailinglist/mlidNumber.oa.mjs";
// export { id_oc_freenitMailingListIdNext } from "../LdapMailinglist/id-oc-freenitMailingListIdNext.va.mjs";


/**
 * @summary freenitMailingListIdNext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * freenitMailingListIdNext OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | mlidNumber }
 *   LDAP-NAME                 {"freenitMailingListIdNext"}
 *   LDAP-DESC                 "Freenit mailing list ID counter"
 *   ID                        id-oc-freenitMailingListIdNext }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const freenitMailingListIdNext: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, mlidNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "freenitMailingListIdNext" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Freenit mailing list ID counter" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_freenitMailingListIdNext /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
