/* eslint-disable */
import { PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/InformationFramework";
import { caseIgnoreMatch } from "@wildboar/x500/SelectedAttributeTypes";
import { pkcs_9_at_countryOfResidence } from "../PKCS-9/pkcs-9-at-countryOfResidence.va.mjs";


/**
 * @summary countryOfResidence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryOfResidence ATTRIBUTE ::= {
 *         WITH SYNTAX PrintableString (SIZE(2))(CONSTRAINED BY {
 *         -- Must be a two-letter country acronym in accordance with
 *         -- ISO/IEC 3166 --})
 *         EQUALITY MATCHING RULE caseIgnoreMatch
 *         ID pkcs-9-at-countryOfResidence
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export const countryOfResidence: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_countryOfResidence /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
