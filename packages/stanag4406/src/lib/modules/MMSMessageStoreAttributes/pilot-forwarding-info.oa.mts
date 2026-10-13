/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { PilotInformation, _decode_PilotInformation, _encode_PilotInformation } from "../MMSHeadingExtensions/PilotInformation.ta.mjs";
import { id_nato_mmhs_hat_pilot_forwarding_info } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-pilot-forwarding-info.va.mjs";


/**
 * @summary pilot_forwarding_info
 * @description
 * 
 * One pilot-information value, stored for equality match. Multi-valued. STANAG
 * 4406 (Ed. 2), Annex A, C.2.5 and A1.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pilot-forwarding-info ATTRIBUTE ::= {
 *   WITH SYNTAX   PilotInformation
 *   ID            id-nato-mmhs-hat-pilot-forwarding-info }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PilotInformation>}
 * @implements {ATTRIBUTE<PilotInformation>}
 */
export
const pilot_forwarding_info: ATTRIBUTE<PilotInformation> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PilotInformation,
    },
    encoderFor: {
        "&Type": _encode_PilotInformation,
    },
    "&id": id_nato_mmhs_hat_pilot_forwarding_info /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
