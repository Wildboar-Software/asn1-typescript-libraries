import { BERElement, ObjectIdentifier } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "../modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { SIGNED } from "../modules/AuthenticationFramework/SIGNED.ta.mjs";
import type { ListResult } from "../modules/DirectoryAbstractService/ListResult.ta.mjs";
import type { ListResultData } from "../modules/DirectoryAbstractService/ListResultData.ta.mjs";
import { ListResultData_listInfo } from "../modules/DirectoryAbstractService/ListResultData-listInfo.ta.mjs";
import { ListResultData_listInfo_subordinates_Item } from "../modules/DirectoryAbstractService/ListResultData-listInfo-subordinates-Item.ta.mjs";
import {
    AttributeTypeAndValue,
} from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/commonName.oa.mjs";
import { iterateListResultSubordinates } from "./iterateListResultSubordinates.mjs";

function subordinate (label: string): ListResultData_listInfo_subordinates_Item {
    return new ListResultData_listInfo_subordinates_Item(
        [
            new AttributeTypeAndValue(
                commonName["&id"],
                commonName.encoderFor["&Type"]!({
                    printableString: label,
                }, DER),
            ),
        ],
        label.startsWith("alias"),
        true,
    );
}

/** `wrappers` contained results around `leaf`, not counting `leaf`. */
function wrap (wrappers: number, leaf: ListResult): ListResult {
    let current: ListResult = leaf;
    for (let i = 0; i < wrappers; i++) {
        current = {
            unsigned: {
                uncorrelatedListInfo: [current],
            },
        };
    }
    return current;
}

function listInfo (
    items: ListResultData_listInfo_subordinates_Item[],
): ListResult {
    return {
        unsigned: {
            listInfo: new ListResultData_listInfo(undefined, items),
        },
    };
}

function signedListInfo (
    items: ListResultData_listInfo_subordinates_Item[],
): ListResult {
    const data: ListResultData = {
        listInfo: new ListResultData_listInfo(undefined, items),
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

describe("iterateListResultSubordinates", () => {
    it("yields subordinates from an unsigned listInfo", () => {
        const alpha = subordinate("alpha");
        const beta = subordinate("beta");
        const yielded = [...iterateListResultSubordinates(listInfo([alpha, beta]))];
        expect(yielded).toEqual([alpha, beta]);
    });

    it("yields nothing when listInfo has no subordinates", () => {
        expect([...iterateListResultSubordinates(listInfo([]))]).toEqual([]);
    });

    it("yields subordinates from a signed listInfo", () => {
        const alpha = subordinate("alpha");
        const yielded = [...iterateListResultSubordinates(signedListInfo([alpha]))];
        expect(yielded).toEqual([alpha]);
    });

    it("recurses into uncorrelated ListResults, including signed ones", () => {
        const alpha = subordinate("alpha");
        const beta = subordinate("beta");
        const gamma = subordinate("gamma");
        const delta = subordinate("alias-delta");
        const result: ListResult = {
            unsigned: {
                uncorrelatedListInfo: [
                    listInfo([alpha, beta]),
                    {
                        unsigned: {
                            uncorrelatedListInfo: [
                                signedListInfo([gamma]),
                                listInfo([delta]),
                            ],
                        },
                    },
                ],
            },
        };
        expect([...iterateListResultSubordinates(result)]).toEqual([
            alpha,
            beta,
            gamma,
            delta,
        ]);
    });

    it("yields nothing for an unrecognized ListResultData alternative", () => {
        const result: ListResult = {
            unsigned: new BERElement(),
        };
        expect([...iterateListResultSubordinates(result)]).toEqual([]);
    });

    it("stops when a ListResult appears again on the current path", () => {
        const leaf = subordinate("leaf");
        const nested: ListResult[] = [listInfo([leaf])];
        const cycle: ListResult = {
            unsigned: {
                uncorrelatedListInfo: nested,
            },
        };
        nested.push(cycle);
        expect([...iterateListResultSubordinates(cycle)]).toEqual([leaf]);
    });

    it("yields a shared ListResult again when it is reached by another path", () => {
        const sharedItem = subordinate("shared");
        const shared = listInfo([sharedItem]);
        const result: ListResult = {
            unsigned: {
                uncorrelatedListInfo: [
                    {
                        unsigned: {
                            uncorrelatedListInfo: [shared],
                        },
                    },
                    {
                        unsigned: {
                            uncorrelatedListInfo: [shared],
                        },
                    },
                ],
            },
        };
        expect([...iterateListResultSubordinates(result)]).toEqual([
            sharedItem,
            sharedItem,
        ]);
    });

    it("yields an entry nested 100 ListResults deep", () => {
        const within = subordinate("within");
        const result = wrap(99, listInfo([within]));
        expect([...iterateListResultSubordinates(result)]).toEqual([within]);
    });

    it("does not enter a 101st contained ListResult", () => {
        const beyond = subordinate("beyond");
        const result = wrap(100, listInfo([beyond]));
        expect([...iterateListResultSubordinates(result)]).toEqual([]);
    });

    it("keeps entries at the depth cap when a sibling chain is deeper", () => {
        const kept = subordinate("kept");
        const dropped = subordinate("dropped");
        const result: ListResult = {
            unsigned: {
                uncorrelatedListInfo: [
                    wrap(98, listInfo([kept])),
                    wrap(99, listInfo([dropped])),
                ],
            },
        };
        expect([...iterateListResultSubordinates(result)]).toEqual([kept]);
    });
});
