/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { UnitType, _decode_UnitType, _encode_UnitType } from "../RecordSyntax-explain/UnitType.ta.mjs";
// export { UnitType, _decode_UnitType, _encode_UnitType } from "../RecordSyntax-explain/UnitType.ta.mjs";


/**
 * @summary UnitInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnitInfo ::= SEQUENCE {
 *     commonInfo  [0] IMPLICIT CommonInfo OPTIONAL,
 *     -- Key elements follow:
 *     unitSystem  [1] IMPLICIT InternationalString OPTIONAL,
 *     -- Changed to OPTIONAL in 2001 version as result of defect report
 *     -- No non-key brief elements
 *     -- Non-brief elements follow:
 *     description [2] IMPLICIT HumanString OPTIONAL,
 *     units       [3] IMPLICIT SEQUENCE OF UnitType OPTIONAL
 *     -- Mandatory in full record
 * }
 * ```
 * 
 * @class
 */
export
class UnitInfo {
    /**
     * @summary `commonInfo`.
     * @public
     * @readonly
     */
    readonly commonInfo: OPTIONAL<CommonInfo>;
    /**
     * @summary `unitSystem`.
     * @public
     * @readonly
     */
    readonly unitSystem: OPTIONAL<InternationalString>;
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;
    /**
     * @summary `units`.
     * @public
     * @readonly
     */
    readonly units: OPTIONAL<UnitType[]>;

    constructor (
        commonInfo: OPTIONAL<CommonInfo>,
        unitSystem: OPTIONAL<InternationalString>,
        description: OPTIONAL<HumanString>,
        units: OPTIONAL<UnitType[]>
    ) {
        this.commonInfo = commonInfo;
        this.unitSystem = unitSystem;
        this.description = description;
        this.units = units;
    }

    /**
     * @summary Restructures an object into a UnitInfo
     * @description
     * 
     * This takes an `object` and converts it to a `UnitInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnitInfo`.
     * @returns {UnitInfo}
     */
    public static _from_object (_o: { [_K in keyof (UnitInfo)]: (UnitInfo)[_K] }): UnitInfo {
        return new UnitInfo(_o.commonInfo, _o.unitSystem, _o.description, _o.units);
    }


}

/**
 * @summary The Leading Root Component Types of UnitInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UnitInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("unitSystem", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("units", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UnitInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UnitInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UnitInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UnitInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UnitInfo: $.ASN1Decoder<UnitInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnitInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnitInfo (el: _Element): UnitInfo {
    if (!_cached_decoder_for_UnitInfo) { _cached_decoder_for_UnitInfo = function (el: _Element): UnitInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let unitSystem: OPTIONAL<InternationalString>;
    let description: OPTIONAL<HumanString>;
    let units: OPTIONAL<UnitType[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "unitSystem": (_el: _Element): void => { unitSystem = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "units": (_el: _Element): void => { units = $._decode_implicit<UnitType[]>(() => $._decodeSequenceOf<UnitType>(() => _decode_UnitType))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UnitInfo,
        _extension_additions_list_spec_for_UnitInfo,
        _root_component_type_list_2_spec_for_UnitInfo,
        undefined,
    );
    return new UnitInfo(
        commonInfo,
        unitSystem,
        description,
        units
    );
}; }
    return _cached_decoder_for_UnitInfo(el);
}

let _cached_encoder_for_UnitInfo: $.ASN1Encoder<UnitInfo> | null = null;

/**
 * @summary Encodes a(n) UnitInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitInfo, encoded as an ASN.1 Element.
 */
export
function _encode_UnitInfo (value: UnitInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnitInfo) { _cached_encoder_for_UnitInfo = function (value: UnitInfo, elGetter: $.ASN1Encoder<UnitInfo>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.commonInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER);
    }
    if (value.unitSystem !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.unitSystem, $.BER);
    }
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    if (value.units !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<UnitType>(() => _encode_UnitType, $.BER), $.BER)(value.units, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UnitInfo(value, elGetter);
}


/* eslint-enable */
