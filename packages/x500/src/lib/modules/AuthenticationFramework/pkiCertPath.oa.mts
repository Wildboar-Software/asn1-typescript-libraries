/* eslint-disable */
import { id_oc_pkiCertPath } from "../AuthenticationFramework/id-oc-pkiCertPath.va.mjs";
import { pkiPath } from "../AuthenticationFramework/pkiPath.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
/**
 * @summary pkiCertPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiCertPath OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {pkiPath}
 *   LDAP-NAME           {"pkiCertPath"}
 *   LDAP-DESC           "PKI Certification Path"
 *   ID                  id-oc-pkiCertPath }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pkiCertPath: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [pkiPath] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pkiCertPath"],
    "&ldapDesc": "PKI Certification Path" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pkiCertPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
