/**
 * Benchmark comparing direct (zero or low allocation) comparison via
 * compareAttributeTypeAndValue against stringifying with toKey().
 *
 * Run from the repo root:
 *   node packages/dn/bench/compareAttributeTypeAndValue.mjs
 */
import Benchmark from "benchmark";
import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
} from "@wildboar/asn1";
import { AttributeTypeAndValue } from "../../../dist/packages/dn/src/lib/AttributeTypeAndValue.ta.mjs";
import { compareAttributeTypeAndValue } from "../../../dist/packages/dn/src/lib/atav/compare.mjs";
import {
    compareRelativeDistinguishedName,
    relativeDistinguishedNameToKey,
} from "../../../dist/packages/dn/src/lib/RelativeDistinguishedName.ta.mjs";
import {
    compareRDNSequence,
    compareRDNSequenceReverse,
    rdnSequenceToKey,
} from "../../../dist/packages/dn/src/lib/RDNSequence.ta.mjs";

const id_at_commonName = ObjectIdentifier.fromParts([2, 5, 4, 3]);
const id_at_surname = ObjectIdentifier.fromParts([2, 5, 4, 4]);
const id_at_serialNumber = ObjectIdentifier.fromParts([2, 5, 4, 5]);
const id_unknown = ObjectIdentifier.fromString("1.3.6.1.4.1.56490.999.1");

function universal(tagNumber, construction = ASN1Construction.primitive) {
    return new DERElement(ASN1TagClass.universal, construction, tagNumber);
}

function utf8(s) {
    const el = universal(ASN1UniversalType.utf8String);
    el.utf8String = s;
    return el;
}

function printable(s) {
    const el = universal(ASN1UniversalType.printableString);
    el.printableString = s;
    return el;
}

function integer(n) {
    const el = universal(ASN1UniversalType.integer);
    el.integer = n;
    return el;
}

function boolean(b) {
    const el = universal(ASN1UniversalType.boolean);
    el.boolean = b;
    return el;
}

function generalizedTime(bytes) {
    const el = universal(ASN1UniversalType.generalizedTime);
    el.value = Buffer.from(bytes);
    return el;
}

function atav(type_, value) {
    return new AttributeTypeAndValue(type_, value);
}

// Test fixtures
const cnIdenticalA = atav(id_at_commonName, utf8("Smith"));
const cnIdenticalB = atav(id_at_commonName, utf8("Smith"));

const cnCaseA = atav(id_at_commonName, utf8("Smith"));
const cnCaseB = atav(id_at_commonName, utf8("smith"));

const cnDiffTypeA = atav(id_at_commonName, utf8("Smith"));
const cnDiffTypeB = atav(id_at_commonName, printable("smith"));

const cnDifferA = atav(id_at_commonName, utf8("Smith"));
const cnDifferB = atav(id_at_commonName, utf8("Jones"));

const intA = atav(id_at_serialNumber, integer(1433));
const intB = atav(id_at_serialNumber, integer(1433));
const intDiff = atav(id_at_serialNumber, integer(9999));

const oidA = atav(id_unknown, universal(ASN1UniversalType.objectIdentifier));
oidA.value.objectIdentifier = id_at_commonName;
const oidB = atav(id_unknown, universal(ASN1UniversalType.objectIdentifier));
oidB.value.objectIdentifier = id_at_commonName;

const boolA = atav(id_unknown, boolean(true));
const boolB = atav(id_unknown, boolean(true));

const genTimeA = atav(id_unknown, generalizedTime("20260927123456Z"));
const genTimeB = atav(id_unknown, generalizedTime("20260927123456.789Z"));
const genTimeDiff = atav(id_unknown, generalizedTime("20250927123456Z"));

// Verify that both approaches agree on all fixtures
const verificationPairs = [
    [cnIdenticalA, cnIdenticalB, true],
    [cnCaseA, cnCaseB, true],
    [cnDiffTypeA, cnDiffTypeB, true],
    [cnDifferA, cnDifferB, false],
    [intA, intB, true],
    [intA, intDiff, false],
    [oidA, oidB, true],
    [boolA, boolB, true],
    [genTimeA, genTimeB, true],
    [genTimeA, genTimeDiff, false],
];

