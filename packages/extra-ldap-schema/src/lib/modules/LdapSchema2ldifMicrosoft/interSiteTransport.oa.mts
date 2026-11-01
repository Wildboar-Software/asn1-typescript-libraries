/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_interSiteTransport } from "../LdapSchema2ldifMicrosoft/id-oc-interSiteTransport.va.mjs";
import { transportDLLName } from "../MSUser/transportDLLName.oa.mjs";
import { transportAddressAttribute } from "../MSUser/transportAddressAttribute.oa.mjs";
import { options } from "../MSUser/options.oa.mjs";
import { replInterval } from "../MSUser/replInterval.oa.mjs";
// export { id_oc_interSiteTransport } from "../LdapSchema2ldifMicrosoft/id-oc-interSiteTransport.va.mjs";


/**
 * @summary interSiteTransport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * interSiteTransport OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { transportDLLName
 *                               | transportAddressAttribute }
 *   MAY CONTAIN               { options
 *                               | replInterval }
 *   LDAP-NAME                 {"interSiteTransport"}
 *   ID                        id-oc-interSiteTransport }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const interSiteTransport: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ transportDLLName, transportAddressAttribute, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ options, replInterval, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "interSiteTransport" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_interSiteTransport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
