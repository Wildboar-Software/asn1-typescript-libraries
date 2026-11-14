import {
    ResultAttribute,
    SearchRule,
} from "@wildboar/x500/ServiceAdministration";
import {
    RequestAttribute,
} from "@wildboar/x500/ServiceAdministration";
import { SearchArgumentData, TypeAndContextAssertion } from "@wildboar/x500/DirectoryAbstractService";
import { ObjectIdentifier, TRUE_BIT } from "@wildboar/asn1";
import { ContextProfile } from "@wildboar/x500/ServiceAdministration";
import { getAttributeTypeNegationFromFilter } from "./getAttributeTypeNegationFromFilter.mjs";
import { getRequiredAttributesFromAttributeCombination } from "./getRequiredAttributesFromAttributeCombination.mjs";
import { checkAttributeCombination } from "./checkAttributeCombination.mjs";
import { checkForDisallowedSearchValues } from "./checkForDisallowedSearchValues.mjs";
import { checkForDisallowedContexts } from "./checkForDisallowedContexts.mjs";
import type { AttributeCombination } from "@wildboar/x500/ServiceAdministration";
import { type FilterItem } from "@wildboar/x500/DirectoryAbstractService";
import { type AttributeType, AttributeValueAssertion, ContextAssertion } from "@wildboar/x500/InformationFramework";
import { generalCheckOfSearchFilter } from "./generalCheckOfSearchFilter.mjs";
import { commonName, languageContext, streetAddress } from "@wildboar/x500/SelectedAttributeTypes";
import { BER } from "@wildboar/asn1/functional";

const rule_oid = ObjectIdentifier.fromString("1.2.3.4");

// TODO: Change this API to only return the parents, not the child too?
function getAttributeParentTypes(attributeType: AttributeType): IterableIterator<AttributeType> {
    return [attributeType].values();
}

