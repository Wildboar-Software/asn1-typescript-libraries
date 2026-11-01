/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_remoteMailRecipient } from "../LdapSchema2ldifMicrosoft/id-oc-remoteMailRecipient.va.mjs";
import { remoteSource } from "../MSUser/remoteSource.oa.mjs";
import { remoteSourceType } from "../MSUser/remoteSourceType.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
// export { id_oc_remoteMailRecipient } from "../LdapSchema2ldifMicrosoft/id-oc-remoteMailRecipient.va.mjs";


/**
 * @summary remoteMailRecipient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * remoteMailRecipient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { remoteSource
 *                               | remoteSourceType
 *                               | managedBy }
 *   LDAP-NAME                 {"remoteMailRecipient"}
 *   ID                        id-oc-remoteMailRecipient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const remoteMailRecipient: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ remoteSource, remoteSourceType, managedBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "remoteMailRecipient" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_remoteMailRecipient /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
