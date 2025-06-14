/* eslint-disable */
import { GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs";
import { generalizedTimeMatch } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeMatch.oa.mjs";
import { pkcs_9_at_dateOfBirth } from "../PKCS-9/pkcs-9-at-dateOfBirth.va.mjs";


/**
 * @summary dateOfBirth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dateOfBirth ATTRIBUTE ::= {
 *         WITH SYNTAX GeneralizedTime
 *         EQUALITY MATCHING RULE generalizedTimeMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-dateOfBirth
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<GeneralizedTime>}
 * @implements {ATTRIBUTE<GeneralizedTime>}
 */
export const dateOfBirth: ATTRIBUTE<GeneralizedTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_dateOfBirth /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
