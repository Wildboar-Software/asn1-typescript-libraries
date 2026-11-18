import { ContextProfile, SearchRule } from "@wildboar/x500/ServiceAdministration";
import { FilterItem_substrings, SearchArgumentData } from "@wildboar/x500/DirectoryAbstractService";
import { RequestAttribute } from "@wildboar/x500/ServiceAdministration";
import { type ASN1Element, ObjectIdentifier } from "@wildboar/asn1";
import {
    name,
    commonName,
    surname,
    streetAddress,
    languageContext,
    localeContext,
    id_pr_attributeNegationViolation,
} from "@wildboar/x500/SelectedAttributeTypes";
import type { Filter, FilterItem, FilterItem_substrings_strings_Item } from "@wildboar/x500/DirectoryAbstractService";
import { type AttributeType, AttributeValueAssertion, ContextAssertion } from "@wildboar/x500/InformationFramework";
import { checkOfRequestAttributeProfiles } from "./checkOfRequestAttributeProfiles.mjs";
import { BER } from "@wildboar/asn1/functional";
import type { ContextMatcher, Matcher } from "@wildboar/x500";
import { generalCheckOfSearchFilter } from "./generalCheckOfSearchFilter.mjs";
import { caseIgnoreSubstringsMatch } from "@wildboar/x500/matching/substring";

const rule_oid = ObjectIdentifier.fromString("1.2.3.4");

