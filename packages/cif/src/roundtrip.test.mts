import {
    ASN1ConstructionError,
    ASN1OverflowError,
    ASN1SizeError,
    ObjectIdentifier,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CIAInfo,
    _decode_CIAInfo,
    _encode_CIAInfo,
} from "./lib/modules/CryptographicInformationFramework/CIAInfo.ta.mjs";
import { CIAInfo_version_v2 } from "./lib/modules/CryptographicInformationFramework/CIAInfo-version.ta.mjs";
import { SecurityEnvironmentInfo } from "./lib/modules/CryptographicInformationFramework/SecurityEnvironmentInfo.ta.mjs";
import { RecordInfo } from "./lib/modules/CryptographicInformationFramework/RecordInfo.ta.mjs";
import {
    Path,
    _decode_Path,
    _encode_Path,
} from "./lib/modules/CryptographicInformationFramework/Path.ta.mjs";
import { Path_efidOrTagChoice_tagRef } from "./lib/modules/CryptographicInformationFramework/Path-efidOrTagChoice-tagRef.ta.mjs";
import {
    PasswordAttributes,
    _decode_PasswordAttributes,
    _encode_PasswordAttributes,
} from "./lib/modules/CryptographicInformationFramework/PasswordAttributes.ta.mjs";
import { PasswordType_utf8 } from "./lib/modules/CryptographicInformationFramework/PasswordType.ta.mjs";
import {
    Usage,
    _decode_Usage,
    _encode_Usage,
} from "./lib/modules/CryptographicInformationFramework/Usage.ta.mjs";
import { _decode_Identifier } from "./lib/modules/CryptographicInformationFramework/Identifier.ta.mjs";
import { cia_ub_identifier } from "./lib/modules/CryptographicInformationFramework/cia-ub-identifier.va.mjs";
import {
    Path as PathFromRoot,
    CIAInfo as CIAInfoFromRoot,
    PasswordType_utf8 as PasswordType_utf8FromRoot,
    id_sha1,
} from "./index.mjs";

