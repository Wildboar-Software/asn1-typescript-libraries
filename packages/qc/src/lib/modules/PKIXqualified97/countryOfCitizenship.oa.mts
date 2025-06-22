/* eslint-disable */
import { PrintableString } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs";
import { id_pda_countryOfCitizenship } from "../PKIXqualified97/id-pda-countryOfCitizenship.va.mjs";


/**
 * @summary countryOfCitizenship
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * countryOfCitizenship ATTRIBUTE ::= {
 *     WITH SYNTAX PrintableString (SIZE (2))
 *         (CONSTRAINED BY { -- ISO 3166 codes only -- })
 *     ID          id-pda-countryOfCitizenship }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export const countryOfCitizenship: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&id": id_pda_countryOfCitizenship /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
