/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_oa_subtreeSpecification } from "../InformationFramework/id-oa-subtreeSpecification.va.mjs";
import {
    SubtreeSpecification,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "../InformationFramework/SubtreeSpecification.ta.mjs";
import { subtreeSpec } from "../SelectedAttributeTypes/subtreeSpec.oa.mjs";
/**
 * @summary subtreeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subtreeSpecification ATTRIBUTE ::= {
 *   WITH SYNTAX             SubtreeSpecification
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             subtreeSpec.&id
 *   LDAP-NAME               {"subtreeSpecification"}
 *   ID                      id-oa-subtreeSpecification }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SubtreeSpecification>}
 * @implements {ATTRIBUTE<SubtreeSpecification>}
 */
export const subtreeSpecification: ATTRIBUTE<SubtreeSpecification> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SubtreeSpecification,
    },
    encoderFor: {
        "&Type": _encode_SubtreeSpecification,
    },
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": subtreeSpec["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["subtreeSpecification"],
    "&id": id_oa_subtreeSpecification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
