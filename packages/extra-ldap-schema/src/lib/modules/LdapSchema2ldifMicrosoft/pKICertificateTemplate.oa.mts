/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_pKICertificateTemplate } from "../LdapSchema2ldifMicrosoft/id-oc-pKICertificateTemplate.va.mjs";
import { displayName } from "../LdapSchema2ldifMicrosoft/displayName.oa.mjs";
import { flags } from "../MSUser/flags.oa.mjs";
import { pKIDefaultKeySpec } from "../MSUser/pKIDefaultKeySpec.oa.mjs";
import { pKIKeyUsage } from "../MSUser/pKIKeyUsage.oa.mjs";
import { pKIMaxIssuingDepth } from "../MSUser/pKIMaxIssuingDepth.oa.mjs";
import { pKICriticalExtensions } from "../MSUser/pKICriticalExtensions.oa.mjs";
import { pKIExpirationPeriod } from "../MSUser/pKIExpirationPeriod.oa.mjs";
import { pKIOverlapPeriod } from "../MSUser/pKIOverlapPeriod.oa.mjs";
import { pKIExtendedKeyUsage } from "../MSUser/pKIExtendedKeyUsage.oa.mjs";
import { pKIDefaultCSPs } from "../MSUser/pKIDefaultCSPs.oa.mjs";
import { pKIEnrollmentAccess } from "../MSUser/pKIEnrollmentAccess.oa.mjs";


/**
 * @summary pKICertificateTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pKICertificateTemplate OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { displayName
 *                               | flags
 *                               | pKIDefaultKeySpec
 *                               | pKIKeyUsage
 *                               | pKIMaxIssuingDepth
 *                               | pKICriticalExtensions
 *                               | pKIExpirationPeriod
 *                               | pKIOverlapPeriod
 *                               | pKIExtendedKeyUsage
 *                               | pKIDefaultCSPs
 *                               | pKIEnrollmentAccess }
 *   LDAP-NAME                 {"pKICertificateTemplate"}
 *   ID                        id-oc-pKICertificateTemplate }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pKICertificateTemplate: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ displayName, flags, pKIDefaultKeySpec, pKIKeyUsage, pKIMaxIssuingDepth, pKICriticalExtensions, pKIExpirationPeriod, pKIOverlapPeriod, pKIExtendedKeyUsage, pKIDefaultCSPs, pKIEnrollmentAccess, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pKICertificateTemplate" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pKICertificateTemplate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

