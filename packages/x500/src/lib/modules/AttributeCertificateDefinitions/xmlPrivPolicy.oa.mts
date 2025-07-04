/* eslint-disable */
import { UTF8String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_at_xmlPrivPolicy } from "../AttributeCertificateDefinitions/id-at-xmlPrivPolicy.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary xmlPrivPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xmlPrivPolicy ATTRIBUTE ::= {
 *   WITH SYNTAX  UTF8String -- XML-encoded privilege policy information
 *   ID           id-at-xmlPrivPolicy }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UTF8String>}
 * @implements {ATTRIBUTE<UTF8String>}
 */
export const xmlPrivPolicy: ATTRIBUTE<UTF8String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTF8String,
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&id": id_at_xmlPrivPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
