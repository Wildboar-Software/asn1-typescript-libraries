/* eslint-disable */
import {
    Clearance,
    _decode_Clearance,
    _encode_Clearance,
} from "../EnhancedSecurity/Clearance.ta.mjs";
import { id_at_clearance } from "../EnhancedSecurity/id-at-clearance.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary clearance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clearance ATTRIBUTE ::= {
 *   WITH SYNTAX  Clearance
 *   ID           id-at-clearance }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Clearance>}
 * @implements {ATTRIBUTE<Clearance>}
 */
export const clearance: ATTRIBUTE<Clearance> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Clearance,
    },
    encoderFor: {
        "&Type": _encode_Clearance,
    },
    "&id": id_at_clearance /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
