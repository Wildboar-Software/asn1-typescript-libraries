/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsLicenseUser } from "../LdapCommon389/id-oc-nsLicenseUser.va.mjs";
import { nsLicenseEndTime } from "./nsLicenseEndTime.oa.mjs";
import { nsLicenseStartTime } from "./nsLicenseStartTime.oa.mjs";
import { nsLicensedFor } from "./nsLicensedFor.oa.mjs";

/**
 * @summary nsLicenseUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsLicenseUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { nsLicensedFor
 *                               | nsLicenseStartTime
 *                               | nsLicenseEndTime }
 *   LDAP-NAME                 {"nsLicenseUser"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsLicenseUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsLicenseUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [nsLicensedFor, nsLicenseStartTime, nsLicenseEndTime] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsLicenseUser"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsLicenseUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
