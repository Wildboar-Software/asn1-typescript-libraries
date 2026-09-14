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
import { DfrAccessListElement, _decode_DfrAccessListElement, _encode_DfrAccessListElement } from "../DFRBasicAttributes/DfrAccessListElement.ta.mjs";
// export { DfrAccessListElement, _decode_DfrAccessListElement, _encode_DfrAccessListElement } from "../DFRBasicAttributes/DfrAccessListElement.ta.mjs";
import { id_att_dfr_access_list } from "../DFRObjectIdentifiers/id-att-dfr-access-list.va.mjs";
// export { id_att_dfr_access_list } from "../DFRObjectIdentifiers/id-att-dfr-access-list.va.mjs";


/**
 * @summary dfr_access_list
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-access-list ATTRIBUTE ::= {
 *     WITH SYNTAX             DfrAccessListElement
 *     ID                      id-att-dfr-access-list
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DfrAccessListElement>}
 * @implements {ATTRIBUTE<DfrAccessListElement>}
 */
export
const dfr_access_list: ATTRIBUTE<DfrAccessListElement> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DfrAccessListElement,
    },
    encoderFor: {
        "&Type": _encode_DfrAccessListElement,
    },
    "&id": id_att_dfr_access_list /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
