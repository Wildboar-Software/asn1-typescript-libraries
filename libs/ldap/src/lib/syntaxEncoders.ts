import type LDAPSyntaxEncoder from "./types/LDAPSyntaxEncoder";
import { ASN1Element, ASN1TagClass, ASN1UniversalType } from "asn1-ts";
import encodeLDAPOID from "./encodeLDAPOID";

// LDAPSyntaxEncoder = (value: ASN1Element) => Uint8Array;

const TRUE_VALUE = Buffer.from("TRUE");
const FALSE_VALUE = Buffer.from("FALSE");

function directoryStringToString (ds: ASN1Element): Uint8Array {
    if (ds.tagClass !== ASN1TagClass.universal) {
        throw new Error();
    }
    switch (ds.tagNumber) {
        case (ASN1UniversalType.teletexString): {
            return ds.teletexString;
        }
        case (ASN1UniversalType.printableString): {
            return Buffer.from(ds.printableString);
        }
        case (ASN1UniversalType.bmpString): {
            return Buffer.from(ds.bmpString);
        }
        case (ASN1UniversalType.universalString): {
            return Buffer.from(ds.universalString);
        }
        case (ASN1UniversalType.utf8String): {
            return Buffer.from(ds.utf8String);
        }
        default: {
            throw new Error();
        }
    }
}

export
const bitString: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    const bs = value.bitString;
    for (let i = 0; i < bs.length; i++) {
        bs[i] += 0x30;
    }
    return new Uint8Array(bs);
};

export
const boolean_: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return (value.boolean ? TRUE_VALUE : FALSE_VALUE);
};

export
const countryString: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.from(value.printableString);
};

function pdmToString (pdm: number): string {
    switch (pdm) {
        case (0): return "any";
        case (1): return "mhs";
        case (2): return "physical";
        case (3): return "telex";
        case (4): return "teletex";
        case (5): return "g3fax";
        case (6): return "g4fax";
        case (7): return "ia5";
        case (8): return "videotex";
        case (9): return "telephone";
        default: return pdm.toString();
    }
}

export
const deliveryMethod: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.from(value.sequence.map((el) => el.integer).map(pdmToString).join(" $ "));
};

export
const directoryString: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.from(directoryStringToString(value));
};

// 3.3.7. DIT Content Rule Description ........................9
// 3.3.8. DIT Structure Rule Description .....................10
// 3.3.9. DN .................................................10
// 3.3.10. Enhanced Guide ....................................11
// 3.3.11. Facsimile Telephone Number ........................12
// 3.3.12. Fax ...............................................12

export
const generalizedTime: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.from(value.value);
};

// 3.3.14. Guide .............................................14

export
const ia5String: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.from(value.ia5String);
};

export
const integer: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.from(value.integer.toString());
};

export
const jpeg: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return value.octetString;
};

// 3.3.18. LDAP Syntax Description ...........................16
// 3.3.19. Matching Rule Description .........................16
// 3.3.20. Matching Rule Use Description .....................17
// 3.3.21. Name and Optional UID .............................17
// 3.3.22. Name Form Description .............................18

export
const numericString: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.from(value.numericString);
};

// 3.3.24. Object Class Description ..........................18

export
const octetString: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return value.octetString;
};

export
const oid: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return encodeLDAPOID(value.objectIdentifier);
};

export
const otherMailbox: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    const [ mailboxType, mailbox ] = value.sequence;
    return Buffer.from(`${mailboxType.printableString}$${mailbox.ia5String}`);
};

export
const postalAddress: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.concat(
        value.sequence
            .flatMap((line) => [ directoryStringToString(line), Buffer.from("$") ])
            .slice(0, -1)
    );
};

export
const printableString: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.from(value.printableString);
};

// 3.3.30. Substring Assertion ...............................22

export
const telephoneNumber: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.from(value.printableString);
};

// 3.3.32. Teletex Terminal Identifier .......................23
// 3.3.33. Telex Number ......................................24

export
const utcTime: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return Buffer.from(value.value);
};

/**
 * Specified in IETF RFC 4530: https://datatracker.ietf.org/doc/html/rfc4530
 *
 * @param value
 * @returns
 */
export
const uuid: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    const buf = Buffer.from(value.octetString);
    return Buffer.from(
        buf.slice(0, 4).toString("hex") +
        "-" +
        buf.slice(4, 6).toString("hex") +
        "-" +
        buf.slice(6, 8).toString("hex") +
        "-" +
        buf.slice(8, 10).toString("hex") +
        "-" +
        buf.slice(10, 16).toString("hex"),
        "utf-8",
    );
};

// From IETF RFC 4523: https://www.rfc-editor.org/rfc/rfc4523.html

export
const certificate: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return value.toBytes();
};

export
const certificateList: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return value.toBytes();
};

export
const certificatePair: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return value.toBytes();
};

export
const supportedAlgorithm: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {
    return value.toBytes();
};

// export
// const certificateExactAssertion: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {

// };

// export
// const certificateAssertion: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {

// };

// export
// const certificatePairExactAssertion: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {

// };

// export
// const certificatePairAssertion: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {

// };

// export
// const certificateListExactAssertion: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {

// };

// export
// const certificateListAssertion: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {

// };

// export
// const algorithmIdentifier: LDAPSyntaxEncoder = (value: ASN1Element): Uint8Array => {

// };
