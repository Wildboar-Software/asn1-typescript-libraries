import {
    ControlOptions,
    ImposedSubset_baseObject,
    ImposedSubset_oneLevel,
    ImposedSubset_wholeSubtree,
    ResultAttribute,
    SearchRule,
} from "@wildboar/x500/ServiceAdministration";
import {
    RequestAttribute,
} from "@wildboar/x500/ServiceAdministration";
import {
    type Filter,
    SearchArgumentData,
    SearchArgumentData_subset_baseObject,
    SearchArgumentData_subset_oneLevel,
    SearchArgumentData_subset_wholeSubtree,
    SearchControlOptions_searchAliases,
    SearchControlOptions_useSubset,
} from "@wildboar/x500/DirectoryAbstractService";
import { type BIT_STRING, FALSE_BIT, ObjectIdentifier, TRUE_BIT } from "@wildboar/asn1";
import { ContextProfile } from "@wildboar/x500/ServiceAdministration";
import type { AttributeCombination } from "@wildboar/x500/ServiceAdministration";
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

    it.each([
        [false, 3],
        [true, 0],
    ] as const)("checks mandatory attributes in every OR branch (second branch has cn: %s)", (include_cn, expected_step) => {
        const cn: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({ uTF8String: "Alice" }, BER),
                ),
            },
        };
        const street: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    streetAddress["&id"],
                    streetAddress.encoderFor["&Type"]!({ uTF8String: "123 Main St" }, BER),
                ),
            },
        };
        const negated_street: Filter = { not: street };
        const filter: Filter = {
            or: [
                { and: [cn, street] },
                include_cn ? { and: [cn, negated_street] } : negated_street,
            ],
        };
        const combo: AttributeCombination = { attribute: commonName["&id"] };
        const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
        const rule = new SearchRule(1, rule_oid, undefined, undefined, [
            new RequestAttribute(commonName["&id"]),
            new RequestAttribute(streetAddress["&id"]),
        ], combo);
        const [step, state] = generalCheckOfSearchFilter(search, rule, getAttributeParentTypes);
        expect(step).toBe(expected_step);
        expect(state.searchAttributeViolations).toEqual([]);
        expect(state.attributeNegationViolations).toEqual([]);
        expect(state.searchAttributeCombinationViolations).toEqual(expected_step ? [combo] : []);
    });

    it("accepts an OR filter where each branch satisfies an OR attributeCombination independently", () => {
        const filter: Filter = {
            or: [
                {
                    item: {
                        equality: new AttributeValueAssertion(
                            commonName["&id"],
                            commonName.encoderFor["&Type"]!({ uTF8String: "Alice" }, BER),
                        ),
                    },
                },
                {
                    item: {
                        equality: new AttributeValueAssertion(
                            streetAddress["&id"],
                            streetAddress.encoderFor["&Type"]!({ uTF8String: "123 Main St" }, BER),
                        ),
                    },
                },
            ],
        };
        const combo: AttributeCombination = {
            or: [
                { attribute: commonName["&id"] },
                { attribute: streetAddress["&id"] },
            ],
        };
        const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
        const rule = new SearchRule(1, rule_oid, undefined, undefined, [
            new RequestAttribute(commonName["&id"]),
            new RequestAttribute(streetAddress["&id"]),
        ], combo);
        const [step, state] = generalCheckOfSearchFilter(search, rule, getAttributeParentTypes);
        expect(step).toBe(0);
        expect(state.searchAttributeCombinationViolations).toEqual([]);
    });

    it("fails closed at step 3 when a filter exceeds attributeCombination complexity limits", () => {
        let filter: Filter = { item: { present: commonName["&id"] } };
        for (let i = 0; i < 12; i++) {
            filter = { not: filter };
        }
        const combo: AttributeCombination = {
            or: [
                { attribute: commonName["&id"] },
                { attribute: streetAddress["&id"] },
            ],
        };
        const search = new SearchArgumentData({ rdnSequence: [] }, undefined, filter);
        const rule = new SearchRule(1, rule_oid, undefined, undefined, [
            new RequestAttribute(commonName["&id"]),
            new RequestAttribute(streetAddress["&id"]),
        ], combo);
        const [step, state] = generalCheckOfSearchFilter(search, rule, getAttributeParentTypes);
        expect(step).toBe(3);
        expect(state.searchAttributeCombinationViolations).toEqual([combo]);
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

    describe("allowedSubset, imposedSubset, and useSubset", () => {
        const only_base = new Uint8ClampedArray([TRUE_BIT, FALSE_BIT, FALSE_BIT]);
        const base_and_one_level = new Uint8ClampedArray([TRUE_BIT, TRUE_BIT, FALSE_BIT]);
        const no_subsets = new Uint8ClampedArray([FALSE_BIT, FALSE_BIT, FALSE_BIT]);

        function searchOptionsWithUseSubset(enabled: boolean): BIT_STRING {
            const bits = new Uint8ClampedArray(SearchControlOptions_useSubset + 1);
            bits[SearchControlOptions_searchAliases] = TRUE_BIT;
            bits[SearchControlOptions_useSubset] = enabled ? TRUE_BIT : FALSE_BIT;
            return bits;
        }

        function makeSearch(opts: {
            subset?: number;
            filter?: Filter;
            searchControlOptions?: BIT_STRING;
        } = {}): SearchArgumentData {
            return SearchArgumentData._from_object({
                baseObject: { rdnSequence: [] },
                subset: opts.subset,
                filter: opts.filter,
                searchControlOptions: opts.searchControlOptions,
                _unrecognizedExtensionsList: [],
            });
        }

        function makeRule(opts: {
            inputAttributeTypes?: RequestAttribute[];
            defaultControls?: ControlOptions;
            mandatoryControls?: ControlOptions;
            searchRuleControls?: ControlOptions;
            allowedSubset?: BIT_STRING;
            imposedSubset?: number;
        } = {}): SearchRule {
            return new SearchRule(
                1,
                rule_oid,
                undefined,
                undefined,
                opts.inputAttributeTypes,
                undefined,
                undefined,
                opts.defaultControls,
                opts.mandatoryControls,
                opts.searchRuleControls,
                undefined,
                undefined,
                undefined,
                undefined,
                opts.allowedSubset,
                opts.imposedSubset,
            );
        }

        it.each([
            ["inputAttributeTypes absent", undefined],
            ["inputAttributeTypes present", [new RequestAttribute(commonName["&id"])]],
        ] as const)("enforces allowedSubset when imposedSubset is absent (%s)", (_label, inputAttributeTypes) => {
            const rule = makeRule({ inputAttributeTypes, allowedSubset: only_base });
            expect(generalCheckOfSearchFilter(
                makeSearch({ subset: SearchArgumentData_subset_baseObject }),
                rule,
                getAttributeParentTypes,
            )[0]).toBe(0);
            expect(generalCheckOfSearchFilter(
                makeSearch({ subset: SearchArgumentData_subset_wholeSubtree }),
                rule,
                getAttributeParentTypes,
            )[0]).toBe(6);
        });

        it.each([
            ["baseObject (0)", ImposedSubset_baseObject],
            ["oneLevel (1)", ImposedSubset_oneLevel],
            ["wholeSubtree (2)", ImposedSubset_wholeSubtree],
        ] as const)("ignores allowedSubset when imposedSubset is %s and useSubset is unset", (_label, imposedSubset) => {
            for (const inputAttributeTypes of [
                undefined,
                [],
                [new RequestAttribute(commonName["&id"])],
            ]) {
                for (const allowedSubset of [only_base, no_subsets, new Uint8ClampedArray(0)]) {
                    for (const searchControlOptions of [
                        undefined,
                        new Uint8ClampedArray([TRUE_BIT]),
                        searchOptionsWithUseSubset(false),
                    ]) {
                        const search = makeSearch({
                            subset: SearchArgumentData_subset_wholeSubtree,
                            searchControlOptions,
                        });
                        const rule = makeRule({
                            inputAttributeTypes,
                            allowedSubset,
                            imposedSubset,
                        });
                        const [step] = generalCheckOfSearchFilter(search, rule, getAttributeParentTypes);
                        expect(step).toBe(0);
                    }
                }
            }
        });

        it.each([
            ["inputAttributeTypes absent", undefined],
            ["inputAttributeTypes present", [new RequestAttribute(commonName["&id"])]],
        ] as const)("enforces allowedSubset when imposedSubset is present and useSubset is set (%s)", (_label, inputAttributeTypes) => {
            const rule = makeRule({
                inputAttributeTypes,
                allowedSubset: base_and_one_level,
                imposedSubset: ImposedSubset_baseObject,
            });
            const use_subset_opts = searchOptionsWithUseSubset(true);

            // Requested oneLevel differs from imposedSubset (baseObject), but is allowed by allowedSubset.
            expect(generalCheckOfSearchFilter(
                makeSearch({
                    subset: SearchArgumentData_subset_oneLevel,
                    searchControlOptions: use_subset_opts,
                }),
                rule,
                getAttributeParentTypes,
            )[0]).toBe(0);

            // Requested wholeSubtree is disallowed by allowedSubset when useSubset is set.
            expect(generalCheckOfSearchFilter(
                makeSearch({
                    subset: SearchArgumentData_subset_wholeSubtree,
                    searchControlOptions: use_subset_opts,
                }),
                rule,
                getAttributeParentTypes,
            )[0]).toBe(6);
        });

        it("still reports attribute violations when imposedSubset suppresses allowedSubset", () => {
            const search = makeSearch({
                subset: SearchArgumentData_subset_wholeSubtree,
                filter: {
                    item: {
                        equality: new AttributeValueAssertion(
                            streetAddress["&id"],
                            streetAddress.encoderFor["&Type"]!({ uTF8String: "123 Main St" }, BER),
                        ),
                    },
                },
            });
            const rule = makeRule({
                inputAttributeTypes: [new RequestAttribute(commonName["&id"])],
                allowedSubset: only_base,
                imposedSubset: ImposedSubset_baseObject,
            });
            const [step, state] = generalCheckOfSearchFilter(search, rule, getAttributeParentTypes);
            expect(step).toBe(1);
            expect(state.searchAttributeViolations.map((oid) => oid.toString())).toEqual([
                streetAddress["&id"].toString(),
            ]);
        });

        it("respects defaultControls and searchRuleControls when determining effective useSubset", () => {
            // defaultControls enables useSubset when omitted by the user, so allowedSubset applies.
            const defaults_enable_use_subset = new ControlOptions(
                undefined,
                searchOptionsWithUseSubset(true),
            );
            const rule_with_default = makeRule({
                defaultControls: defaults_enable_use_subset,
                allowedSubset: only_base,
                imposedSubset: ImposedSubset_baseObject,
            });
            expect(generalCheckOfSearchFilter(
                makeSearch({ subset: SearchArgumentData_subset_wholeSubtree }),
                rule_with_default,
                getAttributeParentTypes,
            )[0]).toBe(6);
            // User explicitly clearing useSubset restores imposedSubset and suppresses allowedSubset.
            expect(generalCheckOfSearchFilter(
                makeSearch({
                    subset: SearchArgumentData_subset_wholeSubtree,
                    searchControlOptions: searchOptionsWithUseSubset(false),
                }),
                rule_with_default,
                getAttributeParentTypes,
            )[0]).toBe(0);

            // searchRuleControls forcing useSubset back to default (unset) suppresses allowedSubset
            // even if the user requested useSubset.
            const override_use_subset_mask = new ControlOptions(
                undefined,
                (() => {
                    const mask = new Uint8ClampedArray(SearchControlOptions_useSubset + 1);
                    mask[SearchControlOptions_useSubset] = TRUE_BIT;
                    return mask;
                })(),
            );
            const rule_forcing_imposed = makeRule({
                searchRuleControls: override_use_subset_mask,
                allowedSubset: only_base,
                imposedSubset: ImposedSubset_baseObject,
            });
            expect(generalCheckOfSearchFilter(
                makeSearch({
                    subset: SearchArgumentData_subset_wholeSubtree,
                    searchControlOptions: searchOptionsWithUseSubset(true),
                }),
                rule_forcing_imposed,
                getAttributeParentTypes,
            )[0]).toBe(0);
        });
    });
});
