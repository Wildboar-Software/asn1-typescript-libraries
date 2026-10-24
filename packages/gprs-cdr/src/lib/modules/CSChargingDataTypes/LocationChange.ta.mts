/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationAreaAndCell, _decode_LocationAreaAndCell, _encode_LocationAreaAndCell } from "../CSChargingDataTypes/LocationAreaAndCell.ta.mjs";


/**
 * @summary LocationChange
 * @description
 *
 * One change of location during a connection. Each entry is time-stamped.
 * The location is the LAC, SAC, or cell identity, together with MCC and MNC.
 * A location change can close a partial record (`locationChange`).
 *
 * 3GPP TS 32.250 V19.0.0 clauses 5.1.3.6 and 6.1.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationChange ::= SEQUENCE {
 *    location     [0] IMPLICIT LocationAreaAndCell,
 *    changeTime   [1] IMPLICIT OCTET STRING ( SIZE( 9 ) )}
 * ```
 * 
 * @class
 */
export
class LocationChange {
    /**
     * @summary `location`.
     * @description
     *
     * Location after the change: cell or SAC, location area, and MCC+MNC. 3GPP
     * TS 32.250 V19.0.0 clause 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly location: LocationAreaAndCell;
    /**
     * @summary `changeTime`.
     * @description
     *
     * Time of this location change. A location change can close a partial
     * record. 3GPP TS 32.250 V19.0.0 clauses 5.1.3.6 and 6.1.3.1.
     *
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;

    constructor (
        location: LocationAreaAndCell,
        changeTime: OCTET_STRING
    ) {
        this.location = location;
        this.changeTime = changeTime;
    
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("LocationChange.changeTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a LocationChange
     * @description
     *
     * This takes an `object` and converts it to a `LocationChange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationChange`.
     * @returns {LocationChange}
     */
    public static _from_object (_o: { [_K in keyof (LocationChange)]: (LocationChange)[_K] }): LocationChange {
        return new LocationChange(_o.location, _o.changeTime);
    }


}

/**
 * @summary The Leading Root Component Types of LocationChange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationChange: $.ComponentSpec[] = [
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LocationChange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationChange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationChange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationChange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocationChange: $.ASN1Decoder<LocationChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationChange (el: _Element): LocationChange {
    if (!_cached_decoder_for_LocationChange) { _cached_decoder_for_LocationChange = function (el: _Element): LocationChange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LocationChange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "location";
    sequence[1].name = "changeTime";
    const location: LocationAreaAndCell = $._decode_implicit<LocationAreaAndCell>(() => _decode_LocationAreaAndCell)(sequence[0]);
    const changeTime: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new LocationChange(
        location,
        changeTime,

    );
}; }
    return _cached_decoder_for_LocationChange(el);
}

let _cached_encoder_for_LocationChange: $.ASN1Encoder<LocationChange> | null = null;

/**
 * @summary Encodes a(n) LocationChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationChange, encoded as an ASN.1 Element.
 */
export
function _encode_LocationChange (value: LocationChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationChange) { _cached_encoder_for_LocationChange = function (value: LocationChange, _elGetter: $.ASN1Encoder<LocationChange>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_LocationAreaAndCell, $.BER)(value.location, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_LocationChange(value, elGetter);
}


/* eslint-enable */
