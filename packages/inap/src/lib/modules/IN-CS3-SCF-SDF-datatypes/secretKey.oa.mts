/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_secretKey } from "../IN-CS3-object-identifiers/id-at-secretKey.va.mjs";
// export { id_at_secretKey } from "../IN-CS3-object-identifiers/id-at-secretKey.va.mjs";


/**
 * @summary secretKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * secretKey ATTRIBUTE ::= {
 *   WITH SYNTAX   BIT STRING(SIZE (lb-secretKey..ub-secretKey))
 *   SINGLE VALUE  TRUE
 *   ID            id-at-secretKey
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BIT_STRING>}
 * @implements {ATTRIBUTE<BIT_STRING>}
 */
export
const secretKey: ATTRIBUTE<BIT_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBitString,
    },
    encoderFor: {
        "&Type": $._encodeBitString,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_at_secretKey /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
