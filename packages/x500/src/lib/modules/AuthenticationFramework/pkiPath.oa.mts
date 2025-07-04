/* eslint-disable */
import { id_at_pkiPath } from "../AuthenticationFramework/id-at-pkiPath.va.mjs";
import {
    PkiPath,
    _decode_PkiPath,
    _encode_PkiPath,
} from "../AuthenticationFramework/PkiPath.ta.mjs";
import { pkiPathMatch } from "../CertificateExtensions/pkiPathMatch.oa.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary pkiPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiPath ATTRIBUTE ::= {
 *   WITH SYNTAX              PkiPath
 *   EQUALITY MATCHING RULE   pkiPathMatch
 *   ID                       id-at-pkiPath }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PkiPath>}
 * @implements {ATTRIBUTE<PkiPath>}
 */
export const pkiPath: ATTRIBUTE<PkiPath> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PkiPath,
    },
    encoderFor: {
        "&Type": _encode_PkiPath,
    },
    "&equality-match": pkiPathMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_pkiPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
