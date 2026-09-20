/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ParameterValues_terminationLength_eventId, _decode_ParameterValues_terminationLength_eventId, _encode_ParameterValues_terminationLength_eventId } from "../DEV/ParameterValues-terminationLength-eventId.ta.mjs";


/**
 * @summary ParameterValues_terminationLength
 * @description
 *
 * Agreed `<length, eventId>`: terminate after this many array-element
 * updates if no event fired first. ISO/IEC 9040:1997 §23.4 table 14.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-terminationLength ::= SEQUENCE {
 *     length [0] IMPLICIT INTEGER OPTIONAL,
 *     eventId CHOICE {
 *         integer [1] IMPLICIT INTEGER,
 *         nul     [2] IMPLICIT NULL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ParameterValues_terminationLength {
    constructor (
        /**
         * @summary `length`.
         * @description
         * Number of array-element updates after which to terminate if
         * no event fired first. ISO/IEC 9040:1997 §23.4 table 14.
         * @public
         * @readonly
         */
        readonly length: OPTIONAL<INTEGER>,
        /**
         * @summary `eventId`.
         * @description
         * Agreed event-id: non-zero positive integer or `"null"`.
         * ISO/IEC 9040:1997 §23.4.
         * @public
         * @readonly
         */
        readonly eventId: ParameterValues_terminationLength_eventId
    ) {}

    /**
     * @summary Restructures an object into a ParameterValues_terminationLength
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterValues_terminationLength`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterValues_terminationLength`.
     * @returns {ParameterValues_terminationLength}
     */
    public static _from_object (_o: { [_K in keyof (ParameterValues_terminationLength)]: (ParameterValues_terminationLength)[_K] }): ParameterValues_terminationLength {
        return new ParameterValues_terminationLength(_o.length, _o.eventId);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterValues_terminationLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterValues_terminationLength: $.ComponentSpec[] = [
    new $.ComponentSpec("length", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventId", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ParameterValues_terminationLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterValues_terminationLength: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterValues_terminationLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterValues_terminationLength: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterValues_terminationLength: $.ASN1Decoder<ParameterValues_terminationLength> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_terminationLength
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_terminationLength (el: _Element): ParameterValues_terminationLength {
    if (!_cached_decoder_for_ParameterValues_terminationLength) { _cached_decoder_for_ParameterValues_terminationLength = function (el: _Element): ParameterValues_terminationLength {
    let length: OPTIONAL<INTEGER>;
    let eventId!: ParameterValues_terminationLength_eventId;
    const callbacks: $.DecodingMap = {
        "length": (_el: _Element): void => { length = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "eventId": (_el: _Element): void => { eventId = _decode_ParameterValues_terminationLength_eventId(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterValues_terminationLength,
        _extension_additions_list_spec_for_ParameterValues_terminationLength,
        _root_component_type_list_2_spec_for_ParameterValues_terminationLength,
        undefined,
    );
    return new ParameterValues_terminationLength(
        length,
        eventId
    );
}; }
    return _cached_decoder_for_ParameterValues_terminationLength(el);
}

let _cached_encoder_for_ParameterValues_terminationLength: $.ASN1Encoder<ParameterValues_terminationLength> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_terminationLength into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_terminationLength, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_terminationLength (value: ParameterValues_terminationLength, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_terminationLength) { _cached_encoder_for_ParameterValues_terminationLength = function (value: ParameterValues_terminationLength): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.length === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.length, $.BER)),
            /* REQUIRED   */ _encode_ParameterValues_terminationLength_eventId(value.eventId, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterValues_terminationLength(value, elGetter);
}


/* eslint-enable */
