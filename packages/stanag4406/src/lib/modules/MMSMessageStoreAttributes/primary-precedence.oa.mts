/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { _decode_MMHSPrecedence, _encode_MMHSPrecedence, MMHSPrecedence } from "../MMSHeadingExtensions/MMHSPrecedence.ta.mjs";
// export { MMHSPrecedence, MMHSPrecedence_deferred /* IMPORTED_LONG_NAMED_INTEGER */, deferred /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_routine /* IMPORTED_LONG_NAMED_INTEGER */, routine /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_priority /* IMPORTED_LONG_NAMED_INTEGER */, priority /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_immediate /* IMPORTED_LONG_NAMED_INTEGER */, immediate /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_flash /* IMPORTED_LONG_NAMED_INTEGER */, flash /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_override /* IMPORTED_LONG_NAMED_INTEGER */, override /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_ecp /* IMPORTED_LONG_NAMED_INTEGER */, ecp /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_critic /* IMPORTED_LONG_NAMED_INTEGER */, critic /* IMPORTED_SHORT_NAMED_INTEGER */, MMHSPrecedence_override_2 /* IMPORTED_LONG_NAMED_INTEGER */, override_2 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MMHSPrecedence, _encode_MMHSPrecedence } from "../MMSHeadingExtensions/MMHSPrecedence.ta.mjs";
import { id_nato_mmhs_hat_primary_precedence } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-primary-precedence.va.mjs";
// export { id_nato_mmhs_hat_primary_precedence } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-primary-precedence.va.mjs";


/**
 * @summary primary_precedence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * primary-precedence ATTRIBUTE ::= {
 *   WITH SYNTAX   MMHSPrecedence
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-primary-precedence }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<MMHSPrecedence>}
 * @implements {ATTRIBUTE<MMHSPrecedence>}
 */
export
const primary_precedence: ATTRIBUTE<MMHSPrecedence> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MMHSPrecedence,
    },
    encoderFor: {
        "&Type": _encode_MMHSPrecedence,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_primary_precedence /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
