import { BERElement, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { SIGNED } from "../modules/AuthenticationFramework/SIGNED.ta.mjs";
import { EntryInformation } from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import type { SearchResult } from "../modules/DirectoryAbstractService/SearchResult.ta.mjs";
import type { SearchResultData } from "../modules/DirectoryAbstractService/SearchResultData.ta.mjs";
import { SearchResultData_searchInfo } from "../modules/DirectoryAbstractService/SearchResultData-searchInfo.ta.mjs";
import {
    AttributeTypeAndValue,
} from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/commonName.oa.mjs";
import { iterateSearchResultEntries } from "./iterateSearchResultEntries.mjs";

function entry (label: string): EntryInformation {
    return new EntryInformation({
        rdnSequence: [
            [
                new AttributeTypeAndValue(
                    commonName["&id"],
                    commonName.encoderFor["&Type"]!({
                        printableString: label,
                    }, DER),
                ),
            ],
        ],
    });
}

/** `wrappers` contained results around `leaf`, not counting `leaf`. */
function wrap (wrappers: number, leaf: SearchResult): SearchResult {
    let current: SearchResult = leaf;
    for (let i = 0; i < wrappers; i++) {
        current = {
            unsigned: {
                uncorrelatedSearchInfo: [current],
            },
        };
    }
    return current;
}

function searchInfo (items: EntryInformation[]): SearchResult {
    return {
        unsigned: {
            searchInfo: new SearchResultData_searchInfo(undefined, items),
        },
    };
}

function signedSearchInfo (items: EntryInformation[]): SearchResult {
    const data: SearchResultData = {
        searchInfo: new SearchResultData_searchInfo(undefined, items),
    };
    return {
        signed: new SIGNED(
            data,
            new AlgorithmIdentifier(
                ObjectIdentifier.fromString("1.2.840.113549.1.1.11"),
            ),
            new Uint8ClampedArray(0),
        ),
    };
}

describe("iterateSearchResultEntries", () => {
    it("yields entries from an unsigned searchInfo", () => {
        const alpha = entry("alpha");
        const beta = entry("beta");
        const yielded = [...iterateSearchResultEntries(searchInfo([alpha, beta]))];
        expect(yielded).toEqual([alpha, beta]);
    });

    it("yields nothing when searchInfo has no entries", () => {
        expect([...iterateSearchResultEntries(searchInfo([]))]).toEqual([]);
    });

    it("yields entries from a signed searchInfo", () => {
        const alpha = entry("alpha");
        const yielded = [...iterateSearchResultEntries(signedSearchInfo([alpha]))];
        expect(yielded).toEqual([alpha]);
    });

    it("recurses into uncorrelated SearchResults, including signed ones", () => {
        const alpha = entry("alpha");
        const beta = entry("beta");
        const gamma = entry("gamma");
        const delta = entry("delta");
        const result: SearchResult = {
            unsigned: {
                uncorrelatedSearchInfo: [
                    searchInfo([alpha, beta]),
                    {
                        unsigned: {
                            uncorrelatedSearchInfo: [
                                signedSearchInfo([gamma]),
                                searchInfo([delta]),
                            ],
                        },
                    },
                ],
            },
        };
        expect([...iterateSearchResultEntries(result)]).toEqual([
            alpha,
            beta,
            gamma,
            delta,
        ]);
    });

    it("yields nothing for an unrecognized SearchResultData alternative", () => {
        const result: SearchResult = {
            unsigned: new BERElement(),
        };
        expect([...iterateSearchResultEntries(result)]).toEqual([]);
    });

    it("stops when a SearchResult appears again on the current path", () => {
        const leaf = entry("leaf");
        const nested: SearchResult[] = [searchInfo([leaf])];
        const cycle: SearchResult = {
            unsigned: {
                uncorrelatedSearchInfo: nested,
            },
        };
        nested.push(cycle);
        expect([...iterateSearchResultEntries(cycle)]).toEqual([leaf]);
    });

    it("yields a shared SearchResult again when it is reached by another path", () => {
        const sharedItem = entry("shared");
        const shared = searchInfo([sharedItem]);
        const result: SearchResult = {
            unsigned: {
                uncorrelatedSearchInfo: [
                    {
                        unsigned: {
                            uncorrelatedSearchInfo: [shared],
                        },
                    },
                    {
                        unsigned: {
                            uncorrelatedSearchInfo: [shared],
                        },
                    },
                ],
            },
        };
        expect([...iterateSearchResultEntries(result)]).toEqual([
            sharedItem,
            sharedItem,
        ]);
    });

    it("yields an entry nested 100 SearchResults deep", () => {
        const within = entry("within");
        const result = wrap(99, searchInfo([within]));
        expect([...iterateSearchResultEntries(result)]).toEqual([within]);
    });

    it("does not enter a 101st contained SearchResult", () => {
        const beyond = entry("beyond");
        const result = wrap(100, searchInfo([beyond]));
        expect([...iterateSearchResultEntries(result)]).toEqual([]);
    });

    it("keeps entries at the depth cap when a sibling chain is deeper", () => {
        const kept = entry("kept");
        const dropped = entry("dropped");
        const result: SearchResult = {
            unsigned: {
                uncorrelatedSearchInfo: [
                    wrap(98, searchInfo([kept])),
                    wrap(99, searchInfo([dropped])),
                ],
            },
        };
        expect([...iterateSearchResultEntries(result)]).toEqual([kept]);
    });
});
