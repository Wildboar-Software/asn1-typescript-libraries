import { ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DatabaseInfo,
    _decode_DatabaseInfo,
    _encode_DatabaseInfo,
} from "./lib/modules/RecordSyntax-explain/DatabaseInfo.ta.mjs";
import { CommonInfo } from "./lib/modules/RecordSyntax-explain/CommonInfo.ta.mjs";
import { HumanString_Item } from "./lib/modules/RecordSyntax-explain/HumanString-Item.ta.mjs";
import { InfoCategory } from "./lib/modules/Z39-50-APDU-1995/InfoCategory.ta.mjs";
import { IntUnit } from "./lib/modules/Z39-50-APDU-1995/IntUnit.ta.mjs";
import { OtherInformation_Item } from "./lib/modules/Z39-50-APDU-1995/OtherInformation-Item.ta.mjs";
import { Unit } from "./lib/modules/Z39-50-APDU-1995/Unit.ta.mjs";
import { DatabaseInfo as DatabaseInfoFromRoot } from "./index.mjs";

function sampleDatabaseInfo(): DatabaseInfo {
    const added = new Date(Date.UTC(2026, 0, 1, 12, 0, 0));
    const updated = new Date(Date.UTC(2026, 2, 15, 8, 30, 0));
    const title = [new HumanString_Item("eng", "Catalog")];
    return new DatabaseInfo(
        new CommonInfo(
            added,
            undefined,
            undefined,
            "eng",
            [
                new OtherInformation_Item(
                    new InfoCategory(ObjectIdentifier.fromParts([1, 2, 840, 10003, 10, 1]), 1),
                    { characterInfo: "local note" },
                ),
            ],
        ),
        "catalog",
        null,
        ["cat", "catalogue"],
        undefined,
        true,
        true,
        title,
        [[new HumanString_Item("eng", "library")]],
        [new HumanString_Item("eng", "A union catalog")],
        undefined,
        undefined,
        undefined,
        undefined,
        { actualNumber: 1200 },
        undefined,
        512,
        4096,
        undefined,
        undefined,
        updated,
        new IntUnit(7, new Unit("SI", { string_: "day" }, undefined, 1)),
        [new HumanString_Item("eng", "serials")],
        false,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
    );
}

describe("Z39.50 encode/decode round-trips", () => {
    test("round-trips DatabaseInfo with nested explain and APDU types", () => {
        const original = sampleDatabaseInfo();
        const decoded = _decode_DatabaseInfo(_encode_DatabaseInfo(original, $.BER));

        expect(decoded.name).toBe("catalog");
        expect(decoded.explainDatabase).toBeNull();
        expect(decoded.nicknames).toEqual(["cat", "catalogue"]);
        expect(decoded.user_fee).toBe(true);
        expect(decoded.available).toBe(true);
        expect(decoded.avRecordSize).toBe(512);
        expect(decoded.maxRecordSize).toBe(4096);
        expect(decoded.proprietary).toBe(false);
        expect(decoded.titleString?.[0].language).toBe("eng");
        expect(decoded.titleString?.[0].text).toBe("Catalog");
        expect(decoded.keywords?.[0][0].text).toBe("library");
        expect(decoded.description?.[0].text).toBe("A union catalog");
        expect(decoded.coverage?.[0].text).toBe("serials");
        expect(decoded.recordCount).toEqual({ actualNumber: 1200 });
        expect(decoded.commonInfo?.humanString_Language).toBe("eng");
        expect(decoded.commonInfo?.dateAdded?.getTime()).toBe(Date.UTC(2026, 0, 1, 12, 0, 0));
        expect(decoded.commonInfo?.dateChanged).toBeUndefined();
        expect(decoded.lastUpdate?.getTime()).toBe(Date.UTC(2026, 2, 15, 8, 30, 0));
        expect(decoded.commonInfo?.otherInfo?.[0].information).toEqual({ characterInfo: "local note" });
        expect(decoded.commonInfo?.otherInfo?.[0].category?.categoryValue).toBe(1);
        expect(decoded.commonInfo?.otherInfo?.[0].category?.categoryTypeId?.toString()).toBe("1.2.840.10003.10.1");
        expect(decoded.updateInterval?.value).toBe(7);
        expect(decoded.updateInterval?.unitUsed.unitSystem).toBe("SI");
        expect(decoded.updateInterval?.unitUsed.unitType).toEqual({ string_: "day" });
        expect(decoded.updateInterval?.unitUsed.unit).toBeUndefined();
        expect(decoded.updateInterval?.unitUsed.scaleFactor).toBe(1);
        expect(decoded.icon).toBeUndefined();
        expect(decoded.accessInfo).toBeUndefined();
    });

    test("re-exports DatabaseInfo from the package root barrel", () => {
        expect(DatabaseInfoFromRoot).toBe(DatabaseInfo);
    });
});
