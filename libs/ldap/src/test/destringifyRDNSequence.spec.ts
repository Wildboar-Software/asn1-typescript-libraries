import { ObjectIdentifier, BERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, OBJECT_IDENTIFIER, ASN1Element } from "asn1-ts";
import { hasUncaughtExceptionCaptureCallback } from "node:process";
import destringifyRDNSequence from "../lib/destringifiers/RDNSequence";
import AttributeTypeAndValue from "../lib/types/AttributeTypeAndValue";
import type StringDecoderGetter from "../lib/types/StringDecoderGetter";

function utf8Element (str: string): BERElement {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        str,
    );
}

// const COUNTRY_NAME = new ObjectIdentifier([ 2, 5, 4, 6 ]);
// const STATE_NAME = new ObjectIdentifier([ 2, 5, 4, 8 ]);
// const GIVEN_NAME = new ObjectIdentifier([ 2, 5, 4, 42 ]);
// const SURNAME = new ObjectIdentifier([ 2, 5, 4, 4 ]);

describe("destringifyRDNSequence()", () => {

    it("destringifies a DN with some syntaxes recognized", () => {
        const str = "2.5.4.42=#0c084a6f6e617468616e+2.5.4.4=Wilbur,2.5.4.8=#0c07466c6f72696461,2.5.4.6=#0c025553";
        const decoderGetter: StringDecoderGetter = () => [ new ObjectIdentifier([ 2, 5, 4, 3 ]), utf8Element ];
        const decoded = Array.from(destringifyRDNSequence(str, decoderGetter));
        expect(decoded.length).toBe(3);
        expect(decoded[0].length).toBe(2);
        expect(decoded[1].length).toBe(1);
        expect(decoded[2].length).toBe(1);
        expect(decoded[0][0][0].toString()).toBe("2.5.4.3");
        expect(decoded[0][0][1].utf8String).toBe("Jonathan");
        expect(decoded[0][1][0].toString()).toBe("2.5.4.3");
        expect(decoded[0][1][1].utf8String).toBe("Wilbur");
        expect(decoded[1][0][0].toString()).toBe("2.5.4.3");
        expect(decoded[1][0][1].utf8String).toBe("Florida");
        expect(decoded[2][0][0].toString()).toBe("2.5.4.3");
        expect(decoded[2][0][1].utf8String).toBe("US");
    });

    it("destringifies a DN with no syntaxes recognized as long as all values are BER-encoded", () => {
        const str = "2.5.4.42=#0c084a6f6e617468616e+2.5.4.4=#0c0657696c627572,2.5.4.8=#0c07466c6f72696461,2.5.4.6=#0c025553";
        const decoderGetter: StringDecoderGetter = () => undefined;
        const decoded = Array.from(destringifyRDNSequence(str, decoderGetter));
        expect(decoded.length).toBe(3);
        expect(decoded[0].length).toBe(2);
        expect(decoded[1].length).toBe(1);
        expect(decoded[2].length).toBe(1);
        expect(decoded[0][0][0].toString()).toBe("2.5.4.42");
        expect(decoded[0][0][1].utf8String).toBe("Jonathan");
        expect(decoded[0][1][0].toString()).toBe("2.5.4.4");
        expect(decoded[0][1][1].utf8String).toBe("Wilbur");
        expect(decoded[1][0][0].toString()).toBe("2.5.4.8");
        expect(decoded[1][0][1].utf8String).toBe("Florida");
        expect(decoded[2][0][0].toString()).toBe("2.5.4.6");
        expect(decoded[2][0][1].utf8String).toBe("US");
    });

    it("destringifies a BER-encoded value, even when the syntax is recognized", () => {
        const str = "2.5.4.42=#0c084a6f6e617468616e+2.5.4.4=#0c0657696c627572,2.5.4.8=#0c07466c6f72696461,2.5.4.6=#0c025553";
        const decoderGetter: StringDecoderGetter = () => [ new ObjectIdentifier([ 2, 5, 4, 3 ]), utf8Element ];
        const decoded = Array.from(destringifyRDNSequence(str, decoderGetter));
        expect(decoded.length).toBe(3);
        expect(decoded[0].length).toBe(2);
        expect(decoded[1].length).toBe(1);
        expect(decoded[2].length).toBe(1);
        expect(decoded[0][0][0].toString()).toBe("2.5.4.3");
        expect(decoded[0][0][1].utf8String).toBe("Jonathan");
        expect(decoded[0][1][0].toString()).toBe("2.5.4.3");
        expect(decoded[0][1][1].utf8String).toBe("Wilbur");
        expect(decoded[1][0][0].toString()).toBe("2.5.4.3");
        expect(decoded[1][0][1].utf8String).toBe("Florida");
        expect(decoded[2][0][0].toString()).toBe("2.5.4.3");
        expect(decoded[2][0][1].utf8String).toBe("US");
    });

    it("unescapes values correctly", () => {
        const str = "2.5.4.42=Jona\\\\than\\00+2.5.4.4=von\\ Wilbur\\, III,2.5.4.8=#0c07466c6f72696461,2.5.4.6=\\#US";
        const decoderGetter: StringDecoderGetter = () => [ new ObjectIdentifier([ 2, 5, 4, 3 ]), utf8Element ];
        const decoded = Array.from(destringifyRDNSequence(str, decoderGetter));
        expect(decoded.length).toBe(3);
        expect(decoded[0].length).toBe(2);
        expect(decoded[1].length).toBe(1);
        expect(decoded[2].length).toBe(1);
        expect(decoded[0][0][0].toString()).toBe("2.5.4.3");
        expect(decoded[0][0][1].utf8String).toBe("Jona\\than\x00");
        expect(decoded[0][1][0].toString()).toBe("2.5.4.3");
        expect(decoded[0][1][1].utf8String).toBe("von Wilbur, III");
        expect(decoded[1][0][0].toString()).toBe("2.5.4.3");
        expect(decoded[1][0][1].utf8String).toBe("Florida");
        expect(decoded[2][0][0].toString()).toBe("2.5.4.3");
        expect(decoded[2][0][1].utf8String).toBe("#US");
    });
});
