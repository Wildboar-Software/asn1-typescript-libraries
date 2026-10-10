import { ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CompressedData,
    _decode_CompressedData,
    _encode_CompressedData,
} from "./lib/modules/CompressedDataType/CompressedData.ta.mjs";
import { CompressedContentInfo } from "./lib/modules/CompressedDataType/CompressedContentInfo.ta.mjs";
import { AlgorithmID_ShortForm_zlibCompress } from "./lib/modules/CompressedDataType/AlgorithmID-ShortForm.ta.mjs";
import { ContentType_ShortForm_p1 } from "./lib/modules/CompressedDataType/ContentType-ShortForm.ta.mjs";
import { CompressedData as CompressedDataFromRoot } from "./index.mjs";

describe("CompressedData", () => {
    test("round-trips short-form algorithm and content type", () => {
        const payload = new Uint8Array([0x78, 0x9c, 0x01, 0x02, 0x03]);
        const original = new CompressedData(
            { algorithmID_ShortForm: AlgorithmID_ShortForm_zlibCompress },
            new CompressedContentInfo(
                { contentType_ShortForm: ContentType_ShortForm_p1 },
                payload,
            ),
        );
        const decoded = _decode_CompressedData(_encode_CompressedData(original, $.BER));
        expect(decoded).toEqual(original);
        expect(decoded.compressionAlgorithm).toEqual({
            algorithmID_ShortForm: AlgorithmID_ShortForm_zlibCompress,
        });
        expect(decoded.compressedContentInfo.contentType).toEqual({
            contentType_ShortForm: ContentType_ShortForm_p1,
        });
        expect(decoded.compressedContentInfo.compressedContent).toEqual(payload);
        expect(CompressedDataFromRoot).toBe(CompressedData);
    });

    test("round-trips OID algorithm and external content type", () => {
        const algorithmOid = ObjectIdentifier.fromParts([1, 3, 26, 0, 4406, 0, 4, 2]);
        const contentOid = ObjectIdentifier.fromParts([1, 2, 840, 113549, 1, 7]);
        const payload = new Uint8Array([0x00, 0xff]);
        const original = new CompressedData(
            { algorithmID_OID: algorithmOid },
            new CompressedContentInfo(
                { contentType_OID: contentOid },
                payload,
            ),
        );
        const decoded = _decode_CompressedData(_encode_CompressedData(original, $.BER));
        expect(decoded).toEqual(original);
        if (!("algorithmID_OID" in decoded.compressionAlgorithm)) {
            throw new Error("expected algorithmID_OID");
        }
        expect(decoded.compressionAlgorithm.algorithmID_OID.toString()).toBe(algorithmOid.toString());
        if (!("contentType_OID" in decoded.compressedContentInfo.contentType)) {
            throw new Error("expected contentType_OID");
        }
        expect(decoded.compressedContentInfo.contentType.contentType_OID.toString()).toBe(
            contentOid.toString(),
        );
    });
});
