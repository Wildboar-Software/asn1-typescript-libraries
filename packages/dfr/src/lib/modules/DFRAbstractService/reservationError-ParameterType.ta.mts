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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { ReservationProblem, _enum_for_ReservationProblem, _decode_ReservationProblem, _encode_ReservationProblem } from "../DFRAbstractService/ReservationProblem.ta.mjs";
// export { ReservationProblem, _enum_for_ReservationProblem, ReservationProblem_cannot_reserve /* IMPORTED_LONG_ENUMERATION_ITEM */, cannot_reserve /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReservationProblem_already_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, already_reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReservationProblem_not_yet_reserved /* IMPORTED_LONG_ENUMERATION_ITEM */, not_yet_reserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReservationProblem_cannot_unreserve /* IMPORTED_LONG_ENUMERATION_ITEM */, cannot_unreserve /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReservationProblem_reservation_not_changed /* IMPORTED_LONG_ENUMERATION_ITEM */, reservation_not_changed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReservationProblem, _encode_ReservationProblem } from "../DFRAbstractService/ReservationProblem.ta.mjs";


/**
 * @summary reservationError_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reservationError-ParameterType ::= SEQUENCE {
 *         entry   [0] DfrEntryName,
 *         problem [1] ReservationProblem
 *     }
 * ```
 * 
 * @class
 */
export
class reservationError_ParameterType {
    constructor (
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: DfrEntryName,
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ReservationProblem
    ) {}

    /**
     * @summary Restructures an object into a reservationError_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `reservationError_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `reservationError_ParameterType`.
     * @returns {reservationError_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (reservationError_ParameterType)]: (reservationError_ParameterType)[_K] }): reservationError_ParameterType {
        return new reservationError_ParameterType(_o.entry, _o.problem);
    }

        /**
         * @summary The enum used as the type of the component `problem`
         * @public
         * @static
         */

    public static _enum_for_problem = _enum_for_ReservationProblem;
}

/**
 * @summary The Leading Root Component Types of reservationError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_reservationError_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("entry", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("problem", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of reservationError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_reservationError_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of reservationError_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_reservationError_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_reservationError_ParameterType: $.ASN1Decoder<reservationError_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) reservationError_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_reservationError_ParameterType (el: _Element): reservationError_ParameterType {
    if (!_cached_decoder_for_reservationError_ParameterType) { _cached_decoder_for_reservationError_ParameterType = function (el: _Element): reservationError_ParameterType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("reservationError-ParameterType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "entry";
    sequence[1].name = "problem";
    let entry!: DfrEntryName;
    let problem!: ReservationProblem;
    entry = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(sequence[0]);
    problem = $._decode_implicit<ReservationProblem>(() => _decode_ReservationProblem)(sequence[1]);
    return new reservationError_ParameterType(
        entry,
        problem,

    );
}; }
    return _cached_decoder_for_reservationError_ParameterType(el);
}

let _cached_encoder_for_reservationError_ParameterType: $.ASN1Encoder<reservationError_ParameterType> | null = null;

/**
 * @summary Encodes a(n) reservationError_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The reservationError_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_reservationError_ParameterType (value: reservationError_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_reservationError_ParameterType) { _cached_encoder_for_reservationError_ParameterType = function (value: reservationError_ParameterType): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER)(value.entry, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ReservationProblem, $.BER)(value.problem, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_reservationError_ParameterType(value, elGetter);
}


/* eslint-enable */
