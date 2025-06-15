/* eslint-disable */
import { BMPString } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreMatch } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { pkcs_9_at_friendlyName } from "../PKCS-9/pkcs-9-at-friendlyName.va.mjs";


/**
 * @summary friendlyName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * friendlyName ATTRIBUTE ::= {
 *         WITH SYNTAX BMPString (SIZE(1..pkcs-9-ub-friendlyName))
 *         EQUALITY MATCHING RULE caseIgnoreMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-friendlyName
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<BMPString>}
 * @implements {ATTRIBUTE<BMPString>}
 */
export const friendlyName: ATTRIBUTE<BMPString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBMPString,
    },
    encoderFor: {
        "&Type": $._encodeBMPString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_friendlyName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
