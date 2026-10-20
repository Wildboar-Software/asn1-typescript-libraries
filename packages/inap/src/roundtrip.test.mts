import * as $ from "@wildboar/asn1/functional";
import {
    InitialDPArg,
    _decode_InitialDPArg,
    _encode_InitialDPArg,
} from "./lib/modules/IN-SSF-SCF-ops-args/InitialDPArg.ta.mjs";
import { EventTypeBCSM } from "./lib/modules/IN-SSF-SCF-datatypes/EventTypeBCSM.ta.mjs";
import {
    MiscCallInfo,
} from "./lib/modules/IN-SSF-SCF-datatypes/MiscCallInfo.ta.mjs";
import { MiscCallInfo_messageType } from "./lib/modules/IN-SSF-SCF-datatypes/MiscCallInfo-messageType.ta.mjs";
import { MiscCallInfo_dpAssignment } from "./lib/modules/IN-SSF-SCF-datatypes/MiscCallInfo-dpAssignment.ta.mjs";
import {
    ServiceInteractionIndicatorsTwo,
} from "./lib/modules/IN-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { BothwayThroughConnectionInd } from "./lib/modules/IN-SSF-SCF-datatypes/BothwayThroughConnectionInd.ta.mjs";
import { ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd } from "./lib/modules/IN-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo-redirectServiceTreatmentInd.ta.mjs";

describe("InitialDPArg", () => {
    test("round-trips a CS-4 initial DP with nested call and service-interaction data", () => {
        const serviceInteractionIndicatorsTwo = new ServiceInteractionIndicatorsTwo(
            undefined,
            undefined,
            BothwayThroughConnectionInd.bothwayPathRequired,
            undefined,
            undefined,
            true,
            undefined,
            undefined,
            false,
            true,
            false,
            undefined,
            new ServiceInteractionIndicatorsTwo_redirectServiceTreatmentInd(
                new Uint8Array([0x03]),
            ),
            null,
        );
        const original = new InitialDPArg(
            7,
            undefined,
            new Uint8Array([0x83, 0x10, 0x32, 0x54]),
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            new MiscCallInfo(
                MiscCallInfo_messageType.request,
                MiscCallInfo_dpAssignment.individualBased,
            ),
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            new Uint8Array([0x20, 0x01]),
            undefined,
            EventTypeBCSM.collectedInfo,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            serviceInteractionIndicatorsTwo,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const decoded = _decode_InitialDPArg(_encode_InitialDPArg(original, $.BER));
        expect(decoded.serviceKey).toBe(7);
        expect(decoded.calledPartyNumber).toEqual(new Uint8Array([0x83, 0x10, 0x32, 0x54]));
        expect(decoded.miscCallInfo?.messageType).toBe(MiscCallInfo_messageType.request);
        expect(decoded.miscCallInfo?.dpAssignment).toBe(MiscCallInfo_dpAssignment.individualBased);
        expect(decoded.forwardCallIndicators).toEqual(new Uint8Array([0x20, 0x01]));
        expect(decoded.eventTypeBCSM).toBe(EventTypeBCSM.collectedInfo);
        expect(decoded.serviceInteractionIndicatorsTwo?.bothwayThroughConnectionInd)
            .toBe(BothwayThroughConnectionInd.bothwayPathRequired);
        expect(decoded.serviceInteractionIndicatorsTwo?.suppressCallDiversionNotification).toBe(true);
        expect(decoded.serviceInteractionIndicatorsTwo?.userDialogueDurationInd).toBe(false);
        expect(decoded.serviceInteractionIndicatorsTwo?.overrideLineRestrictions).toBe(true);
        expect(decoded.serviceInteractionIndicatorsTwo?.redirectServiceTreatmentInd?.redirectReason)
            .toEqual(new Uint8Array([0x03]));
        expect(decoded.serviceInteractionIndicatorsTwo?.nonCUGCall).toBeNull();
        expect(decoded).toEqual(original);
    });
});
