/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
    rdnSequenceToKey,
} from "./RDNSequence.ta.mjs";

/**
 * @summary Name
 * @description
 *
 * A directory name. Currently the only alternative is `rdnSequence` (an
 * {@link RDNSequence} / {@link DistinguishedName}). A name is unambiguous
 * (denotes one object) but need not be unique (the same object may have alias
 * names in addition to its distinguished name).
 * 
 * A recent amendment to ITU-T X.501 defines new alternatives for `Name`, but
 * these will not be supported purely for the selfish reason that this would
 * break a lot of code that I wrote.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Name  ::=  CHOICE { -- only one possibility for now -- rdnSequence  RDNSequence }
 * ```
 */
export type Name = { rdnSequence: RDNSequence } /* CHOICE_ALT_ROOT */;

export {
    compareName,
    compareNameReverse,
} from "./name/compare.mjs";

/**
 * @summary Convert a `Name` to a comparison key
 * @description
 *
 * Two names that would match (probably) produce identical keys, so they can be
 * used as map keys. The key is not meant to be displayed.
 *
 * `Name` is a `CHOICE`, and recent editions of ITU-T X.501 define more
 * alternatives than the `rdnSequence` that this package supports. So that keys
 * of different alternatives can never collide, the key is the name of the
 * alternative, a colon, and the key of the value of that alternative. For
 * `rdnSequence`, that is {@link rdnSequenceToKey}.
 *
 * @param name The directory name
 * @returns A string of the form `rdnSequence:rdnkey,rdnkey...`
 * @throws {TypeError} If `name` uses an alternative this package does not
 * support.
 * @function
 */
export function nameToKey(name: Name): string {
    if ("rdnSequence" in name) {
        return "rdnSequence:" + rdnSequenceToKey(name.rdnSequence);
    }
    throw new TypeError("Unsupported Name alternative");
}

/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Name} The decoded data structure.
 */
export const _decode_Name: $.ASN1Decoder<Name>  = $._decode_inextensible_choice<Name>({
    "UNIVERSAL 16": ["rdnSequence", _decode_RDNSequence],
});

/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export const _encode_Name: $.ASN1Encoder<Name> = $._encode_choice<Name>(
    {
        rdnSequence: _encode_RDNSequence,
    },
    $.BER
);

/* eslint-enable */
