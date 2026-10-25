/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { tcg_at_tpmPQCVersion } from "../EKCredentialProfileV2/tcg-at-tpmPQCVersion.va.mjs";


/**
 * @summary tpmPQCVersion
 * @description
 *
 * Minimum firmware version at which this TPM can use its ML-KEM or ML-DSA
 * endorsement key. The integer is the big-endian concatenation of
 * `TPM_PT_FIRMWARE_VERSION_1` and `TPM_PT_FIRMWARE_VERSION_2` (64 bits).
 * `TPM_PT_FIRMWARE_VERSION_2` may be zero when version 1 alone identifies the
 * firmware.
 *
 * Required when a post-manufacturing firmware upgrade is required before the
 * ML-KEM or ML-DSA endorsement key can be used. Otherwise the attribute is
 * omitted.
 *
 * When present, the integer is greater than the firmware version at
 * manufacturing and greater than every later firmware that still cannot use
 * those keys, and it is less than or equal to every firmware that can. A
 * verifier compares the TPM's current firmware version with this integer to
 * decide whether post-quantum use is available.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.5
 * and §3.2.11.3.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tpmPQCVersion ATTRIBUTE ::= {
 *     WITH SYNTAX     INTEGER
 *     ID              tcg-at-tpmPQCVersion
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const tpmPQCVersion: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&id": tcg_at_tpmPQCVersion /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
