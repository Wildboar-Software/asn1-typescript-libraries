/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "@wildboar/x500/InformationFramework";
import { ExemptedAddress, _decode_ExemptedAddress, _encode_ExemptedAddress } from "../MMSHeadingExtensions/ExemptedAddress.ta.mjs";
import { id_nato_mmhs_hat_exempted_address } from "../MMSObjectIdentifiers/id-nato-mmhs-hat-exempted-address.va.mjs";


/**
 * @summary exempted_address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * exempted-address ATTRIBUTE ::= {
 *   WITH SYNTAX   ExemptedAddress
 *   ID            id-nato-mmhs-hat-exempted-address }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<ExemptedAddress>}
 * @implements {ATTRIBUTE<ExemptedAddress>}
 */
export
const exempted_address: ATTRIBUTE<ExemptedAddress> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ExemptedAddress,
    },
    encoderFor: {
        "&Type": _encode_ExemptedAddress,
    },
    "&id": id_nato_mmhs_hat_exempted_address /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
