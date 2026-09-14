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
import { DfrUniquePermanentIdentifier, _decode_DfrUniquePermanentIdentifier, _encode_DfrUniquePermanentIdentifier } from "../DFRAbstractService/DfrUniquePermanentIdentifier.ta.mjs";
// export { DfrUniquePermanentIdentifier, _decode_DfrUniquePermanentIdentifier, _encode_DfrUniquePermanentIdentifier } from "../DFRAbstractService/DfrUniquePermanentIdentifier.ta.mjs";
import { id_att_dfr_upi } from "../DFRObjectIdentifiers/id-att-dfr-upi.va.mjs";
// export { id_att_dfr_upi } from "../DFRObjectIdentifiers/id-att-dfr-upi.va.mjs";
import {
    octetStringMatch,
} from "@wildboar/x500/SelectedAttributeTypes";


/**
 * @summary dfr_upi
 * @description
 *
 * Server-assigned unique identifier of the object. Opaque, immutable for the
 * object's life, unique even among deleted objects. Equality match.
 * Single-valued. Not copied by Copy. ISO/IEC 10166-1:1991 §9.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dfr-upi ATTRIBUTE ::= {
 *     WITH SYNTAX             DfrUniquePermanentIdentifier
 *     EQUALITY MATCHING RULE  octetStringMatch
 *     SINGLE VALUE            TRUE
 *     ID                      id-att-dfr-upi
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DfrUniquePermanentIdentifier>}
 * @implements {ATTRIBUTE<DfrUniquePermanentIdentifier>}
 */
export
const dfr_upi: ATTRIBUTE<DfrUniquePermanentIdentifier> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DfrUniquePermanentIdentifier,
    },
    encoderFor: {
        "&Type": _encode_DfrUniquePermanentIdentifier,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_att_dfr_upi /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
