/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OriginalTimestamp, _decode_OriginalTimestamp, _encode_OriginalTimestamp } from "../ILHIPDU/OriginalTimestamp.ta.mjs";
// export { OriginalTimestamp, _decode_OriginalTimestamp, _encode_OriginalTimestamp } from "../ILHIPDU/OriginalTimestamp.ta.mjs";
import { ILHITimestamp, _decode_ILHITimestamp, _encode_ILHITimestamp } from "../ILHIPDU/ILHITimestamp.ta.mjs";
// export { ILHITimestamp, _decode_ILHITimestamp, _encode_ILHITimestamp } from "../ILHIPDU/ILHITimestamp.ta.mjs";
import { _enum_for_TimeStampQualifier } from "../LI-PS-PDU/TimeStampQualifier.ta.mjs";
// export { TimeStampQualifier, _enum_for_TimeStampQualifier, TimeStampQualifier_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfInterception /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfInterception /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfMediation /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfMediation /* IMPORTED_SHORT_ENUMERATION_ITEM */, TimeStampQualifier_timeOfAggregation /* IMPORTED_LONG_ENUMERATION_ITEM */, timeOfAggregation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TimeStampQualifier, _encode_TimeStampQualifier } from "../LI-PS-PDU/TimeStampQualifier.ta.mjs";


/**
 * @summary TimestampMapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimestampMapping ::= SEQUENCE
 * {
 *     originalTimestamp        [0] OriginalTimestamp,
 *     normalizedTimestamp        [1] ILHITimestamp,
 *     timeStampQualifier        [2] LI-PS-PDU.TimeStampQualifier OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class TimestampMapping {
    /**
     * @summary `originalTimestamp`.
     * @public
     * @readonly
     */
    readonly originalTimestamp: OriginalTimestamp;
    /**
     * @summary `normalizedTimestamp`.
     * @public
     * @readonly
     */
    readonly normalizedTimestamp: ILHITimestamp;
    /**
     * @summary `timeStampQualifier`.
     * @public
     * @readonly
     */
    readonly timeStampQualifier: OPTIONAL<LI_PS_PDU.TimeStampQualifier>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        originalTimestamp: OriginalTimestamp,
        normalizedTimestamp: ILHITimestamp,
        timeStampQualifier: OPTIONAL<LI_PS_PDU.TimeStampQualifier>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.originalTimestamp = originalTimestamp;
        this.normalizedTimestamp = normalizedTimestamp;
        this.timeStampQualifier = timeStampQualifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TimestampMapping
     * @description
     * 
     * This takes an `object` and converts it to a `TimestampMapping`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimestampMapping`.
     * @returns {TimestampMapping}
     */
    public static _from_object (_o: { [_K in keyof (TimestampMapping)]: (TimestampMapping)[_K] }): TimestampMapping {
        return new TimestampMapping(_o.originalTimestamp, _o.normalizedTimestamp, _o.timeStampQualifier, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `timeStampQualifier`
         * @public
         * @static
         */

    public static _enum_for_timeStampQualifier = _enum_for_TimeStampQualifier;
}

/**
 * @summary The Leading Root Component Types of TimestampMapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TimestampMapping: $.ComponentSpec[] = [
    new $.ComponentSpec("originalTimestamp", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("normalizedTimestamp", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStampQualifier", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TimestampMapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TimestampMapping: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TimestampMapping
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TimestampMapping: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TimestampMapping: $.ASN1Decoder<TimestampMapping> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimestampMapping
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimestampMapping (el: _Element): TimestampMapping {
    if (!_cached_decoder_for_TimestampMapping) { _cached_decoder_for_TimestampMapping = function (el: _Element): TimestampMapping {
    let originalTimestamp!: OriginalTimestamp;
    let normalizedTimestamp!: ILHITimestamp;
    let timeStampQualifier: OPTIONAL<LI_PS_PDU.TimeStampQualifier>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "originalTimestamp": (_el: _Element): void => { originalTimestamp = $._decode_explicit<OriginalTimestamp>(() => _decode_OriginalTimestamp)(_el); },
        "normalizedTimestamp": (_el: _Element): void => { normalizedTimestamp = $._decode_explicit<ILHITimestamp>(() => _decode_ILHITimestamp)(_el); },
        "timeStampQualifier": (_el: _Element): void => { timeStampQualifier = $._decode_implicit<LI_PS_PDU.TimeStampQualifier>(() => LI_PS_PDU._decode_TimeStampQualifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TimestampMapping,
        _extension_additions_list_spec_for_TimestampMapping,
        _root_component_type_list_2_spec_for_TimestampMapping,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TimestampMapping(
        originalTimestamp,
        normalizedTimestamp,
        timeStampQualifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TimestampMapping(el);
}

let _cached_encoder_for_TimestampMapping: $.ASN1Encoder<TimestampMapping> | null = null;

/**
 * @summary Encodes a(n) TimestampMapping into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimestampMapping, encoded as an ASN.1 Element.
 */
export
function _encode_TimestampMapping (value: TimestampMapping, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimestampMapping) { _cached_encoder_for_TimestampMapping = function (value: TimestampMapping, elGetter: $.ASN1Encoder<TimestampMapping>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_OriginalTimestamp, $.BER)(value.originalTimestamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ILHITimestamp, $.BER)(value.normalizedTimestamp, $.BER);
    if (value.timeStampQualifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => LI_PS_PDU._encode_TimeStampQualifier, $.BER)(value.timeStampQualifier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TimestampMapping(value, elGetter);
}


/* eslint-enable */
