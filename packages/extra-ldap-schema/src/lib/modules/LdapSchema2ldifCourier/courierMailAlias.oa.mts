/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_courierMailAlias } from "../LdapSchema2ldifCourier/id-oc-courierMailAlias.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { maildrop } from "../LdapSchema2ldifCourier/maildrop.oa.mjs";
import { mailsource } from "../LdapSchema2ldifCourier/mailsource.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_courierMailAlias } from "../LdapSchema2ldifCourier/id-oc-courierMailAlias.va.mjs";


/**
 * @summary courierMailAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * courierMailAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { mail
 *                               | maildrop }
 *   MAY CONTAIN               { mailsource
 *                               | description }
 *   LDAP-NAME                 {"CourierMailAlias"}
 *   LDAP-DESC                 "Mail aliasing/forwarding entry"
 *   ID                        id-oc-courierMailAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const courierMailAlias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ mail, maildrop, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ mailsource, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "CourierMailAlias" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Mail aliasing/forwarding entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_courierMailAlias /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
