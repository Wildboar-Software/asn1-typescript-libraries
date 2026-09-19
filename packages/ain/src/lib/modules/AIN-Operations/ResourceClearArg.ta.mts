/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClearCause, _decode_ClearCause, _encode_ClearCause } from "../AIN-Parameters/ClearCause.ta.mjs";
// export { ClearCause, _decode_ClearCause, _encode_ClearCause } from "../AIN-Parameters/ClearCause.ta.mjs";
import { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
// export { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
import { CollectedAddressInfo, _decode_CollectedAddressInfo, _encode_CollectedAddressInfo } from "../AIN-Parameters/CollectedAddressInfo.ta.mjs";
// export { CollectedAddressInfo, _decode_CollectedAddressInfo, _encode_CollectedAddressInfo } from "../AIN-Parameters/CollectedAddressInfo.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
import { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";
// export { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { AMAMeasurement, _decode_AMAMeasurement, _encode_AMAMeasurement } from "../AIN-Parameters/AMAMeasurement.ta.mjs";
// export { AMAMeasurement, _decode_AMAMeasurement, _encode_AMAMeasurement } from "../AIN-Parameters/AMAMeasurement.ta.mjs";
import { ClearCauseData, _decode_ClearCauseData, _encode_ClearCauseData } from "../AIN-Parameters/ClearCauseData.ta.mjs";
// export { ClearCauseData, _decode_ClearCauseData, _encode_ClearCauseData } from "../AIN-Parameters/ClearCauseData.ta.mjs";
import { IPReturnBlock, _decode_IPReturnBlock, _encode_IPReturnBlock } from "../AIN-Parameters/IPReturnBlock.ta.mjs";
// export { IPReturnBlock, _decode_IPReturnBlock, _encode_IPReturnBlock } from "../AIN-Parameters/IPReturnBlock.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary ResourceClearArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceClearArg ::= SEQUENCE{
 *             clearCause                     ClearCause,
 *             collectedDigits                CollectedDigits OPTIONAL,
 *             collectedAddressInfo           CollectedAddressInfo OPTIONAL,
 *             carrier                        Carrier OPTIONAL,
 *             failureCause                   FailureCause OPTIONAL,
 *             amp1                           Amp1 OPTIONAL,
 *             amp2                           Amp2 OPTIONAL,
 *             aMAMeasurement                 AMAMeasurement OPTIONAL,
 *             clearCauseData                 ClearCauseData OPTIONAL,
 *             iPReturnBlock                  IPReturnBlock OPTIONAL,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class ResourceClearArg {
    constructor (
        /**
         * @summary `clearCause`.
         * @public
         * @readonly
         */
        readonly clearCause: ClearCause,
        /**
         * @summary `collectedDigits`.
         * @public
         * @readonly
         */
        readonly collectedDigits: OPTIONAL<CollectedDigits>,
        /**
         * @summary `collectedAddressInfo`.
         * @public
         * @readonly
         */
        readonly collectedAddressInfo: OPTIONAL<CollectedAddressInfo>,
        /**
         * @summary `carrier`.
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<Carrier>,
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: OPTIONAL<FailureCause>,
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
         * @summary `aMAMeasurement`.
         * @public
         * @readonly
         */
        readonly aMAMeasurement: OPTIONAL<AMAMeasurement>,
        /**
         * @summary `clearCauseData`.
         * @public
         * @readonly
         */
        readonly clearCauseData: OPTIONAL<ClearCauseData>,
        /**
         * @summary `iPReturnBlock`.
         * @public
         * @readonly
         */
        readonly iPReturnBlock: OPTIONAL<IPReturnBlock>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a ResourceClearArg
     * @description
     * 
     * This takes an `object` and converts it to a `ResourceClearArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceClearArg`.
     * @returns {ResourceClearArg}
     */
    public static _from_object (_o: { [_K in keyof (ResourceClearArg)]: (ResourceClearArg)[_K] }): ResourceClearArg {
        return new ResourceClearArg(_o.clearCause, _o.collectedDigits, _o.collectedAddressInfo, _o.carrier, _o.failureCause, _o.amp1, _o.amp2, _o.aMAMeasurement, _o.clearCauseData, _o.iPReturnBlock, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of ResourceClearArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResourceClearArg: $.ComponentSpec[] = [
    new $.ComponentSpec("clearCause", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("collectedDigits", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("collectedAddressInfo", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("aMAMeasurement", true, $.hasTag(_TagClass.context, 73)),
    new $.ComponentSpec("clearCauseData", true, $.hasTag(_TagClass.context, 74)),
    new $.ComponentSpec("iPReturnBlock", true, $.hasTag(_TagClass.context, 78)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of ResourceClearArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResourceClearArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResourceClearArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResourceClearArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResourceClearArg: $.ASN1Decoder<ResourceClearArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceClearArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceClearArg (el: _Element): ResourceClearArg {
    if (!_cached_decoder_for_ResourceClearArg) { _cached_decoder_for_ResourceClearArg = function (el: _Element): ResourceClearArg {
    let clearCause!: ClearCause;
    let collectedDigits: OPTIONAL<CollectedDigits>;
    let collectedAddressInfo: OPTIONAL<CollectedAddressInfo>;
    let carrier: OPTIONAL<Carrier>;
    let failureCause: OPTIONAL<FailureCause>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let aMAMeasurement: OPTIONAL<AMAMeasurement>;
    let clearCauseData: OPTIONAL<ClearCauseData>;
    let iPReturnBlock: OPTIONAL<IPReturnBlock>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "clearCause": (_el: _Element): void => { clearCause = _decode_ClearCause(_el); },
        "collectedDigits": (_el: _Element): void => { collectedDigits = _decode_CollectedDigits(_el); },
        "collectedAddressInfo": (_el: _Element): void => { collectedAddressInfo = _decode_CollectedAddressInfo(_el); },
        "carrier": (_el: _Element): void => { carrier = _decode_Carrier(_el); },
        "failureCause": (_el: _Element): void => { failureCause = _decode_FailureCause(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "aMAMeasurement": (_el: _Element): void => { aMAMeasurement = _decode_AMAMeasurement(_el); },
        "clearCauseData": (_el: _Element): void => { clearCauseData = _decode_ClearCauseData(_el); },
        "iPReturnBlock": (_el: _Element): void => { iPReturnBlock = _decode_IPReturnBlock(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResourceClearArg,
        _extension_additions_list_spec_for_ResourceClearArg,
        _root_component_type_list_2_spec_for_ResourceClearArg,
        undefined,
    );
    return new ResourceClearArg(
        clearCause,
        collectedDigits,
        collectedAddressInfo,
        carrier,
        failureCause,
        amp1,
        amp2,
        aMAMeasurement,
        clearCauseData,
        iPReturnBlock,
        extensionParameter
    );
}; }
    return _cached_decoder_for_ResourceClearArg(el);
}

let _cached_encoder_for_ResourceClearArg: $.ASN1Encoder<ResourceClearArg> | null = null;

/**
 * @summary Encodes a(n) ResourceClearArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceClearArg, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceClearArg (value: ResourceClearArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceClearArg) { _cached_encoder_for_ResourceClearArg = function (value: ResourceClearArg, elGetter: $.ASN1Encoder<ResourceClearArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ClearCause(value.clearCause, $.BER),
            /* IF_ABSENT  */ ((value.collectedDigits === undefined) ? undefined : _encode_CollectedDigits(value.collectedDigits, $.BER)),
            /* IF_ABSENT  */ ((value.collectedAddressInfo === undefined) ? undefined : _encode_CollectedAddressInfo(value.collectedAddressInfo, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : _encode_Carrier(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.failureCause === undefined) ? undefined : _encode_FailureCause(value.failureCause, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.aMAMeasurement === undefined) ? undefined : _encode_AMAMeasurement(value.aMAMeasurement, $.BER)),
            /* IF_ABSENT  */ ((value.clearCauseData === undefined) ? undefined : _encode_ClearCauseData(value.clearCauseData, $.BER)),
            /* IF_ABSENT  */ ((value.iPReturnBlock === undefined) ? undefined : _encode_IPReturnBlock(value.iPReturnBlock, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ResourceClearArg(value, elGetter);
}


/* eslint-enable */
