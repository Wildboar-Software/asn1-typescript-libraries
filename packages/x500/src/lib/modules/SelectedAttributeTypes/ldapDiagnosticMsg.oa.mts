/* eslint-disable */
import { UTF8String } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_not_ldapDiagnosticMsg } from "../SelectedAttributeTypes/id-not-ldapDiagnosticMsg.va.mjs";
/**
 * @summary ldapDiagnosticMsg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapDiagnosticMsg ATTRIBUTE ::= {
 *   WITH SYNTAX              UTF8String
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-ldapDiagnosticMsg }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UTF8String>}
 * @implements {ATTRIBUTE<UTF8String>}
 */
export const ldapDiagnosticMsg: ATTRIBUTE<UTF8String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTF8String,
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_not_ldapDiagnosticMsg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
