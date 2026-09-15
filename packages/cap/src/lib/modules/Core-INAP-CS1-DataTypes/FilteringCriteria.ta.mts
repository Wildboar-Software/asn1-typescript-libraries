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
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
import { FilteringCriteria_addressAndService, _decode_FilteringCriteria_addressAndService, _encode_FilteringCriteria_addressAndService } from "../Core-INAP-CS1-DataTypes/FilteringCriteria-addressAndService.ta.mjs";
// export { FilteringCriteria_addressAndService, _decode_FilteringCriteria_addressAndService, _encode_FilteringCriteria_addressAndService } from "../Core-INAP-CS1-DataTypes/FilteringCriteria-addressAndService.ta.mjs";


/**
 * @summary FilteringCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FilteringCriteria      ::=  CHOICE {
 *      serviceKey     [2] ServiceKey,
 *      addressAndService     [30] SEQUENCE {
 *           calledAddressValue     [0] Digits,
 *           serviceKey     [1] ServiceKey,
 *           callingAddressValue     [2] Digits     OPTIONAL,
 *           locationNumber     [3] LocationNumber     OPTIONAL
 *           }
 *      }
 * ```
 */
export
type FilteringCriteria =
    { serviceKey: ServiceKey } /* CHOICE_ALT_ROOT */
    | { addressAndService: FilteringCriteria_addressAndService } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FilteringCriteria: $.ASN1Decoder<FilteringCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilteringCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FilteringCriteria (el: _Element): FilteringCriteria {
    if (!_cached_decoder_for_FilteringCriteria) { _cached_decoder_for_FilteringCriteria = $._decode_inextensible_choice<FilteringCriteria>({
    "CONTEXT 2": [ "serviceKey", $._decode_implicit<ServiceKey>(() => _decode_ServiceKey) ],
    "CONTEXT 30": [ "addressAndService", $._decode_implicit<FilteringCriteria_addressAndService>(() => _decode_FilteringCriteria_addressAndService) ]
}); }
    return _cached_decoder_for_FilteringCriteria(el);
}

let _cached_encoder_for_FilteringCriteria: $.ASN1Encoder<FilteringCriteria> | null = null;

/**
 * @summary Encodes a(n) FilteringCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilteringCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_FilteringCriteria (value: FilteringCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FilteringCriteria) { _cached_encoder_for_FilteringCriteria = $._encode_choice<FilteringCriteria>({
    "serviceKey": $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceKey, $.BER),
    "addressAndService": $._encode_implicit(_TagClass.context, 30, () => _encode_FilteringCriteria_addressAndService, $.BER),
}, $.BER); }
    return _cached_encoder_for_FilteringCriteria(value, elGetter);
}


/* eslint-enable */
