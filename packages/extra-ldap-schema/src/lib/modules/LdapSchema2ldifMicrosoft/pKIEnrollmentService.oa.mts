/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_pKIEnrollmentService } from "../LdapSchema2ldifMicrosoft/id-oc-pKIEnrollmentService.va.mjs";

import { cACertificate } from "../AuthenticationFramework/cACertificate.oa.mjs";
import { dNSHostName } from "../MSUser/dNSHostName.oa.mjs";
import { cACertificateDN } from "../MSUser/cACertificateDN.oa.mjs";
import { certificateTemplates } from "../MSUser/certificateTemplates.oa.mjs";
import { signatureAlgorithms } from "../MSUser/signatureAlgorithms.oa.mjs";
import { enrollmentProviders } from "../MSUser/enrollmentProviders.oa.mjs";
/**
 * @summary pKIEnrollmentService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pKIEnrollmentService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { cACertificate
 *                               | dNSHostName
 *                               | cACertificateDN
 *                               | certificateTemplates
 *                               | signatureAlgorithms
 *                               | enrollmentProviders }
 *   LDAP-NAME                 {"pKIEnrollmentService"}
 *   ID                        id-oc-pKIEnrollmentService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pKIEnrollmentService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ cACertificate, dNSHostName, cACertificateDN, certificateTemplates, signatureAlgorithms, enrollmentProviders, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pKIEnrollmentService" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pKIEnrollmentService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