describe("generalCheckOfSearchFilter", () => {
    it("should return 0 for an empty search if the search rule is empty", () => {
        const search = new SearchArgumentData(
            {
                rdnSequence: [],
            },
        );
        const rule = new SearchRule(
            1,
            rule_oid,
        );
        const [failed_step] = generalCheckOfSearchFilter(search, rule, getAttributeParentTypes);
        expect(failed_step).toBe(0);
    });

    it("should return non-zero for an empty search if the search rule requires an attribute", () => {
        const search = new SearchArgumentData(
            {
                rdnSequence: [],
            },
            undefined,
            // A filter using an attribute type not whitelisted.
            {
                item: {
                    equality: new AttributeValueAssertion(
                        streetAddress["&id"],
                        streetAddress.encoderFor["&Type"]!({ uTF8String: "123 Main St" }, BER),
                    ),
                },
            }
        );
        const rule = new SearchRule(
            1,
            rule_oid,
            undefined,
            undefined,
            [ // Only commonName is whitelisted.
                new RequestAttribute( // TODO: Make request attributes having trailing default values.
                    commonName["&id"],
                    true,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                ),
            ],
        );
        const [failed_step] = generalCheckOfSearchFilter(search, rule, getAttributeParentTypes);
        expect(failed_step).not.toBe(0);
    });

    it("evaluates attribute combinations correctly", () => {
        const search = new SearchArgumentData(
            {
                rdnSequence: [],
            },
            undefined,
            {
                item: {
                    equality: new AttributeValueAssertion(
                        streetAddress["&id"],
                        streetAddress.encoderFor["&Type"]!({ uTF8String: "123 Main St" }, BER),
                    ),
                },
            }
        );

        const getRule = (attr_combo: AttributeCombination): SearchRule => new SearchRule(
            1,
            rule_oid,
            undefined,
            undefined,
            [
                new RequestAttribute(
                    commonName["&id"],
                    true,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                ),
                new RequestAttribute(
                    streetAddress["&id"],
                    true,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                ),
            ],
            attr_combo,
        );
        const rule1 = getRule({
            and: [ // Both attributes are required.
                {
                    attribute: commonName["&id"],
                },
                {
                    attribute: streetAddress["&id"],
                },
            ],
        });
        const [failed_step1] = generalCheckOfSearchFilter(search, rule1, getAttributeParentTypes);
        expect(failed_step1).not.toBe(0);

        // Either commonName must be present and streetAddress must not, or vice versa.
        // Since streetAddress is used alone, this should match.
        const rule2 = getRule({
            or: [
                {
                    and: [
                        {
                            attribute: commonName["&id"],
                        },
                        {
                            not: {
                                attribute: streetAddress["&id"],
                            },
                        }
                    ],
                },
                {
                    and: [
                        {
                            attribute: streetAddress["&id"],
                        },
                        {
                            not: {
                                attribute: commonName["&id"],
                            },
                        }
                    ],
                },
            ],
        });
        const [failed_step2] = generalCheckOfSearchFilter(search, rule2, getAttributeParentTypes);
        expect(failed_step2).toBe(0);
    });

    // TODO: "If a matched entry or compound entry does not contain any of the attributes defined in this component, it is not included in the result."
    it("is not impacted by outputAttributeTypes", () => {
        const search = new SearchArgumentData(
            {
                rdnSequence: [],
            },
            undefined,
            {
                item: {
                    equality: new AttributeValueAssertion(
                        streetAddress["&id"],
                        streetAddress.encoderFor["&Type"]!({ uTF8String: "123 Main St" }, BER),
                    ),
                },
            }
        );

        const rule1 = new SearchRule(
            1,
            rule_oid,
            undefined,
            undefined,
            undefined,
            undefined,
            [
                new ResultAttribute(
                    streetAddress["&id"],
                ),
            ],
        );
        const [failed_step1] = generalCheckOfSearchFilter(search, rule1, getAttributeParentTypes);
        expect(failed_step1).toBe(0);
    });

    // TODO: filter contexts
    // TODO: "If an empty set of attribute values is given, this attribute type can only be effectively present in..."

    // This is skipped (forever) because this procedure does not check for
    // selected values. There is a separate procedure that does this.
    it.skip("restricts what individual attribute values may be used", () => {
        const search = new SearchArgumentData(
            {
                rdnSequence: [],
            },
            undefined,
            {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        commonName.encoderFor["&Type"]!({ uTF8String: "Santa Claus" }, BER),
                    ),
                },
            }
        );

        const rule1 = new SearchRule(
            1,
            rule_oid,
            undefined,
            undefined,
            [
                new RequestAttribute(
                    commonName["&id"],
                    true,
                    [
                        commonName.encoderFor["&Type"]!({ uTF8String: "Saint Nicholas" }, BER),
                    ],
                    undefined,
                    undefined,
                    undefined,
                    undefined,
                ),
            ],
            undefined,
            undefined,

        );
        const [failed_step1] = generalCheckOfSearchFilter(search, rule1, getAttributeParentTypes);
        expect(failed_step1).toBe(4);
    });

    it("restricts what context types may be used in a search filter", () => {
        const search = new SearchArgumentData(
            {
                rdnSequence: [],
            },
            undefined,
            {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        commonName.encoderFor["&Type"]!({ uTF8String: "Santa Claus" }, BER),
                        {
                            selectedContexts: [
                                new ContextAssertion(
                                    languageContext["&id"],
                                    [languageContext.encoderFor["&Type"]!("en", BER)],
                                ),
                            ],
                        },
                    ),
                },
            }
        );

        const rule1 = new SearchRule(
            1,
            rule_oid,
            undefined,
            undefined,
            [
                new RequestAttribute(
                    commonName["&id"],
                    true,
                    undefined,
                    undefined,
                    [],
                    undefined,
                    undefined,
                ),
            ],
            undefined,
            undefined,
        );
        // This rule forbids any contexts at all.
        const [failed_step1] = generalCheckOfSearchFilter(search, rule1, getAttributeParentTypes);
        expect(failed_step1).toBe(5);

        const rule2 = new SearchRule(
            1,
            rule_oid,
            undefined,
            undefined,
            [
                new RequestAttribute(
                    commonName["&id"],
                    true,
                    undefined,
                    undefined,
                    [
                        new ContextProfile(
                            languageContext["&id"],
                            undefined,
                        ),
                    ],
                    undefined,
                    undefined,
                ),
            ],
            undefined,
            undefined,

        );
        // This rule allows the language context, so it should pass.
        const [failed_step2] = generalCheckOfSearchFilter(search, rule2, getAttributeParentTypes);
        expect(failed_step2).toBe(0);
    });
});
