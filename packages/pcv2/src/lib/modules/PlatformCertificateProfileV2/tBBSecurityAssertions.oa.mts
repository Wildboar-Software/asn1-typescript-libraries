/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type TBBSecurityAssertions_v3, _decode_TBBSecurityAssertions_v3, _encode_TBBSecurityAssertions_v3 } from "../PlatformCertificateProfileV2/TBBSecurityAssertions-v3.ta.mjs";
import { tcg_at_tbbSecurityAssertions_v3 } from "../PlatformCertificateProfileV2/tcg-at-tbbSecurityAssertions-v3.va.mjs";


/**
 * @summary tBBSecurityAssertions
 * @description
 *
 * Attribute that carries `TBBSecurityAssertions-v3`. Optional. See that type
 * for which traits may appear.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.18.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tBBSecurityAssertions ATTRIBUTE ::= {
 *     WITH SYNTAX     TBBSecurityAssertions-v3
 *     ID              tcg-at-tbbSecurityAssertions-v3
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<TBBSecurityAssertions_v3>}
 * @implements {ATTRIBUTE<TBBSecurityAssertions_v3>}
 */
export
const tBBSecurityAssertions: ATTRIBUTE<TBBSecurityAssertions_v3> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TBBSecurityAssertions_v3,
    },
    encoderFor: {
        "&Type": _encode_TBBSecurityAssertions_v3,
    },
    "&id": tcg_at_tbbSecurityAssertions_v3 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
