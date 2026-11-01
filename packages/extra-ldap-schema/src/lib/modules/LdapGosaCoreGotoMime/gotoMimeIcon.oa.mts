/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { jpeg } from "../SelectedAttributeTypes/jpeg.oa.mjs";
// export { jpeg } from "../SelectedAttributeTypes/jpeg.oa.mjs";
import { id_at_gotoMimeIcon } from "../LdapGosaCoreGotoMime/id-at-gotoMimeIcon.va.mjs";
// export { id_at_gotoMimeIcon } from "../LdapGosaCoreGotoMime/id-at-gotoMimeIcon.va.mjs";


/**
 * @summary gotoMimeIcon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoMimeIcon ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               jpeg.&id
 *   LDAP-NAME                 {"gotoMimeIcon"}
 *   LDAP-DESC                 "Specify the mime icon"
 *   ID                        id-at-gotoMimeIcon }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const gotoMimeIcon: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": jpeg["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gotoMimeIcon" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Specify the mime icon" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_gotoMimeIcon /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
