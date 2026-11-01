/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dnaSharedConfig } from "../LdapDnaPlugin/id-oc-dnaSharedConfig.va.mjs";
import { dnaHostname } from "../LdapDnaPlugin/dnaHostname.oa.mjs";
import { dnaPortNum } from "../LdapDnaPlugin/dnaPortNum.oa.mjs";
import { dnaSecurePortNum } from "../LdapDnaPlugin/dnaSecurePortNum.oa.mjs";
import { dnaRemoteBindMethod } from "../LdapDnaPlugin/dnaRemoteBindMethod.oa.mjs";
import { dnaRemoteConnProtocol } from "../LdapDnaPlugin/dnaRemoteConnProtocol.oa.mjs";
import { dnaRemainingValues } from "../LdapDnaPlugin/dnaRemainingValues.oa.mjs";


/**
 * @summary dnaSharedConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnaSharedConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { dnaHostname
 *                               | dnaPortNum
 *                               | dnaSecurePortNum
 *                               | dnaRemoteBindMethod
 *                               | dnaRemoteConnProtocol
 *                               | dnaRemainingValues }
 *   LDAP-NAME                 {"dnaSharedConfig"}
 *   LDAP-DESC                 "DNA Shared Configuration"
 *   ID                        id-oc-dnaSharedConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dnaSharedConfig: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dnaHostname, dnaPortNum, dnaSecurePortNum, dnaRemoteBindMethod, dnaRemoteConnProtocol, dnaRemainingValues, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dnaSharedConfig" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DNA Shared Configuration" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dnaSharedConfig /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

