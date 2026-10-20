/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ModifyResultType, _decode_ModifyResultType, _encode_ModifyResultType, _enum_for_ModifyResultType, modifyAcknowledge /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../IN-SSF-SCF-datatypes/ModifyResultType.ta.mjs";
// export { ModifyResultType, _enum_for_ModifyResultType, ModifyResultType_modifyAcknowledge /* IMPORTED_LONG_ENUMERATION_ITEM */, modifyAcknowledge /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModifyResultType_modifyReject /* IMPORTED_LONG_ENUMERATION_ITEM */, modifyReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModifyResultType, _encode_ModifyResultType } from "../IN-SSF-SCF-datatypes/ModifyResultType.ta.mjs";
import { ATMCellRate, _decode_ATMCellRate, _encode_ATMCellRate } from "../IN-SSF-SCF-datatypes/ATMCellRate.ta.mjs";
// export { ATMCellRate, _decode_ATMCellRate, _encode_ATMCellRate } from "../IN-SSF-SCF-datatypes/ATMCellRate.ta.mjs";
import { AdditionalATMCellRate, _decode_AdditionalATMCellRate, _encode_AdditionalATMCellRate } from "../IN-SSF-SCF-datatypes/AdditionalATMCellRate.ta.mjs";
// export { AdditionalATMCellRate, _decode_AdditionalATMCellRate, _encode_AdditionalATMCellRate } from "../IN-SSF-SCF-datatypes/AdditionalATMCellRate.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_oModifyResultSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oModifyResultSpecificInfo ::=
 * SEQUENCE {
 *   modifyResultType [0] ModifyResultType DEFAULT modifyAcknowledge,
 *   aTMCellRate [1] ATMCellRate OPTIONAL,
 *   additionalATMCellRate [2] AdditionalATMCellRate OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oModifyResultSpecificInfo {
    /**
     * @summary `modifyResultType`.
     * @public
     * @readonly
     */
    readonly modifyResultType: OPTIONAL<ModifyResultType>;
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
        modifyResultType: OPTIONAL<ModifyResultType>,
        aTMCellRate: OPTIONAL<ATMCellRate>,
        additionalATMCellRate: OPTIONAL<AdditionalATMCellRate>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.modifyResultType = modifyResultType;
        this.aTMCellRate = aTMCellRate;
        this.additionalATMCellRate = additionalATMCellRate;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oModifyResultSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oModifyResultSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oModifyResultSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_oModifyResultSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oModifyResultSpecificInfo)]: (EventSpecificInformationBCSM_oModifyResultSpecificInfo)[_K] }): EventSpecificInformationBCSM_oModifyResultSpecificInfo {
        return new EventSpecificInformationBCSM_oModifyResultSpecificInfo(_o.modifyResultType, _o.aTMCellRate, _o.additionalATMCellRate, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `modifyResultType`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_modifyResultType () { return modifyAcknowledge; }        /**
         * @summary The enum used as the type of the component `modifyResultType`
         * @public
         * @static
         */

    public static _enum_for_modifyResultType = _enum_for_ModifyResultType;
}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oModifyResultSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("modifyResultType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("aTMCellRate", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("additionalATMCellRate", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oModifyResultSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oModifyResultSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oModifyResultSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oModifyResultSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oModifyResultSpecificInfo (el: _Element): EventSpecificInformationBCSM_oModifyResultSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oModifyResultSpecificInfo {
    let modifyResultType: OPTIONAL<ModifyResultType> = EventSpecificInformationBCSM_oModifyResultSpecificInfo._default_value_for_modifyResultType;
    let aTMCellRate: OPTIONAL<ATMCellRate>;
    let additionalATMCellRate: OPTIONAL<AdditionalATMCellRate>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "modifyResultType": (_el: _Element): void => { modifyResultType = $._decode_implicit<ModifyResultType>(() => _decode_ModifyResultType)(_el); },
        "aTMCellRate": (_el: _Element): void => { aTMCellRate = $._decode_implicit<ATMCellRate>(() => _decode_ATMCellRate)(_el); },
        "additionalATMCellRate": (_el: _Element): void => { additionalATMCellRate = $._decode_implicit<AdditionalATMCellRate>(() => _decode_AdditionalATMCellRate)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oModifyResultSpecificInfo(
        modifyResultType,
        aTMCellRate,
        additionalATMCellRate,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oModifyResultSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oModifyResultSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oModifyResultSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oModifyResultSpecificInfo (value: EventSpecificInformationBCSM_oModifyResultSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo = function (value: EventSpecificInformationBCSM_oModifyResultSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oModifyResultSpecificInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.modifyResultType !== undefined && !$.deepEq(value.modifyResultType, EventSpecificInformationBCSM_oModifyResultSpecificInfo._default_value_for_modifyResultType)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => _encode_ModifyResultType, $.BER)(value.modifyResultType, $.BER);
    }
    if (value.aTMCellRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ATMCellRate, $.BER)(value.aTMCellRate, $.BER);
    }
    if (value.additionalATMCellRate !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_AdditionalATMCellRate, $.BER)(value.additionalATMCellRate, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oModifyResultSpecificInfo(value, elGetter);
}


/* eslint-enable */
