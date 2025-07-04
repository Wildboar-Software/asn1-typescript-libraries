/* eslint-disable */
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta.mjs";
import { attributeCertificateExactMatch } from "../AttributeCertificateDefinitions/attributeCertificateExactMatch.oa.mjs";
import { id_at_protPrivPolicy } from "../AttributeCertificateDefinitions/id-at-protPrivPolicy.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary protPrivPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protPrivPolicy ATTRIBUTE ::= {
 *   WITH SYNTAX             AttributeCertificate
 *   EQUALITY MATCHING RULE  attributeCertificateExactMatch
 *   ID                      id-at-protPrivPolicy }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AttributeCertificate>}
 * @implements {ATTRIBUTE<AttributeCertificate>}
 */
export const protPrivPolicy: ATTRIBUTE<AttributeCertificate> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeCertificate,
    },
    encoderFor: {
        "&Type": _encode_AttributeCertificate,
    },
    "&equality-match": attributeCertificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_protPrivPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
