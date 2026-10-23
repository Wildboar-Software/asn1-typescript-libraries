/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { TPMSecurityAssertions, _decode_TPMSecurityAssertions, _encode_TPMSecurityAssertions } from "../EKCredentialProfileV2/TPMSecurityAssertions.ta.mjs";
import { tcg_at_tpmSecurityAssertions } from "../EKCredentialProfileV2/tcg-at-tpmSecurityAssertions.va.mjs";


/**
 * @summary tPMSecurityAssertions
 * @description
 *
 * Attribute that carries `TPMSecurityAssertions`. Its identifier is
 * `tcg-at-tpmSecurityAssertions`. Certificates that conform to this version of
 * the profile should omit it.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1
 * and §3.2.11.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tPMSecurityAssertions ATTRIBUTE ::= {
 *     WITH SYNTAX     TPMSecurityAssertions
 *     ID              tcg-at-tpmSecurityAssertions
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<TPMSecurityAssertions>}
 * @implements {ATTRIBUTE<TPMSecurityAssertions>}
 */
export
const tPMSecurityAssertions: ATTRIBUTE<TPMSecurityAssertions> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TPMSecurityAssertions,
    },
    encoderFor: {
        "&Type": _encode_TPMSecurityAssertions,
    },
    "&id": tcg_at_tpmSecurityAssertions /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
