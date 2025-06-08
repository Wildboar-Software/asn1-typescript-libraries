import { EntryInformationSelection } from "../modules/DirectoryAbstractService/EntryInformationSelection.ta";

/**
 * @summary Convenience default value for EntryInformationSelection.
 *
 * ### ASN.1 Definition
 *
 * ```asn1
 * EntryInformationSelection ::= SET {
 *     attributes                     CHOICE {
 *       allUserAttributes         [0]  NULL,
 *       select                    [1]  SET OF AttributeType
 *       -- empty set implies no attributes are requested -- } DEFAULT allUserAttributes:NULL,
 *       infoTypes               [2]  INTEGER {
 *         attributeTypesOnly        (0),
 *         attributeTypesAndValues   (1)} DEFAULT attributeTypesAndValues,
 *     extraAttributes                CHOICE {
 *       allOperationalAttributes  [3]  NULL,
 *       select                    [4]  SET SIZE (1..MAX) OF AttributeType } OPTIONAL,
 *     contextSelection               ContextSelection OPTIONAL,
 *     returnContexts                 BOOLEAN DEFAULT FALSE,
 *     familyReturn                   FamilyReturn DEFAULT
 *                                      {memberSelect contributingEntriesOnly} }
 * ```
 */
export
const defaultEntryInformationSelection: EntryInformationSelection = new EntryInformationSelection(
    EntryInformationSelection._default_value_for_attributes,
    EntryInformationSelection._default_value_for_infoTypes,
    undefined,
    undefined,
    undefined,
    EntryInformationSelection._default_value_for_familyReturn,
);

export default defaultEntryInformationSelection;
