/* eslint-disable */
import {
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectOfReference,
    _decode_ObjectOfReference,
    _encode_ObjectOfReference,
} from "../Q821-ASN1Module/ObjectOfReference.ta.mjs";

import {
    AlarmSummaryInfo,
    _decode_AlarmSummaryInfo,
    _encode_AlarmSummaryInfo,
} from "../Q821-ASN1Module/AlarmSummaryInfo.ta.mjs";



/**
 * @summary ObjectAlarmSummary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectAlarmSummary ::= SEQUENCE {
 *   objectOfReference  ObjectOfReference,
 *   summaryInfo        SEQUENCE OF AlarmSummaryInfo
 * }
 * ```
 * 
 * @class
 */
export
class ObjectAlarmSummary {
    constructor (
        /**
         * @summary `objectOfReference`.
         * @public
         * @readonly
         */
        readonly objectOfReference: ObjectOfReference,
        /**
         * @summary `summaryInfo`.
         * @public
         * @readonly
         */
        readonly summaryInfo: AlarmSummaryInfo[]
    ) {}

    /**
     * @summary Restructures an object into a ObjectAlarmSummary
     * @description
     * 
     * This takes an `object` and converts it to a `ObjectAlarmSummary`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectAlarmSummary`.
     * @returns {ObjectAlarmSummary}
     */
    public static _from_object (_o: { [_K in keyof (ObjectAlarmSummary)]: (ObjectAlarmSummary)[_K] }): ObjectAlarmSummary {
        return new ObjectAlarmSummary(_o.objectOfReference, _o.summaryInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ObjectAlarmSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ObjectAlarmSummary: $.ComponentSpec[] = [
    new $.ComponentSpec("objectOfReference", false, $.hasAnyTag),
    new $.ComponentSpec("summaryInfo", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ObjectAlarmSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ObjectAlarmSummary: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ObjectAlarmSummary
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ObjectAlarmSummary: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ObjectAlarmSummary: $.ASN1Decoder<ObjectAlarmSummary> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectAlarmSummary
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectAlarmSummary (el: _Element): ObjectAlarmSummary {
    if (!_cached_decoder_for_ObjectAlarmSummary) { _cached_decoder_for_ObjectAlarmSummary = function (el: _Element): ObjectAlarmSummary {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ObjectAlarmSummary contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "objectOfReference";
    sequence[1].name = "summaryInfo";
    let objectOfReference!: ObjectOfReference;
    let summaryInfo!: AlarmSummaryInfo[];
    objectOfReference = _decode_ObjectOfReference(sequence[0]);
    summaryInfo = $._decodeSequenceOf<AlarmSummaryInfo>(() => _decode_AlarmSummaryInfo)(sequence[1]);
    return new ObjectAlarmSummary(
        objectOfReference,
        summaryInfo,

    );
}; }
    return _cached_decoder_for_ObjectAlarmSummary(el);
}

let _cached_encoder_for_ObjectAlarmSummary: $.ASN1Encoder<ObjectAlarmSummary> | null = null;

/**
 * @summary Encodes a(n) ObjectAlarmSummary into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectAlarmSummary, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectAlarmSummary (value: ObjectAlarmSummary, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectAlarmSummary) { _cached_encoder_for_ObjectAlarmSummary = function (value: ObjectAlarmSummary, elGetter: $.ASN1Encoder<ObjectAlarmSummary>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObjectOfReference(value.objectOfReference, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<AlarmSummaryInfo>(() => _encode_AlarmSummaryInfo, $.BER)(value.summaryInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ObjectAlarmSummary(value, elGetter);
}


/* eslint-enable */
