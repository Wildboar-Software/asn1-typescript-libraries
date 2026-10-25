/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
// export { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";


/**
 * @summary ScheduledCommunicationTime
 * @description
 * 
 * Provides time zone and day of the week when the UE is available for
 * communication, if available, See TS 38.413 [23] clause 9.3.1.144. Encoded
 * according to TS 29.571 [17] clause 5.4.4.41. The SBIReference for this
 * parameter shall be populated with
 * 'TS29571_CommonData.yaml#/components/schemas/ScheduledCommunicationTime'.
 *
 * 3GPP TS 33.128, clause 6.2.2.2A.12.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScheduledCommunicationTime ::= SEQUENCE
 * {
 *     days [1] SEQUENCE OF Daytime
 * }
 * ```
 * 
 * @class
 */
export
class ScheduledCommunicationTime {
    /**
     * @summary `days`.
     * @public
     * @readonly
     */
    readonly days: Daytime[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        days: Daytime[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.days = days;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ScheduledCommunicationTime
     * @description
     * 
     * This takes an `object` and converts it to a `ScheduledCommunicationTime`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScheduledCommunicationTime`.
     * @returns {ScheduledCommunicationTime}
     */
    public static _from_object (_o: { [_K in keyof (ScheduledCommunicationTime)]: (ScheduledCommunicationTime)[_K] }): ScheduledCommunicationTime {
        return new ScheduledCommunicationTime(_o.days, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ScheduledCommunicationTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScheduledCommunicationTime: $.ComponentSpec[] = [
    new $.ComponentSpec("days", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ScheduledCommunicationTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScheduledCommunicationTime: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScheduledCommunicationTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScheduledCommunicationTime: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScheduledCommunicationTime: $.ASN1Decoder<ScheduledCommunicationTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScheduledCommunicationTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScheduledCommunicationTime (el: _Element): ScheduledCommunicationTime {
    if (!_cached_decoder_for_ScheduledCommunicationTime) { _cached_decoder_for_ScheduledCommunicationTime = function (el: _Element): ScheduledCommunicationTime {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ScheduledCommunicationTime contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "days";
    let days!: Daytime[];
    days = $._decode_implicit<Daytime[]>(() => $._decodeSequenceOf<Daytime>(() => _decode_Daytime))(sequence[0]);
    return new ScheduledCommunicationTime(
        days,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_ScheduledCommunicationTime(el);
}

let _cached_encoder_for_ScheduledCommunicationTime: $.ASN1Encoder<ScheduledCommunicationTime> | null = null;

/**
 * @summary Encodes a(n) ScheduledCommunicationTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScheduledCommunicationTime, encoded as an ASN.1 Element.
 */
export
function _encode_ScheduledCommunicationTime (value: ScheduledCommunicationTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScheduledCommunicationTime) { _cached_encoder_for_ScheduledCommunicationTime = function (value: ScheduledCommunicationTime, elGetter: $.ASN1Encoder<ScheduledCommunicationTime>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(1 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Daytime>(() => _encode_Daytime, $.BER), $.BER)(value.days, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ScheduledCommunicationTime(value, elGetter);
}


/* eslint-enable */
