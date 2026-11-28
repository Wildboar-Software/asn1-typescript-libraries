import { ASN1Element, DERElement, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { AttributeTypeAndValue as DNAtav, type Name } from "@wildboar/dn";
import { AttributeTypeAndValue } from "@wildboar/x500/InformationFramework";
import {
    BuiltInStandardAttributes,
    ORName,
    _encode_ORName,
} from "@wildboar/x400/MTSAbstractService";
import oRNameExactMatch from "./oRNameExactMatch.mjs";
import oRNameMatch from "./oRNameMatch.mjs";
import oRNameElementsMatch from "./oRNameElementsMatch.mjs";
import oRNameSubstringElementsMatch from "./oRNameSubstringElementsMatch.mjs";

const id_at_commonName = ObjectIdentifier.fromString("2.5.4.3");
const id_test_orNameAttr = ObjectIdentifier.fromString("2.999.1");

function stored(el: ASN1Element): AttributeTypeAndValue {
    return new AttributeTypeAndValue(id_test_orNameAttr, el);
}

function cnName(cn: string): Name {
    const val = new DERElement();
    val.printableString = cn;
    return {
        rdnSequence: [[new DNAtav(id_at_commonName, val)]],
    };
}

function encodeORName(opts: {
    country?: string;
    org?: string;
    dn?: Name;
}): ASN1Element {
    const bisa = new BuiltInStandardAttributes(
        opts.country ? { iso_3166_alpha2_code: opts.country } : undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        opts.org,
    );
    return _encode_ORName(new ORName(bisa, undefined, undefined, opts.dn), DER);
}

describe("oRNameExactMatch, oRNameMatch, oRNameElementsMatch, and oRNameSubstringElementsMatch", () => {
    const empty = encodeORName({});
    const emptyRootDN = encodeORName({ dn: { rdnSequence: [] } });
    const dnAlice = encodeORName({ dn: cnName("Alice") });
    const dnBob = encodeORName({ dn: cnName("Bob") });
    const addrUSAcme = encodeORName({ country: "US", org: "Acme" });
    const addrUSOnly = encodeORName({ country: "US" });
    const bothAliceUSAcme = encodeORName({ country: "US", org: "Acme", dn: cnName("Alice") });
    const bothBobUSAcme = encodeORName({ country: "US", org: "Acme", dn: cnName("Bob") });

    test("all four ORName matchers throw on empty assertions but compare a present root DN", () => {
        for (const matcher of [
            oRNameExactMatch,
            oRNameMatch,
            oRNameElementsMatch,
            oRNameSubstringElementsMatch,
        ]) {
            expect(() => matcher(empty, stored(dnAlice))).toThrow();
            // Root DN is present, so it is a real assertion and does not match Alice.
            expect(matcher(emptyRootDN, stored(dnAlice))).toBe(false);
            expect(matcher(emptyRootDN, stored(emptyRootDN))).toBe(true);
        }
    });

    test("empty stored ORNames are unmatchable, but a stored root DN is compared", () => {
        for (const matcher of [
            oRNameExactMatch,
            oRNameMatch,
            oRNameElementsMatch,
            oRNameSubstringElementsMatch,
        ]) {
            expect(matcher(dnAlice, stored(empty))).toBeUndefined();
            // An empty RDNSequence is the Directory root, not an absent name.
            expect(matcher(dnAlice, stored(emptyRootDN))).toBe(false);
        }
    });

    test("exact match distinguishes an absent directory-name from the root DN", () => {
        const addrWithRoot = encodeORName({ country: "US", org: "Acme", dn: { rdnSequence: [] } });
        const addrWithoutDn = encodeORName({ country: "US", org: "Acme" });
        expect(oRNameExactMatch(addrWithRoot, stored(addrWithoutDn))).toBe(false);
        expect(oRNameExactMatch(addrWithoutDn, stored(addrWithRoot))).toBe(false);
        expect(oRNameExactMatch(addrWithRoot, stored(addrWithRoot))).toBe(true);
        // OR-name-match still succeeds on the O/R address when the names differ.
        expect(oRNameMatch(addrWithRoot, stored(addrWithoutDn))).toBe(true);
        expect(oRNameMatch(emptyRootDN, stored(addrWithRoot))).toBe(true);
    });

    test("oRNameExactMatch requires identical presence of ORAddress and directory-name", () => {
        expect(oRNameExactMatch(dnAlice, stored(dnAlice))).toBe(true);
        expect(oRNameExactMatch(dnAlice, stored(dnBob))).toBe(false);
        expect(oRNameExactMatch(addrUSAcme, stored(addrUSAcme))).toBe(true);
        expect(oRNameExactMatch(addrUSAcme, stored(bothAliceUSAcme))).toBe(false);
        expect(oRNameExactMatch(bothAliceUSAcme, stored(addrUSAcme))).toBe(false);
        expect(oRNameExactMatch(dnAlice, stored(bothAliceUSAcme))).toBe(false);
        expect(oRNameExactMatch(bothAliceUSAcme, stored(dnAlice))).toBe(false);
        expect(oRNameExactMatch(bothAliceUSAcme, stored(bothAliceUSAcme))).toBe(true);
        expect(oRNameExactMatch(bothAliceUSAcme, stored(bothBobUSAcme))).toBe(false);
    });

    test("DN-only ORNames do not falsely match via empty ORAddress in oRNameMatch, Elements, or SubstringElements", () => {
        for (const matcher of [
            oRNameMatch,
            oRNameElementsMatch,
            oRNameSubstringElementsMatch,
        ]) {
            expect(matcher(dnAlice, stored(dnAlice))).toBe(true);
            expect(matcher(dnAlice, stored(dnBob))).toBe(false);
            expect(matcher(dnAlice, stored(addrUSAcme))).toBe(false);
            expect(matcher(addrUSAcme, stored(dnAlice))).toBe(false);
        }
    });

    test("oRNameMatch case (c) matches if either directory-name or OR-address matches", () => {
        expect(oRNameMatch(bothAliceUSAcme, stored(dnAlice))).toBe(true);
        expect(oRNameMatch(bothAliceUSAcme, stored(dnBob))).toBe(false);
        expect(oRNameMatch(bothAliceUSAcme, stored(addrUSAcme))).toBe(true);
        expect(oRNameMatch(bothAliceUSAcme, stored(addrUSOnly))).toBe(false);
        expect(oRNameMatch(bothAliceUSAcme, stored(bothBobUSAcme))).toBe(true);
    });

    test("oRNameElementsMatch does not leak MATCH_FLAG_ELEMENTS_MATCH into nested DN attribute matchers", () => {
        const nestedAssertion: Name = {
            rdnSequence: [[new DNAtav(id_test_orNameAttr, addrUSOnly)]],
        };
        const nestedStored: Name = {
            rdnSequence: [[new DNAtav(id_test_orNameAttr, addrUSAcme)]],
        };
        const outerAssertion = encodeORName({ dn: nestedAssertion });
        const outerStored = encodeORName({ dn: nestedStored });
        const getEqualityMatcher = (attrType: ObjectIdentifier) =>
            attrType.isEqualTo(id_test_orNameAttr) ? oRNameMatch : undefined;

        // Inner RDN uses exact oRNameMatch, so subset addrUSOnly must NOT match addrUSAcme.
        expect(
            oRNameElementsMatch(outerAssertion, stored(outerStored), getEqualityMatcher),
        ).toBe(false);
    });
});
