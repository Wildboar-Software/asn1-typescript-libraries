import {
    ASN1UniversalType,
    External,
    ObjectIdentifier,
    type ASN1Element,
    type OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import {
    BER,
    _encodeIA5String,
    _encodeObjectIdentifier,
    _encodeOctetString,
    _encodeSequence,
    _encodeUTF8String,
} from "@wildboar/asn1/functional";
import { bytesToHex, hexToBytes } from "./hex.mjs";

/**
 * @summary Print the value of an `otherName` (`INSTANCE OF OTHER-NAME`)
 * @description
 *
 * Recognizes the `otherName` forms that show up in certificates: a Microsoft
 * UPN, and the forms in RFC 4043, RFC 4683, and RFC 4985. Anything else is
 * the type-id and the hexadecimal encoding of the value. The result does not
 * include the `otherName:` prefix; {@link generalNameToString} adds that.
 *
 * The SIM `hashAlg` is an `AlgorithmIdentifier`. Only the algorithm OID is
 * printed, and only when the parameters are absent or `NULL`, so this does
 * not depend on a PKI package to decode it.
 *
 * @internal
 */

const ID_UPN: OBJECT_IDENTIFIER = ObjectIdentifier.fromString("1.3.6.1.4.1.311.20.2.3");
const ID_PERMANENT_ID: OBJECT_IDENTIFIER = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.3");
const ID_HW_MODULE_NAME: OBJECT_IDENTIFIER = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.4");
const ID_XMPP_ADDR: OBJECT_IDENTIFIER = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.5");
const ID_SIM: OBJECT_IDENTIFIER = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.6");
const ID_SRV_NAME: OBJECT_IDENTIFIER = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.7");
const ID_NAI_REALM: OBJECT_IDENTIFIER = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.8");
const ID_SMTP_UTF8: OBJECT_IDENTIFIER = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.9");
const ID_ACP_NODE_NAME: OBJECT_IDENTIFIER = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.10");
const ID_BUNDLE_EID: OBJECT_IDENTIFIER = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.11");

function elementHex(encoding: ASN1Element): string {
    return bytesToHex(encoding.toBytes());
}

function unknownOrBad(typeId: OBJECT_IDENTIFIER, encoding: ASN1Element): string {
    return `${typeId.toString()}:0x${elementHex(encoding)}`;
}

function readSequence(encoding: ASN1Element): ASN1Element[] | undefined {
    try {
        return encoding.sequence;
    } catch {
        return undefined;
    }
}

/**
 * @summary Read `AlgorithmIdentifier ::= SEQUENCE { algorithm OID, parameters ANY OPTIONAL }`
 * @description
 *
 * Returns the algorithm's dotted OID when `parameters` is absent or `NULL`.
 * Any other shape returns `undefined`, and the caller prints the name as
 * unknown.
 *
 * @internal
 */
function algorithmOid(el: ASN1Element): string | undefined {
    const components: ASN1Element[] | undefined = readSequence(el);
    const algorithm: ASN1Element | undefined = components?.[0];
    if (!algorithm || algorithm.tagNumber !== ASN1UniversalType.objectIdentifier) {
        return undefined;
    }
    const parameters: ASN1Element | undefined = components?.[1];
    if (parameters && parameters.tagNumber !== ASN1UniversalType.nill) {
        return undefined;
    }
    try {
        return algorithm.objectIdentifier.toString();
    } catch {
        return undefined;
    }
}

/**
 * @summary String form of an `otherName` value, without the `otherName:` prefix
 * @internal
 */
export function otherNameToString(otherName: External): string {
    const encoding = otherName.encoding;
    if (
        !otherName.directReference
        || encoding instanceof Uint8Array
        || encoding instanceof Uint8ClampedArray
    ) {
        return "[Cannot display malformed OTHER-NAME]";
    }
    const typeId: OBJECT_IDENTIFIER = otherName.directReference;
    if (typeId.isEqualTo(ID_UPN)) {
        return `UPN:${encoding.utf8String}`;
    }
    if (typeId.isEqualTo(ID_PERMANENT_ID)) {
        const components: ASN1Element[] | undefined = readSequence(encoding);
        const first: ASN1Element | undefined = components?.[0];
        const second: ASN1Element | undefined = components?.[1];
        if (!first) {
            return "PermanentIdentifier:{}";
        }
        if (second) {
            return `PermanentIdentifier:{ identifierValue:"${first.utf8String}", assigner:${second.objectIdentifier.toString()} }`;
        }
        if (first.tagNumber === ASN1UniversalType.utf8String) {
            return `PermanentIdentifier:{ identifierValue:"${first.utf8String}" }`;
        }
        return `PermanentIdentifier:{ assigner:${first.objectIdentifier.toString()} }`;
    }
    if (typeId.isEqualTo(ID_HW_MODULE_NAME)) {
        const components: ASN1Element[] | undefined = readSequence(encoding);
        const hwType: ASN1Element | undefined = components?.[0];
        const serial: ASN1Element | undefined = components?.[1];
        if (!hwType || !serial) {
            return unknownOrBad(typeId, encoding);
        }
        return `HardwareModuleName:{ hwType:${hwType.objectIdentifier.toString()}, hwSerialNum:${bytesToHex(serial.octetString)} }`;
    }
    if (typeId.isEqualTo(ID_XMPP_ADDR)) {
        return `XMPPAddr:${encoding.ia5String}`;
    }
    if (typeId.isEqualTo(ID_SIM)) {
        const components: ASN1Element[] | undefined = readSequence(encoding);
        const hashAlg: ASN1Element | undefined = components?.[0];
        const authorityRandom: ASN1Element | undefined = components?.[1];
        const pepsi: ASN1Element | undefined = components?.[2];
        if (!hashAlg || !authorityRandom || !pepsi) {
            return unknownOrBad(typeId, encoding);
        }
        const algorithm: string | undefined = algorithmOid(hashAlg);
        if (!algorithm) {
            return unknownOrBad(typeId, encoding);
        }
        const s1: string = `{ algorithm:${algorithm} }`;
        const s2: string = bytesToHex(authorityRandom.octetString);
        const s3: string = bytesToHex(pepsi.octetString);
        return `SIM:{ hashAlg:${s1}, authorityRandom:${s2}, pEPSI:${s3} }`;
    }
    if (typeId.isEqualTo(ID_SRV_NAME)) {
        return `SRVName:${encoding.ia5String}`;
    }
    if (typeId.isEqualTo(ID_NAI_REALM)) {
        return `NAIRealm:${encoding.utf8String}`;
    }
    if (typeId.isEqualTo(ID_SMTP_UTF8)) {
        return `SmtpUTF8Mailbox:${encoding.utf8String}`;
    }
    if (typeId.isEqualTo(ID_ACP_NODE_NAME)) {
        return `AcpNodeName:${encoding.ia5String}`;
    }
    if (typeId.isEqualTo(ID_BUNDLE_EID)) {
        return `BundleEID:${encoding.ia5String}`;
    }
    return unknownOrBad(typeId, encoding);
}

/**
 * @summary Parse an `otherName` string produced by {@link otherNameToString}
 * @description
 *
 * The type name is matched without regard to case (`srvname`, `upn`). The
 * value is everything after the next colon. String forms are encoded as the
 * same ASN.1 string type the printer reads. `HardwareModuleName` reverses
 * `{ hwType:oid, hwSerialNum:hex }`. `PermanentIdentifier` and `SIM` are
 * not parsed.
 *
 * Does not include the `otherName:` prefix; {@link generalNameFromString}
 * strips that.
 *
 * @param text `type:value`
 * @returns An `EXTERNAL` whose `directReference` is the type-id
 * @throws {SyntaxError} If the type is unknown, unsupported, or the value is malformed
 * @throws {Error} If a `HardwareModuleName` `hwType` is not a valid object identifier
 * @internal
 */
export function otherNameFromString(text: string): External {
    const colon: number = text.indexOf(":");
    if (colon <= 0) {
        throw new SyntaxError("otherName string must be type:value");
    }
    const kind: string = text.slice(0, colon).toLowerCase();
    const value: string = text.slice(colon + 1);
    switch (kind) {
        case "upn":
            return utf8OtherName(ID_UPN, value);
        case "xmppaddr":
            return ia5OtherName(ID_XMPP_ADDR, kind, value);
        case "srvname":
            return ia5OtherName(ID_SRV_NAME, kind, value);
        case "nairealm":
            return utf8OtherName(ID_NAI_REALM, value);
        case "smtputf8mailbox":
            return utf8OtherName(ID_SMTP_UTF8, value);
        case "acpnodename":
            return ia5OtherName(ID_ACP_NODE_NAME, kind, value);
        case "bundleeid":
            return ia5OtherName(ID_BUNDLE_EID, kind, value);
        case "hardwaremodulename":
            return hardwareModuleNameFromString(value);
        case "permanentidentifier":
        case "sim":
            throw new SyntaxError(`${kind} cannot be parsed from a string`);
        default:
            throw new SyntaxError(`unknown otherName type: ${kind}`);
    }
}

function utf8OtherName(typeId: OBJECT_IDENTIFIER, value: string): External {
    return new External(
        typeId,
        undefined,
        undefined,
        _encodeUTF8String(value, BER),
    );
}

function ia5OtherName(typeId: OBJECT_IDENTIFIER, kind: string, value: string): External {
    for (let i: number = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 0x7F) {
            throw new SyntaxError(`${kind} must be an IA5String`);
        }
    }
    return new External(
        typeId,
        undefined,
        undefined,
        _encodeIA5String(value, BER),
    );
}

/**
 * Reverse `HardwareModuleName:{ hwType:oid, hwSerialNum:hex }`.
 * Field names are matched without regard to case or surrounding spaces.
 */
function hardwareModuleNameFromString(value: string): External {
    const compact: string = value.replace(/\s/g, "").toLowerCase();
    const match: RegExpExecArray | null = /^\{hwtype:([0-9]+(?:\.[0-9]+)+),hwserialnum:([0-9a-f]*)\}$/.exec(compact);
    const hwType: string | undefined = match?.[1];
    const serialHex: string | undefined = match?.[2];
    if (hwType === undefined || serialHex === undefined) {
        throw new SyntaxError("invalid HardwareModuleName string");
    }
    return new External(
        ID_HW_MODULE_NAME,
        undefined,
        undefined,
        _encodeSequence([
            _encodeObjectIdentifier(ObjectIdentifier.fromString(hwType), BER),
            _encodeOctetString(hexToBytes(serialHex), BER),
        ], BER),
    );
}

export default otherNameToString;
