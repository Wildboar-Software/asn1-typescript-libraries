/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { kitnEduPersonRegId } from "../LdapKitneduperson/kitnEduPersonRegId.oa.mjs";
import { id_oc_kitnEduPerson } from "../LdapKitneduperson/id-oc-kitnEduPerson.va.mjs";


/**
 * @summary kitnEduPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kitnEduPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { kitnEduPersonRegId }
 *   LDAP-NAME                 {"kitnEduPerson"}
 *   LDAP-DESC                 "KITN Edu Person objectclass"
 *   ID                        id-oc-kitnEduPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kitnEduPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ kitnEduPersonRegId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "kitnEduPerson" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "KITN Edu Person objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kitnEduPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

