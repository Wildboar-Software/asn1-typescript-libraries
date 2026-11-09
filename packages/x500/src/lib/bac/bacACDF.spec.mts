import { FALSE_BIT, ObjectIdentifier, TRUE_BIT, type ASN1Element, type BIT_STRING } from "@wildboar/asn1";
import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import {
    bacACDF,
    PERMISSION_CATEGORY_ADD,
    PERMISSION_CATEGORY_IMPORT,
    PERMISSION_CATEGORY_INVOKE,
    PERMISSION_CATEGORY_READ,
} from "./bacACDF.mjs";
import { splitGrantsAndDenials } from "./splitGrantsAndDenials.mjs";
import { applyACDFConstraints } from "./applyACDFConstraints.mjs";
import { ProtectedItems } from "../modules/BasicAccessControl/ProtectedItems.ta.mjs";
import {
    denyAdd,
    denyInvoke,
    denyRead,
    grantAdd,
    grantImport,
    grantInvoke,
    grantRead,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import { UserClasses } from "../modules/BasicAccessControl/UserClasses.ta.mjs";
import type { AuthenticationLevel } from "../modules/BasicAccessControl/AuthenticationLevel.ta.mjs";
import { AuthenticationLevel_basicLevels } from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta.mjs";
import { AuthenticationLevel_basicLevels_level_none } from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta.mjs";
import { MaxValueCount } from "../modules/BasicAccessControl/MaxValueCount.ta.mjs";
import { RestrictedValue } from "../modules/BasicAccessControl/RestrictedValue.ta.mjs";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { Attribute } from "../modules/InformationFramework/Attribute.ta.mjs";
import { Attribute_valuesWithContext_Item } from "../modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import { Context } from "../modules/InformationFramework/Context.ta.mjs";
import { ContextAssertion } from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";
import type ProtectedItem from "../types/ProtectedItem.mjs";
import type { EvaluateFilterSettings } from "../utils/evaluateFilter.mjs";

/*
 * These tests supply preprocessed ACDF tuples, not ACIItem objects. Each tuple
 * represents one permission clause expanded from an ACIItem. Constructor
 * arguments are:
 *
 * userClasses, authenticationLevel, protectedItems, grantsAndDenials,
 * precedence, userClassSpecificity
 *
 * `userClassSpecificity` is computed by user-class matching before calling bacACDF.
 * Most fixtures use allUsers (specificity 1) and require no authentication, so
 * the anonymous requester passed as `undefined` is eligible for those tuples.
 * The H2 tests deliberately inject synthetic scores to isolate the ranking step.
 *
 * ProtectedItems instances have named-field overrides so the selection and
 * constraints are visible in each test, without a long positional constructor.
 * Omitted fields remain undefined, and extension lists are empty.
 */
const ALL_USERS = new UserClasses(null); // allUsers: NULL
const AUTH_NONE: AuthenticationLevel = {
    basicLevels: new AuthenticationLevel_basicLevels(AuthenticationLevel_basicLevels_level_none),
};

const COMMON_NAME_TYPE = ObjectIdentifier.fromString("2.5.4.3");
const DESCRIPTION_TYPE = ObjectIdentifier.fromString("2.5.4.13");
const TEST_LANGUAGE_CONTEXT_TYPE = ObjectIdentifier.fromString("1.2.3.4");
// A second valuesIn attribute for tests with multiple restrictedBy constraints.
// Its OID is also used for the synthetic context above; no schema is loaded here.
const ALTERNATE_SOURCE_ATTRIBUTE_TYPE = TEST_LANGUAGE_CONTEXT_TYPE;

function utf8 (text: string): ASN1Element {
    return _encodeUTF8String(text, DER);
}

const ALICE_COMMON_NAME = new AttributeTypeAndValue(COMMON_NAME_TYPE, utf8("Alice"));
// This is a synthetic UTF8String context, not the standard languageContext syntax.
const ENGLISH_CONTEXT = new Context(TEST_LANGUAGE_CONTEXT_TYPE, [utf8("en")]);
const FRENCH_CONTEXT = new Context(TEST_LANGUAGE_CONTEXT_TYPE, [utf8("fr")]);
const ENGLISH_CONTEXT_ASSERTION = new ContextAssertion(TEST_LANGUAGE_CONTEXT_TYPE, [utf8("en")]);

const matchingSettings: EvaluateFilterSettings = {
    getEqualityMatcher: () => (a, b) => a.utf8String === b.utf8String,
    getOrderingMatcher: () => undefined,
    getSubstringsMatcher: () => undefined,
    getApproximateMatcher: () => undefined,
    getContextMatcher: () => (a, b) => a.utf8String === b.utf8String,
    determineAbsentMatch: () => false, // Missing contexts do not satisfy assertions in these fixtures.
    isMatchingRuleCompatibleWithAttributeType: () => true,
    isAttributeSubtype: (a, b) => a.isEqualTo(b),
    permittedToMatch: () => true, // Do not introduce a second access-control decision during matching.
};

// Encode named grant/deny bit positions. This helper enables no bits by default.
// Permission bits (e.g. grantRead) are different from operation categories
// (e.g. PERMISSION_CATEGORY_READ), which are passed separately to bacACDF.
function permissions (...bits: number[]): BIT_STRING {
    const result = new Uint8ClampedArray(Math.max(26, ...bits.map((bit) => bit + 1)));
    for (const bit of bits) {
        result[bit] = TRUE_BIT;
    }
    return result;
}

type ValueRequest = Extract<ProtectedItem, { value: AttributeTypeAndValue }>;

describe("BAC constraints before precedence (H1)", () => {
    it("does not let an attribute selector bypass a context constraint", () => {
        // Policy: anyone may add commonName values, but only with English context.
        const englishOnlyAddGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                contexts: [ENGLISH_CONTEXT_ASSERTION],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // precedence
            1, // allUsers specificity
        );
        const frenchAddition: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [FRENCH_CONTEXT],
        };
        const englishAddition: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [ENGLISH_CONTEXT],
        };
        const additionWithoutContexts: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [],
        };

        // allAttributeValues selects all three requests; it must not bypass contexts.
        expect(bacACDF(
            [englishOnlyAddGrant], undefined, frenchAddition,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
        expect(bacACDF(
            [englishOnlyAddGrant], undefined, englishAddition,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(true);
        expect(bacACDF(
            [englishOnlyAddGrant], undefined, additionWithoutContexts,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
    });

    it("requires all context assertions and respects absentMatch", () => {
        const markerContextType = ObjectIdentifier.fromString("1.2.3.5");
        // Policy: both the English assertion and a separate marker must be satisfied.
        const twoContextAddGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                contexts: [
                    ENGLISH_CONTEXT_ASSERTION,
                    new ContextAssertion(markerContextType, [utf8("present")]),
                ],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // precedence
            1, // allUsers specificity
        );
        const additionMissingTheMarker: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [ENGLISH_CONTEXT],
        };
        const absentContextsMatch: EvaluateFilterSettings = {
            ...matchingSettings,
            determineAbsentMatch: () => true,
        };

        // The second assertion fails unless the context definition permits absence.
        expect(bacACDF(
            [twoContextAddGrant], undefined, additionMissingTheMarker,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
        expect(bacACDF(
            [twoContextAddGrant], undefined, additionMissingTheMarker,
            [PERMISSION_CATEGORY_ADD], absentContextsMatch,
        ).authorized).toBe(true);
    });

    it("does not use contexts as a protected-item selector", () => {
        // This clause grants read, but selects no entries, attribute types, or values.
        // A context constraint alone must not make it apply to a protected item.
        const readGrantWithoutASelector = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                contexts: [ENGLISH_CONTEXT_ASSERTION],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantRead),
            100, // precedence
            1, // allUsers specificity
        );
        const englishValueToRead: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [ENGLISH_CONTEXT],
        };

        expect(bacACDF(
            [readGrantWithoutASelector], undefined, englishValueToRead,
            [PERMISSION_CATEGORY_READ], matchingSettings,
        ).authorized).toBe(false);
    });

    it("does not apply add constraints to a read permission", () => {
        const commonNameReadGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                contexts: [ENGLISH_CONTEXT_ASSERTION],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantRead),
            100, // precedence
            1, // allUsers specificity
        );
        const frenchValueToRead: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [FRENCH_CONTEXT],
        };

        // contexts constrains addition, not reading an already-stored French value.
        expect(bacACDF(
            [commonNameReadGrant], undefined, frenchValueToRead,
            [PERMISSION_CATEGORY_READ], matchingSettings,
        ).authorized).toBe(true);
    });

    it("disables denyAdd only when all context constraints match", () => {
        const unconditionalAddGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // lower precedence: used if the denial is disabled
            1, // allUsers specificity
        );
        const higherPrecedenceContextualDenial = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                contexts: [ENGLISH_CONTEXT_ASSERTION],
                _unrecognizedExtensionsList: [],
            }),
            permissions(denyAdd),
            200, // wins over the grant if denyAdd remains set
            1, // allUsers specificity
        );
        const englishAddition: ValueRequest = { value: ALICE_COMMON_NAME, contexts: [ENGLISH_CONTEXT] };
        const frenchAddition: ValueRequest = { value: ALICE_COMMON_NAME, contexts: [FRENCH_CONTEXT] };

        // X.501's contexts rule disables denyAdd when the assertions are satisfied.
        // English therefore falls back to the lower grant; French retains the denial.
        const tuples = [unconditionalAddGrant, higherPrecedenceContextualDenial];
        expect(bacACDF(
            tuples, undefined, englishAddition,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(true);
        expect(bacACDF(
            tuples, undefined, frenchAddition,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
    });

    it("fails closed when context matching throws", () => {
        const unavailableContextMatching: EvaluateFilterSettings = {
            ...matchingSettings,
            getContextMatcher: () => () => {
                throw new Error("unavailable");
            },
        };
        const englishOnlyAddGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                contexts: [ENGLISH_CONTEXT_ASSERTION],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // precedence
            1, // allUsers specificity
        );
        const unconditionalAddGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // lower precedence than the denial below
            1, // allUsers specificity
        );
        const higherPrecedenceContextualDenial = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                contexts: [ENGLISH_CONTEXT_ASSERTION],
                _unrecognizedExtensionsList: [],
            }),
            permissions(denyAdd),
            200, // must still override the unconditional grant
            1, // allUsers specificity
        );
        const englishAddition: ValueRequest = { value: ALICE_COMMON_NAME, contexts: [ENGLISH_CONTEXT] };

        // An evaluation error proves neither that a constrained grant is usable
        // nor that a contextual denial may be removed. Both requests must fail.
        expect(bacACDF(
            [englishOnlyAddGrant], undefined, englishAddition,
            [PERMISSION_CATEGORY_ADD], unavailableContextMatching,
        ).authorized).toBe(false);
        expect(bacACDF(
            [unconditionalAddGrant, higherPrecedenceContextualDenial], undefined, englishAddition,
            [PERMISSION_CATEGORY_ADD], unavailableContextMatching,
        ).authorized).toBe(false);
    });

    it("checks the post-add count on individual attribute values", () => {
        // Policy: grant addition only if there will be at most two commonName values.
        // A bigint limit also checks that ASN.1 INTEGER representations interoperate.
        const atMostTwoValuesAddGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                maxValueCount: [new MaxValueCount(COMMON_NAME_TYPE, 2n)],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // precedence
            1, // allUsers specificity
        );
        const zeroValuesAllowedAddGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                maxValueCount: [new MaxValueCount(COMMON_NAME_TYPE, 0)],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // precedence
            1, // allUsers specificity
        );
        const additionProducingTwoValues: ValueRequest = {
            value: ALICE_COMMON_NAME, contexts: [ENGLISH_CONTEXT], valuesCount: 2,
        };
        const additionProducingThreeValues: ValueRequest = {
            value: ALICE_COMMON_NAME, contexts: [ENGLISH_CONTEXT], valuesCount: 3,
        };
        const firstValueAddition: ValueRequest = {
            value: ALICE_COMMON_NAME, contexts: [ENGLISH_CONTEXT], valuesCount: 1,
        };

        // Counts describe the resulting attribute, including the value being added.
        expect(bacACDF(
            [atMostTwoValuesAddGrant], undefined, additionProducingTwoValues,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(true);
        expect(bacACDF(
            [atMostTwoValuesAddGrant], undefined, additionProducingThreeValues,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
        expect(bacACDF(
            [zeroValuesAllowedAddGrant], undefined, firstValueAddition,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
    });

    it.each([undefined, NaN, Infinity, -1, 1.5])("does not grant a counted addition with invalid or missing count %s", (count) => {
        const countedAddGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                maxValueCount: [new MaxValueCount(COMMON_NAME_TYPE, 2)],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // precedence
            1, // allUsers specificity
        );
        const additionWithUnusableCount: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [ENGLISH_CONTEXT],
            valuesCount: count,
        };

        // Without a reliable non-negative integer count, this grant is not usable.
        expect(bacACDF(
            [countedAddGrant], undefined, additionWithUnusableCount,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
    });

    it("checks restrictedBy against every value, including contextual values", () => {
        // Policy: a commonName value may be added only if it also appears in description.
        const descriptionRestrictedAddGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                restrictedBy: [new RestrictedValue(COMMON_NAME_TYPE, DESCRIPTION_TYPE)],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // precedence
            1, // allUsers specificity
        );
        const additionWithoutEntryData: ValueRequest = {
            value: ALICE_COMMON_NAME, contexts: [ENGLISH_CONTEXT],
        };
        const additionWithAnEmptyEntry: ValueRequest = {
            value: ALICE_COMMON_NAME, contexts: [ENGLISH_CONTEXT], entryAttributes: [],
        };
        const additionWhoseDescriptionIsBob: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [ENGLISH_CONTEXT],
            entryAttributes: [new Attribute(DESCRIPTION_TYPE, [utf8("Bob")])],
        };
        const additionWhoseDescriptionIsAlice: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [ENGLISH_CONTEXT],
            entryAttributes: [new Attribute(DESCRIPTION_TYPE, [utf8("Alice")])],
        };
        const additionWithContextualAliceInDescription: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [ENGLISH_CONTEXT],
            entryAttributes: [new Attribute(DESCRIPTION_TYPE, [], [
                new Attribute_valuesWithContext_Item(utf8("Alice"), [FRENCH_CONTEXT]),
            ])],
        };

        expect(bacACDF(
            [descriptionRestrictedAddGrant], undefined, additionWithoutEntryData,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
        expect(bacACDF(
            [descriptionRestrictedAddGrant], undefined, additionWithAnEmptyEntry,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
        expect(bacACDF(
            [descriptionRestrictedAddGrant], undefined, additionWhoseDescriptionIsBob,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
        expect(bacACDF(
            [descriptionRestrictedAddGrant], undefined, additionWhoseDescriptionIsAlice,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(true);
        // restrictedBy ignores source-value contexts: the French source still contains Alice.
        expect(bacACDF(
            [descriptionRestrictedAddGrant], undefined, additionWithContextualAliceInDescription,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(true);
    });

    it("does not apply restrictions for a different attribute type", () => {
        const addGrantWithADescriptionOnlyRestriction = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                restrictedBy: [new RestrictedValue(DESCRIPTION_TYPE, DESCRIPTION_TYPE)],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // precedence
            1, // allUsers specificity
        );
        const commonNameAddition: ValueRequest = { value: ALICE_COMMON_NAME, contexts: [ENGLISH_CONTEXT] };

        // The restriction's type is description, not the commonName being added.
        // Therefore no description/source-entry lookup is needed for this request.
        expect(bacACDF(
            [addGrantWithADescriptionOnlyRestriction], undefined, commonNameAddition,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(true);
    });

    it("still evaluates contexts after restrictedBy unsets grantAdd", () => {
        const contextMatcherLookup = vi.fn(matchingSettings.getContextMatcher);
        // Deliberately mixed permissions: call the constraint helper directly,
        // before bacACDF would split grants and denials into separate tuples.
        const mixedPermissionTuple = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                restrictedBy: [
                    new RestrictedValue(COMMON_NAME_TYPE, DESCRIPTION_TYPE),
                    new RestrictedValue(COMMON_NAME_TYPE, ALTERNATE_SOURCE_ATTRIBUTE_TYPE),
                ],
                contexts: [ENGLISH_CONTEXT_ASSERTION],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd, denyAdd, grantRead),
            100, // precedence
            1, // allUsers specificity
        );
        const englishAdditionWithNoSourceValues: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [ENGLISH_CONTEXT],
            entryAttributes: [],
        };

        const constrainedTuple = applyACDFConstraints(mixedPermissionTuple, englishAdditionWithNoSourceValues, [PERMISSION_CATEGORY_ADD], {
            ...matchingSettings, getContextMatcher: contextMatcherLookup,
        });
        const updatedPermissions = constrainedTuple.grantsAndDenials;
        // restrictedBy disables the add grant; English contexts separately disable
        // the add denial. The unrelated read grant must survive both steps.
        expect(updatedPermissions[grantAdd]).toBe(FALSE_BIT);
        expect(updatedPermissions[denyAdd]).toBe(FALSE_BIT);
        expect(updatedPermissions[grantRead]).toBe(TRUE_BIT);
        expect(contextMatcherLookup).toHaveBeenCalledExactlyOnceWith(TEST_LANGUAGE_CONTEXT_TYPE);
        // The original tuple is reusable for another request and must not be mutated.
        expect(mixedPermissionTuple.grantsAndDenials[grantAdd]).toBe(TRUE_BIT);
        expect(mixedPermissionTuple.grantsAndDenials[denyAdd]).toBe(TRUE_BIT);
    });

    it("does not remove count or restrictedBy denials", () => {
        const unconditionalAddGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // lower precedence
            1, // allUsers specificity
        );
        const higherPrecedenceAddDenial = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                maxValueCount: [new MaxValueCount(COMMON_NAME_TYPE, 0)],
                restrictedBy: [new RestrictedValue(COMMON_NAME_TYPE, DESCRIPTION_TYPE)],
                _unrecognizedExtensionsList: [],
            }),
            permissions(denyAdd),
            200, // denial should still win
            1, // allUsers specificity
        );
        const additionWithoutCountOrSourceData: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [ENGLISH_CONTEXT],
        };

        // These two constraints can disable grants, not erase existing denials.
        // Missing constraint data must not remove the higher-precedence denial.
        expect(bacACDF(
            [unconditionalAddGrant, higherPrecedenceAddDenial], undefined, additionWithoutCountOrSourceData,
            [PERMISSION_CATEGORY_ADD], matchingSettings,
        ).authorized).toBe(false);
    });

    it.each([
        { operationName: "add", operation: PERMISSION_CATEGORY_ADD, grantedBit: grantAdd },
        { operationName: "import", operation: PERMISSION_CATEGORY_IMPORT, grantedBit: grantImport },
    ])("checks immediate-subordinate counts for $operationName", ({ operation, grantedBit }) => {
        // Policy: add/import an entry only if its superior will have at most two children.
        const entryGrantWithTwoChildLimit = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                entry: null,
                maxImmSub: 2,
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantedBit), // explicitly grantAdd or grantImport, as listed above
            100, // precedence
            1, // allUsers specificity
        );
        const resultingTwoChildren: ProtectedItem = { entry: [], siblingsCount: 2 };
        const resultingThreeChildren: ProtectedItem = { entry: [], siblingsCount: 3 };
        const unknownChildCount: ProtectedItem = { entry: [] };
        const superiorInAnotherDSA: ProtectedItem = {
            entry: [],
            immediateSuperiorInSameDSA: false,
        };

        expect(bacACDF(
            [entryGrantWithTwoChildLimit], undefined, resultingTwoChildren,
            [operation], matchingSettings,
        ).authorized).toBe(true);
        expect(bacACDF(
            [entryGrantWithTwoChildLimit], undefined, resultingThreeChildren,
            [operation], matchingSettings,
        ).authorized).toBe(false);
        expect(bacACDF(
            [entryGrantWithTwoChildLimit], undefined, unknownChildCount,
            [operation], matchingSettings,
        ).authorized).toBe(false);
        // X.501 does not apply maxImmSub when the immediate superior is in another DSA.
        expect(bacACDF(
            [entryGrantWithTwoChildLimit], undefined, superiorInAnotherDSA,
            [operation], matchingSettings,
        ).authorized).toBe(true);
    });

    it("discards a constrained grant before selecting the highest precedence", () => {
        const lowerPrecedenceUnconditionalGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            100, // remains eligible when the higher grant fails its constraint
            1, // allUsers specificity
        );
        const higherPrecedenceZeroValueGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                maxValueCount: [new MaxValueCount(COMMON_NAME_TYPE, 0)],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantAdd),
            200, // would win precedence, but must be discarded first
            1, // allUsers specificity
        );
        const firstValueAddition: ValueRequest = {
            value: ALICE_COMMON_NAME,
            contexts: [ENGLISH_CONTEXT],
            valuesCount: 1,
        };

        const result = bacACDF(
            [higherPrecedenceZeroValueGrant, lowerPrecedenceUnconditionalGrant],
            undefined,
            firstValueAddition,
            [PERMISSION_CATEGORY_ADD],
            matchingSettings,
        );
        // A failed conditional grant is not an explicit denial: the lower grant wins.
        expect(result.authorized).toBe(true);
        expect(result.relevantTuples).toHaveLength(1);
        expect(higherPrecedenceZeroValueGrant.grantsAndDenials[grantAdd]).toBe(TRUE_BIT);
    });
});

