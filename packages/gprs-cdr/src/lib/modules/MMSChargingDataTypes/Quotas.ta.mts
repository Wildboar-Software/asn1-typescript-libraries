/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Quotas
 * @description
 *
 * The quotas of the MMBox in messages and/or octets identified with Messages
 * or Octets
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.33.
 *
 * MMBox quota in messages, octets, or both: the maximum number of messages
 * allowed, the maximum size allowed, or both. Category OC on a Bx1V-CDR,
 * and present according to what the managing User Agent requested in
 * Quotas. `numberOfMessages` is the message quota and `numberOfOctets` is
 * the size quota.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Quotas ::= SEQUENCE {
 *    numberOfMessages   [0] IMPLICIT INTEGER OPTIONAL,
 *    numberOfOctets     [1] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class Quotas {
    /**
     * @summary `numberOfMessages`.
     * @description
     *
     * Maximum number of messages the MMBox may hold, present when the view
     * request asked for the message quota.
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
     * Maximum size of the MMBox in octets, present when the view request asked
     * for the size quota.
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
     * @summary Restructures an object into a Quotas
     * @description
     * 
     * This takes an `object` and converts it to a `Quotas`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Quotas`.
     * @returns {Quotas}
     */
    public static _from_object (_o: { [_K in keyof (Quotas)]: (Quotas)[_K] }): Quotas {
        return new Quotas(_o.numberOfMessages, _o.numberOfOctets);
    }


}

/**
 * @summary The Leading Root Component Types of Quotas
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Quotas: $.ComponentSpec[] = [
    new $.ComponentSpec("numberOfMessages", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfOctets", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Quotas
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Quotas: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Quotas
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Quotas: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Quotas: $.ASN1Decoder<Quotas> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Quotas
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Quotas (el: _Element): Quotas {
    if (!_cached_decoder_for_Quotas) { _cached_decoder_for_Quotas = function (el: _Element): Quotas {
    let numberOfMessages: OPTIONAL<INTEGER>;
    let numberOfOctets: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "numberOfMessages": (_el: _Element): void => { numberOfMessages = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "numberOfOctets": (_el: _Element): void => { numberOfOctets = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Quotas,
        _extension_additions_list_spec_for_Quotas,
        _root_component_type_list_2_spec_for_Quotas,
        undefined,
    );
    return new Quotas(
        numberOfMessages,
        numberOfOctets
    );
}; }
    return _cached_decoder_for_Quotas(el);
}

let _cached_encoder_for_Quotas: $.ASN1Encoder<Quotas> | null = null;

/**
 * @summary Encodes a(n) Quotas into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Quotas, encoded as an ASN.1 Element.
 */
export
function _encode_Quotas (value: Quotas, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Quotas) { _cached_encoder_for_Quotas = function (value: Quotas, _elGetter: $.ASN1Encoder<Quotas>): _Element {
    const _components: _Element[] = [];
    if (value.numberOfMessages !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.numberOfMessages, $.BER));
    }
    if (value.numberOfOctets !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numberOfOctets, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Quotas(value, elGetter);
}


/* eslint-enable */
