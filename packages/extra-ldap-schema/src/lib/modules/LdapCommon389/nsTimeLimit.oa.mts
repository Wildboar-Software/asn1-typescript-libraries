/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_nsTimeLimit } from "../LdapCommon389/id-at-nsTimeLimit.va.mjs";


/**
 * @summary nsTimeLimit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsTimeLimit ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   SINGLE VALUE              TRUE
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"nsTimeLimit"}
 *   LDAP-DESC                 "Binder-based search operation time limit (seconds)"
 *   ID                        id-at-nsTimeLimit }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const nsTimeLimit: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsTimeLimit" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Binder-based search operation time limit (seconds)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_nsTimeLimit /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

