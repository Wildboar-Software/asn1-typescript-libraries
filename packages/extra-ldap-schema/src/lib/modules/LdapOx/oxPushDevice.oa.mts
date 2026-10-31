/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxPushDevice } from "../LdapOx/id-oc-oxPushDevice.va.mjs";
import { oxAuthUserId } from "./oxAuthUserId.oa.mjs";
import { oxId } from "./oxId.oa.mjs";
import { oxPushApplication } from "./oxPushApplication.oa.mjs";
import { oxPushDeviceConf } from "./oxPushDeviceConf.oa.mjs";
import { oxType } from "./oxType.oa.mjs";

/**
 * @summary oxPushDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxPushDevice OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxAuthUserId
 *                               | oxId
 *                               | oxPushApplication
 *                               | oxPushDeviceConf
 *                               | oxType }
 *   LDAP-NAME                 {"oxPushDevice"}
 *   ID                        id-oc-oxPushDevice }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxPushDevice: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxAuthUserId, oxId, oxPushApplication, oxPushDeviceConf, oxType] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxPushDevice"],
    "&id": id_oc_oxPushDevice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
