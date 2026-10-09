import * as $ from "@wildboar/asn1/functional";
import { AccessInfo } from "./lib/modules/RecordSyntax-explain/AccessInfo.ta.mjs";
import { CommonInfo } from "./lib/modules/RecordSyntax-explain/CommonInfo.ta.mjs";
import { ContactInfo } from "./lib/modules/RecordSyntax-explain/ContactInfo.ta.mjs";
import {
    DatabaseInfo,
    _decode_DatabaseInfo,
    _encode_DatabaseInfo,
} from "./lib/modules/RecordSyntax-explain/DatabaseInfo.ta.mjs";
import { HumanString_Item } from "./lib/modules/RecordSyntax-explain/HumanString-Item.ta.mjs";
import { IconObject_Item } from "./lib/modules/RecordSyntax-explain/IconObject-Item.ta.mjs";
import { IntUnit } from "./lib/modules/Z39-50-APDU-2001/IntUnit.ta.mjs";
import { Unit } from "./lib/modules/Z39-50-APDU-2001/Unit.ta.mjs";

function text(language: string | undefined, value: string): HumanString_Item {
    return new HumanString_Item(language, value);
}

describe("Z39.50 encode/decode round-trips", () => {
    test("round-trips DatabaseInfo with nested record count, contacts, and units", () => {
        const added = new Date(Date.UTC(2026, 9, 9, 12, 0, 0));
        const updated = new Date(Date.UTC(2026, 9, 1, 0, 0, 0));
        const original = new DatabaseInfo(
            new CommonInfo(added, undefined, undefined, "eng", undefined),
            "catalog",
            null,
            ["cat", "opac"],
            [new IconObject_Item({ ianaType: "image/png" }, new Uint8Array([0x89, 0x50, 0x4e, 0x47]))],
            true,
            true,
            [text("eng", "Library catalog")],
            [[text("eng", "books")], [text(undefined, "serials")]],
            [text("eng", "Bibliographic records")],
            ["authorities"],
            ["books", "serials"],
            undefined,
            undefined,
            { actualNumber: 1200 },
            [text("eng", "title")],
            512,
            8192,
            undefined,
            undefined,
            updated,
            new IntUnit(7, new Unit("SI", { string_: "time" }, { numeric: 86400 }, undefined)),
            [text("eng", "1900-2026")],
            false,
            [text("eng", "Copyright 2026")],
            undefined,
            new ContactInfo("Ada Lovelace", [text("eng", "Producer")], undefined, "ada@example.com", undefined),
            undefined,
            undefined,
            new AccessInfo(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                ["SI"],
            ),
        );
        const decoded = _decode_DatabaseInfo(_encode_DatabaseInfo(original, $.BER));
        expect(decoded).toEqual(original);
        expect(decoded.name).toBe("catalog");
        expect(decoded.recordCount).toEqual({ actualNumber: 1200 });
        expect(decoded.explainDatabase).toBeNull();
        expect(decoded.producerContactInfo?.email).toBe("ada@example.com");
        expect(decoded.updateInterval?.value).toBe(7);
        expect(decoded.updateInterval?.unitUsed.unit).toEqual({ numeric: 86400 });
        expect(decoded.accessInfo?.unitSystems).toEqual(["SI"]);
        expect(decoded.icon?.[0]?.content).toEqual(new Uint8Array([0x89, 0x50, 0x4e, 0x47]));
    });
});
