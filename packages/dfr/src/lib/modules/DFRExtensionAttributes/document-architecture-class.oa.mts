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
import { DocumentArchitectureClass, _decode_DocumentArchitectureClass, _encode_DocumentArchitectureClass } from "../DFRExtensionAttributes/DocumentArchitectureClass.ta.mjs";
// export { DocumentArchitectureClass, DocumentArchitectureClass_formatted /* IMPORTED_LONG_NAMED_INTEGER */, formatted /* IMPORTED_SHORT_NAMED_INTEGER */, DocumentArchitectureClass_processable /* IMPORTED_LONG_NAMED_INTEGER */, processable /* IMPORTED_SHORT_NAMED_INTEGER */, DocumentArchitectureClass_formatted_processable /* IMPORTED_LONG_NAMED_INTEGER */, formatted_processable /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DocumentArchitectureClass, _encode_DocumentArchitectureClass } from "../DFRExtensionAttributes/DocumentArchitectureClass.ta.mjs";
import { id_att_document_architecture_class } from "../DFRObjectIdentifiers/id-att-document-architecture-class.va.mjs";
// export { id_att_document_architecture_class } from "../DFRObjectIdentifiers/id-att-document-architecture-class.va.mjs";
import {
    integerMatch,
    integerOrderingMatch,
} from "@wildboar/x500/SelectedAttributeTypes";


/**
 * @summary document_architecture_class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * document-architecture-class ATTRIBUTE ::= {
 *     WITH SYNTAX             DocumentArchitectureClass
 *     EQUALITY MATCHING RULE  integerMatch
 *     ORDERING MATCHING RULE  integerOrderingMatch
 *     SINGLE VALUE            TRUE
 *     ID                      id-att-document-architecture-class
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DocumentArchitectureClass>}
 * @implements {ATTRIBUTE<DocumentArchitectureClass>}
 */
export
const document_architecture_class: ATTRIBUTE<DocumentArchitectureClass> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DocumentArchitectureClass,
    },
    encoderFor: {
        "&Type": _encode_DocumentArchitectureClass,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&id": id_att_document_architecture_class /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
