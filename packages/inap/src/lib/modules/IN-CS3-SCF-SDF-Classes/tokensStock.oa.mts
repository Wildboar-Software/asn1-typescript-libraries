/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { stockId } from "../IN-CS3-SCF-SDF-datatypes/stockId.oa.mjs";
// export { stockId } from "../IN-CS3-SCF-SDF-datatypes/stockId.oa.mjs";
import { stock } from "../IN-CS3-SCF-SDF-datatypes/stock.oa.mjs";
// export { stock } from "../IN-CS3-SCF-SDF-datatypes/stock.oa.mjs";
import { source } from "../IN-CS3-SCF-SDF-datatypes/source.oa.mjs";
// export { source } from "../IN-CS3-SCF-SDF-datatypes/source.oa.mjs";
import { sizeOfRestocking } from "../IN-CS3-SCF-SDF-datatypes/sizeOfRestocking.oa.mjs";
// export { sizeOfRestocking } from "../IN-CS3-SCF-SDF-datatypes/sizeOfRestocking.oa.mjs";
import { id_oc_tokensStock } from "../IN-CS3-object-identifiers/id-oc-tokensStock.va.mjs";
// export { id_oc_tokensStock } from "../IN-CS3-object-identifiers/id-oc-tokensStock.va.mjs";


/**
 * @summary tokensStock
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tokensStock OBJECT-CLASS ::= {
 *   KIND          abstract
 *   MUST CONTAIN  {stockId | stock}
 *   MAY CONTAIN   {source | sizeOfRestocking}
 *   ID            id-oc-tokensStock
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tokensStock: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ stockId, stock, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ source, sizeOfRestocking, ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_tokensStock /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
