import * as $ from "@wildboar/asn1/functional";
import {
    MAP_OpenInfo,
    _encode_MAP_OpenInfo,
    _decode_MAP_OpenInfo,
} from "./lib/modules/MAP-DialogueInformation/MAP-OpenInfo.ta.mjs";
import {
    type MAP_DialoguePDU,
    _encode_MAP_DialoguePDU,
    _decode_MAP_DialoguePDU,
} from "./lib/modules/MAP-DialogueInformation/MAP-DialoguePDU.ta.mjs";

describe("MAP-DialoguePDU", () => {
    test("round-trips a map-open dialogue PDU", () => {
        const original: MAP_DialoguePDU = {
            map_open: new MAP_OpenInfo(
                Uint8Array.from([0x91, 0x21, 0x43, 0x65]),
                Uint8Array.from([0x91, 0x44, 0x55, 0x67]),
                undefined
            ),
        };
        const el = _encode_MAP_DialoguePDU(original, $.BER);
        const decoded = _decode_MAP_DialoguePDU(el);
        expect(decoded).toEqual(original);
        expect("map_open" in decoded).toBe(true);
        if ("map_open" in decoded) {
            expect(decoded.map_open.destinationReference).toEqual(
                original.map_open.destinationReference
            );
            expect(decoded.map_open.originationReference).toEqual(
                original.map_open.originationReference
            );
        }
        const nested = _decode_MAP_OpenInfo(
            _encode_MAP_OpenInfo(original.map_open, $.BER)
        );
        expect(nested.destinationReference).toEqual(
            original.map_open.destinationReference
        );
    });
});
