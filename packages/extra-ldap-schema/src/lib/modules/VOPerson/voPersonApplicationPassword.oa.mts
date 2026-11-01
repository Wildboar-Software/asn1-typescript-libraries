/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
import { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
import { id_at_voPersonApplicationPassword } from "../VOPerson/id-at-voPersonApplicationPassword.va.mjs";


/**
 * @summary voPersonApplicationPassword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * voPersonApplicationPassword ATTRIBUTE ::= {
 *     WITH SYNTAX                    OCTET STRING
 *     EQUALITY MATCHING RULE        octetStringMatch
 *     LDAP-SYNTAX                    octetString.&id
 *     LDAP-NAME                    {"voPersonApplicationPassword"}
 *     LDAP-DESC                    "voPerson Application-Specific Password"
 *     ID                            id-at-voPersonApplicationPassword
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const voPersonApplicationPassword: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "voPersonApplicationPassword" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "voPerson Application-Specific Password" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_voPersonApplicationPassword /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

