/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { _enum_for_AttributeUsage, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DfrObjectClass, _enum_for_DfrObjectClass, _decode_DfrObjectClass, _encode_DfrObjectClass } from "../DFRAbstractService/DfrObjectClass.ta.mjs";
// export { DfrObjectClass, _enum_for_DfrObjectClass, DfrObjectClass_dfr_document /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_document /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_root_group /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_root_group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_proper_group /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_proper_group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_reference /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_reference /* IMPORTED_SHORT_ENUMERATION_ITEM */, DfrObjectClass_dfr_search_result_list /* IMPORTED_LONG_ENUMERATION_ITEM */, dfr_search_result_list /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DfrObjectClass, _encode_DfrObjectClass } from "../DFRAbstractService/DfrObjectClass.ta.mjs";
import { id_att_dfr_object_class } from "../DFRObjectIdentifiers/id-att-dfr-object-class.va.mjs";
// export { id_att_dfr_object_class } from "../DFRObjectIdentifiers/id-att-dfr-object-class.va.mjs";
import {
    integerMatch,
} from "@wildboar/x500/SelectedAttributeTypes";


/**
 * @summary dfr_object_class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-object-class ATTRIBUTE ::= {
 *     WITH SYNTAX             DfrObjectClass
 *     EQUALITY MATCHING RULE  integerMatch
 *     SINGLE VALUE            TRUE
 *     ID                      id-att-dfr-object-class
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DfrObjectClass>}
 * @implements {ATTRIBUTE<DfrObjectClass>}
 */
export
const dfr_object_class: ATTRIBUTE<DfrObjectClass> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DfrObjectClass,
    },
    encoderFor: {
        "&Type": _encode_DfrObjectClass,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_att_dfr_object_class /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
