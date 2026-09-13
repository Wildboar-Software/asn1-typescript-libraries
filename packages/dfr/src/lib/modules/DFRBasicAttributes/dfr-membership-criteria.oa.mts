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
import { Filter, _decode_Filter, _encode_Filter } from "../DirectoryAbstractService/Filter.ta.mjs";
// export { Filter, _decode_Filter, _encode_Filter } from "../DirectoryAbstractService/Filter.ta.mjs";
import { id_att_dfr_membership_criteria } from "../DFRObjectIdentifiers/id-att-dfr-membership-criteria.va.mjs";
// export { id_att_dfr_membership_criteria } from "../DFRObjectIdentifiers/id-att-dfr-membership-criteria.va.mjs";


/**
 * @summary dfr_membership_criteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-membership-criteria ATTRIBUTE ::= {
 *     WITH SYNTAX             Filter
 *     SINGLE VALUE            TRUE
 *     ID                      id-att-dfr-membership-criteria
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Filter>}
 * @implements {ATTRIBUTE<Filter>}
 */
export
const dfr_membership_criteria: ATTRIBUTE<Filter> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Filter,
    },
    encoderFor: {
        "&Type": _encode_Filter,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_att_dfr_membership_criteria /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
