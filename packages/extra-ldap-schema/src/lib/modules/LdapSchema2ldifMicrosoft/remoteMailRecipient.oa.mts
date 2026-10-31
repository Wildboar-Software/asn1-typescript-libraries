/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_remoteMailRecipient } from "../LdapSchema2ldifMicrosoft/id-oc-remoteMailRecipient.va.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { remoteSource } from "../MSUser/remoteSource.oa.mjs";
import { remoteSourceType } from "../MSUser/remoteSourceType.oa.mjs";

/**
 * @summary remoteMailRecipient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * remoteMailRecipient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { remoteSource
 *                               | remoteSourceType
 *                               | managedBy }
 *   LDAP-NAME                 {"remoteMailRecipient"}
 *   ID                        id-oc-remoteMailRecipient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const remoteMailRecipient: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [remoteSource, remoteSourceType, managedBy] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["remoteMailRecipient"],
    "&id": id_oc_remoteMailRecipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
