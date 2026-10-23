/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { TCGPlatformSpecification, _decode_TCGPlatformSpecification, _encode_TCGPlatformSpecification } from "../PlatformCertificateProfileV2/TCGPlatformSpecification.ta.mjs";
import { tcg_at_tcgPlatformSpecification } from "../PlatformCertificateProfileV2/tcg-at-tcgPlatformSpecification.va.mjs";


/**
 * @summary tCGPlatformSpecification
 * @description
 *
 * Attribute that carries `TCGPlatformSpecification`. Required on a base
 * certificate and optional on a delta certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.17.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tCGPlatformSpecification ATTRIBUTE ::= {
 *     WITH SYNTAX     TCGPlatformSpecification
 *     ID              tcg-at-tcgPlatformSpecification
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<TCGPlatformSpecification>}
 * @implements {ATTRIBUTE<TCGPlatformSpecification>}
 */
export
const tCGPlatformSpecification: ATTRIBUTE<TCGPlatformSpecification> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TCGPlatformSpecification,
    },
    encoderFor: {
        "&Type": _encode_TCGPlatformSpecification,
    },
    "&id": tcg_at_tcgPlatformSpecification /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
