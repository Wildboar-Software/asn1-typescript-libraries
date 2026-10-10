import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IECGoosePdu,
    _decode_IECGoosePdu,
    _encode_IECGoosePdu,
} from "./lib/modules/IEC61850/IECGoosePdu.ta.mjs";
import type { Data } from "./lib/modules/IEC61850/Data.ta.mjs";

function sampleData(): Data[] {
    return [
        { array: [{ boolean_: false }, { integer: 7 }] },
        { structure: [{ visible_string: "st" }, { unsigned: 3 }] },
        { boolean_: true },
        { bit_string: new Uint8ClampedArray([1, 0, 1, 1]) },
        { integer: 42 },
        { unsigned: 99 },
        { floating_point: new Uint8Array([8, 0x40, 0, 0, 0]) },
        { real: 1.5 },
        { octet_string: new Uint8Array([0xde, 0xad]) },
        { visible_string: "vis" },
        { binary_time: new Uint8Array([0, 0, 1, 0]) },
        { bcd: 25 },
        { booleanArray: new Uint8ClampedArray([1, 1, 0, 0]) },
        { objId: _OID.fromParts([1, 2, 840, 10066]) },
        { mMSString: "phase" },
        { utc_time: new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0]) },
    ];
}

describe("IECGoosePdu", () => {
    test("round-trips a GOOSE PDU whose allData covers every Data alternative", () => {
        const allData = sampleData();
        const original = new IECGoosePdu(
            "LD/LLN0$GO$gcb",
            1000,
            "LD/LLN0$dsGOOSE",
            "go-id",
            new Uint8Array([0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x0a]),
            5,
            1,
            true,
            2,
            false,
            allData.length,
            allData,
        );
        const decoded = _decode_IECGoosePdu(_encode_IECGoosePdu(original, $.BER));
        expect(decoded.gocbRef).toBe(original.gocbRef);
        expect(decoded.timeAllowedtoLive).toBe(original.timeAllowedtoLive);
        expect(decoded.datSet).toBe(original.datSet);
        expect(decoded.goID).toBe(original.goID);
        expect(decoded.t).toEqual(original.t);
        expect(decoded.stNum).toBe(original.stNum);
        expect(decoded.sqNum).toBe(original.sqNum);
        expect(decoded.simulation).toBe(true);
        expect(decoded.confRev).toBe(original.confRev);
        expect(decoded.ndsCom).toBe(false);
        expect(decoded.numDatSetEntries).toBe(allData.length);
        expect(decoded.allData).toEqual(allData);
        const objId = decoded.allData[13];
        if (!("objId" in objId)) {
            throw new Error("expected objId");
        }
        expect(objId.objId.isEqualTo(_OID.fromParts([1, 2, 840, 10066]))).toBe(true);
    });

    test("applies DEFAULT FALSE for simulation and ndsCom when they are omitted", () => {
        const original = new IECGoosePdu(
            "LD/LLN0$GO$gcb",
            1000,
            "LD/LLN0$dsGOOSE",
            undefined,
            new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
            1,
            0,
            undefined,
            1,
            undefined,
            0,
            [],
        );
        const decoded = _decode_IECGoosePdu(_encode_IECGoosePdu(original, $.BER));
        expect(decoded.goID).toBeUndefined();
        expect(decoded.simulation).toBe(false);
        expect(decoded.ndsCom).toBe(false);
        expect(decoded.allData).toEqual([]);
    });
});
