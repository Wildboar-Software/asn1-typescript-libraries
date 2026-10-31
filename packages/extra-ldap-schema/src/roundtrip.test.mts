import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EpcFormat,
    _decode_EpcFormat,
    _encode_EpcFormat,
} from "./lib/modules/SelectedAttributeTypes/EpcFormat.ta.mjs";
import { EpcFormat_fields_Item } from "./lib/modules/SelectedAttributeTypes/EpcFormat-fields-Item.ta.mjs";
import {
    EpcFormat_fields_Item_result_alpha7bits,
    EpcFormat_fields_Item_result_numeric,
} from "./lib/modules/SelectedAttributeTypes/EpcFormat-fields-Item-result.ta.mjs";

/**
 * `EpcFormat` is a SEQUENCE of tagged field descriptors, each of which is
 * itself a SEQUENCE containing an INTEGER, a tagged CHOICE, and an
 * ENUMERATED with a default.
 */
describe("EpcFormat", () => {
    test("round-trips a populated EPC format", () => {
        const original = new EpcFormat(
            [
                new EpcFormat_fields_Item(
                    8,
                    { characters: 4 },
                    EpcFormat_fields_Item_result_numeric,
                ),
                new EpcFormat_fields_Item(
                    6,
                    { maxValue: 63 },
                    EpcFormat_fields_Item_result_alpha7bits,
                ),
            ],
            1,
            10,
            "urn:epc:tag:",
        );
        const decoded = _decode_EpcFormat(_encode_EpcFormat(original, $.BER));
        expect(decoded).toEqual(original);
        expect(decoded.fields).toHaveLength(2);
        expect(decoded.fields[0].charField).toEqual({ characters: 4 });
        expect(decoded.fields[1].charField).toEqual({ maxValue: 63 });
        expect(decoded.fields[0].result).toBe(EpcFormat_fields_Item_result_numeric);
        expect(decoded.digitShift).toBe(1);
        expect(decoded.checkCalc).toBe(10);
        expect(decoded.urnPrefix).toBe("urn:epc:tag:");
    });

    test("rejects an empty fields list", () => {
        expect(() => new EpcFormat([])).toThrow(ASN1SizeError);
    });
});
