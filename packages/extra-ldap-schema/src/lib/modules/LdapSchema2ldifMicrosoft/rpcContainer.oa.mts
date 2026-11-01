/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { container } from "../LdapSchema2ldifMicrosoft/container.oa.mjs";
// export { container } from "../LdapSchema2ldifMicrosoft/container.oa.mjs";
import { nameServiceFlags } from "../MSUser/nameServiceFlags.oa.mjs";
// export { nameServiceFlags } from "../MSUser/nameServiceFlags.oa.mjs";
import { id_oc_rpcContainer } from "../LdapSchema2ldifMicrosoft/id-oc-rpcContainer.va.mjs";
// export { id_oc_rpcContainer } from "../LdapSchema2ldifMicrosoft/id-oc-rpcContainer.va.mjs";


/**
 * @summary rpcContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rpcContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { container }
 *   MAY CONTAIN               { nameServiceFlags }
 *   LDAP-NAME                 {"rpcContainer"}
 *   ID                        id-oc-rpcContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rpcContainer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ container, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ nameServiceFlags, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "rpcContainer" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_rpcContainer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
