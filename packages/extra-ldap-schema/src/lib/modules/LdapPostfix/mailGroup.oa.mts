/* eslint-disable */
import { mailRoutingAddress } from "../InetMailSchema/mailRoutingAddress.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mailGroup } from "../LdapPostfix/id-oc-mailGroup.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";

/**
 * @summary mailGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | mail }
 *   MAY CONTAIN               { mailRoutingAddress
 *                               | member
 *                               | description }
 *   LDAP-NAME                 {"mailGroup"}
 *   LDAP-DESC                 "E-Mail Group"
 *   ID                        id-oc-mailGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mailGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, mail] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mailRoutingAddress, member, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mailGroup"],
    "&ldapDesc": "E-Mail Group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mailGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
