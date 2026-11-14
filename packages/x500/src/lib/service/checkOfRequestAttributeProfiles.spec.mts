import { ContextProfile, SearchRule } from "@wildboar/x500/ServiceAdministration";
import { SearchArgumentData } from "@wildboar/x500/DirectoryAbstractService";
import { RequestAttribute } from "@wildboar/x500/ServiceAdministration";
import { ObjectIdentifier } from "@wildboar/asn1";
import { name, commonName, languageContext, localeContext } from "@wildboar/x500/SelectedAttributeTypes";
import type { Filter } from "@wildboar/x500/DirectoryAbstractService";
import { type AttributeType, AttributeValueAssertion, ContextAssertion } from "@wildboar/x500/InformationFramework";
import { checkOfRequestAttributeProfiles } from "./checkOfRequestAttributeProfiles.mjs";
import { BER } from "@wildboar/asn1/functional";
import type { ContextMatcher, Matcher } from "@wildboar/x500";
import { generalCheckOfSearchFilter } from "./generalCheckOfSearchFilter.mjs";

const rule_oid = ObjectIdentifier.fromString("1.2.3.4");

function* getAttributeParentTypes(attributeType: AttributeType): IterableIterator<AttributeType> {
    yield attributeType;
    if (attributeType.isEqualTo(commonName["&id"])) {
        yield name["&id"];
    }
}

