import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
    TRUE_BIT,
    type BIT_STRING,
} from "@wildboar/asn1";
import { AttributeTypeAndValue } from "@wildboar/dn";
import { UserClasses } from "../modules/BasicAccessControl/UserClasses.ta.mjs";
import { ProtectedItems } from "../modules/BasicAccessControl/ProtectedItems.ta.mjs";
import {
    grantAdd,
    grantRead,
    denyRead,
    grantsAndDenialsToJSON,
    grantsAndDenialsToString,
} from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import type { AuthenticationLevel } from "../modules/BasicAccessControl/AuthenticationLevel.ta.mjs";
import { AuthenticationLevel_basicLevels } from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta.mjs";
import {
    AuthenticationLevel_basicLevels_level_none,
    AuthenticationLevel_basicLevels_level_strong,
} from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta.mjs";
import { MaxValueCount } from "../modules/BasicAccessControl/MaxValueCount.ta.mjs";
import { RestrictedValue } from "../modules/BasicAccessControl/RestrictedValue.ta.mjs";
import { NameAndOptionalUID } from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import { SubtreeSpecification } from "../modules/InformationFramework/SubtreeSpecification.ta.mjs";
import { ContextAssertion } from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import { AttributeValueAssertion } from "../modules/InformationFramework/AttributeValueAssertion.ta.mjs";
import ACDFTuple from "./ACDFTuple.mjs";
import ACDFTupleExtended from "./ACDFTupleExtended.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");
const description = ObjectIdentifier.fromString("2.5.4.13");
const person = ObjectIdentifier.fromParts([ 2, 5, 6, 6 ]);
const languageContext = ObjectIdentifier.fromString("1.2.3.4");

function utf8Element(s: string): DERElement {
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
    );
    el.utf8String = s;
    return el;
}

function permissions (...bits: number[]): BIT_STRING {
    const result = new Uint8ClampedArray(Math.max(26, ...bits.map((bit) => bit + 1)));
    for (const bit of bits) {
        result[bit] = TRUE_BIT;
    }
    return result;
}

const ALL_USERS = new UserClasses(null);
const AUTH_NONE: AuthenticationLevel = {
    basicLevels: new AuthenticationLevel_basicLevels(
        AuthenticationLevel_basicLevels_level_none,
    ),
};
const AUTH_STRONG: AuthenticationLevel = {
    basicLevels: new AuthenticationLevel_basicLevels(
        AuthenticationLevel_basicLevels_level_strong,
        3,
        true,
    ),
};

describe("GrantsAndDenials toString / toJSON", () => {
    it("prints named bits that are set, in bit-position order", () => {
        const bits = permissions(grantAdd, grantRead, denyRead);
        expect(grantsAndDenialsToString(bits)).toBe(
            "{ grantAdd, grantRead, denyRead }",
        );
        expect(grantsAndDenialsToJSON(bits)).toEqual([
            "grantAdd",
            "grantRead",
            "denyRead",
        ]);
    });

    it("prints an empty bit string as {} and unnamed bits as integers", () => {
        expect(grantsAndDenialsToString(new Uint8ClampedArray(0))).toBe("{}");
        expect(grantsAndDenialsToJSON(new Uint8ClampedArray(0))).toEqual([]);
        const unnamed = permissions(26);
        expect(grantsAndDenialsToString(unnamed)).toBe("{ 26 }");
        expect(grantsAndDenialsToJSON(unnamed)).toEqual([ 26 ]);
    });
});

describe("UserClasses toString / toJSON", () => {
    it("prints allUsers NULL and omits empty selectors", () => {
        expect(ALL_USERS.toString()).toBe("{ allUsers NULL }");
        expect(ALL_USERS.toJSON()).toEqual({ allUsers: null });
        expect(new UserClasses().toString()).toBe("{}");
        expect(new UserClasses().toJSON()).toEqual({});
    });

    it("quotes NameAndOptionalUID and nests SubtreeSpecification", () => {
        const dn = [[ new AttributeTypeAndValue(commonName, utf8Element("Alice")) ]];
        const classes = new UserClasses(
            undefined,
            null,
            [ new NameAndOptionalUID(dn) ],
            undefined,
            [ new SubtreeSpecification() ],
        );
        expect(classes.toString()).toBe(
            '{ thisEntry NULL, name { "cn=Alice" }, subtree { {} } }',
        );
        expect(classes.toJSON()).toEqual({
            thisEntry: null,
            name: [{ dn: [[{ type: "2.5.4.3", value: "#0c05416c696365" }]] }],
            subtree: [{}],
        });
    });
});

