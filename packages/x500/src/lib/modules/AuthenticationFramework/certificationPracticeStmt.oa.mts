/* eslint-disable */
import { id_at_certificationPracticeStmt } from "../AuthenticationFramework/id-at-certificationPracticeStmt.va.mjs";
import {
    InfoSyntax,
    _decode_InfoSyntax,
    _encode_InfoSyntax,
} from "../AuthenticationFramework/InfoSyntax.ta.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/* START_OF_SYMBOL_DEFINITION certificationPracticeStmt */
/**
 * @summary certificationPracticeStmt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificationPracticeStmt ATTRIBUTE ::= {
 *   WITH SYNTAX  InfoSyntax
 *   ID           id-at-certificationPracticeStmt }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<InfoSyntax>}
 * @implements {ATTRIBUTE<InfoSyntax>}
 */
export const certificationPracticeStmt: ATTRIBUTE<InfoSyntax> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_InfoSyntax,
    },
    encoderFor: {
        "&Type": _encode_InfoSyntax,
    },
    "&id": id_at_certificationPracticeStmt /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificationPracticeStmt */

/* eslint-enable */
