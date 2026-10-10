import * as $ from "@wildboar/asn1/functional";
import { IPIRIPacketReport } from "./lib/modules/IPAccessPDU/IPIRIPacketReport.ta.mjs";
import { PacketReportHeader } from "./lib/modules/IPAccessPDU/PacketReportHeader.ta.mjs";
import {
    _decode_XIRIEvent,
    _encode_XIRIEvent,
    type XIRIEvent,
} from "./lib/modules/TS33128Payloads/XIRIEvent.ta.mjs";

describe("XIRIEvent", () => {
    test("round-trips an iPIRIPacketReport alternative", () => {
        const original: XIRIEvent = {
            iPIRIPacketReport: new IPIRIPacketReport(
                [1, 3, 6, 1],
                {
                    header: new PacketReportHeader(Uint8Array.from([0x45, 0x00, 0x00, 0x14])),
                },
            ),
        };
        const encoded = _encode_XIRIEvent(original, $.BER);
        const decoded = _decode_XIRIEvent(encoded);
        expect(decoded).toEqual(original);
        expect("iPIRIPacketReport" in decoded).toBe(true);
        if ("iPIRIPacketReport" in decoded) {
            expect(decoded.iPIRIPacketReport.iPIRIPacketReportObjId).toEqual([1, 3, 6, 1]);
            expect("header" in decoded.iPIRIPacketReport.report).toBe(true);
        }
    });
});
