/* eslint-disable */
import { id_doa_secondaryShadows } from "../DSAOperationalAttributeTypes/id-doa-secondaryShadows.va.mjs";
import {
    SupplierAndConsumers,
    _decode_SupplierAndConsumers,
    _encode_SupplierAndConsumers,
} from "../DSAOperationalAttributeTypes/SupplierAndConsumers.ta.mjs";
import { supplierAndConsumersMatch } from "../DSAOperationalAttributeTypes/supplierAndConsumersMatch.oa.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
/**
 * @summary secondaryShadows
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secondaryShadows ATTRIBUTE ::= {
 *   WITH SYNTAX             SupplierAndConsumers
 *   EQUALITY MATCHING RULE  supplierAndConsumersMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-secondaryShadows }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<SupplierAndConsumers>}
 * @implements {ATTRIBUTE<SupplierAndConsumers>}
 */
export const secondaryShadows: ATTRIBUTE<SupplierAndConsumers> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SupplierAndConsumers,
    },
    encoderFor: {
        "&Type": _encode_SupplierAndConsumers,
    },
    "&equality-match": supplierAndConsumersMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_secondaryShadows /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
