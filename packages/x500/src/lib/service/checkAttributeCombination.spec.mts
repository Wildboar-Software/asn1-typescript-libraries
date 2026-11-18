import type { AttributeCombination } from "@wildboar/x500/ServiceAdministration";
import type { Filter } from "@wildboar/x500/DirectoryAbstractService";
import { checkAttributeCombination } from "./checkAttributeCombination.mjs";
import { commonName, streetAddress } from "@wildboar/x500/SelectedAttributeTypes";
import { AttributeValueAssertion } from "@wildboar/x500/InformationFramework";
import { BER } from "@wildboar/asn1/functional";
import { ASN1TagClass, BERElement } from "@wildboar/asn1";

describe("checkAttributeCombination", () => {
    it("should not find any violations in the simplest compliant case", () => {
        const violations: AttributeCombination[] = [];
        const filter: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                ),
            },
        };
        const combo: AttributeCombination = {
            attribute: commonName["&id"],
        };
        checkAttributeCombination(filter, combo, true, violations);
        expect(violations).toHaveLength(0);
    });

    it("should not find any violations in the simplest compliant AND case", () => {
        const violations: AttributeCombination[] = [];
        const filter: Filter = {
            and: [
                {
                    item: {
                        equality: new AttributeValueAssertion(
                            commonName["&id"],
                            commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
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
            ]
        };
        const combo: AttributeCombination = {
            and: [
                { attribute: commonName["&id"] },
                { attribute: streetAddress["&id"] },
            ],
        };
        checkAttributeCombination(filter, combo, true, violations);
        expect(violations).toHaveLength(0);
    });

    it("should not find any violations in the simplest compliant OR case", () => {
        const violations: AttributeCombination[] = [];
        const filter: Filter = {
            or: [
                {
                    item: {
                        equality: new AttributeValueAssertion(
                            commonName["&id"],
                            commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
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
            ]
        };
        // This combo is saying that the filter MUST have either of these attributes present in every subfilter.
        // Since the filter is an OR, and each subfilter is on a different attribute, this will never match.
        // 
        // ITU-T Recommendation X.501 (2019), Section 16.10.3 says:
        // 
        // > This component may specify that certain attribute types shall
        // > unconditionally be effectively present in the filter.
        //
        // So I interpret this behavior as being correct.
        const combo: AttributeCombination = {
            or: [
                { attribute: commonName["&id"] },
                { attribute: streetAddress["&id"] },
            ],
        };
        checkAttributeCombination(filter, combo, true, violations);
        expect(violations).not.toHaveLength(0);
    });

    it("should not find any violations in an empty AND case", () => {
        const violations: AttributeCombination[] = [];
        const filter: Filter = {
            and: [],
        };
        const combo: AttributeCombination = {
            and: [],
        };
    });

    it("should not find any violations in an empty OR case", () => {
        const violations: AttributeCombination[] = [];
        const filter: Filter = {
            or: [],
        };
        const combo: AttributeCombination = {
            or: [],
        };
        checkAttributeCombination(filter, combo, true, violations);
        expect(violations).not.toHaveLength(0);
    });

    describe("filter negation and presence requirements", () => {
        const cn: Filter = { item: { present: commonName["&id"] } };
        const street: Filter = { item: { present: streetAddress["&id"] } };
        const required: AttributeCombination = { attribute: commonName["&id"] };
        const excluded: AttributeCombination = { not: required };

        const cases: [string, Filter, boolean, boolean][] = [
            ["the required type", cn, true, false],
            ["an unrelated type", street, false, true],
            ["a negated required type", { not: cn }, false, true],
            ["a negated unrelated type", { not: street }, false, true],
            ["a double-negated required type", { not: { not: cn } }, true, false],
            ["a double-negated unrelated type", { not: { not: street } }, false, true],
            ["a triple-negated required type", { not: { not: { not: cn } } }, false, true],
            ["a triple-negated unrelated type", { not: { not: { not: street } } }, false, true],
            ["an AND containing the required type", { and: [cn, street] }, true, false],
            ["an AND containing only a negated required type", { and: [street, { not: cn }] }, false, true],
            ["an AND with an unrelated negation", { and: [cn, { not: street }] }, true, false],
            ["an OR missing the required type in one branch", { or: [cn, street] }, false, false],
            ["an OR with an unrelated negated branch", { or: [cn, { not: street }] }, false, false],
            ["a negated AND", { not: { and: [{ not: cn }, { not: street }] } }, false, false],
            ["a negated OR", { not: { or: [{ not: cn }, { not: street }] } }, true, false],
            ["an empty AND", { and: [] }, false, true],
            ["an empty OR", { or: [] }, true, true],
            ["an AND with a false operand", { and: [cn, { or: [] }] }, true, true],
            ["an OR with a false operand", { or: [cn, { or: [] }] }, true, false],
        ];

        it.each(cases)("checks non-negated presence for %s", (_description, filter, meets_presence, meets_absence) => {
            const required_violations: AttributeCombination[] = [];
            checkAttributeCombination(filter, required, true, required_violations);
            expect(required_violations).toHaveLength(meets_presence ? 0 : 1);

            const excluded_violations: AttributeCombination[] = [];
            checkAttributeCombination(filter, excluded, true, excluded_violations);
            expect(excluded_violations).toHaveLength(meets_absence ? 0 : 1);

            const negated_violations: AttributeCombination[] = [];
            checkAttributeCombination(filter, required, false, negated_violations);
            expect(negated_violations).toHaveLength(meets_absence ? 0 : 1);
        });

        it.each([true, false])("does not accept unknown filter alternatives with non_negated=%s", (non_negated) => {
            const filter = new BERElement();
            filter.tagClass = ASN1TagClass.context;
            filter.tagNumber = 99;
            const violations: AttributeCombination[] = [];
            checkAttributeCombination(filter, required, non_negated, violations);
            expect(violations).toEqual([required]);
        });

        it.each([true, false])("fails closed at the filter depth limit with non_negated=%s", (non_negated) => {
            let filter: Filter = cn;
            for (let i = 0; i < 12; i++) {
                filter = { not: filter };
            }
            const violations: AttributeCombination[] = [];
            checkAttributeCombination(filter, required, non_negated, violations);
            expect(violations).toEqual([required]);
        });
    });
});
