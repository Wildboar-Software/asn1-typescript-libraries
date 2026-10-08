import * as $ from "@wildboar/asn1/functional";
import {
    UICCCapability_contactlessSupport,
    UICCCapability_iotminimal,
    UICCCapability_usimSupport,
} from "./lib/modules/PEDefinitions/UICCCapability.ta.mjs";
import {
    CertificationDataObject,
} from "./lib/modules/RSPDefinitions/CertificationDataObject.ta.mjs";
import {
    EUICCInfo2,
    _decode_EUICCInfo2,
    _encode_EUICCInfo2,
} from "./lib/modules/RSPDefinitions/EUICCInfo2.ta.mjs";
import {
    EUICCInfo2_euiccCategory_basicEuicc,
} from "./lib/modules/RSPDefinitions/EUICCInfo2-euiccCategory.ta.mjs";
import {
    EUICCInfo2_treProperties_isDiscrete,
    EUICCInfo2_treProperties_usesRemoteMemory,
} from "./lib/modules/RSPDefinitions/EUICCInfo2-treProperties.ta.mjs";
import {
    IoTSpecificInfo,
} from "./lib/modules/RSPDefinitions/IoTSpecificInfo.ta.mjs";
import {
    PprIds_ppr1,
    PprIds_ppr2,
} from "./lib/modules/RSPDefinitions/PprIds.ta.mjs";
import {
    RspCapability_additionalProfile,
    RspCapability_rspServerTestProfileAllowlistCheckSupport,
} from "./lib/modules/RSPDefinitions/RspCapability.ta.mjs";

function version(major: number, minor: number, revision: number): Uint8Array {
    return new Uint8Array([major, minor, revision]);
}

function bits(indexes: number[]): Uint8ClampedArray {
    const value = new Uint8ClampedArray(Math.max(...indexes) + 1);
    for (const index of indexes) {
        value[index] = 1;
    }
    return value;
}

function sampleEuiccInfo2(): EUICCInfo2 {
    return new EUICCInfo2(
        version(2, 3, 1),
        version(2, 5, 0),
        version(1, 0, 7),
        new Uint8Array([0x01, 0x02, 0x03, 0x04]),
        bits([
            UICCCapability_contactlessSupport,
            UICCCapability_usimSupport,
            UICCCapability_iotminimal,
        ]),
        version(15, 0, 0),
        version(2, 3, 0),
        bits([
            RspCapability_additionalProfile,
            RspCapability_rspServerTestProfileAllowlistCheckSupport,
        ]),
        [new Uint8Array([0xaa, 0xbb, 0xcc, 0xdd])],
        [new Uint8Array([0x11, 0x22, 0x33, 0x44])],
        EUICCInfo2_euiccCategory_basicEuicc,
        bits([PprIds_ppr1, PprIds_ppr2]),
        version(0, 2, 1),
        "SAS-UP-2026",
        new CertificationDataObject("platform-a", "https://dloa.example/registrar"),
        bits([
            EUICCInfo2_treProperties_isDiscrete,
            EUICCInfo2_treProperties_usesRemoteMemory,
        ]),
        "TRE-REF-1",
        [version(2, 1, 0), version(2, 3, 1)],
        1,
        [new Uint8Array([0x55, 0x66])],
        new Uint8Array([0x07, 0x08]),
        version(2, 6, 0),
        new IoTSpecificInfo(),
        new Uint8Array([0x03]),
    );
}

describe("SGP.22 encode/decode round-trips", () => {
    test("round-trips EUICCInfo2 with nested profile, certification, and IoT fields", () => {
        const original = sampleEuiccInfo2();
        const decoded = _decode_EUICCInfo2(_encode_EUICCInfo2(original, $.BER));
        expect(decoded).toEqual(original);
        expect(decoded.euiccCategory).toBe(EUICCInfo2_euiccCategory_basicEuicc);
        expect(decoded.sasAcreditationNumber).toBe("SAS-UP-2026");
        expect(decoded.certificationDataObject?.platformLabel).toBe("platform-a");
        expect(decoded.certificationDataObject?.discoveryBaseURL).toBe("https://dloa.example/registrar");
        expect(decoded.uiccCapability[UICCCapability_iotminimal]).toBe(1);
        expect(decoded.rspCapability[RspCapability_rspServerTestProfileAllowlistCheckSupport]).toBe(1);
        expect(decoded.treProperties?.[EUICCInfo2_treProperties_usesRemoteMemory]).toBe(1);
        expect(decoded.forbiddenProfilePolicyRules?.[PprIds_ppr2]).toBe(1);
        expect(decoded.additionalEuiccProfilePackageVersions).toEqual([
            version(2, 1, 0),
            version(2, 3, 1),
        ]);
        expect(decoded.euiccMinimumSecurityLevel).toEqual(new Uint8Array([0x03]));
        expect(decoded.iotSpecificInfo).toEqual(new IoTSpecificInfo());
    });
});
