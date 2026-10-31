/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_remoteStorageServicePoint } from "../LdapSchema2ldifMicrosoft/id-oc-remoteStorageServicePoint.va.mjs";
import { serviceAdministrationPoint } from "../LdapSchema2ldifMicrosoft/serviceAdministrationPoint.oa.mjs";
import { remoteStorageGUID } from "../MSUser/remoteStorageGUID.oa.mjs";

/**
 * @summary remoteStorageServicePoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * remoteStorageServicePoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { serviceAdministrationPoint }
 *   MAY CONTAIN               { remoteStorageGUID }
 *   LDAP-NAME                 {"remoteStorageServicePoint"}
 *   ID                        id-oc-remoteStorageServicePoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const remoteStorageServicePoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [serviceAdministrationPoint] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [remoteStorageGUID] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["remoteStorageServicePoint"],
    "&id": id_oc_remoteStorageServicePoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
