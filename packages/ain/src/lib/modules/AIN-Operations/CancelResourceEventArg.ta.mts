/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
// export { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
import { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
// export { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary CancelResourceEventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelResourceEventArg ::= SEQUENCE{
 *             amp1                            Amp1 OPTIONAL,
 *             amp2                            Amp2 OPTIONAL,
 *             serviceProviderID               ServiceProviderID OPTIONAL,
 *             serviceContext                  ServiceContext OPTIONAL,
 *             extensionParameter              [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class CancelResourceEventArg {
    constructor (
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
         * @summary `serviceProviderID`.
         * @public
         * @readonly
         */
        readonly serviceProviderID: OPTIONAL<ServiceProviderID>,
        /**
         * @summary `serviceContext`.
         * @public
         * @readonly
         */
        readonly serviceContext: OPTIONAL<ServiceContext>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a CancelResourceEventArg
     * @description
     * 
     * This takes an `object` and converts it to a `CancelResourceEventArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelResourceEventArg`.
     * @returns {CancelResourceEventArg}
     */
    public static _from_object (_o: { [_K in keyof (CancelResourceEventArg)]: (CancelResourceEventArg)[_K] }): CancelResourceEventArg {
        return new CancelResourceEventArg(_o.amp1, _o.amp2, _o.serviceProviderID, _o.serviceContext, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of CancelResourceEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelResourceEventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("serviceProviderID", true, $.or($.hasTag(_TagClass.context, 87), $.hasTag(_TagClass.context, 106))),
    new $.ComponentSpec("serviceContext", true, $.hasTag(_TagClass.context, 83)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of CancelResourceEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelResourceEventArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelResourceEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelResourceEventArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelResourceEventArg: $.ASN1Decoder<CancelResourceEventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelResourceEventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelResourceEventArg (el: _Element): CancelResourceEventArg {
    if (!_cached_decoder_for_CancelResourceEventArg) { _cached_decoder_for_CancelResourceEventArg = function (el: _Element): CancelResourceEventArg {
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let serviceProviderID: OPTIONAL<ServiceProviderID>;
    let serviceContext: OPTIONAL<ServiceContext>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "serviceProviderID": (_el: _Element): void => { serviceProviderID = _decode_ServiceProviderID(_el); },
        "serviceContext": (_el: _Element): void => { serviceContext = _decode_ServiceContext(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CancelResourceEventArg,
        _extension_additions_list_spec_for_CancelResourceEventArg,
        _root_component_type_list_2_spec_for_CancelResourceEventArg,
        undefined,
    );
    return new CancelResourceEventArg(
        amp1,
        amp2,
        serviceProviderID,
        serviceContext,
        extensionParameter
    );
}; }
    return _cached_decoder_for_CancelResourceEventArg(el);
}

let _cached_encoder_for_CancelResourceEventArg: $.ASN1Encoder<CancelResourceEventArg> | null = null;

/**
 * @summary Encodes a(n) CancelResourceEventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelResourceEventArg, encoded as an ASN.1 Element.
 */
export
function _encode_CancelResourceEventArg (value: CancelResourceEventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelResourceEventArg) { _cached_encoder_for_CancelResourceEventArg = function (value: CancelResourceEventArg, elGetter: $.ASN1Encoder<CancelResourceEventArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.serviceProviderID === undefined) ? undefined : _encode_ServiceProviderID(value.serviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.serviceContext === undefined) ? undefined : _encode_ServiceContext(value.serviceContext, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CancelResourceEventArg(value, elGetter);
}


/* eslint-enable */
