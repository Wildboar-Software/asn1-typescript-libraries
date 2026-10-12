/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { BodyPartSecurityLabel, _decode_BodyPartSecurityLabel, _encode_BodyPartSecurityLabel } from "../MMSHeadingExtensions/BodyPartSecurityLabel.ta.mjs";
import { id_nato_mmhs_hat_body_part_information_label } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-body-part-information-label.va.mjs";


/**
 * @summary body_part_security_label
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * body-part-security-label ATTRIBUTE ::= {
 *   WITH SYNTAX   BodyPartSecurityLabel
 *   ID            id-nato-mmhs-hat-body-part-security-label }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BodyPartSecurityLabel>}
 * @implements {ATTRIBUTE<BodyPartSecurityLabel>}
 */
export
const body_part_security_label: ATTRIBUTE<BodyPartSecurityLabel> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_BodyPartSecurityLabel,
    },
    encoderFor: {
        "&Type": _encode_BodyPartSecurityLabel,
    },
    // MMSObjectIdentifiers assigns this arc as id-nato-mmhs-hat-body-part-information-label.
    "&id": id_nato_mmhs_hat_body_part_information_label /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
