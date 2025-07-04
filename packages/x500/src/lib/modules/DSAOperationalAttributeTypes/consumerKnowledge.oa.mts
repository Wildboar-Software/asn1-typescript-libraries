/* eslint-disable */
import {
    ConsumerInformation,
    _decode_ConsumerInformation,
    _encode_ConsumerInformation,
} from "../DSAOperationalAttributeTypes/ConsumerInformation.ta.mjs";
import { id_doa_consumerKnowledge } from "../DSAOperationalAttributeTypes/id-doa-consumerKnowledge.va.mjs";
import { supplierOrConsumerInformationMatch } from "../DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch.oa.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary consumerKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * consumerKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             ConsumerInformation
 *   EQUALITY MATCHING RULE  supplierOrConsumerInformationMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-consumerKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<ConsumerInformation>}
 * @implements {ATTRIBUTE<ConsumerInformation>}
 */
export const consumerKnowledge: ATTRIBUTE<ConsumerInformation> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ConsumerInformation,
    },
    encoderFor: {
        "&Type": _encode_ConsumerInformation,
    },
    "&equality-match": supplierOrConsumerInformationMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_consumerKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
