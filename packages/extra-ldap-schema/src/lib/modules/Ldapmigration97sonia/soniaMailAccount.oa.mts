/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { inetMailUser } from "../Ldapmigration56imsSchema/inetMailUser.oa.mjs";
// export { inetMailUser } from "../Ldapmigration56imsSchema/inetMailUser.oa.mjs";
import { soniaMailDelegatedAddress } from "../Ldapmigration97sonia/soniaMailDelegatedAddress.oa.mjs";
// export { soniaMailDelegatedAddress } from "../Ldapmigration97sonia/soniaMailDelegatedAddress.oa.mjs";
import { id_oc_soniaMailAccount } from "../Ldapmigration97sonia/id-oc-soniaMailAccount.va.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
// export { id_oc_soniaMailAccount } from "../Ldapmigration97sonia/id-oc-soniaMailAccount.va.mjs";


/**
 * @summary soniaMailAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaMailAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetMailUser }
 *   MUST CONTAIN              { uid
 *                               | mail }
 *   MAY CONTAIN               { soniaMailDelegatedAddress }
 *   LDAP-NAME                 {"soniaMailAccount"}
 *   ID                        id-oc-soniaMailAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaMailAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ inetMailUser, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, mail, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaMailDelegatedAddress, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaMailAccount" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaMailAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
