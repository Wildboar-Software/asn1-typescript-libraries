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
import { AScopeAccreditation, _enum_for_AScopeAccreditation, _decode_AScopeAccreditation, _encode_AScopeAccreditation } from "../MachineReadableBiometricTestingAndReportingTestReport/AScopeAccreditation.ta.mjs";
// export { AScopeAccreditation, _enum_for_AScopeAccreditation, AScopeAccreditation_iso_iec19795_1_2006 /* IMPORTED_LONG_ENUMERATION_ITEM */, iso_iec19795_1_2006 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AScopeAccreditation_iso_iec19795_1_2021 /* IMPORTED_LONG_ENUMERATION_ITEM */, iso_iec19795_1_2021 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AScopeAccreditation_iso_iec19795_3 /* IMPORTED_LONG_ENUMERATION_ITEM */, iso_iec19795_3 /* IMPORTED_SHORT_ENUMERATION_ITEM */, AScopeAccreditation_iso_iec30107_4 /* IMPORTED_LONG_ENUMERATION_ITEM */, iso_iec30107_4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AScopeAccreditation, _encode_AScopeAccreditation } from "../MachineReadableBiometricTestingAndReportingTestReport/AScopeAccreditation.ta.mjs";


/**
 * @summary ScopeAccreditation
 * @description
 *
 * Sequence of claimed accreditation scopes (Clause 6.4.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScopeAccreditation  ::=  SEQUENCE OF AScopeAccreditation
 * ```
 */
export
type ScopeAccreditation = AScopeAccreditation[]; // SequenceOfType

let _cached_decoder_for_ScopeAccreditation: $.ASN1Decoder<ScopeAccreditation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScopeAccreditation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScopeAccreditation (el: _Element): ScopeAccreditation {
    if (!_cached_decoder_for_ScopeAccreditation) { _cached_decoder_for_ScopeAccreditation = $._decodeSequenceOf<AScopeAccreditation>(() => _decode_AScopeAccreditation); }
    return _cached_decoder_for_ScopeAccreditation(el);
}

let _cached_encoder_for_ScopeAccreditation: $.ASN1Encoder<ScopeAccreditation> | null = null;

/**
 * @summary Encodes a(n) ScopeAccreditation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScopeAccreditation, encoded as an ASN.1 Element.
 */
export
function _encode_ScopeAccreditation (value: ScopeAccreditation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScopeAccreditation) { _cached_encoder_for_ScopeAccreditation = $._encodeSequenceOf<AScopeAccreditation>(() => _encode_AScopeAccreditation, $.BER); }
    return _cached_encoder_for_ScopeAccreditation(value, elGetter);
}


/* eslint-enable */
