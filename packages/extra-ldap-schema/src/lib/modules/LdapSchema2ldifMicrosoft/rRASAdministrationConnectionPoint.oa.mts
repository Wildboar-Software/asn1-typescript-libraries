/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_rRASAdministrationConnectionPoint } from "../LdapSchema2ldifMicrosoft/id-oc-rRASAdministrationConnectionPoint.va.mjs";
import { serviceAdministrationPoint } from "../LdapSchema2ldifMicrosoft/serviceAdministrationPoint.oa.mjs";
import { msRRASAttribute } from "../MSUser/msRRASAttribute.oa.mjs";

/**
 * @summary rRASAdministrationConnectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rRASAdministrationConnectionPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { serviceAdministrationPoint }
 *   MAY CONTAIN               { msRRASAttribute }
 *   LDAP-NAME                 {"rRASAdministrationConnectionPoint"}
 *   ID                        id-oc-rRASAdministrationConnectionPoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rRASAdministrationConnectionPoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [serviceAdministrationPoint] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [msRRASAttribute] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["rRASAdministrationConnectionPoint"],
    "&id": id_oc_rRASAdministrationConnectionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