describe("BAC specificity (H2)", () => {
    it.each([1, 2])("retains denials at the same floored specificity %i in either input order", (specificity) => {
        // Supply synthetic specificity results directly; user/group matching is
        // outside this test. The .5 marker must not create a new specificity rank.
        const readGrantWithUncertainMembership = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantRead),
            100, // same precedence as the denial
            specificity + 0.5, // uncertainty marker added to the base rank
        );
        const readDenialAtTheSameBaseRank = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                _unrecognizedExtensionsList: [],
            }),
            permissions(denyRead),
            100, // same precedence as the grant
            specificity,
        );
        const valueToRead: ValueRequest = { value: ALICE_COMMON_NAME, contexts: [ENGLISH_CONTEXT] };

        // Both tuples survive specificity selection, so the denial wins in either order.
        expect(bacACDF(
            [readGrantWithUncertainMembership, readDenialAtTheSameBaseRank], undefined, valueToRead,
            [PERMISSION_CATEGORY_READ], matchingSettings,
        ).authorized).toBe(false);
        expect(bacACDF(
            [readDenialAtTheSameBaseRank, readGrantWithUncertainMembership], undefined, valueToRead,
            [PERMISSION_CATEGORY_READ], matchingSettings,
        ).authorized).toBe(false);
    });
});

