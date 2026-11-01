/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { rpcEntry } from "../LdapSchema2ldifMicrosoft/rpcEntry.oa.mjs";
// export { rpcEntry } from "../LdapSchema2ldifMicrosoft/rpcEntry.oa.mjs";
import { id_oc_rpcServer } from "../LdapSchema2ldifMicrosoft/id-oc-rpcServer.va.mjs";
import { rpcNsObjectID } from "../MSUser/rpcNsObjectID.oa.mjs";
import { rpcNsCodeset } from "../MSUser/rpcNsCodeset.oa.mjs";
import { rpcNsEntryFlags } from "../MSUser/rpcNsEntryFlags.oa.mjs";
// export { id_oc_rpcServer } from "../LdapSchema2ldifMicrosoft/id-oc-rpcServer.va.mjs";


/**
 * @summary rpcServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { rpcEntry }
 *   MAY CONTAIN               { rpcNsObjectID
 *                               | rpcNsCodeset
 *                               | rpcNsEntryFlags }
 *   LDAP-NAME                 {"rpcServer"}
 *   ID                        id-oc-rpcServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ rpcEntry, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ rpcNsObjectID, rpcNsCodeset, rpcNsEntryFlags, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rpcServer" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rpcServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
