/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_eduMember } from "../Ldappc/id-oc-eduMember.va.mjs";
import { hasMember } from "./hasMember.oa.mjs";
import { isMemberOf } from "./isMemberOf.oa.mjs";

/**
 * @summary eduMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * eduMember OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { isMemberOf
 *                               | hasMember }
 *   LDAP-NAME                 {"eduMember"}
 *   ID                        id-oc-eduMember }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const eduMember: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [isMemberOf, hasMember] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["eduMember"],
    "&id": id_oc_eduMember /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
