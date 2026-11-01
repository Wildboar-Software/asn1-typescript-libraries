/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
// export { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_connectionPoint } from "../LdapSchema2ldifFmserver/id-oc-connectionPoint.va.mjs";
import { keywords } from "../MSUser/keywords.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
// export { id_oc_connectionPoint } from "../LdapSchema2ldifFmserver/id-oc-connectionPoint.va.mjs";


/**
 * @summary connectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * connectionPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { keywords
 *                               | managedBy }
 *   LDAP-NAME                 {"connectionPoint"}
 *   LDAP-DESC                 "Microsoft Active Directory ConnectPoint Object"
 *   ID                        id-oc-connectionPoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const connectionPoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ leaf, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ keywords, managedBy, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "connectionPoint" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Microsoft Active Directory ConnectPoint Object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_connectionPoint /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
