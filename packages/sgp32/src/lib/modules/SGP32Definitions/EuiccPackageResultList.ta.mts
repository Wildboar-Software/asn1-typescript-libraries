/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EuiccPackageResult, _decode_EuiccPackageResult, _encode_EuiccPackageResult } from "../SGP32Definitions/EuiccPackageResult.ta.mjs";


/**
 * @summary EuiccPackageResultList
 * @description
 * 
 * eUICC Package Results the IPA returns for tag 'A2' in an IpaEuiccData
 * response (SGP.32 v1.2, sections 2.11.1.2 and 2.11.2.2). With no search
 * criterion the list contains every result stored on the eUICC. When
 * searchCriteriaEuiccPackageResult gives a seqNumber, the list contains the
 * stored result with that sequence number, if one exists.
 *
 * The eUICC stores signed execution results until the IPA deletes them after
 * delivery. Signed and unsigned verification errors are discarded (section
 * 2.11.2.1).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageResultList  ::=  SEQUENCE OF EuiccPackageResult
 * ```
 */
export
type EuiccPackageResultList = EuiccPackageResult[]; // SequenceOfType

let _cached_decoder_for_EuiccPackageResultList: $.ASN1Decoder<EuiccPackageResultList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageResultList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageResultList (el: _Element): EuiccPackageResultList {
    if (!_cached_decoder_for_EuiccPackageResultList) { _cached_decoder_for_EuiccPackageResultList = $._decodeSequenceOf<EuiccPackageResult>(() => _decode_EuiccPackageResult); }
    return _cached_decoder_for_EuiccPackageResultList(el);
}

let _cached_encoder_for_EuiccPackageResultList: $.ASN1Encoder<EuiccPackageResultList> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageResultList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageResultList, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageResultList (value: EuiccPackageResultList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageResultList) { _cached_encoder_for_EuiccPackageResultList = $._encodeSequenceOf<EuiccPackageResult>(() => _encode_EuiccPackageResult, $.BER); }
    return _cached_encoder_for_EuiccPackageResultList(value, elGetter);
}


/* eslint-enable */
