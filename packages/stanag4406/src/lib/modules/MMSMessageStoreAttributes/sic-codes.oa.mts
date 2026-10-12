/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { Sic, _decode_Sic, _encode_Sic } from "../MMSHeadingExtensions/Sic.ta.mjs";
import { id_nato_mmhs_hat_sic_codes } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-sic-codes.va.mjs";


/**
 * @summary sic_codes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sic-codes ATTRIBUTE ::= {
 *   WITH SYNTAX   Sic
 *   ID            id-nato-mmhs-hat-sic-codes }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Sic>}
 * @implements {ATTRIBUTE<Sic>}
 */
export
const sic_codes: ATTRIBUTE<Sic> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Sic,
    },
    encoderFor: {
        "&Type": _encode_Sic,
    },
    "&id": id_nato_mmhs_hat_sic_codes /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
