/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { OriginatorReference, _decode_OriginatorReference, _encode_OriginatorReference } from "../MMSHeadingExtensions/OriginatorReference.ta.mjs";
import { id_nato_mmhs_hat_originator_reference } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-originator-reference.va.mjs";


/**
 * @summary originator_reference
 * @description
 * 
 * Originator's number, stored for equality match. Single-valued. STANAG 4406
 * (Ed. 2), Annex A, C.2.5 and A1.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * originator-reference ATTRIBUTE ::= {
 *   WITH SYNTAX   OriginatorReference
 *   SINGLE VALUE  TRUE
 *   ID            id-nato-mmhs-hat-originator-reference }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OriginatorReference>}
 * @implements {ATTRIBUTE<OriginatorReference>}
 */
export
const originator_reference: ATTRIBUTE<OriginatorReference> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_OriginatorReference,
    },
    encoderFor: {
        "&Type": _encode_OriginatorReference,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_nato_mmhs_hat_originator_reference /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