describe("CIF encode/decode round-trips", () => {
    test("round-trips CIAInfo with optional labels, SE info, and record lengths", () => {
        const original = new CIAInfo(
            CIAInfo_version_v2,
            new Uint8Array([0x01, 0x02, 0x03, 0x04]),
            "ACME",
            "Test CIA",
            new Uint8ClampedArray([1, 0, 1]),
            [
                new SecurityEnvironmentInfo(
                    1,
                    ObjectIdentifier.fromParts([1, 2, 840, 113549, 1, 1, 1]),
                    new Uint8Array([0xa0, 0x00, 0x00, 0x00, 0x03]),
                ),
            ],
            new RecordInfo(128, 256, 256, 64, 512, 32, 64),
            undefined,
            "Issuer",
            "Holder",
            { generalizedTime: new Date(Date.UTC(2026, 8, 14, 12, 0, 0)) },
            "en",
            undefined,
        );
        const decoded = _decode_CIAInfo(_encode_CIAInfo(original, $.BER));
        expect(decoded.version).toBe(original.version);
        expect(decoded.serialNumber).toEqual(original.serialNumber);
        expect(decoded.manufacturerID).toBe(original.manufacturerID);
        expect(decoded.label).toBe(original.label);
        expect(decoded.cardflags).toEqual(original.cardflags);
        expect(decoded.seInfo?.[0]?.se).toBe(1);
        expect(decoded.seInfo?.[0]?.owner?.toString()).toBe("1.2.840.113549.1.1.1");
        expect(decoded.recordInfo?.oDRecordLength).toBe(128);
        expect(decoded.recordInfo?.aODRecordLength).toBe(64);
        expect(decoded.issuerId).toBe(original.issuerId);
        expect(decoded.holderId).toBe(original.holderId);
        expect(
            decoded.lastUpdate && "generalizedTime" in decoded.lastUpdate
                ? decoded.lastUpdate.generalizedTime.getTime()
                : undefined,
        ).toBe(original.lastUpdate && "generalizedTime" in original.lastUpdate
            ? original.lastUpdate.generalizedTime.getTime()
            : undefined);
        expect(decoded.preferredLanguage).toBe("en");
    });

    test("round-trips Path with tagRef and both index and length", () => {
        const original = new Path(
            {
                tagRef: new Path_efidOrTagChoice_tagRef(
                    new Uint8Array([0x2f, 0x00]),
                    new Uint8Array([0x3f, 0x00]),
                ),
            },
            0,
            16,
        );
        const decoded = _decode_Path(_encode_Path(original, $.BER));
        expect("tagRef" in decoded.efidOrTagChoice).toBe(true);
        if ("tagRef" in decoded.efidOrTagChoice) {
            expect(decoded.efidOrTagChoice.tagRef.tag).toEqual(new Uint8Array([0x2f, 0x00]));
            expect(decoded.efidOrTagChoice.tagRef.efidOrPath).toEqual(new Uint8Array([0x3f, 0x00]));
        }
        expect(decoded.index).toBe(0);
        expect(decoded.length).toBe(16);
    });

    test("round-trips PasswordAttributes with padChar and path", () => {
        const path = new Path(
            { efidOrPath: new Uint8Array([0x3f, 0x00, 0x50, 0x15]) },
            undefined,
            undefined,
        );
        const original = new PasswordAttributes(
            new Uint8ClampedArray([1, 0, 0, 0, 1]),
            PasswordType_utf8,
            4,
            8,
            16,
            { uniqueByteRef: 1 },
            new Uint8Array([0x00]),
            new Date(Date.UTC(2026, 0, 1, 0, 0, 0)),
            path,
            2,
            1,
        );
        const decoded = _decode_PasswordAttributes(_encode_PasswordAttributes(original, $.BER));
        expect(decoded.pwdFlags).toEqual(original.pwdFlags);
        expect(decoded.pwdType).toBe(PasswordType_utf8);
        expect(decoded.minLength).toBe(4);
        expect(decoded.storedLength).toBe(8);
        expect(decoded.maxLength).toBe(16);
        expect(decoded.pwdReference).toEqual({ uniqueByteRef: 1 });
        expect(decoded.padChar).toEqual(new Uint8Array([0x00]));
        expect(decoded.lastPasswordChange?.getTime()).toBe(original.lastPasswordChange?.getTime());
        expect("efidOrPath" in (decoded.path?.efidOrTagChoice ?? {})).toBe(true);
        expect(decoded.verifDataHistoryLength).toBe(2);
        expect(decoded.cioSecurityId).toBe(1);
    });

    test("round-trips Usage with keyUsage present", () => {
        const original = new Usage(new Uint8ClampedArray([1, 1]), undefined);
        const decoded = _decode_Usage(_encode_Usage(original, $.BER));
        expect(decoded.keyUsage).toEqual(original.keyUsage);
        expect(decoded.extKeyUsage).toBeUndefined();
    });

    test("rejects Path with only index present", () => {
        expect(() => new Path({ efidOrPath: new Uint8Array([0x3f, 0x00]) }, 1, undefined)).toThrow(ASN1ConstructionError);
    });

    test("rejects Identifier longer than cia-ub-identifier", () => {
        const el = $._encodeOctetString(
            new Uint8Array(Number(cia_ub_identifier) + 1),
            $.BER,
        );
        expect(() => _decode_Identifier(el)).toThrow(ASN1SizeError);
    });

    test("rejects Usage with neither keyUsage nor extKeyUsage", () => {
        expect(() => new Usage(undefined, undefined)).toThrow(ASN1ConstructionError);
    });

    test("rejects RecordInfo INTEGER above cia-ub-recordLength", () => {
        expect(() => new RecordInfo(0x1_0000, undefined, undefined, undefined, undefined, undefined, undefined)).toThrow(ASN1OverflowError);
    });

    test("re-exports selected symbols from the package root barrel", () => {
        expect(PathFromRoot).toBe(Path);
        expect(CIAInfoFromRoot).toBe(CIAInfo);
        expect(PasswordType_utf8FromRoot).toBe(PasswordType_utf8);
        expect(id_sha1.toString()).toBe("1.3.14.3.2.26");
    });
});
