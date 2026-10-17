import { ASN1SizeError, ObjectIdentifier } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ContentInfo, id_data } from "@wildboar/cms";
import {
    ArchiveTimeStamp,
    EvidenceRecord,
    EvidenceRecord_version_v1,
} from "@wildboar/ers";
import { AlgorithmIdentifier } from "@wildboar/pki-stub";
import {
    _decode_EvidenceRecords,
    _encode_EvidenceRecords,
} from "./lib/modules/LTANS-SCVP-EXTENSION/EvidenceRecords.ta.mjs";
import {
    EvidenceRecordWantBack,
    _decode_EvidenceRecordWantBack,
    _encode_EvidenceRecordWantBack,
} from "./lib/modules/LTANS-SCVP-EXTENSION/EvidenceRecordWantBack.ta.mjs";
import {
    _decode_EvidenceRecordWantBacks,
    _encode_EvidenceRecordWantBacks,
} from "./lib/modules/LTANS-SCVP-EXTENSION/EvidenceRecordWantBacks.ta.mjs";
import { id_swb_ers_pkc_cert } from "./lib/modules/LTANS-SCVP-EXTENSION/id-swb-ers-pkc-cert.va.mjs";

const sha256 = ObjectIdentifier.fromParts([2, 16, 840, 1, 101, 3, 4, 2, 1]);

function evidenceRecord(): EvidenceRecord {
    const digest = new AlgorithmIdentifier(sha256);
    const timeStamp = new ContentInfo(
        id_data,
        $._encodeOctetString(new Uint8Array([1, 2, 3, 4]), $.BER),
    );
    const archiveTimeStamp = new ArchiveTimeStamp(
        undefined,
        undefined,
        undefined,
        timeStamp,
    );
    return new EvidenceRecord(
        EvidenceRecord_version_v1,
        [digest],
        undefined,
        undefined,
        [[archiveTimeStamp]],
    );
}

describe("LTANS-SCVP-EXTENSION EvidenceRecordWantBack", () => {
    test("round-trips a want-back that carries an evidence record", () => {
        const original = new EvidenceRecordWantBack(id_swb_ers_pkc_cert, evidenceRecord());
        const encoded = _encode_EvidenceRecordWantBack(original, $.BER);
        const decoded = _decode_EvidenceRecordWantBack(encoded);
        expect(decoded.targetWantBack.toString()).toBe(id_swb_ers_pkc_cert.toString());
        expect(decoded.evidenceRecord?.version).toBe(EvidenceRecord_version_v1);
        expect(decoded.evidenceRecord?.digestAlgorithms).toHaveLength(1);
        expect(decoded.evidenceRecord?.digestAlgorithms[0]?.algorithm.toString()).toBe(
            sha256.toString(),
        );
        expect(decoded.evidenceRecord?.cryptoInfos).toBeUndefined();
        expect(decoded.evidenceRecord?.encryptionInfo).toBeUndefined();
        const chain = decoded.evidenceRecord?.archiveTimeStampSequence[0];
        expect(chain).toHaveLength(1);
        expect(chain?.[0]?.timeStamp.contentType.toString()).toBe(id_data.toString());
        expect(chain?.[0]?.timeStamp.content.octetString).toEqual(new Uint8Array([1, 2, 3, 4]));
        const reencoded = _encode_EvidenceRecordWantBack(decoded, $.BER);
        expect(reencoded.toBytes()).toEqual(encoded.toBytes());
    });

    test("round-trips a want-back with the evidence record omitted", () => {
        const original = new EvidenceRecordWantBack(id_swb_ers_pkc_cert, undefined);
        const decoded = _decode_EvidenceRecordWantBack(
            _encode_EvidenceRecordWantBack(original, $.BER),
        );
        expect(decoded.targetWantBack.toString()).toBe(id_swb_ers_pkc_cert.toString());
        expect(decoded.evidenceRecord).toBeUndefined();
    });

    test("rejects an empty EvidenceRecords sequence", () => {
        const encoded = _encode_EvidenceRecords([], $.BER);
        expect(() => _decode_EvidenceRecords(encoded)).toThrow(ASN1SizeError);
    });

    test("rejects an empty EvidenceRecordWantBacks sequence", () => {
        const encoded = _encode_EvidenceRecordWantBacks([], $.BER);
        expect(() => _decode_EvidenceRecordWantBacks(encoded)).toThrow(ASN1SizeError);
    });
});
