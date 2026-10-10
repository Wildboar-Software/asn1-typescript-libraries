import * as $ from "@wildboar/asn1/functional";
import {
    EncryptionInfo,
} from "./lib/modules/GDT/EncryptionInfo.ta.mjs";
import {
    EndPointDescriptor,
} from "./lib/modules/GDT/EndPointDescriptor.ta.mjs";
import {
    ErrorCode_err_ok,
} from "./lib/modules/GDT/ErrorCode.ta.mjs";
import {
    GDTMessage,
    _decode_GDTMessage,
    _encode_GDTMessage,
} from "./lib/modules/GDT/GDTMessage.ta.mjs";
import {
    Header,
} from "./lib/modules/GDT/Header.ta.mjs";
import {
    HopInfo,
} from "./lib/modules/GDT/HopInfo.ta.mjs";
import {
    Parameter,
} from "./lib/modules/GDT/Parameter.ta.mjs";
import {
    ParameterType_pt_mink_command_id,
    ParameterType_pt_mink_enc_type,
    ParameterType_pt_mink_guid,
} from "./lib/modules/GDT/ParameterType.ta.mjs";
import {
    SequenceFlag_sf_start,
} from "./lib/modules/GDT/SequenceFlag.ta.mjs";
import {
    ServiceAction_srvca_request,
} from "./lib/modules/GDT/ServiceAction.ta.mjs";
import {
    ServiceId_sid_security,
} from "./lib/modules/GDT/ServiceId.ta.mjs";
import {
    ServiceMessage,
} from "./lib/modules/GDT/ServiceMessage.ta.mjs";
import {
    GDTMessage as GDTMessageFromRoot,
    SequenceFlag_sf_start as SequenceFlagFromRoot,
    sf_start,
} from "./index.mjs";

describe("GDTMessage", () => {
    test("round-trips a header with encryption info and a service body", () => {
        const original = new GDTMessage(
            new Header(
                1,
                new EndPointDescriptor("routingd", "src-1"),
                new EndPointDescriptor("filterd", undefined),
                new Uint8Array([
                    0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
                    0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10,
                ]),
                42,
                SequenceFlag_sf_start,
                new EncryptionInfo(
                    new Uint8Array([0x61, 0x65, 0x73]),
                    [
                        new Parameter(
                            ParameterType_pt_mink_enc_type,
                            [new Uint8Array([0x01]), new Uint8Array([0x02, 0x03])],
                        ),
                    ],
                ),
                new HopInfo(1, 8),
                ErrorCode_err_ok,
            ),
            {
                service_msg: new ServiceMessage(
                    ServiceId_sid_security,
                    ServiceAction_srvca_request,
                    [
                        new Parameter(
                            ParameterType_pt_mink_command_id,
                            [new Uint8Array([0x03])],
                        ),
                        new Parameter(ParameterType_pt_mink_guid, undefined),
                    ],
                ),
            },
        );

        const encoded = _encode_GDTMessage(original, $.BER);
        const decoded = _decode_GDTMessage(encoded);

        expect(decoded).toEqual(original);
        expect(decoded.header.sequence_flag).toBe(sf_start);
        expect(decoded.header.sequence_flag).toBe(SequenceFlagFromRoot);
        expect(decoded.header.source.id).toBe("src-1");
        expect(decoded.header.destination.id).toBeUndefined();
        expect(decoded.header.enc_info?.params?.[0]?.value).toEqual([
            new Uint8Array([0x01]),
            new Uint8Array([0x02, 0x03]),
        ]);
        expect(decoded.header.hop_info?.current_hop).toBe(1);
        expect(decoded.header.hop_info?.max_hops).toBe(8);
        if (!decoded.body || !("service_msg" in decoded.body)) {
            throw new Error("decoded body was not a service message");
        }
        expect(decoded.body.service_msg.service_id).toBe(ServiceId_sid_security);
        expect(decoded.body.service_msg.params?.[1]?.value).toBeUndefined();
        expect(GDTMessageFromRoot).toBe(GDTMessage);

        const reencoded = _encode_GDTMessage(decoded, $.BER);
        expect(Array.from(reencoded.toBytes())).toEqual(Array.from(encoded.toBytes()));
    });
});
