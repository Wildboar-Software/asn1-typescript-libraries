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
    type NULL,
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
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
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
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_user_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-user-service.va.mjs";

import { iplanet_am_user_auth_modules } from "../Ldapmigration71sunAm/iplanet-am-user-auth-modules.oa.mjs";
import { iplanet_am_user_login_status } from "../Ldapmigration71sunAm/iplanet-am-user-login-status.oa.mjs";
import { iplanet_am_user_admin_start_dn } from "../Ldapmigration71sunAm/iplanet-am-user-admin-start-dn.oa.mjs";
import { iplanet_am_user_auth_config } from "../Ldapmigration71sunAm/iplanet-am-user-auth-config.oa.mjs";
import { iplanet_am_user_alias_list } from "../Ldapmigration71sunAm/iplanet-am-user-alias-list.oa.mjs";
import { iplanet_am_user_success_url } from "../Ldapmigration71sunAm/iplanet-am-user-success-url.oa.mjs";
import { iplanet_am_user_failure_url } from "../Ldapmigration71sunAm/iplanet-am-user-failure-url.oa.mjs";
import { iplanet_am_user_federation_info_key } from "../Ldapmigration71sunAm/iplanet-am-user-federation-info-key.oa.mjs";
import { iplanet_am_user_federation_info } from "../Ldapmigration71sunAm/iplanet-am-user-federation-info.oa.mjs";
import { iplanet_am_user_password_reset_options } from "../Ldapmigration71sunAm/iplanet-am-user-password-reset-options.oa.mjs";
import { iplanet_am_user_password_reset_question_answer } from "../Ldapmigration71sunAm/iplanet-am-user-password-reset-question-answer.oa.mjs";
import { iplanet_am_user_password_reset_force_reset } from "../Ldapmigration71sunAm/iplanet-am-user-password-reset-force-reset.oa.mjs";
import { sunIdentityServerDiscoEntries } from "../Ldapmigration71sunAm/sunIdentityServerDiscoEntries.oa.mjs";
import { sunIdentityMSISDNNumber } from "../Ldapmigration71sunAm/sunIdentityMSISDNNumber.oa.mjs";
/**
 * @summary iplanet_am_user_service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-user-service OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-user-auth-modules
 *                               | iplanet-am-user-login-status
 *                               | iplanet-am-user-admin-start-dn
 *                               | iplanet-am-user-auth-config
 *                               | iplanet-am-user-alias-list
 *                               | iplanet-am-user-success-url
 *                               | iplanet-am-user-failure-url
 *                               | iplanet-am-user-federation-info-key
 *                               | iplanet-am-user-federation-info
 *                               | iplanet-am-user-password-reset-options
 *                               | iplanet-am-user-password-reset-question-answer
 *                               | iplanet-am-user-password-reset-force-reset
 *                               | sunIdentityServerDiscoEntries
 *                               | sunIdentityMSISDNNumber }
 *   LDAP-NAME                 {"iplanet-am-user-service"}
 *   LDAP-DESC                 "User Service OC"
 *   ID                        id-oc-iplanet-am-user-service }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_user_service: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iplanet_am_user_auth_modules, iplanet_am_user_login_status, iplanet_am_user_admin_start_dn, iplanet_am_user_auth_config, iplanet_am_user_alias_list, iplanet_am_user_success_url, iplanet_am_user_failure_url, iplanet_am_user_federation_info_key, iplanet_am_user_federation_info, iplanet_am_user_password_reset_options, iplanet_am_user_password_reset_question_answer, iplanet_am_user_password_reset_force_reset, sunIdentityServerDiscoEntries, sunIdentityMSISDNNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-user-service" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "User Service OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_user_service /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
