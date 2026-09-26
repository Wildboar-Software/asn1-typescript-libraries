import { OBJECT_IDENTIFIER, ObjectIdentifier } from "@wildboar/asn1";
import { Buffer } from "node:buffer";

const id_at = ObjectIdentifier.fromParts([2, 5, 4]);

// Needed for parsing later.
const id_at_countryName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([6], id_at);
const id_at_organizationName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([10], id_at);
const id_at_organizationalUnitName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([11], id_at);
const id_at_dnQualifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([46], id_at);
const id_at_stateOrProvinceName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([8], id_at);
const id_at_commonName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([3], id_at);
const id_at_serialNumber: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([5], id_at);
const id_at_localityName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([7], id_at);
const id_at_title: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([12], id_at);
const id_at_surname: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([4], id_at);
const id_at_givenName: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([42], id_at);
const id_at_initials: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([43], id_at);
const id_at_pseudonym: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([65], id_at);
const id_at_generationQualifier: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([44], id_at);
const id_at_countryCode3c: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([98], id_at);
const id_at_countryCode3n: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([99], id_at);

const id_dc = ObjectIdentifier.fromParts([0, 9, 2342, 19200300, 100, 1, 25]);


export
function distinguishedTypeToString(attributeType: OBJECT_IDENTIFIER): string {
    if (attributeType.isEqualTo(id_dc)) {
        return "dc";
    }

    const attr_type_bytes = attributeType.toBytesUnsafe();
    const firstTwoBytes = attr_type_bytes.subarray(0, 2);

    // TODO: Use ObjectIdentifier.isPrefixOf() when released
    if (
        (attr_type_bytes.length !== 3)
        || (Buffer.compare(firstTwoBytes, id_at.toBytesUnsafe()) !== 0)
    ) {
        // Unrecognized. Just return the OID as a string.
        return attributeType.toString();
    }

    const lastArc = attr_type_bytes[2];
    switch (lastArc) {
        case 6: return "c";
        case 10: return "o";
        case 11: return "ou";
        case 46: return "dnQualifier";
        case 8: return "st";
        case 3: return "cn";
        case 5: return "serialNumber";
        case 7: return "l";
        case 12: return "title";
        case 4: return "sn";
        case 42: return "gn";
        case 43: return "initials";
        case 65: return "pseudonym";
        case 44: return "generationQualifier";
        case 98: return "c3";
        case 99: return "n3";
        default:
            return attributeType.toString();
    }
}

export default distinguishedTypeToString;
