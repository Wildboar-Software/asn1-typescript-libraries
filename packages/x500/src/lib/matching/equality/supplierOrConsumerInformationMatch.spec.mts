import { ObjectIdentifier, type INTEGER } from "@wildboar/asn1";
import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { _encode_ConsumerInformation } from "../../modules/DSAOperationalAttributeTypes/ConsumerInformation.ta.mjs";
import { id_doa_consumerKnowledge } from "../../modules/DSAOperationalAttributeTypes/id-doa-consumerKnowledge.va.mjs";
import { SupplierOrConsumer } from "../../modules/DSAOperationalAttributeTypes/SupplierOrConsumer.ta.mjs";
import {
    supplierOrConsumerInformationMatch_AssertionType as AssertionType,
    _encode_supplierOrConsumerInformationMatch_AssertionType as encodeAssertion,
} from "../../modules/DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch-AssertionType.ta.mjs";
import { AttributeTypeAndValue } from "../../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { OperationalBindingID } from "../../modules/OperationalBindingManagement/OperationalBindingID.ta.mjs";
import { PresentationAddress } from "../../modules/SelectedAttributeTypes/PresentationAddress.ta.mjs";
import { MATCH_FLAG_APPROXIMATE, MATCH_FLAG_CONSTANT_TIME } from "../../types/matching.mjs";
import { supplierOrConsumerInformationMatch, supplierOrConsumerInformationMatchTyped } from "./supplierOrConsumerInformationMatch.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");
const name = { rdnSequence: [[new AttributeTypeAndValue(commonName, _encodeUTF8String("Shadow consumer", DER))]] };
const otherName = { rdnSequence: [[new AttributeTypeAndValue(commonName, _encodeUTF8String("Other consumer", DER))]] };
const address = new PresentationAddress(undefined, undefined, undefined, [new Uint8Array([0x49, 0x01])]);

describe.each([
    0, MATCH_FLAG_CONSTANT_TIME, MATCH_FLAG_APPROXIMATE, MATCH_FLAG_APPROXIMATE | MATCH_FLAG_CONSTANT_TIME,
])("supplier/consumer INTEGER matching (L1), flags %i", (flags) => {
    it.each<{ asserted: INTEGER; stored: INTEGER; exact: boolean; approximate: boolean }>([
        { asserted: 5, stored: 5n, exact: true, approximate: true },
        { asserted: 5n, stored: 5, exact: true, approximate: true },
        { asserted: 0, stored: 0n, exact: true, approximate: true },
        { asserted: 0n, stored: 0, exact: true, approximate: true },
        { asserted: 5, stored: 6n, exact: false, approximate: true },
        { asserted: 5n, stored: 7, exact: false, approximate: false },
        { asserted: 9007199254740992n, stored: 9007199254740992n, exact: true, approximate: true },
        { asserted: 9007199254740992n, stored: 9007199254740993n, exact: false, approximate: true },
        { asserted: 9007199254740992n, stored: 9007199254740994n, exact: false, approximate: false },
    ])("compares $asserted with $stored independently of runtime representation", ({ asserted, stored, exact, approximate }) => {
        // The stored version is deliberately unrelated to the asserted id:
        // only the identifier and ae-title match (X.501 24.2.1.9.3).
        const consumer = new SupplierOrConsumer(name, address, undefined, new OperationalBindingID(stored, 99n));
        const encoded = _encode_ConsumerInformation(consumer, DER);
        const assertion = new AssertionType(name, asserted);
        const expected = (flags & MATCH_FLAG_APPROXIMATE) ? approximate : exact;
        expect(supplierOrConsumerInformationMatchTyped(assertion, consumer, undefined, flags)).toBe(expected);
        expect(supplierOrConsumerInformationMatchTyped(assertion, encoded, undefined, flags)).toBe(expected);
        expect(supplierOrConsumerInformationMatch(
            encodeAssertion(assertion, DER),
            new AttributeTypeAndValue(id_doa_consumerKnowledge, encoded),
            undefined, flags,
        )).toBe(expected);
    });

    it("still requires matching ae-title names when the identifiers agree", () => {
        const consumer = new SupplierOrConsumer(name, address, undefined, new OperationalBindingID(5n, 0));
        expect(supplierOrConsumerInformationMatchTyped(new AssertionType(otherName, 5), consumer, undefined, flags)).toBe(false);
    });
});
