/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunAMAuthAccountLockout } from "../Ldapmigration71sunAm/id-oc-sunAMAuthAccountLockout.va.mjs";
import { sunAMAuthInvalidAttemptsData } from "../Ldapmigration71sunAm/sunAMAuthInvalidAttemptsData.oa.mjs";

/**
 * @summary sunAMAuthAccountLockout
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunAMAuthAccountLockout OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunAMAuthInvalidAttemptsData }
 *   LDAP-NAME                 {"sunAMAuthAccountLockout"}
 *   LDAP-DESC                 "Invalid Login Attempts Object Class"
 *   ID                        id-oc-sunAMAuthAccountLockout }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunAMAuthAccountLockout: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sunAMAuthInvalidAttemptsData] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunAMAuthAccountLockout"],
    "&ldapDesc": "Invalid Login Attempts Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunAMAuthAccountLockout /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
