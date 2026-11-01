/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipaPwdPolicy } from "../Ldap60basev2/id-oc-ipaPwdPolicy.va.mjs";
import { ipaPwdMaxRepeat } from "../Ldap60basev2/ipaPwdMaxRepeat.oa.mjs";
import { ipaPwdMaxSequence } from "../Ldap60basev2/ipaPwdMaxSequence.oa.mjs";
import { ipaPwdDictCheck } from "../Ldap60basev2/ipaPwdDictCheck.oa.mjs";
import { ipaPwdUserCheck } from "../Ldap60basev2/ipaPwdUserCheck.oa.mjs";
import { ipaPwdDcredit } from "../Ldap60basev2/ipaPwdDcredit.oa.mjs";
import { ipaPwdUcredit } from "../Ldap60basev2/ipaPwdUcredit.oa.mjs";
import { ipaPwdLcredit } from "../Ldap60basev2/ipaPwdLcredit.oa.mjs";
import { ipaPwdOcredit } from "../Ldap60basev2/ipaPwdOcredit.oa.mjs";
import { passwordGraceLimit } from "../LdapCommon389/passwordGraceLimit.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ipaPwdMaxRepeat, ipaPwdMaxSequence, ipaPwdDictCheck, ipaPwdUserCheck, ipaPwdDcredit, ipaPwdUcredit, ipaPwdLcredit, ipaPwdOcredit, passwordGraceLimit, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaPwdPolicy" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "IPA Password policy object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaPwdPolicy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

