import * as $ from "@wildboar/asn1/functional";
import { ParameterName_apidList } from "./lib/modules/CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ParameterName.ta.mjs";
import { FspGetParameter_parApidList } from "./lib/modules/CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter-parApidList.ta.mjs";
import {
    _decode_FspGetParameter,
    _encode_FspGetParameter,
} from "./lib/modules/CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/FspGetParameter.ta.mjs";

describe("FspGetParameter encode/decode round-trips", () => {
    test("round-trips an APID list parameter", () => {
        const original = {
            parApidList: new FspGetParameter_parApidList(
                ParameterName_apidList,
                { apidList: [0, 1, 2047] },
            ),
        };
        const encoded = _encode_FspGetParameter(original, $.BER);
        const decoded = _decode_FspGetParameter(encoded);
        if (!("parApidList" in decoded)) {
            throw new Error("FspGetParameter did not decode as parApidList");
        }
        expect(decoded.parApidList.parameterName).toBe(ParameterName_apidList);
        expect(decoded.parApidList.parameterValue).toEqual({ apidList: [0, 1, 2047] });
        expect(Array.from(_encode_FspGetParameter(decoded, $.BER).toBytes()))
            .toEqual(Array.from(encoded.toBytes()));
    });
});
