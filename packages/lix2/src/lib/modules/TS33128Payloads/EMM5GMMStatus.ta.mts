/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_EMMRegStatus, _encode_EMMRegStatus, _enum_for_EMMRegStatus, EMMRegStatus } from "../TS33128Payloads/EMMRegStatus.ta.mjs";
// export { EMMRegStatus, _enum_for_EMMRegStatus, EMMRegStatus_uEEMMRegistered /* IMPORTED_LONG_ENUMERATION_ITEM */, uEEMMRegistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, EMMRegStatus_uENotEMMRegistered /* IMPORTED_LONG_ENUMERATION_ITEM */, uENotEMMRegistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EMMRegStatus, _encode_EMMRegStatus } from "../TS33128Payloads/EMMRegStatus.ta.mjs";
import { _decode_FiveGMMStatus, _encode_FiveGMMStatus, _enum_for_FiveGMMStatus, FiveGMMStatus } from "../TS33128Payloads/FiveGMMStatus.ta.mjs";
// export { FiveGMMStatus, _enum_for_FiveGMMStatus, FiveGMMStatus_uE5GMMRegistered /* IMPORTED_LONG_ENUMERATION_ITEM */, uE5GMMRegistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, FiveGMMStatus_uENot5GMMRegistered /* IMPORTED_LONG_ENUMERATION_ITEM */, uENot5GMMRegistered /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FiveGMMStatus, _encode_FiveGMMStatus } from "../TS33128Payloads/FiveGMMStatus.ta.mjs";


/**
 * @summary EMM5GMMStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMM5GMMStatus ::= SEQUENCE
 * {
 *     eMMRegStatus  [1] EMMRegStatus OPTIONAL,
 *     fiveGMMStatus [2] FiveGMMStatus OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EMM5GMMStatus {
    constructor (
        /**
         * @summary `eMMRegStatus`.
         * @public
         * @readonly
         */
        readonly eMMRegStatus: OPTIONAL<EMMRegStatus>,
        /**
         * @summary `fiveGMMStatus`.
         * @public
         * @readonly
         */
        readonly fiveGMMStatus: OPTIONAL<FiveGMMStatus>
    ) {}

    /**
     * @summary Restructures an object into a EMM5GMMStatus
     * @description
     * 
     * This takes an `object` and converts it to a `EMM5GMMStatus`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EMM5GMMStatus`.
     * @returns {EMM5GMMStatus}
     */
    public static _from_object (_o: { [_K in keyof (EMM5GMMStatus)]: (EMM5GMMStatus)[_K] }): EMM5GMMStatus {
        return new EMM5GMMStatus(_o.eMMRegStatus, _o.fiveGMMStatus);
    }

        /**
         * @summary The enum used as the type of the component `eMMRegStatus`
         * @public
         * @static
         */

    public static _enum_for_eMMRegStatus = _enum_for_EMMRegStatus;        /**
         * @summary The enum used as the type of the component `fiveGMMStatus`
         * @public
         * @static
         */

    public static _enum_for_fiveGMMStatus = _enum_for_FiveGMMStatus;
}

/**
 * @summary The Leading Root Component Types of EMM5GMMStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EMM5GMMStatus: $.ComponentSpec[] = [
    new $.ComponentSpec("eMMRegStatus", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fiveGMMStatus", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EMM5GMMStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EMM5GMMStatus: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EMM5GMMStatus
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EMM5GMMStatus: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EMM5GMMStatus: $.ASN1Decoder<EMM5GMMStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMM5GMMStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EMM5GMMStatus (el: _Element): EMM5GMMStatus {
    if (!_cached_decoder_for_EMM5GMMStatus) { _cached_decoder_for_EMM5GMMStatus = function (el: _Element): EMM5GMMStatus {
    let eMMRegStatus: OPTIONAL<EMMRegStatus>;
    let fiveGMMStatus: OPTIONAL<FiveGMMStatus>;
    const callbacks: $.DecodingMap = {
        "eMMRegStatus": (_el: _Element): void => { eMMRegStatus = $._decode_implicit<EMMRegStatus>(() => _decode_EMMRegStatus)(_el); },
        "fiveGMMStatus": (_el: _Element): void => { fiveGMMStatus = $._decode_implicit<FiveGMMStatus>(() => _decode_FiveGMMStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EMM5GMMStatus,
        _extension_additions_list_spec_for_EMM5GMMStatus,
        _root_component_type_list_2_spec_for_EMM5GMMStatus,
        undefined,
    );
    return new EMM5GMMStatus(
        eMMRegStatus,
        fiveGMMStatus
    );
}; }
    return _cached_decoder_for_EMM5GMMStatus(el);
}

let _cached_encoder_for_EMM5GMMStatus: $.ASN1Encoder<EMM5GMMStatus> | null = null;

/**
 * @summary Encodes a(n) EMM5GMMStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMM5GMMStatus, encoded as an ASN.1 Element.
 */
export
function _encode_EMM5GMMStatus (value: EMM5GMMStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EMM5GMMStatus) { _cached_encoder_for_EMM5GMMStatus = function (value: EMM5GMMStatus, elGetter: $.ASN1Encoder<EMM5GMMStatus>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eMMRegStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EMMRegStatus, $.BER)(value.eMMRegStatus, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGMMStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGMMStatus, $.BER)(value.fiveGMMStatus, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EMM5GMMStatus(value, elGetter);
}


/* eslint-enable */