function* getAttributeParentTypes(attributeType: AttributeType): IterableIterator<AttributeType> {
    yield attributeType;
    if (attributeType.isEqualTo(commonName["&id"]) || attributeType.isEqualTo(surname["&id"])) {
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

    describe("substring selected-value checks", () => {
        const encode = (value: string): ASN1Element => commonName.encoderFor["&Type"]!({ uTF8String: value }, BER);
        const alice = encode("Alice");
        const bob = encode("Bob");

        function substringFilter(strings: FilterItem_substrings_strings_Item[]): { item: { substrings: FilterItem_substrings } } {
            return { item: { substrings: new FilterItem_substrings(commonName["&id"], strings) } };
        }

        function check(
            filter: Filter,
            selected_values: ASN1Element[] | undefined,
            getSubstringsMatcher?: (attributeType: AttributeType) => Matcher | undefined,
            profile_type: AttributeType = commonName["&id"],
        ): ReturnType<typeof checkOfRequestAttributeProfiles> {
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(profile_type, true, selected_values),
            ]);
            return checkOfRequestAttributeProfiles(
                search, rule, getAttributeParentTypes, undefined, undefined, getSubstringsMatcher,
            );
        }

        const cases: [string, FilterItem_substrings_strings_Item[], number][] = [
            ["matching initial", [{ initial: encode("AL") }], 0],
            ["non-matching initial", [{ initial: encode("Bo") }], 2],
            ["matching any", [{ any_: encode("LI") }], 0],
            ["non-matching any", [{ any_: encode("bo") }], 2],
            ["matching final", [{ final: encode("ICE") }], 0],
            ["non-matching final", [{ final: encode("bob") }], 2],
            ["matching combination", [{ initial: encode("A") }, { any_: encode("li") }, { final: encode("ce") }], 0],
            ["non-matching combination", [{ initial: encode("A") }, { any_: encode("ce") }, { final: encode("li") }], 2],
        ];

        it.each(cases)("checks %s substrings against selected values", (_description, strings, expected_step) => {
            const filter = substringFilter(strings);
            const [step, state] = check(filter, [alice], () => caseIgnoreSubstringsMatch);
            expect(step).toBe(expected_step);
            expect(state.searchValuesRequired).toEqual([]);
            expect(state.invalidSearchValues).toEqual(expected_step ? [filter.item] : []);
        });

        it("matches the presented substring assertion against each selected value", () => {
            const strings: FilterItem_substrings_strings_Item[] = [{ initial: encode("Bo") }];
            const filter = substringFilter(strings);
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, [alice, bob]),
            ]);
            const getEqualityMatcher = vi.fn(() => undefined);
            const matcher = vi.fn<Matcher>(caseIgnoreSubstringsMatch);
            const lookup = vi.fn(() => matcher);
            const [step] = checkOfRequestAttributeProfiles(
                search, rule, getAttributeParentTypes, getEqualityMatcher, undefined, lookup,
            );
            expect(step).toBe(0);
            expect(lookup).toHaveBeenCalledWith(commonName["&id"]);
            expect(matcher).toHaveBeenCalledTimes(2);
            expect(matcher).toHaveBeenNthCalledWith(1, strings, expect.objectContaining({
                type_: commonName["&id"], value: alice,
            }), getEqualityMatcher);
            expect(matcher).toHaveBeenNthCalledWith(2, strings, expect.objectContaining({
                type_: commonName["&id"], value: bob,
            }), getEqualityMatcher);
            expect(getEqualityMatcher).not.toHaveBeenCalled();
        });

        it.each([
            ["omitted", undefined],
            ["unavailable", () => undefined],
        ] as const)("rejects restricted substrings when the matcher is %s", (_description, lookup) => {
            const filter = substringFilter([{ initial: encode("Al") }]);
            const [step, state] = check(filter, [alice], lookup);
            expect(step).toBe(2);
            expect(state.invalidSearchValues).toEqual([filter.item]);
        });

        it("does not fall back to an equality matcher for restricted substrings", () => {
            const filter = substringFilter([{ initial: encode("Al") }]);
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, [alice]),
            ]);
            const getEqualityMatcher = vi.fn((): Matcher => () => true);
            const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes, getEqualityMatcher);
            expect(step).toBe(2);
            expect(state.invalidSearchValues).toEqual([filter.item]);
            expect(getEqualityMatcher).not.toHaveBeenCalled();
        });

        it("accepts a matching selected value before later non-matching values", () => {
            const filter = substringFilter([{ initial: encode("Al") }]);
            const [step] = check(filter, [alice, bob], () => caseIgnoreSubstringsMatch);
            expect(step).toBe(0);
        });

        it.each([false, undefined])("does not accept a substring match result of %s", (result) => {
            const filter = substringFilter([{ initial: encode("Al") }]);
            const [step, state] = check(filter, [alice], () => () => result);
            expect(step).toBe(2);
            expect(state.invalidSearchValues).toEqual([filter.item]);
        });

        it("does not require a substring matcher when selectedValues is absent", () => {
            const [step] = check(substringFilter([{ initial: encode("Bo") }]), undefined);
            expect(step).toBe(0);
        });

        it("applies substring restrictions inherited from an ancestor profile", () => {
            const lookup = vi.fn(() => caseIgnoreSubstringsMatch);
            const filter = substringFilter([{ initial: encode("Bo") }]);
            const [step, state] = check(filter, [alice], lookup, name["&id"]);
            expect(step).toBe(2);
            expect(lookup).toHaveBeenCalledWith(commonName["&id"]);
            expect(state.invalidSearchValues).toEqual([filter.item]);
        });

        it.each([
            ["and", (filter: Filter): Filter => ({ and: [filter] })],
            ["or", (filter: Filter): Filter => ({ or: [filter] })],
            ["double negation", (filter: Filter): Filter => ({ not: { not: filter } })],
        ] as const)("forwards the substring matcher inside %s", (_operator, wrap) => {
            const filter = wrap(substringFilter([{ initial: encode("Al") }]));
            const [step] = check(filter, [alice], () => caseIgnoreSubstringsMatch);
            expect(step).toBe(0);
        });

        it("propagates malformed substring assertion errors", () => {
            const filter = substringFilter([{ initial: encode("Al") }, { initial: encode("ice") }]);
            expect(() => check(filter, [alice], () => caseIgnoreSubstringsMatch)).toThrow();
        });

        it("also passes equality assertions before the selected stored value", () => {
            const assertion = encode("ALICE");
            const filter: Filter = { item: { equality: new AttributeValueAssertion(commonName["&id"], assertion) } };
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, [alice]),
            ]);
            const matcher = vi.fn<Matcher>(() => true);
            const getEqualityMatcher = vi.fn(() => matcher);
            const [step] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes, getEqualityMatcher);
            expect(step).toBe(0);
            expect(matcher).toHaveBeenCalledWith(assertion, expect.objectContaining({
                type_: commonName["&id"], value: alice,
            }), getEqualityMatcher);
        });
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

    describe("subfilter and per-attribute candidate grouping", () => {
        const encode_cn = (value: string): ASN1Element =>
            commonName.encoderFor["&Type"]!({ uTF8String: value }, BER);
        const encode_sn = (value: string): ASN1Element =>
            surname.encoderFor["&Type"]!({ uTF8String: value }, BER);
        const encode_street = (value: string): ASN1Element =>
            streetAddress.encoderFor["&Type"]!({ uTF8String: value }, BER);

        const allowed = encode_cn("allowed");
        const allowed_2 = encode_cn("allowed2");
        const other = encode_cn("other");
        const other_2 = encode_cn("other2");
        const english = languageContext.encoderFor["&Type"]!("en", BER);
        const french = languageContext.encoderFor["&Type"]!("fr", BER);

        const cn_eq = (value: ASN1Element): { item: FilterItem } => ({
            item: { equality: new AttributeValueAssertion(commonName["&id"], value) },
        });
        const street_eq = (value: string): { item: FilterItem } => ({
            item: { equality: new AttributeValueAssertion(streetAddress["&id"], encode_street(value)) },
        });

        it.each([
            ["complying first", [cn_eq(allowed), cn_eq(other)]],
            ["complying second", [cn_eq(other), cn_eq(allowed)]],
        ] as const)("passes (&(cn=...)(cn=...)) when at least one assertion complies (%s)", (_label, items) => {
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, { and: items });
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, [allowed]),
            ]);
            const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(step).toBe(0);
            expect(state.searchValuesRequired).toEqual([]);
            expect(state.invalidSearchValues).toEqual([]);
        });

        it("reports a single failing item for an attribute when none complies in a subfilter", () => {
            const first = cn_eq(other);
            const second = cn_eq(other_2);
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, { and: [first, second] });
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, [allowed]),
            ]);
            const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(step).toBe(2);
            expect(state.invalidSearchValues).toHaveLength(1);
            expect([first.item, second.item]).toContain(state.invalidSearchValues[0]);
        });

        it("drops an item failing step 1 when another item in the subfilter complies, and does not mix diagnostics when none complies", () => {
            const present_cn: { item: FilterItem } = { item: { present: commonName["&id"] } };
            const bad_eq = cn_eq(other);
            const good_eq = cn_eq(allowed);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, [allowed]),
            ]);

            for (const items of [[present_cn, good_eq], [good_eq, present_cn]]) {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, { and: items });
                const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(0);
                expect(state.searchValuesRequired).toEqual([]);
                expect(state.invalidSearchValues).toEqual([]);
            }

            for (const items of [[present_cn, bad_eq], [bad_eq, present_cn]]) {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, { and: items });
                const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect([1, 2]).toContain(step);
                if (step === 1) {
                    expect(state.searchValuesRequired).toEqual([commonName["&id"]]);
                    expect(state.invalidSearchValues).toEqual([]);
                } else {
                    expect(state.searchValuesRequired).toEqual([]);
                    expect(state.invalidSearchValues).toEqual([bad_eq.item]);
                }
            }
        });

        it.each([
            ["non-complying context first", [french, english]],
            ["complying context first", [english, french]],
        ] as const)("accepts a subfilter when one assertion satisfies context value restrictions (%s)", (_label, langs) => {
            const items: Filter[] = langs.map((lang) => ({
                item: {
                    equality: new AttributeValueAssertion(commonName["&id"], allowed, {
                        selectedContexts: [new ContextAssertion(languageContext["&id"], [lang])],
                    }),
                },
            }));
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, { and: items });
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, undefined, undefined, [
                    new ContextProfile(languageContext["&id"], [english]),
                ]),
            ]);
            const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(step).toBe(0);
            expect(state.searchContextValueViolations).toEqual([]);
        });

        it("requires every OR subfilter where the attribute appears to have a complying item", () => {
            const bad = cn_eq(other);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, [allowed]),
                new RequestAttribute(streetAddress["&id"], true),
            ]);

            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    or: [cn_eq(allowed), bad],
                });
                const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(2);
                expect(state.invalidSearchValues).toEqual([bad.item]);
            }

            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    or: [
                        { and: [cn_eq(allowed), cn_eq(other)] },
                        { and: [cn_eq(other_2), cn_eq(allowed)] },
                    ],
                });
                const [step] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(0);
            }

            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    or: [cn_eq(allowed), street_eq("123 Main St")],
                });
                const [step] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(0);
            }
        });

        it("evaluates nested AND/OR subfilters accurately without exponential DNF expansion", () => {
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, [allowed, allowed_2]),
                new RequestAttribute(streetAddress["&id"], true),
            ]);
            const bad = cn_eq(other);
            const bad_2 = cn_eq(other_2);

            // Both expanded subfilters contain cn=allowed2, so both comply.
            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    and: [{ or: [cn_eq(allowed), bad] }, cn_eq(allowed_2)],
                });
                const [step] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(0);
            }

            // Expanded subfilter (street=123 Main St) & (cn=other) lacks a complying cn item.
            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    and: [{ or: [cn_eq(allowed), street_eq("123 Main St")] }, bad],
                });
                const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(2);
                expect(state.invalidSearchValues).toEqual([bad.item]);
            }

            // Expanded subfilter (cn=other) & (cn=other2) lacks a complying cn item.
            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    and: [
                        { or: [cn_eq(allowed), bad] },
                        { or: [bad_2, cn_eq(allowed)] },
                    ],
                });
                const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(2);
                expect(state.invalidSearchValues).toHaveLength(1);
                expect([bad.item, bad_2.item]).toContain(state.invalidSearchValues[0]);
            }

            // 30 OR clauses inside an AND represent 2^30 subfilters; avoid blowup.
            const clauses: Filter[] = Array.from({ length: 30 }, (_, i) => ({
                or: [cn_eq(allowed), street_eq(`${i} Main St`)],
            }));
            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, { and: clauses });
                const [step] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(0);
            }
            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, { and: [...clauses, bad] });
                const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(2);
                expect(state.invalidSearchValues).toEqual([bad.item]);
            }
        });

        it("handles negation and De Morgan laws so negated items neither poison nor satisfy effective presence", () => {
            const bad = cn_eq(other);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, [allowed]),
            ]);

            // (&(cn=allowed)(!(cn=other))) passes because cn=allowed complies.
            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    and: [cn_eq(allowed), { not: bad }],
                });
                const [step] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(0);
            }

            // (&(!(cn=allowed))(cn=other)) fails because !(cn=allowed) is negated.
            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    and: [{ not: cn_eq(allowed) }, bad],
                });
                const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(2);
                expect(state.invalidSearchValues).toEqual([bad.item]);
            }

            // (|(cn=allowed)(!(cn=other))) fails because the second subfilter only negates cn.
            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    or: [cn_eq(allowed), { not: bad }],
                });
                const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).not.toBe(0);
                expect(state.serviceProblem?.toString()).toBe(id_pr_attributeNegationViolation.toString());
            }

            // !((!(cn=allowed)) | (!(cn=other))) == (&(cn=allowed)(cn=other)) -> passes.
            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    not: { or: [{ not: cn_eq(allowed) }, { not: bad }] },
                });
                const [step] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(0);
            }

            // !((!(cn=allowed)) & (!(cn=other))) == (|(cn=allowed)(cn=other)) -> fails on cn=other.
            {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    not: { and: [{ not: cn_eq(allowed) }, { not: bad }] },
                });
                const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(2);
                expect(state.invalidSearchValues).toEqual([bad.item]);
            }
        });

        it("groups candidates by asserted attribute type, not shared ancestor profile", () => {
            const sn_bad: { item: FilterItem } = {
                item: { equality: new AttributeValueAssertion(surname["&id"], encode_sn("other")) },
            };
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                and: [cn_eq(allowed), sn_bad],
            });
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(name["&id"], true, [allowed]),
            ]);
            const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(step).toBe(2);
            expect(state.invalidSearchValues).toEqual([sn_bad.item]);
        });

        it("checks unconditionally required attributes before remaining attributes per X.511 Section 15.2", () => {
            const street_bad = street_eq("wrong");
            const cn_bad = cn_eq(other);
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                and: [street_bad, cn_bad],
            });
            const rule = new SearchRule(
                1,
                rule_oid,
                undefined,
                undefined,
                [
                    new RequestAttribute(streetAddress["&id"], true, [encode_street("allowed")]),
                    new RequestAttribute(commonName["&id"], true, [allowed]),
                ],
                { attribute: commonName["&id"] },
            );
            const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(step).toBe(2);
            expect(state.invalidSearchValues).toEqual([cn_bad.item]);
        });

        it("treats an AND containing an empty OR (FALSE) as having no subfilters", () => {
            const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                and: [cn_eq(other), { or: [] }],
            });
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(commonName["&id"], true, [allowed]),
            ]);
            const [step] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
            expect(step).toBe(0);
        });

        it("accepts a single context alternative under NOT(AND(NOT A, NOT B))", () => {
            const locale_en = localeContext.encoderFor["&Type"]!({ localeID2: { printableString: "en" } }, BER);
            const rule = new SearchRule(1, rule_oid, undefined, undefined, [
                new RequestAttribute(
                    commonName["&id"],
                    true,
                    undefined,
                    undefined,
                    [
                        new ContextProfile(languageContext["&id"]),
                        new ContextProfile(localeContext["&id"]),
                    ],
                    {
                        not: {
                            and: [
                                { not: { context: languageContext["&id"] } },
                                { not: { context: localeContext["&id"] } },
                            ],
                        },
                    },
                ),
            ]);

            for (const selectedContexts of [
                [new ContextAssertion(languageContext["&id"], [english])],
                [new ContextAssertion(localeContext["&id"], [locale_en])],
            ]) {
                const search = new SearchArgumentData({ rdnSequence: [] }, undefined, {
                    item: {
                        equality: new AttributeValueAssertion(commonName["&id"], allowed, {
                            selectedContexts,
                        }),
                    },
                });
                const [step, state] = checkOfRequestAttributeProfiles(search, rule, getAttributeParentTypes);
                expect(step).toBe(0);
                expect(state.missingSearchContexts).toEqual([]);
                expect(state.contextComboViolations).toEqual([]);
                expect(state.searchContextViolations).toEqual([]);
            }

            // Asserting neither context fails the combination check rather than missingSearchContext.
            const empty_search = new SearchArgumentData({ rdnSequence: [] }, undefined, cn_eq(allowed));
            const [empty_step, empty_state] = checkOfRequestAttributeProfiles(
                empty_search,
                rule,
                getAttributeParentTypes,
            );
            expect(empty_step).toBe(4);
            expect(empty_state.contextComboViolations).toHaveLength(1);
            expect(empty_state.searchContextViolations).toEqual([]);
        });
    });
});

// TODO: Fulfill this requirement from X.501
// If this component is present, but empty, it indicates that this component takes all possible values, i.e., a
// filter item for this attribute type always evaluates to TRUE (or to FALSE if negated) if the attribute type
// is absent in an entry.
