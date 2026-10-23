/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { EKCredentialAlgorithmList, _decode_EKCredentialAlgorithmList, _encode_EKCredentialAlgorithmList } from "../EKCredentialProfileV2/EKCredentialAlgorithmList.ta.mjs";
import { tcg_at_tpmEKCredentialAlgorithms } from "../EKCredentialProfileV2/tcg-at-tpmEKCredentialAlgorithms.va.mjs";


/**
 * @summary tpmEKCredentialAlgorithms
 * @description
 *
 * Attribute that carries `EKCredentialAlgorithmList` in the subject directory
 * attributes extension. See that type for when the attribute is required and
 * which identifiers it contains.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.4
 * and §3.2.11.2.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tpmEKCredentialAlgorithms ATTRIBUTE ::= {
 *     WITH SYNTAX     EKCredentialAlgorithmList
 *     ID              tcg-at-tpmEKCredentialAlgorithms
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<EKCredentialAlgorithmList>}
 * @implements {ATTRIBUTE<EKCredentialAlgorithmList>}
 */
export
const tpmEKCredentialAlgorithms: ATTRIBUTE<EKCredentialAlgorithmList> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_EKCredentialAlgorithmList,
    },
    encoderFor: {
        "&Type": _encode_EKCredentialAlgorithmList,
    },
    "&id": tcg_at_tpmEKCredentialAlgorithms /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
