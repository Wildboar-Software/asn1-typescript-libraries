import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import type { EntryInformationSelection } from "../modules/DirectoryAbstractService/EntryInformationSelection.ta";
import { EntryInformation } from "../modules/DirectoryAbstractService/EntryInformation.ta";
import type { Context } from "../modules/InformationFramework/Context.ta";
import type {
    TypeAndContextAssertion,
} from "../modules/DirectoryAbstractService/TypeAndContextAssertion.ta";
import type {
    ContextAssertion,
} from "../modules/InformationFramework/ContextAssertion.ta";
import type {
    EntryInformation_information_Item,
} from "../modules/DirectoryAbstractService/EntryInformation-information-Item.ta";
import {
    EntryInformationSelection_infoTypes_attributeTypesAndValues,
    EntryInformationSelection_infoTypes_attributeTypesOnly,
} from "../modules/DirectoryAbstractService/EntryInformationSelection-infoTypes.ta";
import {
    Attribute,
} from "../modules/InformationFramework/Attribute.ta";
import {
    Attribute_valuesWithContext_Item,
} from "../modules/InformationFramework/Attribute-valuesWithContext-Item.ta";
import type ContextMatcher from "../types/ContextMatcher";
import {
    id_oa_allAttributeTypes,
} from "../modules/InformationFramework/id-oa-allAttributeTypes.va";
import groupByOID from "./groupByOID";
import { strict as assert } from "assert";
import evaluateContextAssertion from "./evaluateContextAssertion";

type ATVAC = [ OBJECT_IDENTIFIER, ASN1Element | undefined, Context[] ];

const ALL_ATTRIBUTE_TYPES: string = id_oa_allAttributeTypes.toString();

/**
 * @summary selectFromEntry
 * @description
 *
 * This implementation handles
 *
 * - Attribute subtyping
 * - `preference`
 * - `id-oa-allAttributeTypes`
 *
 * ### ASN.1 Definitions:
 *
 * ```asn1
 * EntryInformationSelection ::= SET {
 *   attributes                     CHOICE {
 *     allUserAttributes         [0]  NULL,
 *     select                    [1]  SET OF AttributeType
 *     -- empty set implies no attributes are requested -- } DEFAULT allUserAttributes:NULL,
 *     infoTypes               [2]  INTEGER {
 *       attributeTypesOnly        (0),
 *       attributeTypesAndValues   (1)} DEFAULT attributeTypesAndValues,
 *   extraAttributes                CHOICE {
 *     allOperationalAttributes  [3]  NULL,
 *     select                    [4]  SET SIZE (1..MAX) OF AttributeType } OPTIONAL,
 *   contextSelection               ContextSelection OPTIONAL,
 *   returnContexts                 BOOLEAN DEFAULT FALSE,
 *   familyReturn                   FamilyReturn DEFAULT
 *                                    {memberSelect contributingEntriesOnly} }
 *
 * ContextSelection  ::=  CHOICE {
 *   allContexts       NULL,
 *   selectedContexts  SET SIZE (1..MAX) OF TypeAndContextAssertion,
 *   ... }
 *
 * TypeAndContextAssertion ::= SEQUENCE {
 *   type               AttributeType,
 *   contextAssertions  CHOICE {
 *     preference         SEQUENCE OF ContextAssertion,
 *     all                SET OF ContextAssertion,
 *     ...},
 *   ... }
 *
 * EntryInformation ::= SEQUENCE {
 *   name                  Name,
 *   fromEntry             BOOLEAN DEFAULT TRUE,
 *   information           SET SIZE (1..MAX) OF CHOICE {
 *     attributeType         AttributeType,
 *     attribute             Attribute{{SupportedAttributes}},
 *     ...} OPTIONAL,
 *   incompleteEntry  [3]  BOOLEAN DEFAULT FALSE,
 *   partialName      [4]  BOOLEAN DEFAULT FALSE,
 *   derivedEntry     [5]  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 */
