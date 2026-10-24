/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";


/**
 * @summary RecurrenceInfo
 * @description
 * 
 * Provisioned recurrence of a created or updated conference. Conditional when
 * the pattern is configured. Stage 2 says the information is absent for a
 * single instance. 3GPP TS 33.108, clause 11.5, tables 11.14 and 11.15, and
 * annex B.11.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecurrenceInfo ::= SEQUENCE
 * {
 *     recurrenceStartDateAndTime                 [1] TimeStamp OPTIONAL,
 *     recurrenceEndDateAndTime                [2] TimeStamp OPTIONAL,
 *     recurrencePattern                        [3] UTF8String OPTIONAL, -- includes a description of
 *                -- the recurrence pattern, for example, "Yearly, on Jan 23" or "Weekly, on Monday"
 *     
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class RecurrenceInfo {
    /**
     * @summary `recurrenceStartDateAndTime`.
     * @description
     * 
     * Start of the recurrence, when present. The specification does not further
     * distinguish this from the provisioned conference start time. 3GPP TS
     * 33.108, annex B.11.1.
     * 
     * @public
     * @readonly
     */
    readonly recurrenceStartDateAndTime: OPTIONAL<TimeStamp>;
    /**
     * @summary `recurrenceEndDateAndTime`.
     * @description
     * 
     * End of the recurrence, when present. The specification does not further
     * distinguish this from the provisioned conference end time. 3GPP TS
     * 33.108, annex B.11.1.
     * 
     * @public
     * @readonly
     */
    readonly recurrenceEndDateAndTime: OPTIONAL<TimeStamp>;
    /**
     * @summary `recurrencePattern`.
     * @description
     * 
     * Text of the pattern. Annex B.11.1 gives the examples "Yearly, on Jan 23"
     * and "Weekly, on Monday". No further format is defined. 3GPP TS 33.108,
     * annex B.11.1.
     * 
     * @public
     * @readonly
     */
    readonly recurrencePattern: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        recurrenceStartDateAndTime?: OPTIONAL<TimeStamp>,
        recurrenceEndDateAndTime?: OPTIONAL<TimeStamp>,
        recurrencePattern?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.recurrenceStartDateAndTime = recurrenceStartDateAndTime;
        this.recurrenceEndDateAndTime = recurrenceEndDateAndTime;
        this.recurrencePattern = recurrencePattern;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RecurrenceInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RecurrenceInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecurrenceInfo`.
     * @returns {RecurrenceInfo}
     */
    public static _from_object (_o: { [_K in keyof (RecurrenceInfo)]: (RecurrenceInfo)[_K] }): RecurrenceInfo {
        return new RecurrenceInfo(_o.recurrenceStartDateAndTime, _o.recurrenceEndDateAndTime, _o.recurrencePattern, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RecurrenceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RecurrenceInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("recurrenceStartDateAndTime", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("recurrenceEndDateAndTime", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("recurrencePattern", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RecurrenceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RecurrenceInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RecurrenceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RecurrenceInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RecurrenceInfo: $.ASN1Decoder<RecurrenceInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecurrenceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecurrenceInfo (el: _Element): RecurrenceInfo {
    if (!_cached_decoder_for_RecurrenceInfo) { _cached_decoder_for_RecurrenceInfo = function (el: _Element): RecurrenceInfo {
    let recurrenceStartDateAndTime: OPTIONAL<TimeStamp>;
    let recurrenceEndDateAndTime: OPTIONAL<TimeStamp>;
    let recurrencePattern: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "recurrenceStartDateAndTime": (_el: _Element): void => { recurrenceStartDateAndTime = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "recurrenceEndDateAndTime": (_el: _Element): void => { recurrenceEndDateAndTime = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "recurrencePattern": (_el: _Element): void => { recurrencePattern = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RecurrenceInfo,
        _extension_additions_list_spec_for_RecurrenceInfo,
        _root_component_type_list_2_spec_for_RecurrenceInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RecurrenceInfo(
        recurrenceStartDateAndTime,
        recurrenceEndDateAndTime,
        recurrencePattern,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RecurrenceInfo(el);
}

let _cached_encoder_for_RecurrenceInfo: $.ASN1Encoder<RecurrenceInfo> | null = null;

/**
 * @summary Encodes a(n) RecurrenceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecurrenceInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RecurrenceInfo (value: RecurrenceInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecurrenceInfo) { _cached_encoder_for_RecurrenceInfo = function (value: RecurrenceInfo, elGetter: $.ASN1Encoder<RecurrenceInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.recurrenceStartDateAndTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_TimeStamp, $.BER)(value.recurrenceStartDateAndTime, $.BER);
    }
    if (value.recurrenceEndDateAndTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_TimeStamp, $.BER)(value.recurrenceEndDateAndTime, $.BER);
    }
    if (value.recurrencePattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.recurrencePattern, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RecurrenceInfo(value, elGetter);
}


/* eslint-enable */
