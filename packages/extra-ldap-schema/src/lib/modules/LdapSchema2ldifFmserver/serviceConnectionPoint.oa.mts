/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
import { id_oc_serviceConnectionPoint } from "../LdapSchema2ldifFmserver/id-oc-serviceConnectionPoint.va.mjs";
import { serviceBindingInformation } from "../MSUser/serviceBindingInformation.oa.mjs";
import { serviceClassName } from "../MSUser/serviceClassName.oa.mjs";
import { serviceDNSName } from "../MSUser/serviceDNSName.oa.mjs";
import { serviceDNSNameType } from "../MSUser/serviceDNSNameType.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { name } from "../SelectedAttributeTypes/name.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";

/**
 * @summary serviceConnectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceConnectionPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { connectionPoint }
 *   MUST CONTAIN              { name
 *                               | serviceBindingInformation }
 *   MAY CONTAIN               { localityName
 *                               | mail
 *                               | owner
 *                               | serviceClassName
 *                               | serviceDNSName
 *                               | serviceDNSNameType
 *                               | telephoneNumber
 *                               | description }
 *   LDAP-NAME                 {"serviceConnectionPoint"}
 *   LDAP-DESC                 "Microsoft Active Directory ServiceConnectionPoint Object"
 *   ID                        id-oc-serviceConnectionPoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const serviceConnectionPoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [connectionPoint] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [name, serviceBindingInformation] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [localityName, mail, owner, serviceClassName, serviceDNSName, serviceDNSNameType, telephoneNumber, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["serviceConnectionPoint"],
    "&ldapDesc": "Microsoft Active Directory ServiceConnectionPoint Object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_serviceConnectionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
