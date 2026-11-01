/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
// export { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
import { id_at_allowedChildClasses } from "../MSUser/id-at-allowedChildClasses.va.mjs";
// export { id_at_allowedChildClasses } from "../MSUser/id-at-allowedChildClasses.va.mjs";


/**
 * @summary allowedChildClasses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * allowedChildClasses ATTRIBUTE ::= {
 *   WITH SYNTAX               OBJECT IDENTIFIER
 *   NO USER MODIFICATION      TRUE
 *   LDAP-SYNTAX               oid.&id
 *   LDAP-NAME                 {"allowedChildClasses"}
 *   ID                        id-at-allowedChildClasses }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export
const allowedChildClasses: ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "allowedChildClasses" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_allowedChildClasses /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
