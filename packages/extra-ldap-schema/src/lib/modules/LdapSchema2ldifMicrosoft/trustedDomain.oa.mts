/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_trustedDomain } from "../LdapSchema2ldifMicrosoft/id-oc-trustedDomain.va.mjs";
import { additionalTrustedServiceNames } from "../MSUser/additionalTrustedServiceNames.oa.mjs";
import { domainCrossRef } from "../MSUser/domainCrossRef.oa.mjs";
import { domainIdentifier } from "../MSUser/domainIdentifier.oa.mjs";
import { flatName } from "../MSUser/flatName.oa.mjs";
import { initialAuthIncoming } from "../MSUser/initialAuthIncoming.oa.mjs";
import { initialAuthOutgoing } from "../MSUser/initialAuthOutgoing.oa.mjs";
import { securityIdentifier } from "../MSUser/securityIdentifier.oa.mjs";
import { trustAttributes } from "../MSUser/trustAttributes.oa.mjs";
import { trustAuthIncoming } from "../MSUser/trustAuthIncoming.oa.mjs";
import { trustAuthOutgoing } from "../MSUser/trustAuthOutgoing.oa.mjs";
import { trustDirection } from "../MSUser/trustDirection.oa.mjs";
import { trustPartner } from "../MSUser/trustPartner.oa.mjs";
import { trustPosixOffset } from "../MSUser/trustPosixOffset.oa.mjs";
import { trustType } from "../MSUser/trustType.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [leaf] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [securityIdentifier, trustAuthIncoming, trustDirection, trustPartner, trustPosixOffset, trustAuthOutgoing, trustType, trustAttributes, domainCrossRef, flatName, initialAuthIncoming, initialAuthOutgoing, domainIdentifier, additionalTrustedServiceNames] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["trustedDomain"],
    "&id": id_oc_trustedDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
