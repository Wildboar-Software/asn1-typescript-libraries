/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_iplanet_am_saml_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-saml-service.va.mjs";

import { iplanet_am_saml_user } from "../Ldapmigration71sunAm/iplanet-am-saml-user.oa.mjs";
import { iplanet_am_saml_password } from "../Ldapmigration71sunAm/iplanet-am-saml-password.oa.mjs";
/**
 * @summary iplanet_am_saml_service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-saml-service OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-saml-user
 *                               | iplanet-am-saml-password }
 *   LDAP-NAME                 {"iplanet-am-saml-service"}
 *   LDAP-DESC                 "SAML Service OC"
 *   ID                        id-oc-iplanet-am-saml-service }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_saml_service: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iplanet_am_saml_user, iplanet_am_saml_password, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-saml-service" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "SAML Service OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_saml_service /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
