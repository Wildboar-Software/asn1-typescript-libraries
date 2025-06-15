/* eslint-disable */
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta.mjs";
import { accessPointMatch } from "../DSAOperationalAttributeTypes/accessPointMatch.oa.mjs";
import { id_doa_superiorKnowledge } from "../DSAOperationalAttributeTypes/id-doa-superiorKnowledge.va.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary superiorKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * superiorKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             AccessPoint
 *   EQUALITY MATCHING RULE  accessPointMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-superiorKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<AccessPoint>}
 * @implements {ATTRIBUTE<AccessPoint>}
 */
export const superiorKnowledge: ATTRIBUTE<AccessPoint> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AccessPoint,
    },
    encoderFor: {
        "&Type": _encode_AccessPoint,
    },
    "&equality-match": accessPointMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_superiorKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
