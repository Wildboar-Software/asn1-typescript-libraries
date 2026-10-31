/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { sunxmlkeyvalue } from "../Ldapmigration70sunSchema2/sunxmlkeyvalue.oa.mjs";
import { id_oc_sunIdentityServerDevice } from "../Ldapmigration71sunAm/id-oc-sunIdentityServerDevice.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { sunIdentityServerDeviceKeyValue } from "./sunIdentityServerDeviceKeyValue.oa.mjs";
import { sunIdentityServerDeviceStatus } from "./sunIdentityServerDeviceStatus.oa.mjs";
import { sunIdentityServerDeviceType } from "./sunIdentityServerDeviceType.oa.mjs";
import { sunIdentityServerDeviceVersion } from "./sunIdentityServerDeviceVersion.oa.mjs";

/**
 * @summary sunIdentityServerDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunIdentityServerDevice OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { commonName
 *                               | uid
 *                               | sunIdentityServerDeviceVersion
 *                               | sunIdentityServerDeviceType
 *                               | userPassword
 *                               | sunIdentityServerDeviceKeyValue
 *                               | sunxmlkeyvalue
 *                               | description
 *                               | sunIdentityServerDeviceStatus }
 *   LDAP-NAME                 {"sunIdentityServerDevice"}
 *   LDAP-DESC                 "Device OC"
 *   ID                        id-oc-sunIdentityServerDevice }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunIdentityServerDevice: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, uid, sunIdentityServerDeviceVersion, sunIdentityServerDeviceType, userPassword, sunIdentityServerDeviceKeyValue, sunxmlkeyvalue, description, sunIdentityServerDeviceStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunIdentityServerDevice"],
    "&ldapDesc": "Device OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIdentityServerDevice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
