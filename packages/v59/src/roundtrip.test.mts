import * as $ from "@wildboar/asn1/functional";
import {
    V8bisDiag_Item,
    _encode_V8bisDiag_Item,
    _decode_V8bisDiag_Item,
} from "./lib/modules/V59/V8bisDiag-Item.ta.mjs";
import { V8bisDiag_Item_mR } from "./lib/modules/V59/V8bisDiag-Item-mR.ta.mjs";
import { V8bisDiag_Item_cR } from "./lib/modules/V59/V8bisDiag-Item-cR.ta.mjs";
import { V8bisDiag_Item_cL } from "./lib/modules/V59/V8bisDiag-Item-cL.ta.mjs";
import { V8bisDiag_Item_cLR } from "./lib/modules/V59/V8bisDiag-Item-cLR.ta.mjs";
import { V8bisDiag_Item_eS } from "./lib/modules/V59/V8bisDiag-Item-eS.ta.mjs";
import { V8bisDiag_Item_ackNak } from "./lib/modules/V59/V8bisDiag-Item-ackNak.ta.mjs";
import {
    V8bisDiag,
    _encode_V8bisDiag,
    _decode_V8bisDiag,
} from "./lib/modules/V59/V8bisDiag.ta.mjs";
import {
    V59Objects,
    _encode_V59Objects,
    _decode_V59Objects,
} from "./lib/modules/V59/V59Objects.ta.mjs";

function sampleItem(): V8bisDiag_Item {
    return new V8bisDiag_Item(
        3,
        new V8bisDiag_Item_mR({ nONE: 0 }, "MRSEQ"),
        new V8bisDiag_Item_cR({ e: 1 }, "CRSEQ"),
        new V8bisDiag_Item_cL("CLSEQ"),
        new V8bisDiag_Item_cLR("CLRSEQ"),
        new V8bisDiag_Item_eS({ i: 1 }, "ESSEQ"),
        new V8bisDiag_Item_ackNak({ aCK1: 1 }, { nAK2: 2 })
    );
}

describe("V8bisDiag", () => {
    test("round-trips a V.8bis diagnostic item", () => {
        const original = sampleItem();
        const el = _encode_V8bisDiag_Item(original, $.BER);
        const decoded = _decode_V8bisDiag_Item(el);
        expect(decoded).toEqual(original);
        expect(decoded.v8bisTransaction).toBe(3);
        expect(decoded.mR.mRSequence).toBe("MRSEQ");
        expect("aCK1" in decoded.ackNak.aCK).toBe(true);
    });

    test("round-trips V8bisDiag as a V59Objects choice", () => {
        const original: V8bisDiag = [sampleItem()];
        const objects: V59Objects = { v8bisDiag: original };
        const el = _encode_V59Objects(objects, $.BER);
        const decoded = _decode_V59Objects(el);
        expect(decoded).toEqual(objects);
        const nested = _decode_V8bisDiag(
            _encode_V8bisDiag(original, $.BER)
        );
        expect(nested).toEqual(original);
    });
});
