/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { serviceConnectionPoint } from "../LdapSchema2ldifFmserver/serviceConnectionPoint.oa.mjs";
import { id_oc_serviceAdministrationPoint } from "../LdapSchema2ldifMicrosoft/id-oc-serviceAdministrationPoint.va.mjs";

/**
 * @summary serviceAdministrationPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceAdministrationPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { serviceConnectionPoint }
 *   LDAP-NAME                 {"serviceAdministrationPoint"}
 *   ID                        id-oc-serviceAdministrationPoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const serviceAdministrationPoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [serviceConnectionPoint] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["serviceAdministrationPoint"],
    "&id": id_oc_serviceAdministrationPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
