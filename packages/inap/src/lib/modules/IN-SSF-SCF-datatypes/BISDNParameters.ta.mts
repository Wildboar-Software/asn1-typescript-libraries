/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AALParameters, _decode_AALParameters, _encode_AALParameters } from "../IN-SSF-SCF-datatypes/AALParameters.ta.mjs";
// export { AALParameters, _decode_AALParameters, _encode_AALParameters } from "../IN-SSF-SCF-datatypes/AALParameters.ta.mjs";
import { type AdditionalATMCellRate, _decode_AdditionalATMCellRate, _encode_AdditionalATMCellRate } from "../IN-SSF-SCF-datatypes/AdditionalATMCellRate.ta.mjs";
// export { AdditionalATMCellRate, _decode_AdditionalATMCellRate, _encode_AdditionalATMCellRate } from "../IN-SSF-SCF-datatypes/AdditionalATMCellRate.ta.mjs";
import { type AESACalledParty, _decode_AESACalledParty, _encode_AESACalledParty } from "../IN-SSF-SCF-datatypes/AESACalledParty.ta.mjs";
// export { AESACalledParty, _decode_AESACalledParty, _encode_AESACalledParty } from "../IN-SSF-SCF-datatypes/AESACalledParty.ta.mjs";
import { type AESACallingParty, _decode_AESACallingParty, _encode_AESACallingParty } from "../IN-SSF-SCF-datatypes/AESACallingParty.ta.mjs";
// export { AESACallingParty, _decode_AESACallingParty, _encode_AESACallingParty } from "../IN-SSF-SCF-datatypes/AESACallingParty.ta.mjs";
import { type AlternativeATMTrafficDescriptor, _decode_AlternativeATMTrafficDescriptor, _encode_AlternativeATMTrafficDescriptor } from "../IN-SSF-SCF-datatypes/AlternativeATMTrafficDescriptor.ta.mjs";
// export { AlternativeATMTrafficDescriptor, _decode_AlternativeATMTrafficDescriptor, _encode_AlternativeATMTrafficDescriptor } from "../IN-SSF-SCF-datatypes/AlternativeATMTrafficDescriptor.ta.mjs";
import { type ATMCellRate, _decode_ATMCellRate, _encode_ATMCellRate } from "../IN-SSF-SCF-datatypes/ATMCellRate.ta.mjs";
// export { ATMCellRate, _decode_ATMCellRate, _encode_ATMCellRate } from "../IN-SSF-SCF-datatypes/ATMCellRate.ta.mjs";
import { type CDVTDescriptor, _decode_CDVTDescriptor, _encode_CDVTDescriptor } from "../IN-SSF-SCF-datatypes/CDVTDescriptor.ta.mjs";
// export { CDVTDescriptor, _decode_CDVTDescriptor, _encode_CDVTDescriptor } from "../IN-SSF-SCF-datatypes/CDVTDescriptor.ta.mjs";
import { type CumulativeTransitDelay, _decode_CumulativeTransitDelay, _encode_CumulativeTransitDelay } from "../IN-SSF-SCF-datatypes/CumulativeTransitDelay.ta.mjs";
// export { CumulativeTransitDelay, _decode_CumulativeTransitDelay, _encode_CumulativeTransitDelay } from "../IN-SSF-SCF-datatypes/CumulativeTransitDelay.ta.mjs";
import { type EndToEndTransitDelay, _decode_EndToEndTransitDelay, _encode_EndToEndTransitDelay } from "../IN-SSF-SCF-datatypes/EndToEndTransitDelay.ta.mjs";
// export { EndToEndTransitDelay, _decode_EndToEndTransitDelay, _encode_EndToEndTransitDelay } from "../IN-SSF-SCF-datatypes/EndToEndTransitDelay.ta.mjs";
import { type MinAcceptableATMTrafficDescriptor, _decode_MinAcceptableATMTrafficDescriptor, _encode_MinAcceptableATMTrafficDescriptor } from "../IN-SSF-SCF-datatypes/MinAcceptableATMTrafficDescriptor.ta.mjs";
// export { MinAcceptableATMTrafficDescriptor, _decode_MinAcceptableATMTrafficDescriptor, _encode_MinAcceptableATMTrafficDescriptor } from "../IN-SSF-SCF-datatypes/MinAcceptableATMTrafficDescriptor.ta.mjs";


