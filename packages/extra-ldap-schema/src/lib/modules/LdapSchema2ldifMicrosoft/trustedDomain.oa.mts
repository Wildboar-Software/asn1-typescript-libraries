/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
// export { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_trustedDomain } from "../LdapSchema2ldifMicrosoft/id-oc-trustedDomain.va.mjs";
import { securityIdentifier } from "../MSUser/securityIdentifier.oa.mjs";
import { trustAuthIncoming } from "../MSUser/trustAuthIncoming.oa.mjs";
import { trustDirection } from "../MSUser/trustDirection.oa.mjs";
import { trustPartner } from "../MSUser/trustPartner.oa.mjs";
import { trustPosixOffset } from "../MSUser/trustPosixOffset.oa.mjs";
import { trustAuthOutgoing } from "../MSUser/trustAuthOutgoing.oa.mjs";
import { trustType } from "../MSUser/trustType.oa.mjs";
import { trustAttributes } from "../MSUser/trustAttributes.oa.mjs";
import { domainCrossRef } from "../MSUser/domainCrossRef.oa.mjs";
import { flatName } from "../MSUser/flatName.oa.mjs";
import { initialAuthIncoming } from "../MSUser/initialAuthIncoming.oa.mjs";
import { initialAuthOutgoing } from "../MSUser/initialAuthOutgoing.oa.mjs";
import { domainIdentifier } from "../MSUser/domainIdentifier.oa.mjs";
import { additionalTrustedServiceNames } from "../MSUser/additionalTrustedServiceNames.oa.mjs";
// export { id_oc_trustedDomain } from "../LdapSchema2ldifMicrosoft/id-oc-trustedDomain.va.mjs";


/**
 * @summary trustedDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * trustedDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { securityIdentifier
 *                               | trustAuthIncoming
 *                               | trustDirection
 *                               | trustPartner
 *                               | trustPosixOffset
 *                               | trustAuthOutgoing
 *                               | trustType
 *                               | trustAttributes
 *                               | domainCrossRef
 *                               | flatName
 *                               | initialAuthIncoming
 *                               | initialAuthOutgoing
 *                               | domainIdentifier
 *                               | additionalTrustedServiceNames }
 *   LDAP-NAME                 {"trustedDomain"}
 *   ID                        id-oc-trustedDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const trustedDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ leaf, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ securityIdentifier, trustAuthIncoming, trustDirection, trustPartner, trustPosixOffset, trustAuthOutgoing, trustType, trustAttributes, domainCrossRef, flatName, initialAuthIncoming, initialAuthOutgoing, domainIdentifier, additionalTrustedServiceNames, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "trustedDomain" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_trustedDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