for (const [a, b, expected] of verificationPairs) {
    const directResult = compareAttributeTypeAndValue(a, b);
    const keyResult = a.toKey() === b.toKey();
    if (directResult !== expected || keyResult !== expected) {
        throw new Error(`Mismatch on fixture: direct=${directResult}, key=${keyResult}, expected=${expected}`);
    }
}

// Mixed batch
const mixedPairs = [
    [cnIdenticalA, cnIdenticalB],
    [cnCaseA, cnCaseB],
    [cnDiffTypeA, cnDiffTypeB],
    [cnDifferA, cnDifferB],
    [intA, intB],
    [intA, intDiff],
    [oidA, oidB],
    [boolA, boolB],
    [genTimeA, genTimeB],
    [genTimeA, genTimeDiff],
];

let sink = false;

function runSuite(title, a, b) {
    return new Promise((resolve) => {
        console.log(`\n=== ${title} ===`);
        const suite = new Benchmark.Suite(title);
        suite
            .add("direct compareAttributeTypeAndValue", () => {
                sink = compareAttributeTypeAndValue(a, b);
            })
            .add("toKey() === toKey()", () => {
                sink = a.toKey() === b.toKey();
            })
            .on("cycle", (event) => {
                console.log(String(event.target));
            })
            .on("complete", function () {
                const fastest = this.filter("fastest").map("name");
                const direct = this[0];
                const stringify = this[1];
                const ratio = direct.hz / stringify.hz;
                console.log(`Fastest: ${fastest}`);
                console.log(`Speedup: ${ratio.toFixed(2)}x (${ratio > 1 ? "Direct is FASTER" : "Direct is SLOWER"})`);
                resolve(this);
            })
            .run({ async: true });
    });
}

function runBatchSuite(title, pairs) {
    return new Promise((resolve) => {
        console.log(`\n=== ${title} ===`);
        const suite = new Benchmark.Suite(title);
        suite
            .add("direct compareAttributeTypeAndValue", () => {
                for (let i = 0; i < pairs.length; i++) {
                    sink = compareAttributeTypeAndValue(pairs[i][0], pairs[i][1]);
                }
            })
            .add("toKey() === toKey()", () => {
                for (let i = 0; i < pairs.length; i++) {
                    sink = pairs[i][0].toKey() === pairs[i][1].toKey();
                }
            })
            .on("cycle", (event) => {
                console.log(String(event.target));
            })
            .on("complete", function () {
                const fastest = this.filter("fastest").map("name");
                const direct = this[0];
                const stringify = this[1];
                const ratio = direct.hz / stringify.hz;
                console.log(`Fastest: ${fastest}`);
                console.log(`Speedup: ${ratio.toFixed(2)}x (${ratio > 1 ? "Direct is FASTER" : "Direct is SLOWER"})`);
                resolve(this);
            })
            .run({ async: true });
    });
}

console.log("All test fixture verifications passed. Running benchmarks...");

await runSuite("Identical Strings (fast path: UTF8 'Smith' vs 'Smith')", cnIdenticalA, cnIdenticalB);
await runSuite("Differing Strings (UTF8 'Smith' vs 'Jones')", cnDifferA, cnDifferB);
await runSuite("Case-folded Strings (UTF8 'Smith' vs 'smith')", cnCaseA, cnCaseB);
await runSuite("INTEGER (serialNumber 1433 vs 1433)", intA, intB);
await runSuite("BOOLEAN (true vs true)", boolA, boolB);
await runSuite("GeneralizedTime (same second with/without fraction)", genTimeA, genTimeB);
await runSuite("GeneralizedTime Differing Year (early byte mismatch)", genTimeA, genTimeDiff);
await runBatchSuite("Mixed Realistic Batch (10 diverse pairs)", mixedPairs);

