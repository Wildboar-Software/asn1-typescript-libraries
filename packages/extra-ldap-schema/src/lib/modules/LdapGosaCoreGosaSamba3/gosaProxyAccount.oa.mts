/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { gosaProxyAcctFlags } from "../LdapGosaCoreGosaSamba3/gosaProxyAcctFlags.oa.mjs";
import { id_oc_gosaProxyAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaProxyAccount.va.mjs";

import { gosaProxyID } from "../LdapGosaCoreGosaSamba3/gosaProxyID.oa.mjs";
import { gosaProxyWorkingStart } from "../LdapGosaCoreGosaSamba3/gosaProxyWorkingStart.oa.mjs";
import { gosaProxyWorkingStop } from "../LdapGosaCoreGosaSamba3/gosaProxyWorkingStop.oa.mjs";
import { gosaProxyQuota } from "../LdapGosaCoreGosaSamba3/gosaProxyQuota.oa.mjs";
import { gosaProxyQuotaPeriod } from "../LdapGosaCoreGosaSamba3/gosaProxyQuotaPeriod.oa.mjs";
/**
 * @summary gosaProxyAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaProxyAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { gosaProxyAcctFlags }
 *   MAY CONTAIN               { gosaProxyID
 *                               | gosaProxyWorkingStart
 *                               | gosaProxyWorkingStop
 *                               | gosaProxyQuota
 *                               | gosaProxyQuotaPeriod }
 *   LDAP-NAME                 {"gosaProxyAccount"}
 *   LDAP-DESC                 "Class for GOsa Proxy settings (v2.7)"
 *   ID                        id-oc-gosaProxyAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaProxyAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gosaProxyAcctFlags, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gosaProxyID, gosaProxyWorkingStart, gosaProxyWorkingStop, gosaProxyQuota, gosaProxyQuotaPeriod, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaProxyAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Class for GOsa Proxy settings (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaProxyAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
