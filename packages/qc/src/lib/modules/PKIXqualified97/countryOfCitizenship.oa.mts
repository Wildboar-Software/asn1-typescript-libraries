/* eslint-disable */
import { PrintableString } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/InformationFramework";
import { id_pda_countryOfCitizenship } from "../PKIXqualified97/id-pda-countryOfCitizenship.va.mjs";


/**
 * @summary countryOfCitizenship
 * @description
 *
 * Subject directory attribute: at least one of the subject's claimed
 * countries of citizenship at the time the certificate was issued
 * ([RFC 3739 §3.2.2](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.2)).
 * Value is an ISO 3166 country code (`PrintableString` size 2). If
 * more than one country of citizenship is specified, each SHOULD be
 * a separate, single-valued `countryOfCitizenship` attribute.
 * Determination of citizenship is a matter of law and outside the
 * scope of RFC 3739. Compliant implementations SHALL be able to
 * interpret this attribute when present in
 * `subjectDirectoryAttributes`. That extension MUST NOT be marked
 * critical.
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
