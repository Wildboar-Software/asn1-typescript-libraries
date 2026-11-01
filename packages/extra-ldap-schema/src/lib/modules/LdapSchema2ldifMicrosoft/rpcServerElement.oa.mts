/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { rpcEntry } from "../LdapSchema2ldifMicrosoft/rpcEntry.oa.mjs";
// export { rpcEntry } from "../LdapSchema2ldifMicrosoft/rpcEntry.oa.mjs";
import { id_oc_rpcServerElement } from "../LdapSchema2ldifMicrosoft/id-oc-rpcServerElement.va.mjs";
import { rpcNsBindings } from "../MSUser/rpcNsBindings.oa.mjs";
import { rpcNsInterfaceID } from "../MSUser/rpcNsInterfaceID.oa.mjs";
import { rpcNsTransferSyntax } from "../MSUser/rpcNsTransferSyntax.oa.mjs";
// export { id_oc_rpcServerElement } from "../LdapSchema2ldifMicrosoft/id-oc-rpcServerElement.va.mjs";


/**
 * @summary rpcServerElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcServerElement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { rpcEntry }
 *   MUST CONTAIN              { rpcNsBindings
 *                               | rpcNsInterfaceID
 *                               | rpcNsTransferSyntax }
 *   LDAP-NAME                 {"rpcServerElement"}
 *   ID                        id-oc-rpcServerElement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcServerElement: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ rpcEntry, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ rpcNsBindings, rpcNsInterfaceID, rpcNsTransferSyntax, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rpcServerElement" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rpcServerElement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
