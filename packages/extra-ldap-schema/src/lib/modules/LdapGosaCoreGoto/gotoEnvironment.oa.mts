/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gotoEnvironment } from "../LdapGosaCoreGoto/id-oc-gotoEnvironment.va.mjs";
import { gotoProfileServer } from "../LdapGosaCoreGoto/gotoProfileServer.oa.mjs";
import { gotoProfileFlags } from "../LdapGosaCoreGoto/gotoProfileFlags.oa.mjs";
import { gotoXResolution } from "../LdapGosaCoreGosystem/gotoXResolution.oa.mjs";
import { gotoShare } from "../LdapGosaCoreGoto/gotoShare.oa.mjs";
import { gotoLogonScript } from "../LdapGosaCoreGoto/gotoLogonScript.oa.mjs";
import { gotoKioskProfile } from "../LdapGosaCoreGoto/gotoKioskProfile.oa.mjs";
import { gotoHotplugDevice } from "../LdapGosaCoreGoto/gotoHotplugDevice.oa.mjs";
import { gotoProfileQuota } from "../LdapGosaCoreGoto/gotoProfileQuota.oa.mjs";
import { gotoHotplugDeviceDN } from "../LdapGosaCoreGoto/gotoHotplugDeviceDN.oa.mjs";


/**
 * @summary gotoEnvironment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoEnvironment OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { gotoProfileServer
 *                               | gotoProfileFlags
 *                               | gotoXResolution
 *                               | gotoShare
 *                               | gotoLogonScript
 *                               | gotoKioskProfile
 *                               | gotoHotplugDevice
 *                               | gotoProfileQuota
 *                               | gotoHotplugDeviceDN }
 *   LDAP-NAME                 {"gotoEnvironment"}
 *   LDAP-DESC                 "GOto - contains environment settings (v2.7)"
 *   ID                        id-oc-gotoEnvironment }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoEnvironment: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gotoProfileServer, gotoProfileFlags, gotoXResolution, gotoShare, gotoLogonScript, gotoKioskProfile, gotoHotplugDevice, gotoProfileQuota, gotoHotplugDeviceDN, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gotoEnvironment" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GOto - contains environment settings (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoEnvironment /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

