/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/InformationFramework";
import { integerMatch } from "@wildboar/x500/SelectedAttributeTypes";
import { pkcs_9_at_sequenceNumber } from "../PKCS-9/pkcs-9-at-sequenceNumber.va.mjs";
import {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from "../PKCS-9/SequenceNumber.ta.mjs";


/**
 * @summary sequenceNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sequenceNumber ATTRIBUTE ::= {
 *         WITH SYNTAX SequenceNumber
 *         EQUALITY MATCHING RULE integerMatch
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-sequenceNumber
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SequenceNumber>}
 * @implements {ATTRIBUTE<SequenceNumber>}
 */
export const sequenceNumber: ATTRIBUTE<SequenceNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SequenceNumber,
    },
    encoderFor: {
        "&Type": _encode_SequenceNumber,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_sequenceNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
