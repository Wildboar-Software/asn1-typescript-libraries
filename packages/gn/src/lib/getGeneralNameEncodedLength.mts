import type { ASN1Element, External } from "@wildboar/asn1";
import { DER } from "@wildboar/asn1/functional";
import { getNameEncodedLength } from "@wildboar/dn";
import type { GeneralName } from "./GeneralName.ta.mjs";
import {
    definiteElementLength,
    integerContentLength,
    tlvLength,
    utf8ByteLength,
} from "./encodedLength.mjs";
import { _encode_GeneralName } from "./GeneralName.ta.mjs";

/**
 * @summary Length of the BER encoding of a `GeneralName`, without encoding it
 * @description
 *
 * Definite lengths, and a single-octet tag: every `GeneralName` alternative
 * is context class with a tag number below 31. An IA5 alternative, an
 * `iPAddress`, and a `registeredID` are sized from their content bytes.
 * `directoryName` is an explicit `[4]` wrapped around `getNameEncodedLength`.
 * `otherName` is the `INSTANCE OF` sequence (the type-id, then the value
 * tagged `[0]`). `ediPartyName` uses `EDIPartyName.getEncodedLength()`, which
 * is the same number of bytes: implicit `[5]` only replaces the sequence's
 * tag.
 *
 * `x400Address` is the exception. `@wildboar/or-address` has no length
 * calculator, so this encodes that one alternative and counts the bytes.
 *
 * @param gn The general name
 * @returns The number of bytes `_encode_GeneralName` would produce
 * @function
 */
export function getGeneralNameEncodedLength(gn: GeneralName): number {
    if ("otherName" in gn) {
        return tlvLength(1, externalContentLength(gn.otherName));
    }
    if ("rfc822Name" in gn) {
        return tlvLength(1, utf8ByteLength(gn.rfc822Name));
    }
    if ("dNSName" in gn) {
        return tlvLength(1, utf8ByteLength(gn.dNSName));
    }
    if ("x400Address" in gn) {
        return _encode_GeneralName(gn, DER).toBytes().length;
    }
    if ("directoryName" in gn) {
        return tlvLength(1, getNameEncodedLength(gn.directoryName));
    }
    if ("ediPartyName" in gn) {
        return gn.ediPartyName.getEncodedLength();
    }
    if ("uniformResourceIdentifier" in gn) {
        return tlvLength(1, utf8ByteLength(gn.uniformResourceIdentifier));
    }
    if ("iPAddress" in gn) {
        return tlvLength(1, gn.iPAddress.length);
    }
    if ("registeredID" in gn) {
        return tlvLength(1, gn.registeredID.byteLength());
    }
    return definiteElementLength(gn as ASN1Element);
}

/**
 * Content octets of an `EXTERNAL` / `INSTANCE OF`, matching
 * `@wildboar/asn1`'s `encodeExternal`: absent components are skipped, and so
 * is an `indirectReference` of `0` or an empty descriptor, because that
 * encoder treats both as missing.
 */
function externalContentLength(otherName: External): number {
    let content: number = 0;
    if (otherName.directReference) {
        content += tlvLength(1, otherName.directReference.byteLength());
    }
    if (otherName.indirectReference) {
        content += tlvLength(1, integerContentLength(otherName.indirectReference));
    }
    if (otherName.dataValueDescriptor) {
        content += tlvLength(1, utf8ByteLength(otherName.dataValueDescriptor));
    }
    const encoding = otherName.encoding;
    // `encodeExternal` tests `Uint8Array` before `Uint8ClampedArray`, and a
    // clamped array is a `Uint8Array`, so a bit-string encoding is written as
    // an octet string. The length follows that.
    if (encoding instanceof Uint8Array || encoding instanceof Uint8ClampedArray) {
        content += tlvLength(1, encoding.length);
    } else {
        content += tlvLength(1, definiteElementLength(encoding));
    }
    return content;
}

export default getGeneralNameEncodedLength;
