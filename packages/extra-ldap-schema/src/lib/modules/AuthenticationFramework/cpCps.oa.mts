/* eslint-disable */
import { id_oc_cpCps } from "../AuthenticationFramework/id-oc-cpCps.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { certificatePolicy } from "./certificatePolicy.oa.mjs";
import { certificationPracticeStmt } from "./certificationPracticeStmt.oa.mjs";

/**
 * @summary cpCps
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cpCps OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {certificatePolicy |
 *                        certificationPracticeStmt}
 *   LDAP-NAME           {"cpCps"}
 *   LDAP-DESC           "Certificate Policy and Certification Practice Statement"
 *   ID                  id-oc-cpCps }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cpCps: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [certificatePolicy, certificationPracticeStmt] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["cpCps"],
    "&ldapDesc": "Certificate Policy and Certification Practice Statement" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cpCps /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
