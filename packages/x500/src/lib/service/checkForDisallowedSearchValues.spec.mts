import type { DotDelimitedOidString } from "@wildboar/asn1";
import type { Filter } from "@wildboar/x500/DirectoryAbstractService";
import type { FilterItem } from "@wildboar/x500/DirectoryAbstractService";
import { BER } from "@wildboar/asn1/functional";
import { commonName, languageContext } from "@wildboar/x500/SelectedAttributeTypes";
import { AttributeTypeAssertion, AttributeValueAssertion, Context, ContextAssertion } from "@wildboar/x500/InformationFramework";
import { checkForDisallowedSearchValues } from "./checkForDisallowedSearchValues.mjs";

describe("checkForDisallowedSearchValues", () => {
    it("should not find any violations in the simplest compliant case", () => {
        const filter: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                ),
            },
        };
        const disallowed: Map<DotDelimitedOidString, boolean> = new Map();
        const violations: FilterItem[] = [];
        checkForDisallowedSearchValues(filter, disallowed, violations);
        expect(violations.length).toBe(0);
    });

    it("should find violations in the simplest non-compliant case with contexts", () => {
        const filter1: Filter = {
            item: {
                contextPresent: new AttributeTypeAssertion(
                    commonName["&id"],
                    [
                        new ContextAssertion(
                            languageContext["&id"],
                            [languageContext.encoderFor["&Type"]!("en", BER)],
                        ),
                    ],
                ),
            },
        };

        const filter2: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                ),
            },
        };

        const disallowed: Map<DotDelimitedOidString, boolean> = new Map();
        disallowed.set(commonName["&id"].toString(), true); // Has contexts.
        const violations: FilterItem[] = [];

        checkForDisallowedSearchValues(filter1, disallowed, violations);
        expect(violations.length).toBe(0);
        checkForDisallowedSearchValues(filter2, disallowed, violations);
        expect(violations.length).toBe(1);
    });

    it("should find violations in the simplest non-compliant case without contexts", () => {
        const filter1: Filter = {
            item: {
                present: commonName["&id"],
            },
        };

        const filter2: Filter = {
            item: {
                equality: new AttributeValueAssertion(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({ uTF8String: "John Doe" }, BER),
                ),
            },
        };

        const disallowed: Map<DotDelimitedOidString, boolean> = new Map();
        disallowed.set(commonName["&id"].toString(), false); // Has no contexts.
        const violations: FilterItem[] = [];

        checkForDisallowedSearchValues(filter1, disallowed, violations);
        expect(violations.length).toBe(0);
        checkForDisallowedSearchValues(filter2, disallowed, violations);
        expect(violations.length).toBe(1);
    });
});
