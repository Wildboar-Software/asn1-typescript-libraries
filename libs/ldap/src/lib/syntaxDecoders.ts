import type LDAPSyntaxDecoder from "./types/LDAPSyntaxDecoder";
import { ASN1Element, BERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import decodeLDAPOID from "./decodeLDAPOID";

export
const bitString: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.bitString,
        new Uint8ClampedArray(Array.from(value).map((byte) => (byte - 0x30))),
    );
};

export
const boolean_: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    return (value[0] === 0x54) // "T"
        ? new BERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.boolean,
            true,
        )
        : new BERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.boolean,
            false,
        );
};

export
const countryString: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    if (value.length !== 2) {
        throw new Error();
    }
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.printableString,
        Buffer.from(value).toString("utf-8"),
    );
};

function pdmToInt (pdm: string): number {
    switch (pdm.trim().toLowerCase()) {
        case ("any"): return 0;
        case ("mhs"): return 1;
        case ("physical"): return 2;
        case ("telex"): return 3;
        case ("teletex"): return 4;
        case ("g3fax"): return 5;
        case ("g4fax"): return 6;
        case ("ia5"): return 7;
        case ("videotex"): return 8;
        case ("telephone"): return 9;
        default: throw new Error();
    }
}

export
const deliveryMethod: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    const v = Buffer.from(value).toString("utf-8");
    return BERElement.fromSequence(
        v
            .split("$")
            .map((line) => line.trim())
            .map(pdmToInt)
            .map((int) => new BERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                int,
            )),
    );
};

// 3.3.5. Delivery Method .....................................8

export
const directoryString: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        Buffer.from(value).toString("utf-8"),
    );
};

// 3.3.7. DIT Content Rule Description ........................9
// 3.3.8. DIT Structure Rule Description .....................10
// 3.3.9. DN .................................................10
// 3.3.10. Enhanced Guide ....................................11
// 3.3.11. Facsimile Telephone Number ........................12
// 3.3.12. Fax ...............................................12

export
const generalizedTime: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.generalizedTime,
        new Date(Buffer.from(value).toString("utf-8")),
    );
};

// 3.3.14. Guide .............................................14

export
const ia5String: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    const el = new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.ia5String,
    );
    el.ia5String = Buffer.from(value).toString("utf-8");
    return el;
};

export
const integer: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    const v = Number.parseInt(Buffer.from(value).toString("utf-8"));
    if (Number.isNaN(v) || !Number.isSafeInteger(v)) {
        throw new Error();
    }
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.integer,
        v,
    );
};

export
const jpeg: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.octetString,
        value,
    );
};

// 3.3.18. LDAP Syntax Description ...........................16
// 3.3.19. Matching Rule Description .........................16
// 3.3.20. Matching Rule Use Description .....................17
// 3.3.21. Name and Optional UID .............................17
// 3.3.22. Name Form Description .............................18
// 3.3.23. Numeric String ....................................18

export
const numericString: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    const el = new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.numericString,
    );
    el.numericString = Buffer.from(value).toString("utf-8");
    return el;
};

// 3.3.24. Object Class Description ..........................18

export
const octetString: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.octetString,
        value,
    );
};

// 3.3.26. OID ...............................................19

export
const oid: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    return new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.objectIdentifier,
        decodeLDAPOID(value),
    );
};

// 3.3.27. Other Mailbox .....................................20

export
const otherMailbox: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    const v = Buffer.from(value).toString("utf-8");
    const [ mailboxType, mailbox ] = v.split("$");
    return BERElement.fromSequence([
        new BERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.printableString,
            mailboxType.trim(),
        ),
        new BERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.ia5String,
            mailbox.trim(),
        ),
    ]);
};

export
const postalAddress: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    const v = Buffer.from(value).toString("utf-8");
    return BERElement.fromSequence(v.split("$").map((line) => new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        line,
    )));
};

export
const printableString: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    const el = new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.printableString,
    );
    el.printableString = Buffer.from(value).toString("utf-8");
    return el;
};

// 3.3.30. Substring Assertion ...............................22

export
const telephoneNumber: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    const el = new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.printableString,
    );
    el.printableString = Buffer.from(value).toString("utf-8");
    return el;
};

// 3.3.32. Teletex Terminal Identifier .......................23
// 3.3.33. Telex Number ......................................24

export
const utcTime: LDAPSyntaxDecoder = (value: Uint8Array): ASN1Element => {
    const el = new BERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utcTime,
    );
    el.utcTime = new Date(Buffer.from(value).toString("utf-8"));
    return el;
};
