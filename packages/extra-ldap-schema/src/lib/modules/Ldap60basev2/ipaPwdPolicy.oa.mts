/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipaPwdPolicy } from "../Ldap60basev2/id-oc-ipaPwdPolicy.va.mjs";
import { passwordGraceLimit } from "../LdapCommon389/passwordGraceLimit.oa.mjs";
import { ipaPwdDcredit } from "./ipaPwdDcredit.oa.mjs";
import { ipaPwdDictCheck } from "./ipaPwdDictCheck.oa.mjs";
import { ipaPwdLcredit } from "./ipaPwdLcredit.oa.mjs";
import { ipaPwdMaxRepeat } from "./ipaPwdMaxRepeat.oa.mjs";
import { ipaPwdMaxSequence } from "./ipaPwdMaxSequence.oa.mjs";
import { ipaPwdOcredit } from "./ipaPwdOcredit.oa.mjs";
import { ipaPwdUcredit } from "./ipaPwdUcredit.oa.mjs";
import { ipaPwdUserCheck } from "./ipaPwdUserCheck.oa.mjs";

/**
 * @summary ipaPwdPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaPwdPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { ipaPwdMaxRepeat
 *                               | ipaPwdMaxSequence
 *                               | ipaPwdDictCheck
 *                               | ipaPwdUserCheck
 *                               | ipaPwdDcredit
 *                               | ipaPwdUcredit
 *                               | ipaPwdLcredit
 *                               | ipaPwdOcredit
 *                               | passwordGraceLimit }
 *   LDAP-NAME                 {"ipaPwdPolicy"}
 *   LDAP-DESC                 "IPA Password policy object class"
 *   ID                        id-oc-ipaPwdPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaPwdPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ipaPwdMaxRepeat, ipaPwdMaxSequence, ipaPwdDictCheck, ipaPwdUserCheck, ipaPwdDcredit, ipaPwdUcredit, ipaPwdLcredit, ipaPwdOcredit, passwordGraceLimit] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaPwdPolicy"],
    "&ldapDesc": "IPA Password policy object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaPwdPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
