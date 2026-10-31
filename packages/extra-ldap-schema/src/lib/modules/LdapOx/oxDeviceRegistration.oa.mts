/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxDeviceRegistration } from "../LdapOx/id-oc-oxDeviceRegistration.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { creationDate } from "./creationDate.oa.mjs";
import { del } from "./del.oa.mjs";
import { exp } from "./exp.oa.mjs";
import { oxApplication } from "./oxApplication.oa.mjs";
import { oxCounter } from "./oxCounter.oa.mjs";
import { oxDeviceData } from "./oxDeviceData.oa.mjs";
import { oxDeviceHashCode } from "./oxDeviceHashCode.oa.mjs";
import { oxDeviceKeyHandle } from "./oxDeviceKeyHandle.oa.mjs";
import { oxDeviceNotificationConf } from "./oxDeviceNotificationConf.oa.mjs";
import { oxDeviceRegistrationConf } from "./oxDeviceRegistrationConf.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxLastAccessTime } from "./oxLastAccessTime.oa.mjs";
import { oxNickName } from "./oxNickName.oa.mjs";
import { oxStatus } from "./oxStatus.oa.mjs";
import { oxTrustMetaLastModified } from "./oxTrustMetaLastModified.oa.mjs";
import { oxTrustMetaLocation } from "./oxTrustMetaLocation.oa.mjs";
import { oxTrustMetaVersion } from "./oxTrustMetaVersion.oa.mjs";
import { personInum } from "./personInum.oa.mjs";

/**
 * @summary oxDeviceRegistration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxDeviceRegistration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | displayName
 *                               | description
 *                               | oxDeviceKeyHandle
 *                               | oxDeviceHashCode
 *                               | oxApplication
 *                               | oxDeviceRegistrationConf
 *                               | oxDeviceNotificationConf
 *                               | oxNickName
 *                               | oxDeviceData
 *                               | oxCounter
 *                               | oxStatus
 *                               | del
 *                               | exp
 *                               | personInum
 *                               | creationDate
 *                               | oxLastAccessTime
 *                               | oxTrustMetaLastModified
 *                               | oxTrustMetaLocation
 *                               | oxTrustMetaVersion }
 *   LDAP-NAME                 {"oxDeviceRegistration"}
 *   ID                        id-oc-oxDeviceRegistration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxDeviceRegistration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxId, displayName, description, oxDeviceKeyHandle, oxDeviceHashCode, oxApplication, oxDeviceRegistrationConf, oxDeviceNotificationConf, oxNickName, oxDeviceData, oxCounter, oxStatus, del, exp, personInum, creationDate, oxLastAccessTime, oxTrustMetaLastModified, oxTrustMetaLocation, oxTrustMetaVersion] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxDeviceRegistration"],
    "&id": id_oc_oxDeviceRegistration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
