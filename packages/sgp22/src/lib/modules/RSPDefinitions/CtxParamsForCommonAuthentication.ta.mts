/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DeviceInfo, _decode_DeviceInfo, _encode_DeviceInfo } from "../RSPDefinitions/DeviceInfo.ta.mjs";


/**
 * @summary CtxParamsForCommonAuthentication
 * @description
 * 
 * Context for a profile download, RPM, or event retrieval. `matchingId` is the
 * Activation Code token or an SM-DS event identifier. It may be omitted or
 * empty; both mean "no MatchingID". A non-empty value is uppercase A-Z, digits,
 * and hyphen, and the SM-DP+ uses it to select the pending order. `deviceInfo`
 * is the eligibility input. SGP.22 v3.1 §4.1.1 and §5.7.13. v3.1 adds
 * `matchingIdSource` and other fields under the `v3ObjectsInCtxParamsCASupport`
 * capability; this module does not.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CtxParamsForCommonAuthentication ::= SEQUENCE {
 *     matchingId UTF8String OPTIONAL, -- The MatchingId could be the Activation code token or EventID or empty
 *     deviceInfo DeviceInfo -- The Device information
 * }
 * ```
 * 
 * @class
 */
export
class CtxParamsForCommonAuthentication {
    constructor (
        /**
         * @summary `matchingId`.
         * @description
         * 
         * Activation Code token or SM-DS event id. Omitted or empty both mean
         * there is no MatchingID. A present value has non-zero length and
         * contains only `A-Z`, `0-9`, and `-`. SGP.22 v3.1 §4.1.1.
         * 
         * @public
         * @readonly
         */
        readonly matchingId: OPTIONAL<UTF8String>,
        /**
         * @summary `deviceInfo`.
         * @description
         * 
         * TAC, capabilities, and optional IMEI for the eligibility check.
         * SGP.22 v3.1 §4.2.
         * 
         * @public
         * @readonly
         */
        readonly deviceInfo: DeviceInfo
    ) {}

    /**
     * @summary Restructures an object into a CtxParamsForCommonAuthentication
     * @description
     * 
     * This takes an `object` and converts it to a `CtxParamsForCommonAuthentication`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CtxParamsForCommonAuthentication`.
     * @returns {CtxParamsForCommonAuthentication}
     */
    public static _from_object (_o: { [_K in keyof (CtxParamsForCommonAuthentication)]: (CtxParamsForCommonAuthentication)[_K] }): CtxParamsForCommonAuthentication {
        return new CtxParamsForCommonAuthentication(_o.matchingId, _o.deviceInfo);
    }


}

/**
 * @summary The Leading Root Component Types of CtxParamsForCommonAuthentication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CtxParamsForCommonAuthentication: $.ComponentSpec[] = [
    new $.ComponentSpec("matchingId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("deviceInfo", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CtxParamsForCommonAuthentication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CtxParamsForCommonAuthentication: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CtxParamsForCommonAuthentication
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CtxParamsForCommonAuthentication: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CtxParamsForCommonAuthentication: $.ASN1Decoder<CtxParamsForCommonAuthentication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CtxParamsForCommonAuthentication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CtxParamsForCommonAuthentication (el: _Element): CtxParamsForCommonAuthentication {
    if (!_cached_decoder_for_CtxParamsForCommonAuthentication) { _cached_decoder_for_CtxParamsForCommonAuthentication = function (el: _Element): CtxParamsForCommonAuthentication {
    let matchingId: OPTIONAL<UTF8String>;
    let deviceInfo!: DeviceInfo;
    const callbacks: $.DecodingMap = {
        "matchingId": (_el: _Element): void => { matchingId = $._decodeUTF8String(_el); },
        "deviceInfo": (_el: _Element): void => { deviceInfo = _decode_DeviceInfo(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CtxParamsForCommonAuthentication,
        _extension_additions_list_spec_for_CtxParamsForCommonAuthentication,
        _root_component_type_list_2_spec_for_CtxParamsForCommonAuthentication,
        undefined,
    );
    return new CtxParamsForCommonAuthentication(
        matchingId,
        deviceInfo
    );
}; }
    return _cached_decoder_for_CtxParamsForCommonAuthentication(el);
}

let _cached_encoder_for_CtxParamsForCommonAuthentication: $.ASN1Encoder<CtxParamsForCommonAuthentication> | null = null;

/**
 * @summary Encodes a(n) CtxParamsForCommonAuthentication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CtxParamsForCommonAuthentication, encoded as an ASN.1 Element.
 */
export
function _encode_CtxParamsForCommonAuthentication (value: CtxParamsForCommonAuthentication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CtxParamsForCommonAuthentication) { _cached_encoder_for_CtxParamsForCommonAuthentication = function (value: CtxParamsForCommonAuthentication): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.matchingId === undefined) ? undefined : $._encodeUTF8String(value.matchingId, $.BER)),
            /* REQUIRED   */ _encode_DeviceInfo(value.deviceInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CtxParamsForCommonAuthentication(value, elGetter);
}


/* eslint-enable */
