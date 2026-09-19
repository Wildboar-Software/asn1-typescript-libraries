/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
// export { PLMNID, _decode_PLMNID, _encode_PLMNID } from "../TS33128Payloads/PLMNID.ta.mjs";
import { AllowedTACs, _decode_AllowedTACs, _encode_AllowedTACs } from "../TS33128Payloads/AllowedTACs.ta.mjs";
// export { AllowedTACs, _decode_AllowedTACs, _encode_AllowedTACs } from "../TS33128Payloads/AllowedTACs.ta.mjs";
import { ForbiddenTACs, _decode_ForbiddenTACs, _encode_ForbiddenTACs } from "../TS33128Payloads/ForbiddenTACs.ta.mjs";
// export { ForbiddenTACs, _decode_ForbiddenTACs, _encode_ForbiddenTACs } from "../TS33128Payloads/ForbiddenTACs.ta.mjs";


/**
 * @summary ServiceAreaInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAreaInfo ::= SEQUENCE
 * {
 *     pLMNIdentity    [1] PLMNID,
 *     allowedTACs     [2] AllowedTACs OPTIONAL,
 *     notAllowedTACs  [3] ForbiddenTACs OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ServiceAreaInfo {
    constructor (
        /**
         * @summary `pLMNIdentity`.
         * @public
         * @readonly
         */
        readonly pLMNIdentity: PLMNID,
        /**
         * @summary `allowedTACs`.
         * @public
         * @readonly
         */
        readonly allowedTACs: OPTIONAL<AllowedTACs>,
        /**
         * @summary `notAllowedTACs`.
         * @public
         * @readonly
         */
        readonly notAllowedTACs: OPTIONAL<ForbiddenTACs>
    ) {}

    /**
     * @summary Restructures an object into a ServiceAreaInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceAreaInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceAreaInfo`.
     * @returns {ServiceAreaInfo}
     */
    public static _from_object (_o: { [_K in keyof (ServiceAreaInfo)]: (ServiceAreaInfo)[_K] }): ServiceAreaInfo {
        return new ServiceAreaInfo(_o.pLMNIdentity, _o.allowedTACs, _o.notAllowedTACs);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceAreaInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceAreaInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("pLMNIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("allowedTACs", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("notAllowedTACs", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ServiceAreaInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceAreaInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceAreaInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceAreaInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceAreaInfo: $.ASN1Decoder<ServiceAreaInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAreaInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceAreaInfo (el: _Element): ServiceAreaInfo {
    if (!_cached_decoder_for_ServiceAreaInfo) { _cached_decoder_for_ServiceAreaInfo = function (el: _Element): ServiceAreaInfo {
    let pLMNIdentity!: PLMNID;
    let allowedTACs: OPTIONAL<AllowedTACs>;
    let notAllowedTACs: OPTIONAL<ForbiddenTACs>;
    const callbacks: $.DecodingMap = {
        "pLMNIdentity": (_el: _Element): void => { pLMNIdentity = $._decode_implicit<PLMNID>(() => _decode_PLMNID)(_el); },
        "allowedTACs": (_el: _Element): void => { allowedTACs = $._decode_implicit<AllowedTACs>(() => _decode_AllowedTACs)(_el); },
        "notAllowedTACs": (_el: _Element): void => { notAllowedTACs = $._decode_implicit<ForbiddenTACs>(() => _decode_ForbiddenTACs)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceAreaInfo,
        _extension_additions_list_spec_for_ServiceAreaInfo,
        _root_component_type_list_2_spec_for_ServiceAreaInfo,
        undefined,
    );
    return new ServiceAreaInfo(
        pLMNIdentity,
        allowedTACs,
        notAllowedTACs
    );
}; }
    return _cached_decoder_for_ServiceAreaInfo(el);
}

let _cached_encoder_for_ServiceAreaInfo: $.ASN1Encoder<ServiceAreaInfo> | null = null;

/**
 * @summary Encodes a(n) ServiceAreaInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAreaInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceAreaInfo (value: ServiceAreaInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceAreaInfo) { _cached_encoder_for_ServiceAreaInfo = function (value: ServiceAreaInfo, elGetter: $.ASN1Encoder<ServiceAreaInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PLMNID, $.BER)(value.pLMNIdentity, $.BER),
            /* IF_ABSENT  */ ((value.allowedTACs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AllowedTACs, $.BER)(value.allowedTACs, $.BER)),
            /* IF_ABSENT  */ ((value.notAllowedTACs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ForbiddenTACs, $.BER)(value.notAllowedTACs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceAreaInfo(value, elGetter);
}


/* eslint-enable */
