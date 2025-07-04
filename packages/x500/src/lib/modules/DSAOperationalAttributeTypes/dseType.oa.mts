/* eslint-disable */
import {
    DSEType,
    _decode_DSEType,
    _encode_DSEType,
} from "../DSAOperationalAttributeTypes/DSEType.ta.mjs";
import { id_doa_dseType } from "../DSAOperationalAttributeTypes/id-doa-dseType.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa.mjs";
/**
 * @summary dseType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dseType ATTRIBUTE ::= {
 *   WITH SYNTAX             DSEType
 *   EQUALITY MATCHING RULE  bitStringMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-dseType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<DSEType>}
 * @implements {ATTRIBUTE<DSEType>}
 */
export const dseType: ATTRIBUTE<DSEType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DSEType,
    },
    encoderFor: {
        "&Type": _encode_DSEType,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_dseType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
