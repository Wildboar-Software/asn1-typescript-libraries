/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { SecurityInformationLabels, _decode_SecurityInformationLabels, _encode_SecurityInformationLabels } from "../MMSHeadingExtensions/SecurityInformationLabels.ta.mjs";
import { id_nato_mmhs_hat_security_information_labels } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-security-information-labels.va.mjs";


/**
 * @summary security_information_labels
 * @description
 * 
 * Security information labels, stored for equality match. Single-valued.
 * Deprecated. The replacement is the ESS security label in Annex B. STANAG 4406
 * (Ed. 2), Annex A, C.2.5 and A1.16.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * security-information-labels ATTRIBUTE ::= {
 *   WITH SYNTAX   SecurityInformationLabels
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-security-information-labels }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<SecurityInformationLabels>}
 * @implements {ATTRIBUTE<SecurityInformationLabels>}
 */
export
const security_information_labels: ATTRIBUTE<SecurityInformationLabels> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SecurityInformationLabels,
    },
    encoderFor: {
        "&Type": _encode_SecurityInformationLabels,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_security_information_labels /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
