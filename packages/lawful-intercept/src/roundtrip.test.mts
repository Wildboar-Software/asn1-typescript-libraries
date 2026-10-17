import * as $ from "@wildboar/asn1/functional";
import {
    EmailIRI,
    _decode_EmailIRI,
    _encode_EmailIRI,
} from "./lib/modules/EmailPDU/EmailIRI.ta.mjs";
import { E_mail_Event_e_mail_send } from "./lib/modules/EmailPDU/E-mail-Event.ta.mjs";
import { E_mail_Protocol_smtp } from "./lib/modules/EmailPDU/E-mail-Protocol.ta.mjs";
import { E_mail_Status_operation_succeeded } from "./lib/modules/EmailPDU/E-mail-Status.ta.mjs";
import { EmailIRI_e_mail_Sender_Validity_validated } from "./lib/modules/EmailPDU/EmailIRI-e-mail-Sender-Validity.ta.mjs";
import { IPAddress } from "./lib/modules/LI-PS-PDU/IPAddress.ta.mjs";
import { IPAddress_iP_type_iPV4 } from "./lib/modules/LI-PS-PDU/IPAddress-iP-type.ta.mjs";

describe("lawful-intercept encode/decode round-trips", () => {
    test("round-trips EmailIRI with an IPv4 address, sender, and message id", () => {
        const original = new EmailIRI(
            [1, 3, 6, 1],
            E_mail_Event_e_mail_send,
            new IPAddress(
                IPAddress_iP_type_iPV4,
                { iPBinaryAddress: new Uint8Array([192, 0, 2, 1]) },
                undefined,
                undefined,
                new Uint8Array([255, 255, 255, 0]),
            ),
            undefined,
            2525,
            25,
            1200,
            3400,
            E_mail_Protocol_smtp,
            "alice@example.com",
            undefined,
            E_mail_Status_operation_succeeded,
            1,
            new Uint8Array([0x3c, 0x6d, 0x73, 0x67]),
            undefined,
            undefined,
            undefined,
            EmailIRI_e_mail_Sender_Validity_validated,
        );
        const encoded = _encode_EmailIRI(original, $.BER);
        const decoded = _decode_EmailIRI(encoded);
        expect(Array.from(_encode_EmailIRI(decoded, $.BER).toBytes())).toEqual(
            Array.from(encoded.toBytes()),
        );
        expect(decoded.emailIRIObjId).toEqual(original.emailIRIObjId);
        expect(decoded.eventType).toBe(original.eventType);
        expect(decoded.client_Port).toBe(original.client_Port);
        expect(decoded.server_Port).toBe(original.server_Port);
        expect(decoded.server_Octets_Sent).toBe(original.server_Octets_Sent);
        expect(decoded.client_Octets_Sent).toBe(original.client_Octets_Sent);
        expect(decoded.protocol_ID).toBe(original.protocol_ID);
        expect(decoded.e_mail_Sender).toBe(original.e_mail_Sender);
        expect(decoded.status).toBe(original.status);
        expect(decoded.total_Recipient_Count).toBe(original.total_Recipient_Count);
        expect(decoded.e_mail_Sender_Validity).toBe(original.e_mail_Sender_Validity);
        expect(decoded.message_ID).toEqual(original.message_ID);
        expect(decoded.client_Address?.iP_type).toBe(original.client_Address?.iP_type);
        const decodedAddress = decoded.client_Address?.iP_value;
        const originalAddress = original.client_Address?.iP_value;
        if (
            decodedAddress && "iPBinaryAddress" in decodedAddress
            && originalAddress && "iPBinaryAddress" in originalAddress
        ) {
            expect(Array.from(decodedAddress.iPBinaryAddress)).toEqual(
                Array.from(originalAddress.iPBinaryAddress),
            );
        } else {
            throw new Error("IPv4 binary address did not round-trip");
        }
        expect(Array.from(decoded.client_Address?.iPv4SubnetMask ?? [])).toEqual(
            Array.from(original.client_Address?.iPv4SubnetMask ?? []),
        );
    });
});
