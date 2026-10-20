/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ShadowProblem, _decode_ShadowProblem, _encode_ShadowProblem } from "../DirectoryShadowAbstractService/ShadowProblem.ta.mjs";
// export { ShadowProblem, ShadowProblem_invalidAgreementID /* IMPORTED_LONG_NAMED_INTEGER */, invalidAgreementID /* IMPORTED_SHORT_NAMED_INTEGER */, ShadowProblem_inactiveAgreement /* IMPORTED_LONG_NAMED_INTEGER */, inactiveAgreement /* IMPORTED_SHORT_NAMED_INTEGER */, ShadowProblem_invalidInformationReceived /* IMPORTED_LONG_NAMED_INTEGER */, invalidInformationReceived /* IMPORTED_SHORT_NAMED_INTEGER */, ShadowProblem_unsupportedStrategy /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedStrategy /* IMPORTED_SHORT_NAMED_INTEGER */, ShadowProblem_missedPrevious /* IMPORTED_LONG_NAMED_INTEGER */, missedPrevious /* IMPORTED_SHORT_NAMED_INTEGER */, ShadowProblem_fullUpdateRequired /* IMPORTED_LONG_NAMED_INTEGER */, fullUpdateRequired /* IMPORTED_SHORT_NAMED_INTEGER */, ShadowProblem_unwillingToPerform /* IMPORTED_LONG_NAMED_INTEGER */, unwillingToPerform /* IMPORTED_SHORT_NAMED_INTEGER */, ShadowProblem_unsuitableTiming /* IMPORTED_LONG_NAMED_INTEGER */, unsuitableTiming /* IMPORTED_SHORT_NAMED_INTEGER */, ShadowProblem_updateAlreadyReceived /* IMPORTED_LONG_NAMED_INTEGER */, updateAlreadyReceived /* IMPORTED_SHORT_NAMED_INTEGER */, ShadowProblem_invalidSequencing /* IMPORTED_LONG_NAMED_INTEGER */, invalidSequencing /* IMPORTED_SHORT_NAMED_INTEGER */, ShadowProblem_insufficientResources /* IMPORTED_LONG_NAMED_INTEGER */, insufficientResources /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ShadowProblem, _encode_ShadowProblem } from "../DirectoryShadowAbstractService/ShadowProblem.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../DirectoryShadowAbstractService/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../DirectoryShadowAbstractService/Time.ta.mjs";
import { UpdateWindow, _decode_UpdateWindow, _encode_UpdateWindow } from "../DirectoryShadowAbstractService/UpdateWindow.ta.mjs";
// export { UpdateWindow, _decode_UpdateWindow, _encode_UpdateWindow } from "../DirectoryShadowAbstractService/UpdateWindow.ta.mjs";


/**
 * @summary shadowError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shadowError-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class shadowError_ParameterType {
    /**
     * @summary `problem`.
     * @public
     * @readonly
     */
    readonly problem: ShadowProblem;
    /**
     * @summary `lastUpdate`.
     * @public
     * @readonly
     */
    readonly lastUpdate: OPTIONAL<Time>;
    /**
     * @summary `updateWindow`.
     * @public
     * @readonly
     */
    readonly updateWindow: OPTIONAL<UpdateWindow>;

    constructor (
        problem: ShadowProblem,
        lastUpdate: OPTIONAL<Time>,
        updateWindow: OPTIONAL<UpdateWindow>
    ) {
        this.problem = problem;
        this.lastUpdate = lastUpdate;
        this.updateWindow = updateWindow;
    }

    /**
     * @summary Restructures an object into a shadowError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `shadowError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `shadowError_ParameterType`.
     * @returns {shadowError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (shadowError_ParameterType)]: (shadowError_ParameterType)[_K] }): shadowError_ParameterType {
        return new shadowError_ParameterType(_o.problem, _o.lastUpdate, _o.updateWindow);
    }


}

/**
 * @summary The Leading Root Component Types of shadowError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_shadowError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("lastUpdate", true, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("updateWindow", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of shadowError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_shadowError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of shadowError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_shadowError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_shadowError_ParameterType: $.ASN1Decoder<shadowError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) shadowError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_shadowError_ParameterType (el: _Element): shadowError_ParameterType {
    if (!_cached_decoder_for_shadowError_ParameterType) { _cached_decoder_for_shadowError_ParameterType = function (el: _Element): shadowError_ParameterType {
    let problem!: ShadowProblem;
    let lastUpdate: OPTIONAL<Time>;
    let updateWindow: OPTIONAL<UpdateWindow>;
    const callbacks: $.DecodingMap = {
        "problem": (_el: _Element): void => { problem = _decode_ShadowProblem(_el); },
        "lastUpdate": (_el: _Element): void => { lastUpdate = _decode_Time(_el); },
        "updateWindow": (_el: _Element): void => { updateWindow = _decode_UpdateWindow(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_shadowError_ParameterType,
        _extension_additions_list_spec_for_shadowError_ParameterType,
        _root_component_type_list_2_spec_for_shadowError_ParameterType,
        undefined,
    );
    return new shadowError_ParameterType(
        problem,
        lastUpdate,
        updateWindow
    );
}; }
    return _cached_decoder_for_shadowError_ParameterType(el);
}

let _cached_encoder_for_shadowError_ParameterType: $.ASN1Encoder<shadowError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) shadowError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The shadowError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_shadowError_ParameterType (value: shadowError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_shadowError_ParameterType) { _cached_encoder_for_shadowError_ParameterType = function (value: shadowError_ParameterType, elGetter: $.ASN1Encoder<shadowError_ParameterType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ShadowProblem(value.problem, $.BER));
    if (value.lastUpdate !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Time(value.lastUpdate, $.BER));
    }
    if (value.updateWindow !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_UpdateWindow(value.updateWindow, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_shadowError_ParameterType(value, elGetter);
}


/* eslint-enable */
