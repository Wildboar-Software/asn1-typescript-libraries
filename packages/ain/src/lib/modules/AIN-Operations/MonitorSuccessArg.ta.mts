/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FacilityStatus, _decode_FacilityStatus, _encode_FacilityStatus } from "../AIN-Parameters/FacilityStatus.ta.mjs";
// export { FacilityStatus, _decode_FacilityStatus, _encode_FacilityStatus } from "../AIN-Parameters/FacilityStatus.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary MonitorSuccessArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorSuccessArg ::= SEQUENCE{
 *         facilityStatus                 FacilityStatus,
 *         amp1                           Amp1 OPTIONAL,
 *         amp2                           Amp2 OPTIONAL,
 *         extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class MonitorSuccessArg {
    constructor (
        /**
         * @summary `facilityStatus`.
         * @public
         * @readonly
         */
        readonly facilityStatus: FacilityStatus,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a MonitorSuccessArg
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorSuccessArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorSuccessArg`.
     * @returns {MonitorSuccessArg}
     */
    public static _from_object (_o: { [_K in keyof (MonitorSuccessArg)]: (MonitorSuccessArg)[_K] }): MonitorSuccessArg {
        return new MonitorSuccessArg(_o.facilityStatus, _o.amp1, _o.amp2, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of MonitorSuccessArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorSuccessArg: $.ComponentSpec[] = [
    new $.ComponentSpec("facilityStatus", false, $.hasTag(_TagClass.context, 61)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of MonitorSuccessArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorSuccessArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MonitorSuccessArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorSuccessArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorSuccessArg: $.ASN1Decoder<MonitorSuccessArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorSuccessArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorSuccessArg (el: _Element): MonitorSuccessArg {
    if (!_cached_decoder_for_MonitorSuccessArg) { _cached_decoder_for_MonitorSuccessArg = function (el: _Element): MonitorSuccessArg {
    let facilityStatus!: FacilityStatus;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "facilityStatus": (_el: _Element): void => { facilityStatus = _decode_FacilityStatus(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitorSuccessArg,
        _extension_additions_list_spec_for_MonitorSuccessArg,
        _root_component_type_list_2_spec_for_MonitorSuccessArg,
        undefined,
    );
    return new MonitorSuccessArg(
        facilityStatus,
        amp1,
        amp2,
        extensionParameter
    );
}; }
    return _cached_decoder_for_MonitorSuccessArg(el);
}

let _cached_encoder_for_MonitorSuccessArg: $.ASN1Encoder<MonitorSuccessArg> | null = null;

/**
 * @summary Encodes a(n) MonitorSuccessArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorSuccessArg, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorSuccessArg (value: MonitorSuccessArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorSuccessArg) { _cached_encoder_for_MonitorSuccessArg = function (value: MonitorSuccessArg, elGetter: $.ASN1Encoder<MonitorSuccessArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_FacilityStatus(value.facilityStatus, $.BER),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MonitorSuccessArg(value, elGetter);
}


/* eslint-enable */
