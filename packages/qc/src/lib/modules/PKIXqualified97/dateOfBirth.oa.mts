/* eslint-disable */
import { GeneralizedTime } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/InformationFramework";
import { id_pda_dateOfBirth } from "../PKIXqualified97/id-pda-dateOfBirth.va.mjs";


/**
 * @summary dateOfBirth
 * @description
 *
 * Subject directory attribute: date of birth of the subject
 * ([RFC 3739 §3.2.2](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.2)).
 * Compliant implementations SHALL be able to interpret this attribute
 * when present in `subjectDirectoryAttributes`. Value is
 * `GeneralizedTime` and SHOULD specify GMT 12.00.00 (noon) to second
 * granularity (e.g., birth date 1959-09-27 as `"19590927120000Z"`) so
 * time-zone adjustments do not change the calendar date. Parsing
 * applications SHOULD ignore time data and present only the date.
 * How the date is associated with the subject is outside the scope of
 * RFC 3739. The `subjectDirectoryAttributes` extension MUST NOT be
 * marked critical.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dateOfBirth ATTRIBUTE ::= {
 *     WITH SYNTAX GeneralizedTime
 *     ID          id-pda-dateOfBirth }
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
    "&id": id_pda_dateOfBirth /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
