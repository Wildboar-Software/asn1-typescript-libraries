/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    _decode_Attribute,
    _encode_Attribute,
    Attribute,
} from "../InformationFramework/Attribute.ta.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { pkcs_9_at_extendedCertificateAttributes } from "../PKCS-9/pkcs-9-at-extendedCertificateAttributes.va.mjs";

/**
 * @summary extendedCertificateAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * extendedCertificateAttributes ATTRIBUTE ::= {
 *         WITH SYNTAX SET OF Attribute
 *         SINGLE VALUE TRUE
 *         ID pkcs-9-at-extendedCertificateAttributes
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Attribute[]>}
 * @implements {ATTRIBUTE<Attribute[]>}
 */
export
const extendedCertificateAttributes: ATTRIBUTE<Attribute[]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeSetOf<Attribute>(() => _decode_Attribute),
    },
    encoderFor: {
        "&Type": $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER),
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_at_extendedCertificateAttributes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
