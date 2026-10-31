/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { gotoXResolution } from "../LdapGosaCoreGosystem/gotoXResolution.oa.mjs";
import { id_oc_gotoEnvironment } from "../LdapGosaCoreGoto/id-oc-gotoEnvironment.va.mjs";
import { gotoHotplugDevice } from "./gotoHotplugDevice.oa.mjs";
import { gotoHotplugDeviceDN } from "./gotoHotplugDeviceDN.oa.mjs";
import { gotoKioskProfile } from "./gotoKioskProfile.oa.mjs";
import { gotoLogonScript } from "./gotoLogonScript.oa.mjs";
import { gotoProfileFlags } from "./gotoProfileFlags.oa.mjs";
import { gotoProfileQuota } from "./gotoProfileQuota.oa.mjs";
import { gotoProfileServer } from "./gotoProfileServer.oa.mjs";
import { gotoShare } from "./gotoShare.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gotoProfileServer, gotoProfileFlags, gotoXResolution, gotoShare, gotoLogonScript, gotoKioskProfile, gotoHotplugDevice, gotoProfileQuota, gotoHotplugDeviceDN] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gotoEnvironment"],
    "&ldapDesc": "GOto - contains environment settings (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoEnvironment /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