export
function selectFromEntry (
    eis: EntryInformationSelection,
    entry: EntryInformation,
    isOperationalAttribute: (attributeType: OBJECT_IDENTIFIER) => boolean | undefined,
    getContextMatcher: (contextType: OBJECT_IDENTIFIER) => ContextMatcher | undefined,
    getAttributeSupertypes: (attributeType: OBJECT_IDENTIFIER) => OBJECT_IDENTIFIER[],
): EntryInformation {
    const attributes: Set<string> | undefined = (eis.attributes && ("select" in eis.attributes))
        ? new Set(eis.attributes.select.map((attr) => attr.toString()))
        : undefined;
    const extraAttributes: Set<string> | undefined = (eis.extraAttributes && ("select" in eis.extraAttributes))
        ? new Set(eis.extraAttributes.select.map((attr) => attr.toString()))
        : undefined;
    const selectedContexts: Record<string, TypeAndContextAssertion[]> | undefined = (
        eis.contextSelection
        && ("selectedContexts" in eis.contextSelection)
    )
        ? groupByOID(eis.contextSelection.selectedContexts, (sc) => sc.type_)
        : undefined;

    const selectedAttributes: ATVAC[] = entry.information
        .filter((info): boolean => {
            let attributeType!: OBJECT_IDENTIFIER;
            if ("attributeType" in info) {
                attributeType = info.attributeType;
            } else if ("attribute" in info) {
                attributeType = info.attribute.type_;
            } else {
                return false;
            }
            const isOperational = isOperationalAttribute(attributeType);
            if (isOperational) {
                if (eis.extraAttributes && ("allOperationalAttributes" in eis.extraAttributes)) {
                    return true;
                }
                if (extraAttributes) {
                    return extraAttributes.has(attributeType.toString());
                } else {
                    return false;
                }
            } else {
                if (attributes) {
                    return attributes.has(attributeType.toString());
                } else {
                    return true;
                }
            }
        })
        .flatMap((info): ATVAC[] => {
            if ("attributeType" in info) {
                return [[ info.attributeType, undefined, [] ]];
            } else if ("attribute" in info) {
                const attr = info.attribute;
                return [
                    ...attr.values
                        .map((value): ATVAC => [ attr.type_, value, [] ]),
                    ...(attr.valuesWithContext ?? [])
                        .map((vwc): ATVAC => [ attr.type_, vwc.value, vwc.contextList ]),
                ];
            } else {
                return [];
            }
        });

    const preferences: Map<ContextAssertion[], number> = new Map();

    const attributesSelectedByContext = selectedContexts
        ? selectedAttributes
            .filter((atvac: ATVAC): boolean => {
                const [ type_, value, contexts ] = atvac;
                // A ContextAssertion is true for a particular attribute value if:
                // ...the attribute value contains no contexts of the asserted contextType
                if (!value || (contexts.length === 0)) {
                    return true;
                }
                const TYPE_OID: string = type_.toString();
                const typeAndSuperTypes: Set<string> = new Set([
                    TYPE_OID,
                    ALL_ATTRIBUTE_TYPES,
                    ...getAttributeSupertypes(type_).map((oid) => oid.toString()),
                ]);
                const typeAndContextAssertions = Array.from(typeAndSuperTypes)
                    .flatMap((oid) => selectedContexts[oid] ?? []);
                if (typeAndContextAssertions.length === 0) {
                    return true; // There are no context assertions for this attribute type.
                }
                return typeAndContextAssertions.every((taca): boolean => {
                    if ("all" in taca.contextAssertions) {
                        return taca.contextAssertions.all.every((ca): boolean => evaluateContextAssertion(ca, contexts, getContextMatcher));
                    } else if ("preference" in taca.contextAssertions) { // This first pass only establishes the preference, but does not filter by it.
                        const existingPreference = preferences.get(taca.contextAssertions.preference);
                        const preferred: number = taca.contextAssertions.preference
                            // Slice so we don't repeatedly retry already superseded assertions.
                            .slice(0, ((existingPreference > -1) ? existingPreference : Infinity))
                            .findIndex((ca: ContextAssertion): boolean => evaluateContextAssertion(ca, contexts, getContextMatcher));
                        if ( // To become the new preferred context assertion,
                            (preferred > -1) // ...obviously, there must be a match
                            && ( // ...but also,
                                (existingPreference < 0) // there must either be no existing preference, or
                                // ...it must also be _more_ preferred than the existing preference to supplant it.
                                || (preferred < existingPreference)
                            )
                        ) {
                            preferences.set(taca.contextAssertions.preference, preferred);
                        }
                        return true;
                    } else {
                        return false; // We do not understand any other type of context assertion.
                    }
                });
            })
            .filter((atvac: ATVAC): boolean => {
                const [ type_, value, contexts ] = atvac;
                // A ContextAssertion is true for a particular attribute value if:
                // ...the attribute value contains no contexts of the asserted contextType
                if (!value || (contexts.length === 0)) {
                    return true;
                }
                const TYPE_OID: string = type_.toString();
                const typeAndSuperTypes: Set<string> = new Set([
                    TYPE_OID,
                    ALL_ATTRIBUTE_TYPES,
                    ...getAttributeSupertypes(type_).map((oid) => oid.toString()),
                ]);
                const typeAndContextAssertions = Array.from(typeAndSuperTypes)
                    .flatMap((oid) => selectedContexts[oid] ?? []);
                if (typeAndContextAssertions.length === 0) {
                    return true; // There are no context assertions for this attribute type.
                }
                return typeAndContextAssertions.every((taca): boolean => {
                    if (!("preference" in taca.contextAssertions)) {
                        return true; // We already filtered by this.
                    }
                    const prefIndex = preferences.get(taca.contextAssertions.preference);
                    if (prefIndex === undefined) {
                        return true; // TODO: Is this correct?
                    }
                    assert(prefIndex > -1);
                    const pref = taca.contextAssertions.preference[prefIndex];
                    assert(pref);
                    return evaluateContextAssertion(pref, contexts, getContextMatcher);
                });
            })
        : selectedAttributes;

    const protoAttributes = groupByOID(attributesSelectedByContext, (atvac) => atvac[0]);
    const infos: EntryInformation_information_Item[] = Object.values(protoAttributes)
        .map((attrs: ATVAC[]): EntryInformation_information_Item => {
            if (eis.infoTypes === EntryInformationSelection_infoTypes_attributeTypesOnly) {
                return {
                    attributeType: attrs[0][0],
                };
            } else if (eis.infoTypes === EntryInformationSelection_infoTypes_attributeTypesAndValues) {
                return {
                    attribute: new Attribute(
                        attrs[0][0],
                        attrs
                            .filter((attr): boolean => (eis.returnContexts ? (attr[2].length === 0) : true))
                            .map((attr) => attr[1]),
                        (eis.returnContexts)
                            ? attrs
                                .filter((attr): boolean => (attr[2].length > 0))
                                .map((attr) => new Attribute_valuesWithContext_Item(
                                    attr[1],
                                    attr[2],
                                ))
                            : undefined,
                        undefined,
                    ),
                }
            } else {
                throw new Error(); // Not understood request.
            }
        })

    const newEntryInformation: EntryInformation = new EntryInformation(
        entry.name,
        entry.fromEntry,
        infos,
        entry.incompleteEntry,
        entry.partialName,
        entry.derivedEntry,
        entry._unrecognizedExtensionsList,
    );

    return newEntryInformation;
}

export default selectFromEntry;
