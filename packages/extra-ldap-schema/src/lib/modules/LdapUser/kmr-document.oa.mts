/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { document } from "../LdapSchema2ldifCosine/document.oa.mjs";
import { id_oc_kmr_document } from "../LdapUser/id-oc-kmr-document.va.mjs";
import { documentExpirationTime } from "./documentExpirationTime.oa.mjs";
import { documentStatus } from "./documentStatus.oa.mjs";

/**
 * @summary kmr_document
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kmr-document OBJECT-CLASS ::= {
 *   SUBCLASS OF               { document }
 *   MAY CONTAIN               { documentExpirationTime
 *                               | documentStatus }
 *   LDAP-NAME                 {"kmr-document"}
 *   ID                        id-oc-kmr-document }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kmr_document: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [document] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [documentExpirationTime, documentStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["kmr-document"],
    "&id": id_oc_kmr_document /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
