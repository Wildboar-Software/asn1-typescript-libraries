/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mSMQEnterpriseSettings } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQEnterpriseSettings.va.mjs";
import { mSMQNameStyle } from "../MSUser/mSMQNameStyle.oa.mjs";
import { mSMQCSPName } from "../MSUser/mSMQCSPName.oa.mjs";
import { mSMQLongLived } from "../MSUser/mSMQLongLived.oa.mjs";
import { mSMQVersion } from "../MSUser/mSMQVersion.oa.mjs";
import { mSMQInterval1 } from "../MSUser/mSMQInterval1.oa.mjs";
import { mSMQInterval2 } from "../MSUser/mSMQInterval2.oa.mjs";
// export { id_oc_mSMQEnterpriseSettings } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQEnterpriseSettings.va.mjs";


/**
 * @summary mSMQEnterpriseSettings
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mSMQEnterpriseSettings OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mSMQNameStyle
 *                               | mSMQCSPName
 *                               | mSMQLongLived
 *                               | mSMQVersion
 *                               | mSMQInterval1
 *                               | mSMQInterval2 }
 *   LDAP-NAME                 {"mSMQEnterpriseSettings"}
 *   ID                        id-oc-mSMQEnterpriseSettings }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mSMQEnterpriseSettings: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mSMQNameStyle, mSMQCSPName, mSMQLongLived, mSMQVersion, mSMQInterval1, mSMQInterval2, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mSMQEnterpriseSettings" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_mSMQEnterpriseSettings /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
