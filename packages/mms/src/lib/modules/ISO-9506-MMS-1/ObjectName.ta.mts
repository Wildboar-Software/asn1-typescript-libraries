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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { ObjectName_domain_specific, _decode_ObjectName_domain_specific, _encode_ObjectName_domain_specific } from "../ISO-9506-MMS-1/ObjectName-domain-specific.ta.mjs";
// export { ObjectName_domain_specific, _decode_ObjectName_domain_specific, _encode_ObjectName_domain_specific } from "../ISO-9506-MMS-1/ObjectName-domain-specific.ta.mjs";


/**
 * @summary ObjectName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectName  ::=  CHOICE {
 *    vmd-specific     [0] IMPLICIT Identifier,
 *    domain-specific  [1] IMPLICIT SEQUENCE {
 *        domainID         Identifier,
 *        itemID           Identifier
 *        },
 *    aa-specific      [2] IMPLICIT Identifier
 * }
 * ```
 */
export
type ObjectName =
    { vmd_specific: Identifier } /* CHOICE_ALT_ROOT */
    | { domain_specific: ObjectName_domain_specific } /* CHOICE_ALT_ROOT */
    | { aa_specific: Identifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ObjectName: $.ASN1Decoder<ObjectName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectName (el: _Element): ObjectName {
    if (!_cached_decoder_for_ObjectName) { _cached_decoder_for_ObjectName = $._decode_inextensible_choice<ObjectName>({
    "CONTEXT 0": [ "vmd_specific", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 1": [ "domain_specific", $._decode_implicit<ObjectName_domain_specific>(() => _decode_ObjectName_domain_specific) ],
    "CONTEXT 2": [ "aa_specific", $._decode_explicit<Identifier>(() => _decode_Identifier) ]
}); }
    return _cached_decoder_for_ObjectName(el);
}

let _cached_encoder_for_ObjectName: $.ASN1Encoder<ObjectName> | null = null;

/**
 * @summary Encodes a(n) ObjectName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectName, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectName (value: ObjectName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectName) { _cached_encoder_for_ObjectName = $._encode_choice<ObjectName>({
    "vmd_specific": $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER),
    "domain_specific": $._encode_implicit(_TagClass.context, 1, () => _encode_ObjectName_domain_specific, $.BER),
    "aa_specific": $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_ObjectName(value, elGetter);
}


/* eslint-enable */