// RDN benchmarks
const id_at_countryName = ObjectIdentifier.fromParts([2, 5, 4, 6]);
const id_at_organizationName = ObjectIdentifier.fromParts([2, 5, 4, 10]);

const rdnMultiA = [cnCaseA, atav(id_at_surname, utf8("Smith"))];
const rdnMultiB = [atav(id_at_surname, utf8("smith")), cnCaseB];

await new Promise((resolve) => {
    console.log(`\n=== Multi-valued RDN (2 ATAVs, reversed order) ===`);
    const suite = new Benchmark.Suite();
    suite
        .add("direct compareRelativeDistinguishedName", () => {
            sink = compareRelativeDistinguishedName(rdnMultiA, rdnMultiB);
        })
        .add("relativeDistinguishedNameToKey() ===", () => {
            sink = relativeDistinguishedNameToKey(rdnMultiA) === relativeDistinguishedNameToKey(rdnMultiB);
        })
        .on("cycle", (event) => console.log(String(event.target)))
        .on("complete", function () {
            const fastest = this.filter("fastest").map("name");
            const ratio = this[0].hz / this[1].hz;
            console.log(`Fastest: ${fastest}`);
            console.log(`Speedup: ${ratio.toFixed(2)}x (${ratio > 1 ? "Direct is FASTER" : "Direct is SLOWER"})`);
            resolve(this);
        })
        .run({ async: true });
});

// RDNSequence benchmarks
const seqA = [
    [atav(id_at_countryName, utf8("US"))],
    [atav(id_at_organizationName, utf8("Example Corp"))],
    [cnCaseA],
];
const seqB = [
    [atav(id_at_countryName, utf8("us"))],
    [atav(id_at_organizationName, utf8("EXAMPLE CORP"))],
    [cnCaseB],
];
const seqDiffLeaf = [
    [atav(id_at_countryName, utf8("us"))],
    [atav(id_at_organizationName, utf8("EXAMPLE CORP"))],
    [cnDifferB],
];

await new Promise((resolve) => {
    console.log(`\n=== RDNSequence Equal (3 components, case-folded) ===`);
    const suite = new Benchmark.Suite();
    suite
        .add("direct compareRDNSequence", () => {
            sink = compareRDNSequence(seqA, seqB);
        })
        .add("rdnSequenceToKey() ===", () => {
            sink = rdnSequenceToKey(seqA) === rdnSequenceToKey(seqB);
        })
        .on("cycle", (event) => console.log(String(event.target)))
        .on("complete", function () {
            const fastest = this.filter("fastest").map("name");
            const ratio = this[0].hz / this[1].hz;
            console.log(`Fastest: ${fastest}`);
            console.log(`Speedup: ${ratio.toFixed(2)}x (${ratio > 1 ? "Direct is FASTER" : "Direct is SLOWER"})`);
            resolve(this);
        })
        .run({ async: true });
});

await new Promise((resolve) => {
    console.log(`\n=== RDNSequence Differing Leaf (Reverse vs Forward vs Stringify) ===`);
    const suite = new Benchmark.Suite();
    suite
        .add("compareRDNSequenceReverse (leaf first)", () => {
            sink = compareRDNSequenceReverse(seqA, seqDiffLeaf);
        })
        .add("compareRDNSequence forward (root first)", () => {
            sink = compareRDNSequence(seqA, seqDiffLeaf, undefined, false);
        })
        .add("rdnSequenceToKey() ===", () => {
            sink = rdnSequenceToKey(seqA) === rdnSequenceToKey(seqDiffLeaf);
        })
        .on("cycle", (event) => console.log(String(event.target)))
        .on("complete", function () {
            const fastest = this.filter("fastest").map("name");
            console.log(`Fastest: ${fastest}`);
            console.log(`Reverse vs Stringify speedup: ${(this[0].hz / this[2].hz).toFixed(2)}x`);
            console.log(`Reverse vs Forward speedup: ${(this[0].hz / this[1].hz).toFixed(2)}x`);
            resolve(this);
        })
        .run({ async: true });
});

void sink;