describe("checkOfRequestAttributeProfiles", () => {
    it("should not find any violations in the simplest compliant case", () => {
        const filter: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                ),
            },
        };
        const search = new SearchArgumentData(
            {
                rdnSequence: [],
            },
            undefined,
            filter,
        );
        const rule = new SearchRule(
            1,
            rule_oid,
            undefined,
            undefined,
            [
                new RequestAttribute(commonName["&id"], true, undefined, undefined, undefined, undefined, undefined),
            ],
        );
        const [failed_step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
        expect(failed_step).toBe(0);
        expect(state.searchValuesRequired).toEqual([]);
        expect(state.invalidSearchValues).toEqual([]);
        expect(state.missingSearchContexts).toEqual([]);
        expect(state.contextComboViolations).toEqual([]);
        expect(state.searchContextViolations).toEqual([]);
        expect(state.searchContextValueViolations).toEqual([]);
    });

    it("should not find any violations with subtypes if includeSubtypes is used", () => {
        const filter: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                ),
            },
        };
        const search = new SearchArgumentData(
            {
                rdnSequence: [],
            },
            undefined,
            filter,
        );
        const rule = new SearchRule(
            1,
            rule_oid,
            undefined,
            undefined,
            [
                new RequestAttribute(name["&id"], true, undefined, undefined, undefined, undefined, undefined),
            ],
        );
        const [failed_step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
        expect(failed_step).toBe(0);
        expect(state.searchValuesRequired).toEqual([]);
        expect(state.invalidSearchValues).toEqual([]);
        expect(state.missingSearchContexts).toEqual([]);
        expect(state.contextComboViolations).toEqual([]);
        expect(state.searchContextViolations).toEqual([]);
        expect(state.searchContextValueViolations).toEqual([]);
    });

    it("should restrict search filters to selected values if selectedValues is used", () => {
        const SELECTED_VALUE = commonName.encoderFor["&Type"]!({ uTF8String: "James Smith" }, BER);
        const NON_SELECTED_VALUE = commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER);
        const rule = new SearchRule(
            1,
            rule_oid,
            undefined,
            undefined,
            [
                new RequestAttribute(
                    commonName["&id"],
                    true,
                    [SELECTED_VALUE],
                    undefined,
                    undefined,
                    undefined,
                    undefined
                ),
            ],
        );

        { // This should fail because we are using a non-selected value.
            const filter: Filter = {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        NON_SELECTED_VALUE,
                    ),
                },
            };
            const search = new SearchArgumentData(
                {
                    rdnSequence: [],
                },
                undefined,
                filter,
            );
            const [failed_step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(failed_step).toBe(2);
            expect(state.searchValuesRequired).toEqual([]);
            expect(state.invalidSearchValues).toEqual([ filter.item ]);
            expect(state.missingSearchContexts).toEqual([]);
            expect(state.contextComboViolations).toEqual([]);
            expect(state.searchContextViolations).toEqual([]);
            expect(state.searchContextValueViolations).toEqual([]);
        }

        { // This should pass because we are using a selected value.
            const filter: Filter = {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        SELECTED_VALUE,
                    ),
                },
            };
            const search = new SearchArgumentData(
                {
                    rdnSequence: [],
                },
                undefined,
                filter,
            );
            const [failed_step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(failed_step).toBe(0);
            expect(state.searchValuesRequired).toEqual([]);
            expect(state.invalidSearchValues).toEqual([]);
            expect(state.missingSearchContexts).toEqual([]);
            expect(state.contextComboViolations).toEqual([]);
            expect(state.searchContextViolations).toEqual([]);
            expect(state.searchContextValueViolations).toEqual([]);
        }
    });

    it("should restrict context types used in filters", () => {
        const SELECTED_VALUE = commonName.encoderFor["&Type"]!({ uTF8String: "James Smith" }, BER);
        const rule = new SearchRule(
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
        );

        { // This should fail because we are using a non-permitted context type.
            const filter: Filter = {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        SELECTED_VALUE,
                        {
                            selectedContexts: [
                                new ContextAssertion(
                                    localeContext["&id"],
                                    [localeContext.encoderFor["&Type"]!({ localeID2: { printableString: "en" } }, BER)],
                                ),
                            ],
                        }
                    ),
                },
            };
            const search = new SearchArgumentData(
                {
                    rdnSequence: [],
                },
                undefined,
                filter,
            );
            const [failed_step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(failed_step).toBe(5);
            expect(state.searchValuesRequired).toEqual([]);
            expect(state.invalidSearchValues).toEqual([]);
            expect(state.missingSearchContexts).toEqual([]);
            expect(state.contextComboViolations).toEqual([]);
            expect(state.searchContextViolations.map(v => v.toString())).toEqual([ localeContext["&id"].toString() ]);
            expect(state.searchContextValueViolations).toEqual([]);
        }

        { // This should succeed because we are using a permitted context type.
            const filter: Filter = {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        SELECTED_VALUE,
                        {
                            selectedContexts: [
                                new ContextAssertion(
                                    languageContext["&id"],
                                    [languageContext.encoderFor["&Type"]!("en", BER)],
                                ),
                            ],
                        }
                    ),
                },
            };
            const search = new SearchArgumentData(
                {
                    rdnSequence: [],
                },
                undefined,
                filter,
            );
            const [failed_step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(failed_step).toBe(0);
            expect(state.searchValuesRequired).toEqual([]);
            expect(state.invalidSearchValues).toEqual([]);
            expect(state.missingSearchContexts).toEqual([]);
            expect(state.contextComboViolations).toEqual([]);
            expect(state.searchContextViolations).toEqual([]);
            expect(state.searchContextValueViolations).toEqual([]);
        }
    });

    it("should restrict context values used in filters", () => {
        const SELECTED_VALUE = commonName.encoderFor["&Type"]!({ uTF8String: "James Smith" }, BER);
        const rule = new SearchRule(
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
                            [languageContext.encoderFor["&Type"]!("en", BER)],
                        ),
                    ],
                    undefined,
                    undefined,
                ),
            ],
        );

        { // This should fail because we are using a non-permitted context value.
            const filter: Filter = {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        SELECTED_VALUE,
                        {
                            selectedContexts: [
                                new ContextAssertion(
                                    languageContext["&id"],
                                    [languageContext.encoderFor["&Type"]!("fr", BER)],
                                ),
                            ],
                        }
                    ),
                },
            };
            const search = new SearchArgumentData(
                {
                    rdnSequence: [],
                },
                undefined,
                filter,
            );
            const [failed_step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(failed_step).toBe(6);
            expect(state.searchValuesRequired).toEqual([]);
            expect(state.invalidSearchValues).toEqual([]);
            expect(state.missingSearchContexts).toEqual([]);
            expect(state.contextComboViolations).toEqual([]);
            expect(state.searchContextViolations).toEqual([]);
            expect(state.searchContextValueViolations).toHaveLength(1);
        }

        { // This should succeed because we are using a permitted context value.
            const filter: Filter = {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        SELECTED_VALUE,
                        {
                            selectedContexts: [
                                new ContextAssertion(
                                    languageContext["&id"],
                                    [languageContext.encoderFor["&Type"]!("en", BER)],
                                ),
                            ],
                        }
                    ),
                },
            };
            const search = new SearchArgumentData(
                {
                    rdnSequence: [],
                },
                undefined,
                filter,
            );
            const [failed_step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(failed_step).toBe(0);
            expect(state.searchValuesRequired).toEqual([]);
            expect(state.invalidSearchValues).toEqual([]);
            expect(state.missingSearchContexts).toEqual([]);
            expect(state.contextComboViolations).toEqual([]);
            expect(state.searchContextViolations).toEqual([]);
            expect(state.searchContextValueViolations).toEqual([]);
        }
    });

    it("should restrict context combinations used in filters", () => {
        const SELECTED_VALUE = commonName.encoderFor["&Type"]!({ uTF8String: "James Smith" }, BER);
        const rule = new SearchRule(
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
                        new ContextProfile(
                            localeContext["&id"],
                            undefined,
                        ),
                    ],
                    /* Note that, if you change this context combination, you
                    could accidentally make a context type required, which
                    would make the error returned different. */
                    { // Require only one or the other.
                        or: [
                            {
                                and: [
                                    {
                                        context: languageContext["&id"],
                                    },
                                    {
                                        not: {
                                            context: localeContext["&id"],
                                        },
                                    },
                                ],
                            },
                            {
                                and: [
                                    {
                                        not: {
                                            context: languageContext["&id"],
                                        },
                                    },
                                    {
                                        context: localeContext["&id"],
                                    },
                                ],
                            },
                        ],
                    },
                    undefined,
                ),
            ],
        );

        { // This should fail because we are using both context types.
            const filter: Filter = {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        SELECTED_VALUE,
                        {
                            selectedContexts: [
                                new ContextAssertion(
                                    languageContext["&id"],
                                    [languageContext.encoderFor["&Type"]!("fr", BER)],
                                ),
                                new ContextAssertion(
                                    localeContext["&id"],
                                    [localeContext.encoderFor["&Type"]!({ localeID2: { printableString: "en" } }, BER)],
                                ),
                            ],
                        }
                    ),
                },
            };
            const search = new SearchArgumentData(
                {
                    rdnSequence: [],
                },
                undefined,
                filter,
            );
            const [failed_step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(failed_step).toBe(4);
            expect(state.searchValuesRequired).toEqual([]);
            expect(state.invalidSearchValues).toEqual([]);
            expect(state.missingSearchContexts).toEqual([]);
            expect(state.contextComboViolations).toHaveLength(1);
            expect(state.searchContextViolations).toEqual([]);
            expect(state.searchContextValueViolations).toEqual([]);
        }

        { // This should succeed because we are using a permitted context combination.
            const filter: Filter = {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        SELECTED_VALUE,
                        {
                            selectedContexts: [
                                new ContextAssertion(
                                    languageContext["&id"],
                                    [languageContext.encoderFor["&Type"]!("en", BER)],
                                ),
                            ],
                        }
                    ),
                },
            };
            const search = new SearchArgumentData(
                {
                    rdnSequence: [],
                },
                undefined,
                filter,
            );
            const [failed_step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(failed_step).toBe(0);
            expect(state.searchValuesRequired).toEqual([]);
            expect(state.invalidSearchValues).toEqual([]);
            expect(state.missingSearchContexts).toEqual([]);
            expect(state.contextComboViolations).toEqual([]);
            expect(state.searchContextViolations).toEqual([]);
            expect(state.searchContextValueViolations).toEqual([]);
        }
    });

    describe("inherited request attribute profiles", () => {
        const alice = commonName.encoderFor["&Type"]!({ uTF8String: "Alice" }, BER);
        const bob = commonName.encoderFor["&Type"]!({ uTF8String: "Bob" }, BER);
        const english = languageContext.encoderFor["&Type"]!("en", BER);
        const french = languageContext.encoderFor["&Type"]!("fr", BER);

        function check(
            filter: Filter,
            profiles: RequestAttribute[],
            getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
            getContextMatcher?: (contextType: AttributeType) => ContextMatcher | undefined,
        ): ReturnType<typeof checkOfRequestAttributeProfiles> {
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, profiles);
            expect(generalCheckOfSearchFilter(search, rule, getAttributeParentTypes)[1].searchAttributeViolations).toEqual([]);
            return checkOfRequestAttributeProfiles(
                search,
                rule,
                getAttributeParentTypes,
                getEqualityMatcher,
                getContextMatcher,
            );
        }

        it.each([
            ["Alice", 0],
            ["Bob", 2],
        ] as const)("validates cn=%s against the name profile's selected values", (assertion, expected_step) => {
            const filter: Filter = {
                item: {
                    equality: new AttributeValueAssertion(
                        commonName["&id"],
                        commonName.encoderFor["&Type"]!({ uTF8String: assertion }, BER),
                    ),
                },
            };
            const matching_types: AttributeType[] = [];
            const [step, state] = check(filter, [new RequestAttribute(name["&id"], true, [alice])], (type) => {
                matching_types.push(type);
                return undefined;
            });
            expect(step).toBe(expected_step);
            expect(state.invalidSearchValues).toEqual(expected_step ? [filter.item] : []);
            expect(matching_types.map((type) => type.toString())).toEqual([commonName["&id"].toString()]);
        });

        it.each([
            ["and", (filter: Filter): Filter => ({ and: [filter] })],
            ["or", (filter: Filter): Filter => ({ or: [filter] })],
            ["double negation", (filter: Filter): Filter => ({ not: { not: filter } })],
        ] as const)("resolves inherited profiles inside %s", (_operator, wrap) => {
            const item = { equality: new AttributeValueAssertion(commonName["&id"], bob) };
            const [step, state] = check(wrap({ item }), [new RequestAttribute(name["&id"], true, [alice])]);
            expect(step).toBe(2);
            expect(state.invalidSearchValues).toEqual([item]);
        });

        it("prefers an exact profile to an inherited profile", () => {
            const [step] = check({ item: { equality: new AttributeValueAssertion(commonName["&id"], bob) } }, [
                new RequestAttribute(name["&id"], true, [alice]),
                new RequestAttribute(commonName["&id"], false, [bob]),
            ]);
            expect(step).toBe(0);
        });

        it.each([undefined, false])("does not inherit a profile with includeSubtypes=%s", (include_subtypes) => {
            const filter: Filter = { item: { equality: new AttributeValueAssertion(commonName["&id"], bob) } };
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(name["&id"], include_subtypes, [alice]),
            ]);
            expect(generalCheckOfSearchFilter(search, rule, getAttributeParentTypes)[0]).toBe(1);
            const matching_types: AttributeType[] = [];
            checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes, (type) => {
                matching_types.push(type);
                return undefined;
            });
            expect(matching_types).toEqual([]);
        });

        it("applies inherited context-type restrictions and reports the child attribute", () => {
            const [step, state] = check({
                item: {
                    equality: new AttributeValueAssertion(commonName["&id"], alice, {
                        selectedContexts: [new ContextAssertion(languageContext["&id"], [english])],
                    }),
                },
            }, [new RequestAttribute(name["&id"], true, undefined, undefined, [])]);
            expect(step).toBe(5);
            expect(state.searchContextViolationsAttr?.toString()).toBe(commonName["&id"].toString());
            expect(state.searchContextViolations).toEqual([languageContext["&id"]]);
        });

        it("applies inherited presence-only restrictions in the general check", () => {
            const filter: Filter = { item: { equality: new AttributeValueAssertion(commonName["&id"], bob) } };
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(name["&id"], true, []),
            ]);
            const [step, state] = generalCheckOfSearchFilter(search, rule, getAttributeParentTypes);
            expect(step).toBe(4);
            expect(state.searchValuesDisallowed).toEqual([filter.item]);
        });

        it("applies inherited context-type restrictions in the general check", () => {
            const filter: Filter = {
                item: {
                    equality: new AttributeValueAssertion(commonName["&id"], alice, {
                        selectedContexts: [new ContextAssertion(languageContext["&id"], [english])],
                    }),
                },
            };
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(name["&id"], true, undefined, undefined, []),
            ]);
            const [step, state] = generalCheckOfSearchFilter(search, rule, getAttributeParentTypes);
            expect(step).toBe(5);
            expect(state.searchContextViolations).toEqual(new Set([languageContext["&id"].toString()]));
        });

        it.each([
            ["en", 0],
            ["fr", 6],
        ] as const)("validates inherited context values for language %s", (language, expected_step) => {
            const matching_contexts: AttributeType[] = [];
            const [step, state] = check({
                item: {
                    equality: new AttributeValueAssertion(commonName["&id"], alice, {
                        selectedContexts: [new ContextAssertion(languageContext["&id"], [language === "en" ? english : french])],
                    }),
                },
            }, [new RequestAttribute(name["&id"], true, undefined, undefined, [
                new ContextProfile(languageContext["&id"], [english]),
            ])], undefined, (type) => {
                matching_contexts.push(type);
                return undefined;
            });
            expect(step).toBe(expected_step);
            expect(matching_contexts.map((type) => type.toString())).toEqual([languageContext["&id"].toString()]);
            if (expected_step) {
                expect(state.searchContextValueViolationAttr?.toString()).toBe(commonName["&id"].toString());
                expect(state.searchContextValueViolations).toHaveLength(1);
            }
        });

        it("applies inherited context combinations", () => {
            const [step, state] = check({
                item: { equality: new AttributeValueAssertion(commonName["&id"], alice) },
            }, [new RequestAttribute(name["&id"], true, undefined, undefined, [
                new ContextProfile(languageContext["&id"], undefined),
                new ContextProfile(localeContext["&id"], undefined),
            ], {
                or: [{ context: languageContext["&id"] }, { context: localeContext["&id"] }],
            })]);
            expect(step).toBe(4);
            expect(state.contextComboViolationAttr?.toString()).toBe(commonName["&id"].toString());
            expect(state.contextComboViolations).toHaveLength(1);
        });
    });
});

// TODO: Fulfill this requirement from X.501
// If this component is present, but empty, it indicates that this component takes all possible values, i.e., a
// filter item for this attribute type always evaluates to TRUE (or to FALSE if negated) if the attribute type
// is absent in an entry.
