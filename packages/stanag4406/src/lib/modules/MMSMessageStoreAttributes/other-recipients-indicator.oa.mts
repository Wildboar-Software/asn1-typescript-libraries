/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { OtherRecipientDesignator, _decode_OtherRecipientDesignator, _encode_OtherRecipientDesignator } from "../MMSHeadingExtensions/OtherRecipientDesignator.ta.mjs";
import { id_nato_mmhs_hat_other_recipients_indicator } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-other-recipients-indicator.va.mjs";


/**
 * @summary other_recipients_indicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * other-recipients-indicator ATTRIBUTE ::= {
 *   WITH SYNTAX   OtherRecipientDesignator
 *   ID            id-nato-mmhs-hat-other-recipients-indicator }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OtherRecipientDesignator>}
 * @implements {ATTRIBUTE<OtherRecipientDesignator>}
 */
export
const other_recipients_indicator: ATTRIBUTE<OtherRecipientDesignator> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_OtherRecipientDesignator,
    },
    encoderFor: {
        "&Type": _encode_OtherRecipientDesignator,
    },
    "&id": id_nato_mmhs_hat_other_recipients_indicator /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
