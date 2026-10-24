/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Totals
 * @description
 *
 * The total number of messages and/or octets for the MMBox, identified with
 * Messages or Octets.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.58.
 *
 * Current total number of messages, octets, or both, in the MMBox.
 * Category OC on a Bx1V-CDR, and present according to what the managing
 * User Agent requested in Totals. `numberOfMessages` is the message total
 * and `numberOfOctets` is the size total.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Totals ::= SEQUENCE {
 *    numberOfMessages   [0] IMPLICIT INTEGER OPTIONAL,
 *    numberOfOctets     [1] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class Totals {
    /**
     * @summary `numberOfMessages`.
     * @description
     *
     * Total number of messages in the MMBox, present when the view request
     * asked for the message total.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly numberOfMessages: OPTIONAL<INTEGER>;
    /**
     * @summary `numberOfOctets`.
     * @description
     *
     * Total size of the MMBox in octets, present when the view request asked
     * for the size total.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly numberOfOctets: OPTIONAL<INTEGER>;

    constructor (
        numberOfMessages?: OPTIONAL<INTEGER>,
        numberOfOctets?: OPTIONAL<INTEGER>
    ) {
        this.numberOfMessages = numberOfMessages;
        this.numberOfOctets = numberOfOctets;
    }

    /**
     * @summary Restructures an object into a Totals
     * @description
     * 
     * This takes an `object` and converts it to a `Totals`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Totals`.
     * @returns {Totals}
     */
    public static _from_object (_o: { [_K in keyof (Totals)]: (Totals)[_K] }): Totals {
        return new Totals(_o.numberOfMessages, _o.numberOfOctets);
    }


}

/**
 * @summary The Leading Root Component Types of Totals
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Totals: $.ComponentSpec[] = [
    new $.ComponentSpec("numberOfMessages", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfOctets", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Totals
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Totals: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Totals
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Totals: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Totals: $.ASN1Decoder<Totals> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Totals
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Totals (el: _Element): Totals {
    if (!_cached_decoder_for_Totals) { _cached_decoder_for_Totals = function (el: _Element): Totals {
    let numberOfMessages: OPTIONAL<INTEGER>;
    let numberOfOctets: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "numberOfMessages": (_el: _Element): void => { numberOfMessages = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "numberOfOctets": (_el: _Element): void => { numberOfOctets = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Totals,
        _extension_additions_list_spec_for_Totals,
        _root_component_type_list_2_spec_for_Totals,
        undefined,
    );
    return new Totals(
        numberOfMessages,
        numberOfOctets
    );
}; }
    return _cached_decoder_for_Totals(el);
}

let _cached_encoder_for_Totals: $.ASN1Encoder<Totals> | null = null;

/**
 * @summary Encodes a(n) Totals into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Totals, encoded as an ASN.1 Element.
 */
export
function _encode_Totals (value: Totals, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Totals) { _cached_encoder_for_Totals = function (value: Totals, _elGetter: $.ASN1Encoder<Totals>): _Element {
    const _components: _Element[] = [];
    if (value.numberOfMessages !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.numberOfMessages, $.BER));
    }
    if (value.numberOfOctets !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numberOfOctets, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Totals(value, elGetter);
}


/* eslint-enable */
