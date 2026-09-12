/* eslint-disable */
import {
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
import { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";
// export { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";


/**
 * @summary GetAlarmEnrollmentSummary_Request_severityFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAlarmEnrollmentSummary-Request-severityFilter ::= SEQUENCE {
 *     mostSevere [0] IMPLICIT Unsigned8,
 *     leastSevere [1] IMPLICIT Unsigned8
 * }
 * ```
 * 
 * @class
 */
export
class GetAlarmEnrollmentSummary_Request_severityFilter {
    constructor (
        /**
         * @summary `mostSevere`.
         * @public
         * @readonly
         */
        readonly mostSevere: Unsigned8,
        /**
         * @summary `leastSevere`.
         * @public
         * @readonly
         */
        readonly leastSevere: Unsigned8
    ) {}

    /**
     * @summary Restructures an object into a GetAlarmEnrollmentSummary_Request_severityFilter
     * @description
     * 
     * This takes an `object` and converts it to a `GetAlarmEnrollmentSummary_Request_severityFilter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAlarmEnrollmentSummary_Request_severityFilter`.
     * @returns {GetAlarmEnrollmentSummary_Request_severityFilter}
     */
    public static _from_object (_o: { [_K in keyof (GetAlarmEnrollmentSummary_Request_severityFilter)]: (GetAlarmEnrollmentSummary_Request_severityFilter)[_K] }): GetAlarmEnrollmentSummary_Request_severityFilter {
        return new GetAlarmEnrollmentSummary_Request_severityFilter(_o.mostSevere, _o.leastSevere);
    }


}

/**
 * @summary The Leading Root Component Types of GetAlarmEnrollmentSummary_Request_severityFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAlarmEnrollmentSummary_Request_severityFilter: $.ComponentSpec[] = [
    new $.ComponentSpec("mostSevere", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("leastSevere", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of GetAlarmEnrollmentSummary_Request_severityFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAlarmEnrollmentSummary_Request_severityFilter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAlarmEnrollmentSummary_Request_severityFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAlarmEnrollmentSummary_Request_severityFilter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAlarmEnrollmentSummary_Request_severityFilter: $.ASN1Decoder<GetAlarmEnrollmentSummary_Request_severityFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAlarmEnrollmentSummary_Request_severityFilter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAlarmEnrollmentSummary_Request_severityFilter (el: _Element): GetAlarmEnrollmentSummary_Request_severityFilter {
    if (!_cached_decoder_for_GetAlarmEnrollmentSummary_Request_severityFilter) { _cached_decoder_for_GetAlarmEnrollmentSummary_Request_severityFilter = function (el: _Element): GetAlarmEnrollmentSummary_Request_severityFilter {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GetAlarmEnrollmentSummary-Request-severityFilter contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mostSevere";
    sequence[1].name = "leastSevere";
    let mostSevere!: Unsigned8;
    let leastSevere!: Unsigned8;
    mostSevere = $._decode_implicit<Unsigned8>(() => _decode_Unsigned8)(sequence[0]);
    leastSevere = $._decode_implicit<Unsigned8>(() => _decode_Unsigned8)(sequence[1]);
    return new GetAlarmEnrollmentSummary_Request_severityFilter(
        mostSevere,
        leastSevere,

    );
}; }
    return _cached_decoder_for_GetAlarmEnrollmentSummary_Request_severityFilter(el);
}

let _cached_encoder_for_GetAlarmEnrollmentSummary_Request_severityFilter: $.ASN1Encoder<GetAlarmEnrollmentSummary_Request_severityFilter> | null = null;

/**
 * @summary Encodes a(n) GetAlarmEnrollmentSummary_Request_severityFilter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAlarmEnrollmentSummary_Request_severityFilter, encoded as an ASN.1 Element.
 */
export
function _encode_GetAlarmEnrollmentSummary_Request_severityFilter (value: GetAlarmEnrollmentSummary_Request_severityFilter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAlarmEnrollmentSummary_Request_severityFilter) { _cached_encoder_for_GetAlarmEnrollmentSummary_Request_severityFilter = function (value: GetAlarmEnrollmentSummary_Request_severityFilter): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Unsigned8, $.BER)(value.mostSevere, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Unsigned8, $.BER)(value.leastSevere, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAlarmEnrollmentSummary_Request_severityFilter(value, elGetter);
}


/* eslint-enable */
