/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../SS-MCM-Operations-asn1-97/TimeStamp.ta.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../SS-MCM-Operations-asn1-97/Priority.ta.mjs";

/**
 * @summary AddressHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressHeader ::= SEQUENCE {
 *     originatorNr PartyNumber,
 *     timeStamp [1] IMPLICIT TimeStamp OPTIONAL,
 *     priority [2] IMPLICIT Priority OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AddressHeader {
    /**
     * @summary `originatorNr`.
     * @public
     * @readonly
     */
    readonly originatorNr: PartyNumber;
    /**
     * @summary `timeStamp`.
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<TimeStamp>;
    /**
     * @summary `priority`.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<Priority>;

    constructor (
        originatorNr: PartyNumber,
        timeStamp: OPTIONAL<TimeStamp>,
        priority: OPTIONAL<Priority>
    ) {
        this.originatorNr = originatorNr;
        this.timeStamp = timeStamp;
        this.priority = priority;
    }

    /**
     * @summary Restructures an object into a AddressHeader
     * @description
     * 
     * This takes an `object` and converts it to a `AddressHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddressHeader`.
     * @returns {AddressHeader}
     */
    public static _from_object (_o: { [_K in keyof (AddressHeader)]: (AddressHeader)[_K] }): AddressHeader {
        return new AddressHeader(_o.originatorNr, _o.timeStamp, _o.priority);
    }

}

/**
 * @summary The Leading Root Component Types of AddressHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AddressHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("originatorNr", false, $.hasAnyTag),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AddressHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AddressHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AddressHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AddressHeader: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AddressHeader: $.ASN1Decoder<AddressHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressHeader (el: _Element): AddressHeader {
    if (!_cached_decoder_for_AddressHeader) { _cached_decoder_for_AddressHeader = function (el: _Element): AddressHeader {
    let originatorNr!: PartyNumber;
    let timeStamp: OPTIONAL<TimeStamp>;
    let priority: OPTIONAL<Priority>;
    const callbacks: $.DecodingMap = {
        "originatorNr": (_el: _Element): void => { originatorNr = _decode_PartyNumber(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<Priority>(() => _decode_Priority)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AddressHeader,
        _extension_additions_list_spec_for_AddressHeader,
        _root_component_type_list_2_spec_for_AddressHeader,
        undefined,
    );
    return new AddressHeader(
        originatorNr,
        timeStamp,
        priority
    );
}; }
    return _cached_decoder_for_AddressHeader(el);
}

let _cached_encoder_for_AddressHeader: $.ASN1Encoder<AddressHeader> | null = null;

/**
 * @summary Encodes a(n) AddressHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressHeader, encoded as an ASN.1 Element.
 */
export
function _encode_AddressHeader (value: AddressHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressHeader) { _cached_encoder_for_AddressHeader = function (value: AddressHeader, _elGetter: $.ASN1Encoder<AddressHeader>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.originatorNr, $.BER));
    if (value.timeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER));
    }
    if (value.priority !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Priority, $.BER)(value.priority, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AddressHeader(value, elGetter);
}

/* eslint-enable */
