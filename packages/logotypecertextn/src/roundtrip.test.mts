import { ASN1SizeError, ObjectIdentifier as _OID } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier } from "./lib/modules/PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";
import {
    HashAlgAndValue,
} from "./lib/modules/LogotypeCertExtn/HashAlgAndValue.ta.mjs";
import {
    LogotypeAudio,
} from "./lib/modules/LogotypeCertExtn/LogotypeAudio.ta.mjs";
import {
    LogotypeAudioInfo,
} from "./lib/modules/LogotypeCertExtn/LogotypeAudioInfo.ta.mjs";
import {
    LogotypeData,
} from "./lib/modules/LogotypeCertExtn/LogotypeData.ta.mjs";
import {
    LogotypeDetails,
} from "./lib/modules/LogotypeCertExtn/LogotypeDetails.ta.mjs";
import {
    LogotypeExtn,
    _decode_LogotypeExtn,
    _encode_LogotypeExtn,
} from "./lib/modules/LogotypeCertExtn/LogotypeExtn.ta.mjs";
import {
    LogotypeImage,
} from "./lib/modules/LogotypeCertExtn/LogotypeImage.ta.mjs";
import {
    LogotypeImageInfo,
} from "./lib/modules/LogotypeCertExtn/LogotypeImageInfo.ta.mjs";
import {
    LogotypeImageType_grayScale,
} from "./lib/modules/LogotypeCertExtn/LogotypeImageType.ta.mjs";
import {
    OtherLogotypeInfo,
} from "./lib/modules/LogotypeCertExtn/OtherLogotypeInfo.ta.mjs";
import {
    LogotypeReference,
} from "./lib/modules/LogotypeCertExtn/LogotypeReference.ta.mjs";
import { id_logo_loyalty } from "./lib/modules/LogotypeCertExtn/id-logo-loyalty.va.mjs";

function hashAlg(): AlgorithmIdentifier {
    return new AlgorithmIdentifier(
        _OID.fromParts([1, 3, 14, 3, 2, 26]),
        $._encodeNull(null, $.BER),
    );
}

function details(mediaType: string, uri: string): LogotypeDetails {
    return new LogotypeDetails(
        mediaType,
        [new HashAlgAndValue(hashAlg(), new Uint8Array([0x01, 0x02, 0x03, 0x04]))],
        [uri],
    );
}

describe("LogotypeExtn", () => {
    test("round-trips a direct image, audio, indirect reference, and other logo", () => {
        const original = new LogotypeExtn(
            [{
                direct: new LogotypeData(
                    [new LogotypeImage(
                        details("image/png", "https://example.com/logo.png"),
                        new LogotypeImageInfo(
                            LogotypeImageType_grayScale,
                            1200,
                            64,
                            32,
                            { numBits: 8 },
                            "en",
                        ),
                    )],
                    [new LogotypeAudio(
                        details("audio/mpeg", "https://example.com/logo.mp3"),
                        new LogotypeAudioInfo(4000, 1500, 2, 44100, "en"),
                    )],
                ),
            }],
            {
                indirect: new LogotypeReference(
                    [new HashAlgAndValue(hashAlg(), new Uint8Array([9, 8, 7]))],
                    ["https://example.com/issuer.ltd"],
                ),
            },
            undefined,
            [new OtherLogotypeInfo(
                id_logo_loyalty,
                {
                    direct: new LogotypeData(
                        [new LogotypeImage(details("image/gif", "https://example.com/loyalty.gif"))],
                        undefined,
                    ),
                },
            )],
        );

        const encoded = _encode_LogotypeExtn(original, $.BER);
        const decoded = _decode_LogotypeExtn(encoded);
        const reencoded = _encode_LogotypeExtn(decoded, $.BER);
        expect(Array.from(reencoded.toBytes())).toEqual(Array.from(encoded.toBytes()));

        const community = decoded.communityLogos?.[0];
        if (!community || !("direct" in community)) {
            throw new Error("community logo was not decoded as direct logotype data");
        }
        const image = community.direct.image?.[0];
        const audio = community.direct.audio?.[0];
        expect(image?.imageDetails.mediaType).toBe("image/png");
        expect(image?.imageDetails.logotypeURI).toEqual(["https://example.com/logo.png"]);
        expect(image?.imageDetails.logotypeHash[0]?.hashAlg.algorithm.isEqualTo(hashAlg().algorithm)).toBe(true);
        expect(image?.imageDetails.logotypeHash[0]?.hashValue).toEqual(new Uint8Array([0x01, 0x02, 0x03, 0x04]));
        expect(Array.from(image?.imageDetails.logotypeHash[0]?.hashAlg.parameters?.toBytes() ?? [])).toEqual(
            Array.from(hashAlg().parameters?.toBytes() ?? []),
        );
        expect(image?.imageInfo?.type_).toBe(LogotypeImageType_grayScale);
        expect(image?.imageInfo?.fileSize).toBe(1200);
        expect(image?.imageInfo?.xSize).toBe(64);
        expect(image?.imageInfo?.ySize).toBe(32);
        expect(image?.imageInfo?.resolution).toEqual({ numBits: 8 });
        expect(image?.imageInfo?.language).toBe("en");
        expect(audio?.audioDetails.mediaType).toBe("audio/mpeg");
        expect(audio?.audioInfo?.channels).toBe(2);
        expect(audio?.audioInfo?.sampleRate).toBe(44100);
        expect(audio?.audioInfo?.language).toBe("en");

        if (!decoded.issuerLogo || !("indirect" in decoded.issuerLogo)) {
            throw new Error("issuer logo was not decoded as an indirect reference");
        }
        expect(decoded.issuerLogo.indirect.refStructURI).toEqual(["https://example.com/issuer.ltd"]);
        expect(decoded.subjectLogo).toBeUndefined();
        expect(decoded.otherLogos?.[0]?.logotypeType.isEqualTo(id_logo_loyalty)).toBe(true);
        const other = decoded.otherLogos?.[0]?.info;
        if (!other || !("direct" in other)) {
            throw new Error("other logo was not decoded as direct logotype data");
        }
        expect(other.direct.image?.[0]?.imageDetails.mediaType).toBe("image/gif");
        expect(other.direct.audio).toBeUndefined();
    });

    test("rejects an empty logotype hash", () => {
        expect(() => new LogotypeDetails("image/png", [], ["https://example.com/logo.png"]))
            .toThrow(ASN1SizeError);
    });
});
