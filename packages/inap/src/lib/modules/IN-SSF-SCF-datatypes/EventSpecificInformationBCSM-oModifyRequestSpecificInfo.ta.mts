/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATMCellRate, _decode_ATMCellRate, _encode_ATMCellRate } from "../IN-SSF-SCF-datatypes/ATMCellRate.ta.mjs";
// export { ATMCellRate, _decode_ATMCellRate, _encode_ATMCellRate } from "../IN-SSF-SCF-datatypes/ATMCellRate.ta.mjs";
import { type AdditionalATMCellRate, _decode_AdditionalATMCellRate, _encode_AdditionalATMCellRate } from "../IN-SSF-SCF-datatypes/AdditionalATMCellRate.ta.mjs";
// export { AdditionalATMCellRate, _decode_AdditionalATMCellRate, _encode_AdditionalATMCellRate } from "../IN-SSF-SCF-datatypes/AdditionalATMCellRate.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_oModifyRequestSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oModifyRequestSpecificInfo ::=
 * SEQUENCE {
 *   aTMCellRate [0] ATMCellRate OPTIONAL,
 *   additionalATMCellRate [1] AdditionalATMCellRate OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oModifyRequestSpecificInfo {
    /**
     * @summary `aTMCellRate`.
     * @public
     * @readonly
     */
    readonly aTMCellRate: OPTIONAL<ATMCellRate>;
    /**
     * @summary `additionalATMCellRate`.
     * @public
     * @readonly
     */
    readonly additionalATMCellRate: OPTIONAL<AdditionalATMCellRate>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aTMCellRate?: OPTIONAL<ATMCellRate>,
        additionalATMCellRate?: OPTIONAL<AdditionalATMCellRate>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aTMCellRate = aTMCellRate;
        this.additionalATMCellRate = additionalATMCellRate;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oModifyRequestSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oModifyRequestSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oModifyRequestSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_oModifyRequestSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oModifyRequestSpecificInfo)]: (EventSpecificInformationBCSM_oModifyRequestSpecificInfo)[_K] }): EventSpecificInformationBCSM_oModifyRequestSpecificInfo {
        return new EventSpecificInformationBCSM_oModifyRequestSpecificInfo(_o.aTMCellRate, _o.additionalATMCellRate, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oModifyRequestSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("aTMCellRate", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("additionalATMCellRate", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oModifyRequestSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oModifyRequestSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oModifyRequestSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oModifyRequestSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oModifyRequestSpecificInfo (el: _Element): EventSpecificInformationBCSM_oModifyRequestSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oModifyRequestSpecificInfo {
    let aTMCellRate: OPTIONAL<ATMCellRate>;
    let additionalATMCellRate: OPTIONAL<AdditionalATMCellRate>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aTMCellRate": (_el: _Element): void => { aTMCellRate = $._decode_implicit<ATMCellRate>(() => _decode_ATMCellRate)(_el); },
        "additionalATMCellRate": (_el: _Element): void => { additionalATMCellRate = $._decode_implicit<AdditionalATMCellRate>(() => _decode_AdditionalATMCellRate)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oModifyRequestSpecificInfo(
        aTMCellRate,
        additionalATMCellRate,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oModifyRequestSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oModifyRequestSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oModifyRequestSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oModifyRequestSpecificInfo (value: EventSpecificInformationBCSM_oModifyRequestSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo = function (value: EventSpecificInformationBCSM_oModifyRequestSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oModifyRequestSpecificInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.aTMCellRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ATMCellRate, $.BER)(value.aTMCellRate, $.BER);
    }
    if (value.additionalATMCellRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AdditionalATMCellRate, $.BER)(value.additionalATMCellRate, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oModifyRequestSpecificInfo(value, elGetter);
}


/* eslint-enable */
