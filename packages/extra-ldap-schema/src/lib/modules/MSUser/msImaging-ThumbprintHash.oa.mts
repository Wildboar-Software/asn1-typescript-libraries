/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
import { id_at_msImaging_ThumbprintHash } from "../MSUser/id-at-msImaging-ThumbprintHash.va.mjs";


/**
 * @summary msImaging_ThumbprintHash
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * msImaging-ThumbprintHash ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               octetString.&id
 *   LDAP-NAME                 {"msImaging-ThumbprintHash"}
 *   ID                        id-at-msImaging-ThumbprintHash }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const msImaging_ThumbprintHash: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "msImaging-ThumbprintHash" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_msImaging_ThumbprintHash /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

