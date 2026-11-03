import type { Name } from "../../modules/InformationFramework/Name.ta.mjs";
import { PresentationAddress } from "../../modules/SelectedAttributeTypes/PresentationAddress.ta.mjs";
import { OperationalBindingID } from "../../modules/OperationalBindingManagement/OperationalBindingID.ta.mjs";
import { SupplierOrConsumer } from "../../modules/DSAOperationalAttributeTypes/SupplierOrConsumer.ta.mjs";
import {
    supplierOrConsumerInformationMatch_AssertionType,
} from "../../modules/DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch-AssertionType.ta.mjs";
import { MATCH_FLAG_APPROXIMATE } from "../../types/matching.mjs";
import {
    supplierOrConsumerInformationMatchTyped,
} from "./supplierOrConsumerInformationMatch.mjs";

const name: Name = { rdnSequence: [] };
const address = new PresentationAddress(
    undefined,
    undefined,
    undefined,
    [new Uint8Array([0x01])],
);

function stored (identifier: number | bigint): SupplierOrConsumer {
    return new SupplierOrConsumer(
        name,
        address,
        undefined,
        new OperationalBindingID(identifier, 1),
    );
}

function asserted (identifier: number | bigint) {
    return new supplierOrConsumerInformationMatch_AssertionType(name, identifier);
}

describe("supplierOrConsumerInformationMatchTyped()", () => {
    it("equates a number agreement id with the same bigint", () => {
        expect(supplierOrConsumerInformationMatchTyped(asserted(5n), stored(5))).toBe(true);
        expect(supplierOrConsumerInformationMatchTyped(asserted(5), stored(5n))).toBe(true);
    });

    it("rejects a different agreement id", () => {
        expect(supplierOrConsumerInformationMatchTyped(asserted(5), stored(6n))).toBe(false);
    });

    it("treats agreement ids one apart as approximate", () => {
        expect(supplierOrConsumerInformationMatchTyped(
            asserted(5n),
            stored(6),
            undefined,
            MATCH_FLAG_APPROXIMATE,
        )).toBe(true);
        expect(supplierOrConsumerInformationMatchTyped(
            asserted(5),
            stored(7n),
            undefined,
            MATCH_FLAG_APPROXIMATE,
        )).toBe(false);
    });
});
