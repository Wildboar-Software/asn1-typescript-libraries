/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunIdentityServerDevice } from "../Ldapmigration71sunAm/id-oc-sunIdentityServerDevice.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { sunIdentityServerDeviceVersion } from "../Ldapmigration71sunAm/sunIdentityServerDeviceVersion.oa.mjs";
import { sunIdentityServerDeviceType } from "../Ldapmigration71sunAm/sunIdentityServerDeviceType.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { sunIdentityServerDeviceKeyValue } from "../Ldapmigration71sunAm/sunIdentityServerDeviceKeyValue.oa.mjs";
import { sunxmlkeyvalue } from "../Ldapmigration70sunSchema2/sunxmlkeyvalue.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { sunIdentityServerDeviceStatus } from "../Ldapmigration71sunAm/sunIdentityServerDeviceStatus.oa.mjs";
// export { id_oc_sunIdentityServerDevice } from "../Ldapmigration71sunAm/id-oc-sunIdentityServerDevice.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, uid, sunIdentityServerDeviceVersion, sunIdentityServerDeviceType, userPassword, sunIdentityServerDeviceKeyValue, sunxmlkeyvalue, description, sunIdentityServerDeviceStatus, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunIdentityServerDevice" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Device OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIdentityServerDevice /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
