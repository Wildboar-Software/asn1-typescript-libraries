/* eslint-disable */
import { GeneralizedTime } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_oa_pwdExpiryTime } from "../PasswordPolicy/id-oa-pwdExpiryTime.va.mjs";
import { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.mjs";
import { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa.mjs";
import { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa.mjs";
/**
 * @summary pwdExpiryTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdExpiryTime ATTRIBUTE ::= {
 *   WITH SYNTAX              GeneralizedTime
 *   EQUALITY MATCHING RULE   generalizedTimeMatch
 *   ORDERING MATCHING RULE   generalizedTimeOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    directoryOperation
 *   LDAP-SYNTAX              generalizedTime.&id
 *   LDAP-NAME                {"pwdExpiryTime"}
 *   ID                       id-oa-pwdExpiryTime }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<GeneralizedTime>}
 * @implements {ATTRIBUTE<GeneralizedTime>}
 */
export const pwdExpiryTime: ATTRIBUTE<GeneralizedTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pwdExpiryTime"],
    "&id": id_oa_pwdExpiryTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