describe("BAC permission splitting (H3)", () => {
    // An extra grant/deny pair beyond the 26 named X.500 permission bits.
    // The splitter must preserve unfamiliar extension bits too.
    const GRANT_EXTENSION_PERMISSION = 30;
    const DENY_EXTENSION_PERMISSION = 31;

    it("retains invoke and extension bits in mixed grant/deny tuples", () => {
        const input = permissions(
            grantRead, denyRead,
            grantInvoke, denyInvoke,
            GRANT_EXTENSION_PERMISSION, DENY_EXTENSION_PERMISSION,
        );
        const expectedGrantBits = new Uint8ClampedArray(input.length);
        expectedGrantBits[grantRead] = TRUE_BIT;
        expectedGrantBits[grantInvoke] = TRUE_BIT;
        expectedGrantBits[GRANT_EXTENSION_PERMISSION] = TRUE_BIT;
        const expectedDenialBits = new Uint8ClampedArray(input.length);
        expectedDenialBits[denyRead] = TRUE_BIT;
        expectedDenialBits[denyInvoke] = TRUE_BIT;
        expectedDenialBits[DENY_EXTENSION_PERMISSION] = TRUE_BIT;

        const [grants, denials] = splitGrantsAndDenials(input);
        expect(grants).toHaveLength(input.length);
        expect(denials).toHaveLength(input.length);
        expect(grants).toEqual(expectedGrantBits);
        expect(denials).toEqual(expectedDenialBits);
        expect(input[denyInvoke]).toBe(TRUE_BIT); // Splitting must not mutate input.
    });

    it("does not lose an invoke denial during ACDF preprocessing", () => {
        // The read bits force this mixed clause down the splitting path. Its
        // denyInvoke bit must survive even though it lies beyond the old 24-bit limit.
        const mixedReadPermissionsAndInvokeDenial = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantRead, denyRead, denyInvoke),
            100, // same precedence as the invoke grant
            1, // allUsers specificity
        );
        const invokeGrant = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                allAttributeValues: [COMMON_NAME_TYPE],
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantInvoke),
            100, // same precedence as the denial
            1, // allUsers specificity
        );
        const valueForInvocation: ValueRequest = { value: ALICE_COMMON_NAME, contexts: [ENGLISH_CONTEXT] };

        expect(bacACDF(
            [mixedReadPermissionsAndInvokeDenial, invokeGrant], undefined, valueForInvocation,
            [PERMISSION_CATEGORY_INVOKE], matchingSettings,
        ).authorized).toBe(false);
    });

    it("preserves pure grants and denials without splitting", () => {
        const onlyGrants = permissions(grantInvoke, GRANT_EXTENSION_PERMISSION);
        const onlyDenials = permissions(denyInvoke, DENY_EXTENSION_PERMISSION);
        for (const input of [onlyGrants, onlyDenials]) {
            const result = splitGrantsAndDenials(input);
            expect(result).toHaveLength(1);
            expect(result[0]).toBe(input); // Already-pure permissions reuse the original array.
        }
    });
});
