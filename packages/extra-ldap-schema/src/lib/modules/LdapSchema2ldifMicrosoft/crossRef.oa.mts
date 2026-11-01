/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_crossRef } from "../LdapSchema2ldifMicrosoft/id-oc-crossRef.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { nCName } from "../MSUser/nCName.oa.mjs";
import { dnsRoot } from "../MSUser/dnsRoot.oa.mjs";
import { enabled } from "../MSUser/enabled.oa.mjs";
import { nETBIOSName } from "../MSUser/nETBIOSName.oa.mjs";
import { trustParent } from "../MSUser/trustParent.oa.mjs";
import { superiorDNSRoot } from "../MSUser/superiorDNSRoot.oa.mjs";
import { rootTrust } from "../MSUser/rootTrust.oa.mjs";
// export { id_oc_crossRef } from "../LdapSchema2ldifMicrosoft/id-oc-crossRef.va.mjs";


/**
 * @summary crossRef
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * crossRef OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | nCName
 *                               | dnsRoot }
 *   MAY CONTAIN               { enabled
 *                               | nETBIOSName
 *                               | trustParent
 *                               | superiorDNSRoot
 *                               | rootTrust }
 *   LDAP-NAME                 {"crossRef"}
 *   ID                        id-oc-crossRef }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const crossRef: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, nCName, dnsRoot, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ enabled, nETBIOSName, trustParent, superiorDNSRoot, rootTrust, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "crossRef" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_crossRef /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
