/* eslint-disable */
import {
    OPTIONAL,
    GeneralizedTime,
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
import { ReservationLevel, _enum_for_ReservationLevel, _decode_ReservationLevel, _encode_ReservationLevel } from "../DFRAbstractService/ReservationLevel.ta.mjs";
// export { ReservationLevel, _enum_for_ReservationLevel, ReservationLevel_unreserved /* IMPORTED_LONG_ENUMERATION_ITEM */, unreserved /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReservationLevel_exclusive_write /* IMPORTED_LONG_ENUMERATION_ITEM */, exclusive_write /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReservationLevel_exclusive_access /* IMPORTED_LONG_ENUMERATION_ITEM */, exclusive_access /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReservationLevel_read_only1 /* IMPORTED_LONG_ENUMERATION_ITEM */, read_only1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReservationLevel_read_only2 /* IMPORTED_LONG_ENUMERATION_ITEM */, read_only2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReservationLevel, _encode_ReservationLevel } from "../DFRAbstractService/ReservationLevel.ta.mjs";
import { ReservationStatus, _enum_for_ReservationStatus, ReservationStatus_uncommitted /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ReservationStatus, _encode_ReservationStatus } from "../DFRAbstractService/ReservationStatus.ta.mjs";
// export { ReservationStatus, _enum_for_ReservationStatus, ReservationStatus_uncommitted /* IMPORTED_LONG_ENUMERATION_ITEM */, uncommitted /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReservationStatus_committed /* IMPORTED_LONG_ENUMERATION_ITEM */, committed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReservationStatus, _encode_ReservationStatus } from "../DFRAbstractService/ReservationStatus.ta.mjs";


/**
 * @summary Reservation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reservation ::= SEQUENCE {
 *     reservation-duration    [0] GeneralizedTime OPTIONAL,
 *     reservation-level       [1] ReservationLevel,
 *     reservation-Status      [2] ReservationStatus DEFAULT uncommitted
 * }
 * ```
 * 
 * @class
 */
export
class Reservation {
    constructor (
        /**
         * @summary `reservation_duration`.
         * @public
         * @readonly
         */
        readonly reservation_duration: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `reservation_level`.
         * @public
         * @readonly
         */
        readonly reservation_level: ReservationLevel,
        /**
         * @summary `reservation_Status`.
         * @public
         * @readonly
         */
        readonly reservation_Status: OPTIONAL<ReservationStatus>
    ) {}

    /**
     * @summary Restructures an object into a Reservation
     * @description
     * 
     * This takes an `object` and converts it to a `Reservation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Reservation`.
     * @returns {Reservation}
     */
    public static _from_object (_o: { [_K in keyof (Reservation)]: (Reservation)[_K] }): Reservation {
        return new Reservation(_o.reservation_duration, _o.reservation_level, _o.reservation_Status);
    }

    /**
     * @summary Getter that returns the default value for `reservation_Status`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reservation_Status () { return ReservationStatus_uncommitted; }        /**
         * @summary The enum used as the type of the component `reservation_level`
         * @public
         * @static
         */

    public static _enum_for_reservation_level = _enum_for_ReservationLevel;        /**
         * @summary The enum used as the type of the component `reservation_Status`
         * @public
         * @static
         */

    public static _enum_for_reservation_Status = _enum_for_ReservationStatus;
}

/**
 * @summary The Leading Root Component Types of Reservation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Reservation: $.ComponentSpec[] = [
    new $.ComponentSpec("reservation-duration", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reservation-level", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reservation-Status", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Reservation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Reservation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Reservation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Reservation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Reservation: $.ASN1Decoder<Reservation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reservation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reservation (el: _Element): Reservation {
    if (!_cached_decoder_for_Reservation) { _cached_decoder_for_Reservation = function (el: _Element): Reservation {
    let reservation_duration: OPTIONAL<GeneralizedTime>;
    let reservation_level!: ReservationLevel;
    let reservation_Status: OPTIONAL<ReservationStatus> = Reservation._default_value_for_reservation_Status;
    const callbacks: $.DecodingMap = {
        "reservation-duration": (_el: _Element): void => { reservation_duration = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "reservation-level": (_el: _Element): void => { reservation_level = $._decode_implicit<ReservationLevel>(() => _decode_ReservationLevel)(_el); },
        "reservation-Status": (_el: _Element): void => { reservation_Status = $._decode_implicit<ReservationStatus>(() => _decode_ReservationStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Reservation,
        _extension_additions_list_spec_for_Reservation,
        _root_component_type_list_2_spec_for_Reservation,
        undefined,
    );
    return new Reservation(
        reservation_duration,
        reservation_level,
        reservation_Status
    );
}; }
    return _cached_decoder_for_Reservation(el);
}

let _cached_encoder_for_Reservation: $.ASN1Encoder<Reservation> | null = null;

/**
 * @summary Encodes a(n) Reservation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reservation, encoded as an ASN.1 Element.
 */
export
function _encode_Reservation (value: Reservation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reservation) { _cached_encoder_for_Reservation = function (value: Reservation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.reservation_duration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeGeneralizedTime, $.BER)(value.reservation_duration, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ReservationLevel, $.BER)(value.reservation_level, $.BER),
            /* IF_DEFAULT */ (value.reservation_Status === undefined || $.deepEq(value.reservation_Status, Reservation._default_value_for_reservation_Status) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ReservationStatus, $.BER)(value.reservation_Status, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Reservation(value, elGetter);
}


/* eslint-enable */