/**
 * @summary BISDNParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BISDNParameters ::= SEQUENCE {
 *   aALParameters                      [0]  AALParameters OPTIONAL,
 *   additionalATMCellRate              [1]  AdditionalATMCellRate OPTIONAL,
 *   aESACalledParty                    [2]  AESACalledParty OPTIONAL,
 *   aESACallingParty                   [3]  AESACallingParty OPTIONAL,
 *   alternativeATMTrafficDescriptor
 *     [4]  AlternativeATMTrafficDescriptor OPTIONAL,
 *   aTMCellRate                        [5]  ATMCellRate OPTIONAL,
 *   cDVTDescriptor                     [6]  CDVTDescriptor OPTIONAL,
 *   cumulativeTransitDelay             [7]  CumulativeTransitDelay OPTIONAL,
 *   endToEndTransitDelay               [8]  EndToEndTransitDelay OPTIONAL,
 *   minAcceptableATMTrafficDescriptor
 *     [9]  MinAcceptableATMTrafficDescriptor OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class BISDNParameters {
    /**
     * @summary `aALParameters`.
     * @public
     * @readonly
     */
    readonly aALParameters: OPTIONAL<AALParameters>;
    /**
     * @summary `additionalATMCellRate`.
     * @public
     * @readonly
     */
    readonly additionalATMCellRate: OPTIONAL<AdditionalATMCellRate>;
    /**
     * @summary `aESACalledParty`.
     * @public
     * @readonly
     */
    readonly aESACalledParty: OPTIONAL<AESACalledParty>;
    /**
     * @summary `aESACallingParty`.
     * @public
     * @readonly
     */
    readonly aESACallingParty: OPTIONAL<AESACallingParty>;
    /**
     * @summary `alternativeATMTrafficDescriptor`.
     * @public
     * @readonly
     */
    readonly alternativeATMTrafficDescriptor: OPTIONAL<AlternativeATMTrafficDescriptor>;
    /**
     * @summary `aTMCellRate`.
     * @public
     * @readonly
     */
    readonly aTMCellRate: OPTIONAL<ATMCellRate>;
    /**
     * @summary `cDVTDescriptor`.
     * @public
     * @readonly
     */
    readonly cDVTDescriptor: OPTIONAL<CDVTDescriptor>;
    /**
     * @summary `cumulativeTransitDelay`.
     * @public
     * @readonly
     */
    readonly cumulativeTransitDelay: OPTIONAL<CumulativeTransitDelay>;
    /**
     * @summary `endToEndTransitDelay`.
     * @public
     * @readonly
     */
    readonly endToEndTransitDelay: OPTIONAL<EndToEndTransitDelay>;
    /**
     * @summary `minAcceptableATMTrafficDescriptor`.
     * @public
     * @readonly
     */
    readonly minAcceptableATMTrafficDescriptor: OPTIONAL<MinAcceptableATMTrafficDescriptor>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aALParameters?: OPTIONAL<AALParameters>,
        additionalATMCellRate?: OPTIONAL<AdditionalATMCellRate>,
        aESACalledParty?: OPTIONAL<AESACalledParty>,
        aESACallingParty?: OPTIONAL<AESACallingParty>,
        alternativeATMTrafficDescriptor?: OPTIONAL<AlternativeATMTrafficDescriptor>,
        aTMCellRate?: OPTIONAL<ATMCellRate>,
        cDVTDescriptor?: OPTIONAL<CDVTDescriptor>,
        cumulativeTransitDelay?: OPTIONAL<CumulativeTransitDelay>,
        endToEndTransitDelay?: OPTIONAL<EndToEndTransitDelay>,
        minAcceptableATMTrafficDescriptor?: OPTIONAL<MinAcceptableATMTrafficDescriptor>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aALParameters = aALParameters;
        this.additionalATMCellRate = additionalATMCellRate;
        this.aESACalledParty = aESACalledParty;
        this.aESACallingParty = aESACallingParty;
        this.alternativeATMTrafficDescriptor = alternativeATMTrafficDescriptor;
        this.aTMCellRate = aTMCellRate;
        this.cDVTDescriptor = cDVTDescriptor;
        this.cumulativeTransitDelay = cumulativeTransitDelay;
        this.endToEndTransitDelay = endToEndTransitDelay;
        this.minAcceptableATMTrafficDescriptor = minAcceptableATMTrafficDescriptor;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a BISDNParameters
     * @description
     * 
     * This takes an `object` and converts it to a `BISDNParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BISDNParameters`.
     * @returns {BISDNParameters}
     */
    public static _from_object (_o: { [_K in keyof (BISDNParameters)]: (BISDNParameters)[_K] }): BISDNParameters {
        return new BISDNParameters(_o.aALParameters, _o.additionalATMCellRate, _o.aESACalledParty, _o.aESACallingParty, _o.alternativeATMTrafficDescriptor, _o.aTMCellRate, _o.cDVTDescriptor, _o.cumulativeTransitDelay, _o.endToEndTransitDelay, _o.minAcceptableATMTrafficDescriptor, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of BISDNParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BISDNParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("aALParameters", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("additionalATMCellRate", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aESACalledParty", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aESACallingParty", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("alternativeATMTrafficDescriptor", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aTMCellRate", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("cDVTDescriptor", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("cumulativeTransitDelay", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("endToEndTransitDelay", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("minAcceptableATMTrafficDescriptor", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of BISDNParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BISDNParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BISDNParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BISDNParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BISDNParameters: $.ASN1Decoder<BISDNParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BISDNParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BISDNParameters (el: _Element): BISDNParameters {
    if (!_cached_decoder_for_BISDNParameters) { _cached_decoder_for_BISDNParameters = function (el: _Element): BISDNParameters {
    let aALParameters: OPTIONAL<AALParameters>;
    let additionalATMCellRate: OPTIONAL<AdditionalATMCellRate>;
    let aESACalledParty: OPTIONAL<AESACalledParty>;
    let aESACallingParty: OPTIONAL<AESACallingParty>;
    let alternativeATMTrafficDescriptor: OPTIONAL<AlternativeATMTrafficDescriptor>;
    let aTMCellRate: OPTIONAL<ATMCellRate>;
    let cDVTDescriptor: OPTIONAL<CDVTDescriptor>;
    let cumulativeTransitDelay: OPTIONAL<CumulativeTransitDelay>;
    let endToEndTransitDelay: OPTIONAL<EndToEndTransitDelay>;
    let minAcceptableATMTrafficDescriptor: OPTIONAL<MinAcceptableATMTrafficDescriptor>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aALParameters": (_el: _Element): void => { aALParameters = $._decode_implicit<AALParameters>(() => _decode_AALParameters)(_el); },
        "additionalATMCellRate": (_el: _Element): void => { additionalATMCellRate = $._decode_implicit<AdditionalATMCellRate>(() => _decode_AdditionalATMCellRate)(_el); },
        "aESACalledParty": (_el: _Element): void => { aESACalledParty = $._decode_implicit<AESACalledParty>(() => _decode_AESACalledParty)(_el); },
        "aESACallingParty": (_el: _Element): void => { aESACallingParty = $._decode_implicit<AESACallingParty>(() => _decode_AESACallingParty)(_el); },
        "alternativeATMTrafficDescriptor": (_el: _Element): void => { alternativeATMTrafficDescriptor = $._decode_implicit<AlternativeATMTrafficDescriptor>(() => _decode_AlternativeATMTrafficDescriptor)(_el); },
        "aTMCellRate": (_el: _Element): void => { aTMCellRate = $._decode_implicit<ATMCellRate>(() => _decode_ATMCellRate)(_el); },
        "cDVTDescriptor": (_el: _Element): void => { cDVTDescriptor = $._decode_implicit<CDVTDescriptor>(() => _decode_CDVTDescriptor)(_el); },
        "cumulativeTransitDelay": (_el: _Element): void => { cumulativeTransitDelay = $._decode_implicit<CumulativeTransitDelay>(() => _decode_CumulativeTransitDelay)(_el); },
        "endToEndTransitDelay": (_el: _Element): void => { endToEndTransitDelay = $._decode_implicit<EndToEndTransitDelay>(() => _decode_EndToEndTransitDelay)(_el); },
        "minAcceptableATMTrafficDescriptor": (_el: _Element): void => { minAcceptableATMTrafficDescriptor = $._decode_implicit<MinAcceptableATMTrafficDescriptor>(() => _decode_MinAcceptableATMTrafficDescriptor)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BISDNParameters,
        _extension_additions_list_spec_for_BISDNParameters,
        _root_component_type_list_2_spec_for_BISDNParameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BISDNParameters(
        aALParameters,
        additionalATMCellRate,
        aESACalledParty,
        aESACallingParty,
        alternativeATMTrafficDescriptor,
        aTMCellRate,
        cDVTDescriptor,
        cumulativeTransitDelay,
        endToEndTransitDelay,
        minAcceptableATMTrafficDescriptor,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_BISDNParameters(el);
}

let _cached_encoder_for_BISDNParameters: $.ASN1Encoder<BISDNParameters> | null = null;

/**
 * @summary Encodes a(n) BISDNParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BISDNParameters, encoded as an ASN.1 Element.
 */
export
function _encode_BISDNParameters (value: BISDNParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BISDNParameters) { _cached_encoder_for_BISDNParameters = function (value: BISDNParameters, elGetter: $.ASN1Encoder<BISDNParameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.aALParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AALParameters, $.BER)(value.aALParameters, $.BER);
    }
    if (value.additionalATMCellRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AdditionalATMCellRate, $.BER)(value.additionalATMCellRate, $.BER);
    }
    if (value.aESACalledParty !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_AESACalledParty, $.BER)(value.aESACalledParty, $.BER);
    }
    if (value.aESACallingParty !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AESACallingParty, $.BER)(value.aESACallingParty, $.BER);
    }
    if (value.alternativeATMTrafficDescriptor !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_AlternativeATMTrafficDescriptor, $.BER)(value.alternativeATMTrafficDescriptor, $.BER);
    }
    if (value.aTMCellRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ATMCellRate, $.BER)(value.aTMCellRate, $.BER);
    }
    if (value.cDVTDescriptor !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_CDVTDescriptor, $.BER)(value.cDVTDescriptor, $.BER);
    }
    if (value.cumulativeTransitDelay !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_CumulativeTransitDelay, $.BER)(value.cumulativeTransitDelay, $.BER);
    }
    if (value.endToEndTransitDelay !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_EndToEndTransitDelay, $.BER)(value.endToEndTransitDelay, $.BER);
    }
    if (value.minAcceptableATMTrafficDescriptor !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_MinAcceptableATMTrafficDescriptor, $.BER)(value.minAcceptableATMTrafficDescriptor, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_BISDNParameters(value, elGetter);
}


/* eslint-enable */
