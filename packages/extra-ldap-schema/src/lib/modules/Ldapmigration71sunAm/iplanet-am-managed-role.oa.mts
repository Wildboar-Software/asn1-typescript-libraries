/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_managed_role } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-role.va.mjs";
import { iplanet_am_role_type } from "../Ldapmigration71sunAm/iplanet-am-role-type.oa.mjs";
import { iplanet_am_role_description } from "../Ldapmigration71sunAm/iplanet-am-role-description.oa.mjs";
import { iplanet_am_role_aci_description } from "../Ldapmigration71sunAm/iplanet-am-role-aci-description.oa.mjs";
import { iplanet_am_role_aci_list } from "../Ldapmigration71sunAm/iplanet-am-role-aci-list.oa.mjs";
import { iplanet_am_role_service_options } from "../Ldapmigration71sunAm/iplanet-am-role-service-options.oa.mjs";
import { iplanet_am_role_any_options } from "../Ldapmigration71sunAm/iplanet-am-role-any-options.oa.mjs";
import { iplanet_am_role_managed_container_dn } from "../Ldapmigration71sunAm/iplanet-am-role-managed-container-dn.oa.mjs";
import { iplanet_am_role_display_options } from "../Ldapmigration71sunAm/iplanet-am-role-display-options.oa.mjs";
// export { id_oc_iplanet_am_managed_role } from "../Ldapmigration71sunAm/id-oc-iplanet-am-managed-role.va.mjs";


/**
 * @summary iplanet_am_managed_role
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-managed-role OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-role-type
 *                               | iplanet-am-role-description
 *                               | iplanet-am-role-aci-description
 *                               | iplanet-am-role-aci-list
 *                               | iplanet-am-role-service-options
 *                               | iplanet-am-role-any-options
 *                               | iplanet-am-role-managed-container-dn
 *                               | iplanet-am-role-display-options }
 *   LDAP-NAME                 {"iplanet-am-managed-role"}
 *   LDAP-DESC                 "Managed Role OC"
 *   ID                        id-oc-iplanet-am-managed-role }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_managed_role: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iplanet_am_role_type, iplanet_am_role_description, iplanet_am_role_aci_description, iplanet_am_role_aci_list, iplanet_am_role_service_options, iplanet_am_role_any_options, iplanet_am_role_managed_container_dn, iplanet_am_role_display_options, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-managed-role" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Managed Role OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_managed_role /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
