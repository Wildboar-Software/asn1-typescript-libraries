/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TimestampMapping, _decode_TimestampMapping, _encode_TimestampMapping } from "../ILHIPDU/TimestampMapping.ta.mjs";
// export { TimestampMapping, _decode_TimestampMapping, _encode_TimestampMapping } from "../ILHIPDU/TimestampMapping.ta.mjs";
import { LocationMapping, _decode_LocationMapping, _encode_LocationMapping } from "../ILHIPDU/LocationMapping.ta.mjs";
// export { LocationMapping, _decode_LocationMapping, _encode_LocationMapping } from "../ILHIPDU/LocationMapping.ta.mjs";


/**
 * @summary MappingInfo
 * @description
 *
 * Output of the mapping function. The function maps each element of one set
 * to a distinct element of another and passes this result to the
 * encapsulation function without undue delay. Timestamps and location coded
 * as geographical coordinates are the parameters V1.1.1 defines as mappable.
 * Postal-address location is for further study.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), clause 3.1, clause 7.3.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MappingInfo ::= SEQUENCE
 * {
 *     timestampMapping        [0] SEQUENCE OF TimestampMapping OPTIONAL,
 *     locationMapping            [1] SEQUENCE OF LocationMapping    type OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MappingInfo {
    /**
     * @summary `timestampMapping`.
     * @description
     *
     * One entry for each timestamp the mapping function rewrote. More than
     * one timestamp may be mapped. The mapping can be unique only when every
     * original timestamp is unique within `originalPayload`.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.3.2.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly timestampMapping: OPTIONAL<TimestampMapping[]>;
    /**
     * @summary `locationMapping`.
     * @description
     *
     * One entry for each location the mapping function rewrote. Used when
     * the original location is coded as geographical coordinates.
     * Postal-address location is for further study and is not mapped here.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), clause 7.3.3.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly locationMapping: OPTIONAL<LocationMapping[]>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this decoder did not recognize. V1.1.1 marks the
     * type extensible and does not say how a receiver treats unrecognized
     * additions.
     *
     * ETSI TS 103 462 V1.1.1 (2018-07), annex B.
     * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        timestampMapping?: OPTIONAL<TimestampMapping[]>,
        locationMapping?: OPTIONAL<LocationMapping[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.timestampMapping = timestampMapping;
        this.locationMapping = locationMapping;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MappingInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MappingInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MappingInfo`.
     * @returns {MappingInfo}
     */
    public static _from_object (_o: { [_K in keyof (MappingInfo)]: (MappingInfo)[_K] }): MappingInfo {
        return new MappingInfo(_o.timestampMapping, _o.locationMapping, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MappingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MappingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("timestampMapping", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("locationMapping", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MappingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MappingInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MappingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MappingInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MappingInfo: $.ASN1Decoder<MappingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MappingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MappingInfo (el: _Element): MappingInfo {
    if (!_cached_decoder_for_MappingInfo) { _cached_decoder_for_MappingInfo = function (el: _Element): MappingInfo {
    let timestampMapping: OPTIONAL<TimestampMapping[]>;
    let locationMapping: OPTIONAL<LocationMapping[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "timestampMapping": (_el: _Element): void => { timestampMapping = $._decode_implicit<TimestampMapping[]>(() => $._decodeSequenceOf<TimestampMapping>(() => _decode_TimestampMapping))(_el); },
        "locationMapping": (_el: _Element): void => { locationMapping = $._decode_implicit<LocationMapping[]>(() => $._decodeSequenceOf<LocationMapping>(() => _decode_LocationMapping))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MappingInfo,
        _extension_additions_list_spec_for_MappingInfo,
        _root_component_type_list_2_spec_for_MappingInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MappingInfo(
        timestampMapping,
        locationMapping,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MappingInfo(el);
}

let _cached_encoder_for_MappingInfo: $.ASN1Encoder<MappingInfo> | null = null;

/**
 * @summary Encodes a(n) MappingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MappingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MappingInfo (value: MappingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MappingInfo) { _cached_encoder_for_MappingInfo = function (value: MappingInfo, elGetter: $.ASN1Encoder<MappingInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.timestampMapping !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<TimestampMapping>(() => _encode_TimestampMapping, $.BER), $.BER)(value.timestampMapping, $.BER);
    }
    if (value.locationMapping !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<LocationMapping>(() => _encode_LocationMapping, $.BER), $.BER)(value.locationMapping, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MappingInfo(value, elGetter);
}


/* eslint-enable */
