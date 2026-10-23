/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { EstablishChargingRecordArg_Type, _decode_EstablishChargingRecordArg_Type, _encode_EstablishChargingRecordArg_Type } from "../IN-CS2-SCF-SCF-ops-args/EstablishChargingRecordArg-Type.ta.mjs";
// export { EstablishChargingRecordArg_Type, _decode_EstablishChargingRecordArg_Type, _encode_EstablishChargingRecordArg_Type } from "../IN-CS2-SCF-SCF-ops-args/EstablishChargingRecordArg-Type.ta.mjs";


/**
 * @summary EstablishChargingRecordArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EstablishChargingRecordArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {[0]  SEQUENCE {userCredit          [0]  UserCredit OPTIONAL,
 *                     chargingParameters  [1]  ChargingParameters OPTIONAL,
 *                     reportExpected      [2]  BOOLEAN DEFAULT TRUE,
 *                     securityParameters  [3]  SecurityParameters OPTIONAL,
 *                     extensions
 *                       [4]  SEQUENCE OF
 *                              ExtensionField
 *                         OPTIONAL,
 *                     ...}}
 * ```
 */
export
type EstablishChargingRecordArg = OPTIONALLY_PROTECTED<EstablishChargingRecordArg_Type>; // DefinedType

let _cached_decoder_for_EstablishChargingRecordArg: $.ASN1Decoder<EstablishChargingRecordArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishChargingRecordArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EstablishChargingRecordArg (el: _Element): EstablishChargingRecordArg {
    if (!_cached_decoder_for_EstablishChargingRecordArg) { _cached_decoder_for_EstablishChargingRecordArg = _get_decoder_for_OPTIONALLY_PROTECTED<EstablishChargingRecordArg_Type>($._decode_implicit<EstablishChargingRecordArg_Type>(() => _decode_EstablishChargingRecordArg_Type)); }
    return _cached_decoder_for_EstablishChargingRecordArg(el);
}

let _cached_encoder_for_EstablishChargingRecordArg: $.ASN1Encoder<EstablishChargingRecordArg> | null = null;

/**
 * @summary Encodes a(n) EstablishChargingRecordArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishChargingRecordArg, encoded as an ASN.1 Element.
 */
export
function _encode_EstablishChargingRecordArg (value: EstablishChargingRecordArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EstablishChargingRecordArg) { _cached_encoder_for_EstablishChargingRecordArg = _get_encoder_for_OPTIONALLY_PROTECTED<EstablishChargingRecordArg_Type>($._encode_implicit(_TagClass.context, 0, () => _encode_EstablishChargingRecordArg_Type, $.BER)); }
    return _cached_encoder_for_EstablishChargingRecordArg(value, elGetter);
}


/* eslint-enable */
