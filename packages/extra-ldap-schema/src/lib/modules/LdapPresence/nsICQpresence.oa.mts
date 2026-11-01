/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsICQpresence } from "../LdapPresence/id-oc-nsICQpresence.va.mjs";
import { nsICQid } from "../LdapPresence/nsICQid.oa.mjs";
import { nsICQStatusGraphic } from "../LdapPresence/nsICQStatusGraphic.oa.mjs";
import { nsICQStatusText } from "../LdapPresence/nsICQStatusText.oa.mjs";
// export { id_oc_nsICQpresence } from "../LdapPresence/id-oc-nsICQpresence.va.mjs";


/**
 * @summary nsICQpresence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsICQpresence OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { nsICQid
 *                               | nsICQStatusGraphic
 *                               | nsICQStatusText }
 *   LDAP-NAME                 {"nsICQpresence"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsICQpresence }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsICQpresence: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nsICQid, nsICQStatusGraphic, nsICQStatusText, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsICQpresence" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsICQpresence /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
