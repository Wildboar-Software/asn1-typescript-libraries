/* eslint-disable */
import {
    NULL,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
// export { Octet16, _decode_Octet16, _encode_Octet16 } from "../RSPDefinitions/Octet16.ta.mjs";
import { StateChangeCause, _decode_StateChangeCause, _encode_StateChangeCause, undefined /* IMPORTED_SHORT_NAMED_INTEGER */ } from "../SGP32Definitions/StateChangeCause.ta.mjs";
// export { StateChangeCause, StateChangeCause_otherEim /* IMPORTED_LONG_NAMED_INTEGER */, otherEim /* IMPORTED_SHORT_NAMED_INTEGER */, StateChangeCause_fallback /* IMPORTED_LONG_NAMED_INTEGER */, fallback /* IMPORTED_SHORT_NAMED_INTEGER */, StateChangeCause_emergencyProfile /* IMPORTED_LONG_NAMED_INTEGER */, emergencyProfile /* IMPORTED_SHORT_NAMED_INTEGER */, StateChangeCause_local /* IMPORTED_LONG_NAMED_INTEGER */, local /* IMPORTED_SHORT_NAMED_INTEGER */, StateChangeCause_reset /* IMPORTED_LONG_NAMED_INTEGER */, reset /* IMPORTED_SHORT_NAMED_INTEGER */, StateChangeCause_immediateEnableProfile /* IMPORTED_LONG_NAMED_INTEGER */, immediateEnableProfile /* IMPORTED_SHORT_NAMED_INTEGER */, StateChangeCause_deviceChange /* IMPORTED_LONG_NAMED_INTEGER */, deviceChange /* IMPORTED_SHORT_NAMED_INTEGER */, StateChangeCause_undefined /* IMPORTED_LONG_NAMED_INTEGER */, undefined /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_StateChangeCause, _encode_StateChangeCause } from "../SGP32Definitions/StateChangeCause.ta.mjs";


/**
 * @summary GetEimPackageRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetEimPackageRequest ::= [79] SEQUENCE { -- Tag 'BF4F'
 *     eidValue [APPLICATION 26] Octet16, -- Tag '5A'
 *     notifyStateChange [0] NULL OPTIONAL, -- Notification to the eIM that it should update its information about the eUICC (e.g. list of Profiles, Profile states...)
 *     stateChangeCause [1] StateChangeCause OPTIONAL, -- Provide the cause of the notified state change(s)
 *     rPLMN [2] OCTET STRING (SIZE(3)) OPTIONAL -- MCC and MNC of the last registered PLMN, coded as defined in 3GPP TS 24.008 [22]
 * }
 * ```
 * 
 * @class
 */
export
class GetEimPackageRequest {
    constructor (
        /**
         * @summary `eidValue`.
         * @public
         * @readonly
         */
        readonly eidValue: Octet16,
        /**
         * @summary `notifyStateChange`.
         * @public
         * @readonly
         */
        readonly notifyStateChange: OPTIONAL<NULL>,
        /**
         * @summary `stateChangeCause`.
         * @public
         * @readonly
         */
        readonly stateChangeCause: OPTIONAL<StateChangeCause>,
        /**
         * @summary `rPLMN`.
         * @public
         * @readonly
         */
        readonly rPLMN: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a GetEimPackageRequest
     * @description
     * 
     * This takes an `object` and converts it to a `GetEimPackageRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetEimPackageRequest`.
     * @returns {GetEimPackageRequest}
     */
    public static _from_object (_o: { [_K in keyof (GetEimPackageRequest)]: (GetEimPackageRequest)[_K] }): GetEimPackageRequest {
        return new GetEimPackageRequest(_o.eidValue, _o.notifyStateChange, _o.stateChangeCause, _o.rPLMN);
    }


}

/**
 * @summary The Leading Root Component Types of GetEimPackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetEimPackageRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("eidValue", false, $.hasTag(_TagClass.application, 26)),
    new $.ComponentSpec("notifyStateChange", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("stateChangeCause", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rPLMN", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GetEimPackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetEimPackageRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetEimPackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetEimPackageRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetEimPackageRequest: $.ASN1Decoder<GetEimPackageRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetEimPackageRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetEimPackageRequest (el: _Element): GetEimPackageRequest {
    if (!_cached_decoder_for_GetEimPackageRequest) { _cached_decoder_for_GetEimPackageRequest = $._decode_implicit<GetEimPackageRequest>(() => function (el: _Element): GetEimPackageRequest {
    let eidValue!: Octet16;
    let notifyStateChange: OPTIONAL<NULL>;
    let stateChangeCause: OPTIONAL<StateChangeCause>;
    let rPLMN: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "eidValue": (_el: _Element): void => { eidValue = $._decode_implicit<Octet16>(() => _decode_Octet16)(_el); },
        "notifyStateChange": (_el: _Element): void => { notifyStateChange = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "stateChangeCause": (_el: _Element): void => { stateChangeCause = $._decode_implicit<StateChangeCause>(() => _decode_StateChangeCause)(_el); },
        "rPLMN": (_el: _Element): void => { rPLMN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetEimPackageRequest,
        _extension_additions_list_spec_for_GetEimPackageRequest,
        _root_component_type_list_2_spec_for_GetEimPackageRequest,
        undefined,
    );
    return new GetEimPackageRequest(
        eidValue,
        notifyStateChange,
        stateChangeCause,
        rPLMN
    );
}); }
    return _cached_decoder_for_GetEimPackageRequest(el);
}

let _cached_encoder_for_GetEimPackageRequest: $.ASN1Encoder<GetEimPackageRequest> | null = null;

/**
 * @summary Encodes a(n) GetEimPackageRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetEimPackageRequest, encoded as an ASN.1 Element.
 */
export
function _encode_GetEimPackageRequest (value: GetEimPackageRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetEimPackageRequest) { _cached_encoder_for_GetEimPackageRequest = $._encode_implicit(_TagClass.context, 79, () => function (value: GetEimPackageRequest, elGetter: $.ASN1Encoder<GetEimPackageRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 26, () => _encode_Octet16, $.BER)(value.eidValue, $.BER),
            /* IF_ABSENT  */ ((value.notifyStateChange === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.notifyStateChange, $.BER)),
            /* IF_ABSENT  */ ((value.stateChangeCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StateChangeCause, $.BER)(value.stateChangeCause, $.BER)),
            /* IF_ABSENT  */ ((value.rPLMN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.rPLMN, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_GetEimPackageRequest(value, elGetter);
}


/* eslint-enable */
