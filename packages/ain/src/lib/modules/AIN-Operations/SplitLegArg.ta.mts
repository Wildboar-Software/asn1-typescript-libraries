/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
import { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
// export { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
import { LampTreatment, _decode_LampTreatment, _encode_LampTreatment } from "../AIN-Parameters/LampTreatment.ta.mjs";
// export { LampTreatment, _decode_LampTreatment, _encode_LampTreatment } from "../AIN-Parameters/LampTreatment.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary SplitLegArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SplitLegArg ::= SEQUENCE{
 *             legID                           LegID,
 *             displayText                     DisplayText OPTIONAL,
 *             lampTreatment                   LampTreatment OPTIONAL,
 *             amp1                            Amp1 OPTIONAL,
 *             amp2                            Amp2 OPTIONAL,
 *             extensionParameter              [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class SplitLegArg {
    constructor (
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: LegID,
        /**
         * @summary `displayText`.
         * @public
         * @readonly
         */
        readonly displayText: OPTIONAL<DisplayText>,
        /**
         * @summary `lampTreatment`.
         * @public
         * @readonly
         */
        readonly lampTreatment: OPTIONAL<LampTreatment>,
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
     * @summary Restructures an object into a SplitLegArg
     * @description
     * 
     * This takes an `object` and converts it to a `SplitLegArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SplitLegArg`.
     * @returns {SplitLegArg}
     */
    public static _from_object (_o: { [_K in keyof (SplitLegArg)]: (SplitLegArg)[_K] }): SplitLegArg {
        return new SplitLegArg(_o.legID, _o.displayText, _o.lampTreatment, _o.amp1, _o.amp2, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of SplitLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SplitLegArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legID", false, $.hasTag(_TagClass.context, 132)),
    new $.ComponentSpec("displayText", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("lampTreatment", true, $.hasTag(_TagClass.context, 138)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of SplitLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SplitLegArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SplitLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SplitLegArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SplitLegArg: $.ASN1Decoder<SplitLegArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SplitLegArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SplitLegArg (el: _Element): SplitLegArg {
    if (!_cached_decoder_for_SplitLegArg) { _cached_decoder_for_SplitLegArg = function (el: _Element): SplitLegArg {
    let legID!: LegID;
    let displayText: OPTIONAL<DisplayText>;
    let lampTreatment: OPTIONAL<LampTreatment>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "legID": (_el: _Element): void => { legID = _decode_LegID(_el); },
        "displayText": (_el: _Element): void => { displayText = _decode_DisplayText(_el); },
        "lampTreatment": (_el: _Element): void => { lampTreatment = _decode_LampTreatment(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SplitLegArg,
        _extension_additions_list_spec_for_SplitLegArg,
        _root_component_type_list_2_spec_for_SplitLegArg,
        undefined,
    );
    return new SplitLegArg(
        legID,
        displayText,
        lampTreatment,
        amp1,
        amp2,
        extensionParameter
    );
}; }
    return _cached_decoder_for_SplitLegArg(el);
}

let _cached_encoder_for_SplitLegArg: $.ASN1Encoder<SplitLegArg> | null = null;

/**
 * @summary Encodes a(n) SplitLegArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SplitLegArg, encoded as an ASN.1 Element.
 */
export
function _encode_SplitLegArg (value: SplitLegArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SplitLegArg) { _cached_encoder_for_SplitLegArg = function (value: SplitLegArg, elGetter: $.ASN1Encoder<SplitLegArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LegID(value.legID, $.BER),
            /* IF_ABSENT  */ ((value.displayText === undefined) ? undefined : _encode_DisplayText(value.displayText, $.BER)),
            /* IF_ABSENT  */ ((value.lampTreatment === undefined) ? undefined : _encode_LampTreatment(value.lampTreatment, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SplitLegArg(value, elGetter);
}


/* eslint-enable */
