import { ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ASDU,
    ASDU_smpMod_samplesPerNormalPeriod,
    ASDU_smpSynch_global,
    type SampledValues,
    SavPdu,
    _decode_SampledValues,
    _encode_SampledValues,
} from "./index.mjs";

function fullAsdu(): ASDU {
    return new ASDU(
        "SV-IED/LLN0",
        "DataSet1",
        4000,
        1,
        new Uint8Array([0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x0a]),
        ASDU_smpSynch_global,
        4800,
        new Uint8Array([0x00, 0x01, 0xff, 0x7f]),
        ASDU_smpMod_samplesPerNormalPeriod,
        new Uint8Array([0x01, 0x02, 0x03, 0x04, 0x05, 0x06]),
    );
}

function minimalAsdu(): ASDU {
    return new ASDU(
        "SV-MIN",
        undefined,
        0,
        4294967295,
        undefined,
        undefined,
        undefined,
        new Uint8Array([0x10]),
        undefined,
        undefined,
    );
}

describe("SampledValues", () => {
    test("round-trips a SavPdu with a full ASDU and a minimal ASDU", () => {
        const original: SampledValues = {
            savPdu: new SavPdu(2, [fullAsdu(), minimalAsdu()]),
        };
        const decoded = _decode_SampledValues(_encode_SampledValues(original, $.BER));
        expect(decoded).toEqual(original);
        if (!("savPdu" in decoded)) {
            throw new Error("expected savPdu");
        }
        expect(decoded.savPdu.noASDU).toBe(2);
        expect(decoded.savPdu.seqASDU).toHaveLength(2);
        expect(decoded.savPdu.seqASDU[0]?.smpSynch).toBe(ASDU_smpSynch_global);
        expect(decoded.savPdu.seqASDU[0]?.smpMod).toBe(ASDU_smpMod_samplesPerNormalPeriod);
        expect(decoded.savPdu.seqASDU[1]?.datSet).toBeUndefined();
        expect(decoded.savPdu.seqASDU[1]?.confRev).toBe(4294967295);
        expect(decoded.savPdu.seqASDU[1]?.smpRate).toBeUndefined();
    });

    test("rejects INTEGER components outside their ranges", () => {
        const seqData = new Uint8Array([0x00]);
        expect(() => new SavPdu(65536, [])).toThrow(ASN1OverflowError);
        expect(() => new SavPdu(-1n, [])).toThrow(ASN1OverflowError);
        expect(() => new ASDU(
            "SV",
            undefined,
            -1,
            0,
            undefined,
            undefined,
            undefined,
            seqData,
            undefined,
            undefined,
        )).toThrow(ASN1OverflowError);
        expect(() => new ASDU(
            "SV",
            undefined,
            0,
            4294967296,
            undefined,
            undefined,
            undefined,
            seqData,
            undefined,
            undefined,
        )).toThrow(ASN1OverflowError);
        expect(() => new ASDU(
            "SV",
            undefined,
            0,
            0,
            undefined,
            undefined,
            65536n,
            seqData,
            undefined,
            undefined,
        )).toThrow(ASN1OverflowError);
    });
});