describe("ProtectedItems toString / toJSON", () => {
    it("prints present axes and quotes attribute values", () => {
        const items = Object.assign(new ProtectedItems(), {
            entry: null,
            attributeType: [ commonName ],
            attributeValue: [
                new AttributeTypeAndValue(commonName, utf8Element("Alice")),
            ],
            maxValueCount: [ new MaxValueCount(commonName, 2) ],
            restrictedBy: [ new RestrictedValue(commonName, description) ],
            contexts: [ new ContextAssertion(languageContext, [ utf8Element("en") ]) ],
            classes: { item: person },
            rangeOfValues: { item: { present: commonName } },
            _unrecognizedExtensionsList: [],
        });
        expect(items.toString()).toBe(
            "{ entry NULL, attributeType { 2.5.4.3 },"
            + " attributeValue { \"cn=Alice\" },"
            + " rangeOfValues item:present:2.5.4.3,"
            + " maxValueCount { { type 2.5.4.3, maxCount 2 } },"
            + " restrictedBy { { type 2.5.4.3, valuesIn 2.5.4.13 } },"
            + " contexts { { contextType 1.2.3.4, contextValues { \"en\" } } },"
            + " classes item:2.5.6.6 }",
        );
        expect(items.toJSON()).toEqual({
            entry: null,
            attributeType: [ "2.5.4.3" ],
            attributeValue: [{ type: "2.5.4.3", value: "#0c05416c696365" }],
            rangeOfValues: { item: { present: "2.5.4.3" } },
            maxValueCount: [{ type: "2.5.4.3", maxCount: 2 }],
            restrictedBy: [{ type: "2.5.4.3", valuesIn: "2.5.4.13" }],
            contexts: [{ contextType: "1.2.3.4", contextValues: [ "en" ] }],
            classes: { item: "2.5.6.6" },
        });
    });

    it("prints an empty ProtectedItems as {}", () => {
        expect(new ProtectedItems().toString()).toBe("{}");
        expect(new ProtectedItems().toJSON()).toEqual({});
    });
});

describe("ACDFTuple toString / toJSON", () => {
    it("prints the five X.501 18.8.2 components", () => {
        const tuple = new ACDFTuple(
            ALL_USERS,
            AUTH_NONE,
            new ProtectedItems(null),
            permissions(grantAdd),
            100,
        );
        expect(tuple.toString()).toBe(
            "{ userClasses { allUsers NULL },"
            + " authenticationLevel basicLevels:{ level none },"
            + " protectedItems { entry NULL },"
            + " grantsAndDenials { grantAdd },"
            + " precedence 100 }",
        );
        expect(tuple.toJSON()).toEqual({
            userClasses: { allUsers: null },
            authenticationLevel: { basicLevels: { level: "none" } },
            protectedItems: { entry: null },
            grantsAndDenials: [ "grantAdd" ],
            precedence: 100,
        });
    });

    it("nests a signed strong authentication level", () => {
        const tuple = new ACDFTuple(
            new UserClasses(),
            AUTH_STRONG,
            new ProtectedItems(),
            permissions(grantRead),
            0,
        );
        expect(tuple.toString()).toBe(
            "{ userClasses {},"
            + " authenticationLevel basicLevels:{ level strong, localQualifier 3, signed TRUE },"
            + " protectedItems {},"
            + " grantsAndDenials { grantRead },"
            + " precedence 0 }",
        );
        expect(tuple.toJSON().authenticationLevel).toEqual({
            basicLevels: { level: "strong", localQualifier: 3, signed: true },
        });
    });

    it("prints a rangeOfValues equality filter using the element's value notation", () => {
        const tuple = new ACDFTuple(
            ALL_USERS,
            AUTH_NONE,
            Object.assign(new ProtectedItems(), {
                rangeOfValues: {
                    item: {
                        equality: new AttributeValueAssertion(
                            commonName,
                            utf8Element("Alice"),
                        ),
                    },
                },
                _unrecognizedExtensionsList: [],
            }),
            permissions(grantRead),
            10,
        );
        expect(tuple.toString()).toContain(
            'rangeOfValues item:equality:{ type 2.5.4.3, assertion "Alice" }',
        );
        expect(tuple.toJSON().protectedItems.rangeOfValues).toEqual({
            item: {
                equality: { type: "2.5.4.3", assertion: "Alice" },
            },
        });
    });
});

describe("ACDFTupleExtended toString / toJSON", () => {
    it("appends userClassSpecificity to the five-tuple", () => {
        const base = new ACDFTuple(
            ALL_USERS,
            AUTH_NONE,
            new ProtectedItems(),
            permissions(grantAdd),
            50,
        );
        const extended = new ACDFTupleExtended(base, 1);
        expect(extended.toString()).toBe(
            "{ userClasses { allUsers NULL },"
            + " authenticationLevel basicLevels:{ level none },"
            + " protectedItems {},"
            + " grantsAndDenials { grantAdd },"
            + " precedence 50,"
            + " userClassSpecificity 1 }",
        );
        expect(extended.toJSON()).toEqual({
            userClasses: { allUsers: null },
            authenticationLevel: { basicLevels: { level: "none" } },
            protectedItems: {},
            grantsAndDenials: [ "grantAdd" ],
            precedence: 50,
            userClassSpecificity: 1,
        });
    });

    it("keeps userClassSpecificity when replacing grantsAndDenials", () => {
        const extended = new ACDFTupleExtended(
            ALL_USERS,
            AUTH_NONE,
            new ProtectedItems(),
            permissions(grantAdd),
            1,
            4,
        );
        expect(extended.withGrantsAndDenials(permissions(grantRead)).toJSON())
            .toEqual({
                userClasses: { allUsers: null },
                authenticationLevel: { basicLevels: { level: "none" } },
                protectedItems: {},
                grantsAndDenials: [ "grantRead" ],
                precedence: 1,
                userClassSpecificity: 4,
            });
    });
});
