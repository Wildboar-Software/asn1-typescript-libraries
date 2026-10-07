/**
 * @packageDocumentation
 *
 * ASN.1 module `RecordSyntax-explain`.
 *
 * Short named-integer exports omitted because they collide:
 * - `search` (AccessRestrictions_Item_accessType_search and ProcessingInformation_processingContext_search). Use the long forms.
 * - `present` (AccessRestrictions_Item_accessType_present and Permissions_Item_allowableFunctions_present). Use the long forms.
 * - `date` (Challenge_Item_dataType_date and PrimitiveDataType_date). Use the long forms.
 */
export * from "./AccessInfo.ta.mjs";
export {
    AccessRestrictions_Item_accessType,
    AccessRestrictions_Item_accessType_any_,
    any_,
    AccessRestrictions_Item_accessType_search,
    AccessRestrictions_Item_accessType_present,
    AccessRestrictions_Item_accessType_specific_elements,
    specific_elements,
    AccessRestrictions_Item_accessType_extended_services,
    extended_services,
    AccessRestrictions_Item_accessType_by_database,
    by_database,
    _decode_AccessRestrictions_Item_accessType,
    _encode_AccessRestrictions_Item_accessType,
} from "./AccessRestrictions-Item-accessType.ta.mjs";
export * from "./AccessRestrictions-Item.ta.mjs";
export * from "./AccessRestrictions.ta.mjs";
export * from "./AttributeCombination.ta.mjs";
export * from "./AttributeCombinations.ta.mjs";
export * from "./AttributeDescription.ta.mjs";
export * from "./AttributeDetails.ta.mjs";
export * from "./AttributeOccurrence-attributeValues.ta.mjs";
export * from "./AttributeOccurrence.ta.mjs";
export * from "./AttributeSetDetails.ta.mjs";
export * from "./AttributeSetInfo.ta.mjs";
export * from "./AttributeType.ta.mjs";
export * from "./AttributeTypeDetails.ta.mjs";
export * from "./AttributeValue.ta.mjs";
export * from "./CategoryInfo.ta.mjs";
export * from "./CategoryList.ta.mjs";
export * from "./Charge.ta.mjs";
export * from "./CommonInfo.ta.mjs";
export * from "./ContactInfo.ta.mjs";
export * from "./Costs-otherCharges-Item.ta.mjs";
export * from "./Costs.ta.mjs";
export * from "./DatabaseInfo-recordCount.ta.mjs";
export * from "./DatabaseInfo.ta.mjs";
export * from "./DatabaseList.ta.mjs";
export * from "./ElementDataType.ta.mjs";
export * from "./ElementInfo.ta.mjs";
export * from "./ElementSetDetails.ta.mjs";
export * from "./Explain-Record.ta.mjs";
export * from "./ExtendedServicesInfo-waitAction.ta.mjs";
export * from "./ExtendedServicesInfo.ta.mjs";
export * from "./HumanString-Item.ta.mjs";
export * from "./HumanString.ta.mjs";
export * from "./IconObject-Item-bodyType.ta.mjs";
export * from "./IconObject-Item.ta.mjs";
export * from "./IconObject.ta.mjs";
export * from "./Iso8777Capabilities.ta.mjs";
export * from "./LanguageCode.ta.mjs";
export * from "./NetworkAddress-internetAddress.ta.mjs";
export * from "./NetworkAddress-osiPresentationAddress.ta.mjs";
export * from "./NetworkAddress-other.ta.mjs";
export * from "./NetworkAddress.ta.mjs";
export * from "./OmittedAttributeInterpretation.ta.mjs";
export * from "./Path-Item.ta.mjs";
export * from "./Path.ta.mjs";
export * from "./PerElementDetails.ta.mjs";
export {
    PrimitiveDataType,
    PrimitiveDataType_octetString,
    octetString,
    PrimitiveDataType_numeric,
    numeric,
    PrimitiveDataType_date,
    PrimitiveDataType_external,
    external,
    PrimitiveDataType_string_,
    string_,
    PrimitiveDataType_trueOrFalse,
    trueOrFalse,
    PrimitiveDataType_oid,
    oid,
    PrimitiveDataType_intUnit,
    intUnit,
    PrimitiveDataType_empty,
    empty,
    PrimitiveDataType_noneOfTheAbove,
    noneOfTheAbove,
    _decode_PrimitiveDataType,
    _encode_PrimitiveDataType,
} from "./PrimitiveDataType.ta.mjs";
export * from "./PrivateCapabilities-operators-Item.ta.mjs";
export * from "./PrivateCapabilities.ta.mjs";
export {
    ProcessingInformation_processingContext,
    ProcessingInformation_processingContext_access,
    access,
    ProcessingInformation_processingContext_search,
    ProcessingInformation_processingContext_retrieval,
    retrieval,
    ProcessingInformation_processingContext_record_presentation,
    record_presentation,
    ProcessingInformation_processingContext_record_handling,
    record_handling,
    _decode_ProcessingInformation_processingContext,
    _encode_ProcessingInformation_processingContext,
} from "./ProcessingInformation-processingContext.ta.mjs";
export * from "./ProcessingInformation.ta.mjs";
export * from "./ProximitySupport-unitsSupported-Item-private.ta.mjs";
export * from "./ProximitySupport-unitsSupported-Item.ta.mjs";
export * from "./ProximitySupport.ta.mjs";
export * from "./QueryTypeDetails.ta.mjs";
export * from "./RecordSyntaxInfo.ta.mjs";
export * from "./RecordTag.ta.mjs";
export * from "./RetrievalRecordDetails.ta.mjs";
export * from "./RpnCapabilities.ta.mjs";
export * from "./SchemaInfo-tagTypeMapping-Item.ta.mjs";
export * from "./SchemaInfo.ta.mjs";
export * from "./SearchKey.ta.mjs";
export * from "./SortDetails.ta.mjs";
export * from "./SortKeyDetails-caseSensitivity.ta.mjs";
export * from "./SortKeyDetails-sortType.ta.mjs";
export * from "./SortKeyDetails.ta.mjs";
export * from "./TagSetInfo-elements-Item.ta.mjs";
export * from "./TagSetInfo.ta.mjs";
export * from "./TargetInfo.ta.mjs";
export * from "./TermListDetails-scanInfo.ta.mjs";
export * from "./TermListDetails.ta.mjs";
export * from "./TermListInfo-termLists-Item-searchCost.ta.mjs";
export * from "./TermListInfo-termLists-Item.ta.mjs";
export * from "./TermListInfo.ta.mjs";
export * from "./UnitInfo.ta.mjs";
export * from "./UnitType.ta.mjs";
export * from "./Units.ta.mjs";
export * from "./ValueDescription.ta.mjs";
export * from "./ValueRange.ta.mjs";
export * from "./ValueSet.ta.mjs";
export * from "./VariantClass.ta.mjs";
export * from "./VariantSetInfo.ta.mjs";
export * from "./VariantType.ta.mjs";
export * from "./VariantValue.ta.mjs";
