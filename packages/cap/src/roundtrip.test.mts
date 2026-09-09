import * as $ from "@wildboar/asn1/functional";
import {
    BCSMEvent,
    _encode_BCSMEvent,
    _decode_BCSMEvent,
} from "./lib/modules/CAP-datatypes/BCSMEvent.ta.mjs";
import { EventTypeBCSM } from "./lib/modules/CAP-datatypes/EventTypeBCSM.ta.mjs";
import { MonitorMode } from "./lib/modules/CAP-datatypes/MonitorMode.ta.mjs";

describe("BCSMEvent", () => {
    test("round-trips a collectedInfo event with notifyAndContinue monitoring", () => {
        const original = new BCSMEvent(
            EventTypeBCSM.collectedInfo,
            MonitorMode.notifyAndContinue,
            undefined,
            undefined,
            undefined,
        );
        const decoded = _decode_BCSMEvent(_encode_BCSMEvent(original, $.BER));
        expect(decoded.eventTypeBCSM).toEqual(original.eventTypeBCSM);
        expect(decoded.monitorMode).toEqual(original.monitorMode);
        expect(decoded.legID).toBeUndefined();
        expect(decoded.dpSpecificCriteria).toBeUndefined();
        expect(decoded.automaticRearm).toBeUndefined();
    });
});
