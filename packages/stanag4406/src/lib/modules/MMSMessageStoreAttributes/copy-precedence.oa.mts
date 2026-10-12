/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { _decode_MMHSPrecedence, _encode_MMHSPrecedence, MMHSPrecedence } from "../MMSHeadingExtensions/MMHSPrecedence.ta.mjs";
import { id_nato_mmhs_hat_copy_precedence } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-copy-precedence.va.mjs";


/**
 * @summary copy_precedence
 * @description
 * 
 * Copy precedence, stored for equality match. Single-valued. STANAG 4406 (Ed.
 * 2), Annex A, C.2.5 and A1.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * copy-precedence ATTRIBUTE ::= {
 *   WITH SYNTAX   MMHSPrecedence
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-copy-precedence }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<MMHSPrecedence>}
 * @implements {ATTRIBUTE<MMHSPrecedence>}
 */
export
const copy_precedence: ATTRIBUTE<MMHSPrecedence> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MMHSPrecedence,
    },
    encoderFor: {
        "&Type": _encode_MMHSPrecedence,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_copy_precedence /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
