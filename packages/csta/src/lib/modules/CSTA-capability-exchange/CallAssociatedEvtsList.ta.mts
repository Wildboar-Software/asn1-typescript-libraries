/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { CallInformation, _decode_CallInformation, _encode_CallInformation } from "../CSTA-capability-exchange/CallInformation.ta.mjs";

import { Charging, _decode_Charging, _encode_Charging } from "../CSTA-capability-exchange/Charging.ta.mjs";

import { DigitsGenerated, _decode_DigitsGenerated, _encode_DigitsGenerated } from "../CSTA-capability-exchange/DigitsGenerated.ta.mjs";

import { TelephonyTonesGenerated, _decode_TelephonyTonesGenerated, _encode_TelephonyTonesGenerated } from "../CSTA-capability-exchange/TelephonyTonesGenerated.ta.mjs";

import { ServiceCompletionFailure, _decode_ServiceCompletionFailure, _encode_ServiceCompletionFailure } from "../CSTA-capability-exchange/ServiceCompletionFailure.ta.mjs";



/**
 * @summary CallAssociatedEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallAssociatedEvtsList ::= SEQUENCE
 * {     callInformation         [0] IMPLICIT     CallInformation         OPTIONAL,
 *     charging             [1] IMPLICIT     Charging             OPTIONAL,
 *     digitsGenerated         [2] IMPLICIT     DigitsGenerated         OPTIONAL,
 *     telephonyTonesGenerated     [3] IMPLICIT     TelephonyTonesGenerated     OPTIONAL,
 *     serviceCompletionFailure     [4] IMPLICIT     ServiceCompletionFailure     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallAssociatedEvtsList {
    constructor (
        /**
         * @summary `callInformation`.
         * @public
         * @readonly
         */
        readonly callInformation: OPTIONAL<CallInformation>,
        /**
         * @summary `charging`.
         * @public
         * @readonly
         */
        readonly charging: OPTIONAL<Charging>,
        /**
         * @summary `digitsGenerated`.
         * @public
         * @readonly
         */
        readonly digitsGenerated: OPTIONAL<DigitsGenerated>,
        /**
         * @summary `telephonyTonesGenerated`.
         * @public
         * @readonly
         */
        readonly telephonyTonesGenerated: OPTIONAL<TelephonyTonesGenerated>,
        /**
         * @summary `serviceCompletionFailure`.
         * @public
         * @readonly
         */
        readonly serviceCompletionFailure: OPTIONAL<ServiceCompletionFailure>
    ) {}

    /**
     * @summary Restructures an object into a CallAssociatedEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `CallAssociatedEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallAssociatedEvtsList`.
     * @returns {CallAssociatedEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (CallAssociatedEvtsList)]: (CallAssociatedEvtsList)[_K] }): CallAssociatedEvtsList {
        return new CallAssociatedEvtsList(_o.callInformation, _o.charging, _o.digitsGenerated, _o.telephonyTonesGenerated, _o.serviceCompletionFailure);
    }


}

/**
 * @summary The Leading Root Component Types of CallAssociatedEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallAssociatedEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("callInformation", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("charging", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("digitsGenerated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("telephonyTonesGenerated", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("serviceCompletionFailure", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CallAssociatedEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallAssociatedEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallAssociatedEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallAssociatedEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallAssociatedEvtsList: $.ASN1Decoder<CallAssociatedEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallAssociatedEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallAssociatedEvtsList (el: _Element): CallAssociatedEvtsList {
    if (!_cached_decoder_for_CallAssociatedEvtsList) { _cached_decoder_for_CallAssociatedEvtsList = function (el: _Element): CallAssociatedEvtsList {
    let callInformation: OPTIONAL<CallInformation>;
    let charging: OPTIONAL<Charging>;
    let digitsGenerated: OPTIONAL<DigitsGenerated>;
    let telephonyTonesGenerated: OPTIONAL<TelephonyTonesGenerated>;
    let serviceCompletionFailure: OPTIONAL<ServiceCompletionFailure>;
    const callbacks: $.DecodingMap = {
        "callInformation": (_el: _Element): void => { callInformation = $._decode_implicit<CallInformation>(() => _decode_CallInformation)(_el); },
        "charging": (_el: _Element): void => { charging = $._decode_implicit<Charging>(() => _decode_Charging)(_el); },
        "digitsGenerated": (_el: _Element): void => { digitsGenerated = $._decode_implicit<DigitsGenerated>(() => _decode_DigitsGenerated)(_el); },
        "telephonyTonesGenerated": (_el: _Element): void => { telephonyTonesGenerated = $._decode_implicit<TelephonyTonesGenerated>(() => _decode_TelephonyTonesGenerated)(_el); },
        "serviceCompletionFailure": (_el: _Element): void => { serviceCompletionFailure = $._decode_implicit<ServiceCompletionFailure>(() => _decode_ServiceCompletionFailure)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallAssociatedEvtsList,
        _extension_additions_list_spec_for_CallAssociatedEvtsList,
        _root_component_type_list_2_spec_for_CallAssociatedEvtsList,
        undefined,
    );
    return new CallAssociatedEvtsList(
        callInformation,
        charging,
        digitsGenerated,
        telephonyTonesGenerated,
        serviceCompletionFailure
    );
}; }
    return _cached_decoder_for_CallAssociatedEvtsList(el);
}

let _cached_encoder_for_CallAssociatedEvtsList: $.ASN1Encoder<CallAssociatedEvtsList> | null = null;

/**
 * @summary Encodes a(n) CallAssociatedEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallAssociatedEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_CallAssociatedEvtsList (value: CallAssociatedEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallAssociatedEvtsList) { _cached_encoder_for_CallAssociatedEvtsList = function (value: CallAssociatedEvtsList, elGetter: $.ASN1Encoder<CallAssociatedEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallInformation, $.BER)(value.callInformation, $.BER)),
            /* IF_ABSENT  */ ((value.charging === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Charging, $.BER)(value.charging, $.BER)),
            /* IF_ABSENT  */ ((value.digitsGenerated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DigitsGenerated, $.BER)(value.digitsGenerated, $.BER)),
            /* IF_ABSENT  */ ((value.telephonyTonesGenerated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TelephonyTonesGenerated, $.BER)(value.telephonyTonesGenerated, $.BER)),
            /* IF_ABSENT  */ ((value.serviceCompletionFailure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ServiceCompletionFailure, $.BER)(value.serviceCompletionFailure, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallAssociatedEvtsList(value, elGetter);
}


/* eslint-enable */
