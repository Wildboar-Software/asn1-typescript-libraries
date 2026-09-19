/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLS13PSKIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKIdentity ::= SEQUENCE
 * {
 *     identity            [1] OCTET STRING (SIZE(1..65535)),
 *     obfuscatedTicketAge [2] INTEGER (0..4294967295)
 * }
 * ```
 * 
 * @class
 */
export
class TLS13PSKIdentity {
    constructor (
        /**
         * @summary `identity`.
         * @public
         * @readonly
         */
        readonly identity: OCTET_STRING,
        /**
         * @summary `obfuscatedTicketAge`.
         * @public
         * @readonly
         */
        readonly obfuscatedTicketAge: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a TLS13PSKIdentity
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13PSKIdentity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13PSKIdentity`.
     * @returns {TLS13PSKIdentity}
     */
    public static _from_object (_o: { [_K in keyof (TLS13PSKIdentity)]: (TLS13PSKIdentity)[_K] }): TLS13PSKIdentity {
        return new TLS13PSKIdentity(_o.identity, _o.obfuscatedTicketAge);
    }


}

/**
 * @summary The Leading Root Component Types of TLS13PSKIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13PSKIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("identity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("obfuscatedTicketAge", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TLS13PSKIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13PSKIdentity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13PSKIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13PSKIdentity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13PSKIdentity: $.ASN1Decoder<TLS13PSKIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13PSKIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13PSKIdentity (el: _Element): TLS13PSKIdentity {
    if (!_cached_decoder_for_TLS13PSKIdentity) { _cached_decoder_for_TLS13PSKIdentity = function (el: _Element): TLS13PSKIdentity {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TLS13PSKIdentity contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identity";
    sequence[1].name = "obfuscatedTicketAge";
    let identity!: OCTET_STRING;
    let obfuscatedTicketAge!: INTEGER;
    identity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    obfuscatedTicketAge = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new TLS13PSKIdentity(
        identity,
        obfuscatedTicketAge,

    );
}; }
    return _cached_decoder_for_TLS13PSKIdentity(el);
}

let _cached_encoder_for_TLS13PSKIdentity: $.ASN1Encoder<TLS13PSKIdentity> | null = null;

/**
 * @summary Encodes a(n) TLS13PSKIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13PSKIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13PSKIdentity (value: TLS13PSKIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13PSKIdentity) { _cached_encoder_for_TLS13PSKIdentity = function (value: TLS13PSKIdentity, elGetter: $.ASN1Encoder<TLS13PSKIdentity>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.identity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.obfuscatedTicketAge, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TLS13PSKIdentity(value, elGetter);
}


/* eslint-enable */
